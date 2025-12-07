import { WalletConnect } from "@/components/Wallet-connect"
import MarketplaceApp from "@/components/MarketplaceApp"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Simple Marketplace</h1>
          <p className="text-gray-600 mt-2">Chợ mini đơn giản - Thêm sản phẩm và mua bán</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <WalletConnect />
        </div>
        <MarketplaceApp />
      </main>
    </div>
  )
}
