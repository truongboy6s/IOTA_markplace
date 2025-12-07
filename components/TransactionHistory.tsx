"use client";

interface Transaction {
  item_id: string;
  item_name: string;
  price: number;
  seller: string;
  buyer: string;
  timestamp: number;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
  currentUser?: string;
}

export default function TransactionHistory({ transactions, currentUser }: TransactionHistoryProps) {
  const userTransactions = currentUser 
    ? transactions.filter(tx => tx.seller === currentUser || tx.buyer === currentUser)
    : transactions;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('vi-VN');
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (userTransactions.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Lịch sử giao dịch</h2>
        <p className="text-gray-500 text-center py-8">Chưa có giao dịch nào</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Lịch sử giao dịch ({userTransactions.length})</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Sản phẩm</th>
              <th scope="col" className="px-6 py-3">Giá</th>
              <th scope="col" className="px-6 py-3">Người bán</th>
              <th scope="col" className="px-6 py-3">Người mua</th>
              <th scope="col" className="px-6 py-3">Thời gian</th>
              <th scope="col" className="px-6 py-3">Vai trò</th>
            </tr>
          </thead>
          <tbody>
            {userTransactions.map((tx, index) => {
              const isBuyer = tx.buyer === currentUser;
              const isSeller = tx.seller === currentUser;
              
              return (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {tx.item_name}
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-semibold">
                    {tx.price} IOTA
                  </td>
                  <td className="px-6 py-4">
                    <span className={isSeller ? "font-semibold text-green-600" : ""}>
                      {formatAddress(tx.seller)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={isBuyer ? "font-semibold text-blue-600" : ""}>
                      {formatAddress(tx.buyer)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {formatDate(tx.timestamp)}
                  </td>
                  <td className="px-6 py-4">
                    {isBuyer && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Mua
                      </span>
                    )}
                    {isSeller && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Bán
                      </span>
                    )}
                    {!isBuyer && !isSeller && (
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Khác
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}