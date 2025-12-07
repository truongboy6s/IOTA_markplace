"use client";

import { useState } from "react";

interface AddItemFormProps {
  onAddItem: (name: string, price: string) => Promise<void>;
  isLoading?: boolean;
}

export default function AddItemForm({ onAddItem, isLoading = false }: AddItemFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !price.trim()) return;

    try {
      await onAddItem(name.trim(), price.trim());
      setName("");
      setPrice("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Thêm sản phẩm mới</h2>
      
      {/* Price unit explanation */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="text-blue-800 font-medium text-sm">Đơn vị giá</h4>
            <p className="text-blue-700 text-xs mt-1">
              Nhập giá theo đơn vị IOTA thật. VD: 0.001 IOTA sẽ trừ chính xác 0.001 IOTA từ ví người mua.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Tên sản phẩm
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Nhập tên sản phẩm..."
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Giá (IOTA) - VD: 0.001
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="0.001"
            min="0"
            step="0.000001"
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !name.trim() || !price.trim()}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? "Đang thêm..." : "Thêm sản phẩm"}
        </button>
      </form>
    </div>
  );
}