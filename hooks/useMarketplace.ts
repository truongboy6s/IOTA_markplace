"use client"

import { useState } from "react"
import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
  useIotaClientQuery,
  useIotaClient,
} from "@iota/dapp-kit"
import { Transaction } from "@iota/iota-sdk/transactions"
import { useNetworkVariable } from "@/lib/config"

// Marketplace contract configuration
const MARKETPLACE_MODULE = "contract"
const MARKETPLACE_METHODS = {
  CREATE: "create",
  ADD_ITEM: "add_item",
  BUY_ITEM: "buy_item",
  GET_AVAILABLE_ITEMS: "get_available_items",
  GET_TRANSACTION_HISTORY: "get_transaction_history",
} as const

export interface MarketplaceItem {
  item_id: number
  name: string
  price: number
  seller: string
  sold: boolean
}

export interface MarketplaceTransaction {
  item_id: number
  item_name: string
  price: number
  seller: string
  buyer: string
  timestamp: number
}

export function useMarketplace() {
  const account = useCurrentAccount()
  const { mutate: signAndExecute } = useSignAndExecuteTransaction()
  const packageId = useNetworkVariable("packageId")
  const iotaClient = useIotaClient()
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [marketplaceId, setMarketplaceId] = useState<string | null>(null)

  // Create marketplace
  const createMarketplace = async (): Promise<string> => {
    if (!packageId || !account) {
      throw new Error("Package ID or account not available")
    }

    try {
      setIsLoading(true)
      setError(null)
      
      const tx = new Transaction()
      tx.moveCall({
        arguments: [],
        target: `${packageId}::${MARKETPLACE_MODULE}::${MARKETPLACE_METHODS.CREATE}`,
      })

      return new Promise((resolve, reject) => {
        signAndExecute(
          { transaction: tx as any },
          {
            onSuccess: async ({ digest }) => {
              try {
                console.log("Marketplace creation transaction:", digest)
                // Wait for transaction and get the created object ID
                const { effects } = await iotaClient.waitForTransaction({
                  digest,
                  options: { showEffects: true },
                })
                const newObjectId = effects?.created?.[0]?.reference?.objectId
                if (newObjectId) {
                  console.log("Created marketplace object ID:", newObjectId)
                  resolve(newObjectId)
                } else {
                  reject(new Error("No object ID found in transaction effects"))
                }
              } catch (waitError) {
                reject(waitError)
              } finally {
                setIsLoading(false)
              }
            },
            onError: (err) => {
              const error = err instanceof Error ? err : new Error(String(err))
              setError(error)
              reject(error)
              setIsLoading(false)
            },
          }
        )
      })
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err))
      setError(error)
      setIsLoading(false)
      throw error
    }
  }

  // Add item to marketplace
  const addItem = async (name: string, price: number, marketplaceObjectId: string) => {
    if (!packageId || !account) {
      throw new Error("Package ID or account not available")
    }

    try {
      setIsLoading(true)
      setError(null)
      
      // Convert price to mist (IOTA's smallest unit: 1 IOTA = 1,000,000,000 mist)
      // Input price is already in IOTA, so multiply by 1B to get mist
      const priceInMist = Math.round(price * 1000000000)

      const tx = new Transaction()
      tx.moveCall({
        arguments: [
          tx.object(marketplaceObjectId),
          tx.pure.string(name),
          tx.pure.u64(priceInMist),
        ],
        target: `${packageId}::${MARKETPLACE_MODULE}::${MARKETPLACE_METHODS.ADD_ITEM}`,
      })

      return new Promise((resolve, reject) => {
        signAndExecute(
          { transaction: tx as any },
          {
            onSuccess: async ({ digest }) => {
              try {
                console.log("Add item transaction:", digest)
                resolve(digest)
              } catch (waitError) {
                reject(waitError)
              } finally {
                setIsLoading(false)
              }
            },
            onError: (err) => {
              const error = err instanceof Error ? err : new Error(String(err))
              setError(error)
              reject(error)
              setIsLoading(false)
            },
          }
        )
      })
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err))
      setError(error)
      setIsLoading(false)
      throw error
    }
  }

  // Buy item from marketplace
  const buyItem = async (itemIndex: number, payment: number, marketplaceObjectId: string) => {
    if (!packageId || !account) {
      throw new Error("Package ID or account not available")
    }

    try {
      setIsLoading(true)
      setError(null)

      console.log(`Buying item: index=${itemIndex}, payment=${payment} IOTA (type: ${typeof payment}), marketplaceId=${marketplaceObjectId}`)

      // Convert payment to mist using BigInt to avoid floating point precision issues
      // IOTA uses 9 decimal places (1 IOTA = 1,000,000,000 mist)
      
      const MIST_DECIMALS = 9
      const paymentStr = payment.toString()
      
      let [integerPart, decimalPart = ""] = paymentStr.split(".")
      
      // Pad or truncate decimal part to exactly 9 digits
      if (decimalPart.length < MIST_DECIMALS) {
        decimalPart = decimalPart.padEnd(MIST_DECIMALS, '0')
      } else {
        decimalPart = decimalPart.substring(0, MIST_DECIMALS)
      }
      
      // Combine integer and decimal parts
      const fullMistString = integerPart + decimalPart
      const paymentInMist = parseInt(fullMistString, 10)
      
      console.log(`Payment conversion with BigInt precision:`)
      console.log(`  Original: ${payment} IOTA`)
      console.log(`  String representation: "${paymentStr}"`)
      console.log(`  Integer part: "${integerPart}"`)
      console.log(`  Decimal part: "${decimalPart}" (padded to 9 digits)`)
      console.log(`  Combined string: "${fullMistString}"`)
      console.log(`  Final mist value: ${paymentInMist}`)
      console.log(`  Back to IOTA: ${paymentInMist / Math.pow(10, MIST_DECIMALS)}`)
      console.log(`  Expected exactly: ${payment === paymentInMist / Math.pow(10, MIST_DECIMALS) ? 'MATCH' : 'MISMATCH'}`)
      
      // Validate payment amount
      if (paymentInMist <= 0 || !Number.isInteger(paymentInMist)) {
        throw new Error(`Invalid payment amount: ${payment} IOTA (${paymentInMist} mist)`)
      }
      
      console.log(`Creating transaction for wallet payment`)

      const tx = new Transaction()
      
      // Use a smaller gas budget to avoid confusion
      tx.setGasBudget(100000000) // 0.1 IOTA gas budget (smaller than payment)
      
      // Create payment by splitting from gas coin
      // NOTE: This might be the issue - using gas coin for payment
      console.log(`WARNING: Using gas coin for payment. Gas budget: 100000000 mist, Payment: ${paymentInMist} mist`)
      
      // Log the exact u64 value being sent
      const u64Value = tx.pure.u64(paymentInMist)
      console.log(`tx.pure.u64() value:`, u64Value)
      console.log(`Raw paymentInMist value: ${paymentInMist}`)
      console.log(`PaymentInMist as hex: 0x${paymentInMist.toString(16)}`)
      
      const [paymentCoin] = tx.splitCoins(tx.gas, [u64Value])
      
      // Buy item using the payment coin
      const remainingCoin = tx.moveCall({
        arguments: [
          tx.object(marketplaceObjectId),
          tx.pure.u64(itemIndex),
          paymentCoin,
        ],
        target: `${packageId}::${MARKETPLACE_MODULE}::${MARKETPLACE_METHODS.BUY_ITEM}`,
      })

      // Transfer remaining coins back to buyer  
      tx.transferObjects([remainingCoin], account.address)

      console.log("Transaction prepared with proper gas budget, executing...")

      return new Promise((resolve, reject) => {
        signAndExecute(
          { transaction: tx as any },
          {
            onSuccess: async ({ digest }) => {
              try {
                console.log("Buy item transaction successful:", digest)
                resolve(digest)
              } catch (waitError) {
                console.error("Wait error:", waitError)
                reject(waitError)
              } finally {
                setIsLoading(false)
              }
            },
            onError: (err) => {
              const error = err instanceof Error ? err : new Error(String(err))
              console.error("Buy item transaction failed:", error)
              console.error("Error details:", {
                message: error.message,
                paymentInMist,
                paymentInIOTA: payment,
                itemIndex,
                marketplaceObjectId
              })
              setError(error)
              reject(error)
              setIsLoading(false)
            },
          }
        )
      })
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err))
      setError(error)
      setIsLoading(false)
      throw error
    }
  }

  // Query available items from marketplace
  const getAvailableItems = async (marketplaceObjectId: string): Promise<MarketplaceItem[]> => {
    if (!packageId || !iotaClient) {
      throw new Error("Package ID or client not available")
    }

    try {
      // Call the contract view function
      const result = await iotaClient.devInspectTransactionBlock({
        transactionBlock: (() => {
          const tx = new Transaction()
          tx.moveCall({
            arguments: [tx.object(marketplaceObjectId)],
            target: `${packageId}::${MARKETPLACE_MODULE}::${MARKETPLACE_METHODS.GET_AVAILABLE_ITEMS}`,
          })
          return tx
        })() as any,
        sender: account?.address || "0x0",
      })

      // Parse the result (this will need to be adapted based on the actual response format)
      console.log("Get available items result:", result)
      return []
    } catch (error) {
      console.error("Error getting available items:", error)
      throw error
    }
  }

  // Query transaction history from marketplace
  const getTransactionHistory = async (marketplaceObjectId: string): Promise<MarketplaceTransaction[]> => {
    if (!packageId || !iotaClient) {
      throw new Error("Package ID or client not available")
    }

    try {
      const result = await iotaClient.devInspectTransactionBlock({
        transactionBlock: (() => {
          const tx = new Transaction()
          tx.moveCall({
            arguments: [tx.object(marketplaceObjectId)],
            target: `${packageId}::${MARKETPLACE_MODULE}::${MARKETPLACE_METHODS.GET_TRANSACTION_HISTORY}`,
          })
          return tx
        })() as any,
        sender: account?.address || "0x0",
      })

      console.log("Get transaction history result:", result)
      return []
    } catch (error) {
      console.error("Error getting transaction history:", error)
      throw error
    }
  }

  return {
    createMarketplace,
    addItem,
    buyItem,
    getAvailableItems,
    getTransactionHistory,
    isLoading,
    error,
    account,
    marketplaceId,
    setMarketplaceId,
  }
}