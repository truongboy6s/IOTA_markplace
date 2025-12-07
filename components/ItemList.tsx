"use client";

interface Item {
  id: string;
  name: string;
  price: number;
  seller: string;
  sold: boolean;
}

interface ItemListProps {
  items: Item[];
  onBuyItem: (itemIndex: number, price: number) => Promise<void>;
  currentUser?: string;
  isLoading?: boolean;
}

export default function ItemList({ items, onBuyItem, currentUser, isLoading = false }: ItemListProps) {
  const availableItems = items.filter(item => !item.sold);

  const handleBuyClick = async (itemIndex: number, price: number) => {
    console.log(`ItemList: handleBuyClick called with index=${itemIndex}, price=${price}`);
    try {
      await onBuyItem(itemIndex, price);
    } catch (error) {
      console.error("Error buying item:", error);
    }
  };

  if (availableItems.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Sản phẩm có sẵn</h2>
        <p className="text-gray-500 text-center py-8">Chưa có sản phẩm nào trong chợ. Hãy thêm sản phẩm đầu tiên!</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Sản phẩm có sẵn ({availableItems.length})</h2>
      
      {availableItems.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-yellow-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="text-yellow-800 font-medium text-sm">Lưu ý thanh toán</h4>
              <p className="text-yellow-700 text-xs mt-1">
                Thanh toán sẽ sử dụng IOTA từ ví của bạn (8.58 IOTA có sẵn). 
                Cần đủ tiền cho: giá sản phẩm + phí gas (~0.01 IOTA).
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableItems.map((item, index) => (
          <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.name}</h3>
            <p className="text-blue-600 font-bold text-xl mb-2">{item.price} IOTA</p>
            <p className="text-gray-600 text-sm mb-4">
              Bán bởi: {item.seller.slice(0, 6)}...{item.seller.slice(-4)}
              {item.seller === currentUser && (
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Của bạn
                </span>
              )}
            </p>
            <button
              onClick={() => handleBuyClick(index, item.price)}
              disabled={isLoading}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? "Đang xử lý..." : "Mua ngay"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}