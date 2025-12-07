"use client";

import { useState, useEffect } from "react";
import { useCurrentAccount, useIotaClientQuery } from "@iota/dapp-kit";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import TransactionHistory from "./TransactionHistory";
import { useMarketplace } from "@/hooks/useMarketplace";
import { useNetworkVariable } from "@/lib/config";

interface Item {
  id: string;
  name: string;
  price: number;
  seller: string;
  sold: boolean;
}

interface Transaction {
  item_id: string;
  item_name: string;
  price: number;
  seller: string;
  buyer: string;
  timestamp: number;
}

export default function MarketplaceApp() {
  const account = useCurrentAccount();
  const packageId = useNetworkVariable("packageId");
  const { addItem, buyItem, createMarketplace, getAvailableItems, getTransactionHistory, isLoading: contractLoading, error: contractError } = useMarketplace();
  const [items, setItems] = useState<Item[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'market' | 'history'>('market');
  const [marketplaceId, setMarketplaceId] = useState<string | null>(null);
  
  // Initialize marketplace when component mounts
  useEffect(() => {
    const initializeMarketplace = async () => {
      // Check if marketplace ID exists in localStorage
      const storedMarketplaceId = localStorage.getItem('marketplaceId');
      
      // Validate stored marketplace ID - must start with 0x and be proper length
      const isValidObjectId = storedMarketplaceId && 
        storedMarketplaceId.startsWith('0x') && 
        storedMarketplaceId.length > 20 &&
        !storedMarketplaceId.includes('marketplace_');
      
      if (isValidObjectId) {
        console.log("Using stored marketplace ID:", storedMarketplaceId);
        setMarketplaceId(storedMarketplaceId);
      } else {
        // Clear invalid marketplace ID
        if (storedMarketplaceId) {
          console.log("Clearing invalid marketplace ID:", storedMarketplaceId);
          localStorage.removeItem('marketplaceId');
        }
        
        if (account) {
          // Create new marketplace if none exists or invalid
          try {
            console.log("Creating new marketplace...");
            const newMarketplaceId = await createMarketplace();
            console.log("Created marketplace with ID:", newMarketplaceId);
            setMarketplaceId(newMarketplaceId);
            localStorage.setItem('marketplaceId', newMarketplaceId);
          } catch (error) {
            console.error("Failed to create marketplace:", error);
          }
        }
      }
    };

    initializeMarketplace();
  }, [account]); // 🔧 Chỉ depend vào account, loại bỏ createMarketplace
  
  // Load real data from contract when marketplace changes
  useEffect(() => {
    const loadMarketplaceData = async () => {
      if (marketplaceId && packageId && account) {
        try {
          setIsLoading(true);
          console.log("Loading marketplace data for:", marketplaceId);
          
          // For now, use mock data since we need to properly handle contract responses
          // TODO: Implement proper contract data parsing
          
          // Start with empty marketplace - users will add their own items
          setItems([]);
          setTransactions([]);
          
        } catch (error) {
          console.error("Error loading marketplace data:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadMarketplaceData();
  }, [marketplaceId, packageId, account]);

  const handleAddItem = async (name: string, priceStr: string) => {
    if (!account) {
      alert("Vui lòng kết nối ví trước");
      return;
    }

    if (!marketplaceId) {
      alert("Marketplace chưa được khởi tạo");
      return;
    }

    setIsLoading(true);
    try {
      const price = parseFloat(priceStr);
      if (isNaN(price) || price <= 0) {
        alert("Giá không hợp lệ");
        return;
      }

      // Call smart contract
      await addItem(name, price, marketplaceId);
      
      // Add to local state immediately for better UX
      // Use timestamp + random for unique ID
      const newItemId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const newItem: Item = {
        id: newItemId,
        name,
        price,
        seller: account.address,
        sold: false
      };
      setItems(prev => [...prev, newItem]);
      
      alert(`✅ Đã thêm sản phẩm "${name}" với giá ${price} IOTA\n\n💡 Bạn vừa trả phí gas nhỏ để ghi dữ liệu lên blockchain. Khi có người mua, bạn sẽ nhận được ${price} IOTA (trừ phí gas cho buyer).`);
    } catch (error) {
      console.error("Error adding item:", error);
      alert(`Có lỗi xảy ra khi thêm sản phẩm: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBuyItem = async (itemIndex: number, price: number) => {
    if (!account) {
      alert("Vui lòng kết nối ví trước");
      return;
    }

    if (!marketplaceId) {
      alert("Marketplace chưa được khởi tạo");
      return;
    }

    setIsLoading(true);
    try {
      // Get available items (not sold)
      const availableItems = items.filter(item => !item.sold);
      const item = availableItems[itemIndex];
      
      if (!item || item.sold) {
        alert("Sản phẩm không tồn tại hoặc đã được bán");
        return;
      }

      console.log(`Attempting to buy item:`, {
        itemIndex,
        price,
        itemName: item.name,
        itemSeller: item.seller,
        buyerAddress: account.address,
        marketplaceId
      });
      
      // Check if this is a demo item (skip contract call for demo items)
      if (item.id.startsWith('demo')) {
        alert("Đây là demo item. Vui lòng thêm sản phẩm thật để test mua bán với blockchain!");
        return;
      } else {
        // Real contract purchase for user-added items
        // Find the real index in the contract (excluding demo items)
        const realItems = items.filter(item => !item.id.startsWith('demo'));
        const realIndex = realItems.findIndex(i => i.id === item.id);
        
        if (realIndex === -1) {
          alert("Không tìm thấy sản phẩm trong contract");
          return;
        }
        
        console.log(`Real contract purchase: item index ${realIndex} in contract`);
        console.log(`MarketplaceApp: Calling buyItem with price=${price} (type: ${typeof price})`);
        await buyItem(realIndex, price, marketplaceId);

        // Update local state after successful purchase
        const originalIndex = items.findIndex(i => i.id === item.id);
        setItems(prev => prev.map((item, idx) => 
          idx === originalIndex ? { ...item, sold: true } : item
        ));

        // Add transaction record
        const newTransaction: Transaction = {
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          seller: item.seller,
          buyer: account.address,
          timestamp: Date.now()
        };
        setTransactions(prev => [...prev, newTransaction]);
        
        alert(`Đã mua thành công "${item.name}" với giá ${price} IOTA`);
      }
    } catch (error) {
      console.error("Error buying item:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`Có lỗi xảy ra khi mua sản phẩm: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!account) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4">IOTA Marketplace</h2>
        <p className="text-gray-600 mb-4">Vui lòng kết nối ví IOTA để sử dụng marketplace</p>
        <p className="text-sm text-gray-500">
          Bạn cần một ví IOTA để thực hiện giao dịch mua bán
        </p>
      </div>
    );
  }

  if (!marketplaceId) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4">Đang khởi tạo Marketplace...</h2>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        <p className="text-gray-600 mt-4">Vui lòng chờ trong khi chúng tôi thiết lập marketplace</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Error display */}
      {contractError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-800 font-semibold">Lỗi giao dịch:</h3>
          <p className="text-red-600 text-sm">{contractError.message}</p>
        </div>
      )}

      {/* Marketplace ID display */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-blue-800 font-semibold">Marketplace ID:</h3>
            <p className="text-blue-600 text-sm font-mono">{marketplaceId}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                const newId = prompt("Nhập Marketplace Object ID:", marketplaceId || "");
                if (newId && newId.trim()) {
                  setMarketplaceId(newId.trim());
                  localStorage.setItem('marketplaceId', newId.trim());
                }
              }}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              Thay đổi
            </button>
            <button
              onClick={async () => {
                if (confirm("Bạn có muốn tạo marketplace mới không? Marketplace hiện tại sẽ bị thay thế.")) {
                  localStorage.removeItem('marketplaceId');
                  setMarketplaceId(null);
                  try {
                    console.log("Creating new marketplace...");
                    const newMarketplaceId = await createMarketplace();
                    console.log("Created new marketplace with ID:", newMarketplaceId);
                    setMarketplaceId(newMarketplaceId);
                    localStorage.setItem('marketplaceId', newMarketplaceId);
                  } catch (error) {
                    console.error("Failed to create new marketplace:", error);
                    alert("Có lỗi xảy ra khi tạo marketplace mới: " + (error instanceof Error ? error.message : 'Unknown error'));
                  }
                }
              }}
              className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
            >
              Tạo mới
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white p-1 rounded-lg shadow-md">
        <nav className="flex space-x-1">
          <button
            onClick={() => setActiveTab('market')}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md ${
              activeTab === 'market'
                ? 'bg-blue-500 text-white'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Thị trường
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md ${
              activeTab === 'history'
                ? 'bg-blue-500 text-white'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Lịch sử giao dịch
          </button>
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'market' ? (
        <>
          {/* Demo notice */}
          {items.some(item => item.id.startsWith('demo')) && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <h3 className="text-yellow-800 font-semibold">Chế độ Demo</h3>
              <p className="text-yellow-700 text-sm">
                Các sản phẩm dưới đây là demo để test chức năng mua bán. 
                Bạn có thể mua bất kỳ sản phẩm nào (kể cả của bạn) để test.
              </p>
            </div>
          )}

          {/* Gas fee explanation */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <h3 className="text-green-800 font-semibold">Tại sao cần thanh toán khi thêm sản phẩm?</h3>
            <div className="text-green-700 text-sm mt-2 space-y-2">
              <p>
                <strong>Gas fee:</strong> Mọi thao tác ghi lên blockchain đều cần phí gas (~0.001 IOTA) để trả cho validators.
              </p>
              <p>
                <strong>Khác biệt:</strong> 
                • Thêm sản phẩm = Chỉ trả gas fee nhỏ
                • Mua sản phẩm = Trả tiền sản phẩm + gas fee
              </p>
              <p>
                <strong>Lợi ích:</strong> Dữ liệu được lưu trữ vĩnh viễn trên blockchain, không thể bị thay đổi.
              </p>
            </div>
          </div>
          <AddItemForm 
            onAddItem={handleAddItem} 
            isLoading={isLoading || contractLoading} 
          />
          <ItemList 
            items={items} 
            onBuyItem={handleBuyItem} 
            currentUser={account?.address || ''}
            isLoading={isLoading || contractLoading}
          />
        </>
      ) : (
        <TransactionHistory 
          transactions={transactions} 
          currentUser={account?.address || ''}
        />
      )}
    </div>
  );
}