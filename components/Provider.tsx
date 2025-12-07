"use client"

import "@iota/dapp-kit/dist/index.css"
import "@radix-ui/themes/styles.css"
import { IotaClientProvider, WalletProvider } from "@iota/dapp-kit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Theme } from "@radix-ui/themes"
import { networkConfig } from "@/lib/config"
import { ReactNode, useState } from "react"

interface ProvidersProps {
  children: ReactNode
}

export function Provider({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: 1,
      },
    },
  }));

  return (
    <Theme appearance="dark">
      <QueryClientProvider client={queryClient}>
        <IotaClientProvider networks={networkConfig} defaultNetwork="devnet">
          <WalletProvider 
            autoConnect={false}
            enableUnsafeBurner={false}
          >
            {children}
          </WalletProvider>
        </IotaClientProvider>
      </QueryClientProvider>
    </Theme>
  )
}

