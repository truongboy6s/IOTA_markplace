module.exports = [
"[project]/components/Wallet-connect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletConnect",
    ()=>WalletConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
"use client";
;
;
function WalletConnect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "1rem",
            display: "flex",
            justifyContent: "flex-end"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectButton"], {}, void 0, false, {
            fileName: "[project]/components/Wallet-connect.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Wallet-connect.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/AddItemForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddItemForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AddItemForm({ onAddItem, isLoading = false }) {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (e)=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-lg shadow-md mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Thêm sản phẩm mới"
            }, void 0, false, {
                fileName: "[project]/components/AddItemForm.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 text-blue-400 mt-0.5 mr-3",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/components/AddItemForm.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AddItemForm.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-blue-800 font-medium text-sm",
                                    children: "Đơn vị giá"
                                }, void 0, false, {
                                    fileName: "[project]/components/AddItemForm.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-700 text-xs mt-1",
                                    children: "Nhập giá theo đơn vị IOTA thật. VD: 0.001 IOTA sẽ trừ chính xác 0.001 IOTA từ ví người mua."
                                }, void 0, false, {
                                    fileName: "[project]/components/AddItemForm.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AddItemForm.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AddItemForm.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AddItemForm.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "name",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Tên sản phẩm"
                            }, void 0, false, {
                                fileName: "[project]/components/AddItemForm.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "name",
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800",
                                placeholder: "Nhập tên sản phẩm...",
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/components/AddItemForm.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AddItemForm.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "price",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Giá (IOTA) - VD: 0.001"
                            }, void 0, false, {
                                fileName: "[project]/components/AddItemForm.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                id: "price",
                                value: price,
                                onChange: (e)=>setPrice(e.target.value),
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800",
                                placeholder: "0.001",
                                min: "0",
                                step: "0.000001",
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/components/AddItemForm.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AddItemForm.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isLoading || !name.trim() || !price.trim(),
                        className: "w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed",
                        children: isLoading ? "Đang thêm..." : "Thêm sản phẩm"
                    }, void 0, false, {
                        fileName: "[project]/components/AddItemForm.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AddItemForm.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AddItemForm.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ItemList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ItemList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function ItemList({ items, onBuyItem, currentUser, isLoading = false }) {
    const availableItems = items.filter((item)=>!item.sold);
    const handleBuyClick = async (itemIndex, price)=>{
        console.log(`ItemList: handleBuyClick called with index=${itemIndex}, price=${price}`);
        try {
            await onBuyItem(itemIndex, price);
        } catch (error) {
            console.error("Error buying item:", error);
        }
    };
    if (availableItems.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-4",
                    children: "Sản phẩm có sẵn"
                }, void 0, false, {
                    fileName: "[project]/components/ItemList.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-center py-8",
                    children: "Chưa có sản phẩm nào trong chợ. Hãy thêm sản phẩm đầu tiên!"
                }, void 0, false, {
                    fileName: "[project]/components/ItemList.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ItemList.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: [
                    "Sản phẩm có sẵn (",
                    availableItems.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/ItemList.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            availableItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 text-yellow-400 mt-0.5 mr-3",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/components/ItemList.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ItemList.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-yellow-800 font-medium text-sm",
                                    children: "Lưu ý thanh toán"
                                }, void 0, false, {
                                    fileName: "[project]/components/ItemList.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-yellow-700 text-xs mt-1",
                                    children: "Thanh toán sẽ sử dụng IOTA từ ví của bạn (8.58 IOTA có sẵn). Cần đủ tiền cho: giá sản phẩm + phí gas (~0.01 IOTA)."
                                }, void 0, false, {
                                    fileName: "[project]/components/ItemList.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ItemList.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ItemList.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ItemList.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: availableItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg mb-2 text-gray-800",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/components/ItemList.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-blue-600 font-bold text-xl mb-2",
                                children: [
                                    item.price,
                                    " IOTA"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ItemList.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm mb-4",
                                children: [
                                    "Bán bởi: ",
                                    item.seller.slice(0, 6),
                                    "...",
                                    item.seller.slice(-4),
                                    item.seller === currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded",
                                        children: "Của bạn"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ItemList.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ItemList.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleBuyClick(index, item.price),
                                disabled: isLoading,
                                className: "w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed",
                                children: isLoading ? "Đang xử lý..." : "Mua ngay"
                            }, void 0, false, {
                                fileName: "[project]/components/ItemList.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/components/ItemList.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ItemList.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ItemList.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/TransactionHistory.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function TransactionHistory({ transactions, currentUser }) {
    const userTransactions = currentUser ? transactions.filter((tx)=>tx.seller === currentUser || tx.buyer === currentUser) : transactions;
    const formatDate = (timestamp)=>{
        return new Date(timestamp).toLocaleString('vi-VN');
    };
    const formatAddress = (address)=>{
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };
    if (userTransactions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-4 text-gray-800",
                    children: "Lịch sử giao dịch"
                }, void 0, false, {
                    fileName: "[project]/components/TransactionHistory.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-center py-8",
                    children: "Chưa có giao dịch nào"
                }, void 0, false, {
                    fileName: "[project]/components/TransactionHistory.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/TransactionHistory.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4 text-gray-800",
                children: [
                    "Lịch sử giao dịch (",
                    userTransactions.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/TransactionHistory.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "text-xs text-gray-700 uppercase bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Sản phẩm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TransactionHistory.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Giá"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TransactionHistory.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Người bán"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TransactionHistory.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Người mua"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TransactionHistory.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Thời gian"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TransactionHistory.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Vai trò"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TransactionHistory.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TransactionHistory.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TransactionHistory.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: userTransactions.map((tx, index)=>{
                                const isBuyer = tx.buyer === currentUser;
                                const isSeller = tx.seller === currentUser;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-white border-b hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 font-medium text-gray-900",
                                            children: tx.item_name
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionHistory.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-blue-600 font-semibold",
                                            children: [
                                                tx.price,
                                                " IOTA"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionHistory.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: isSeller ? "font-semibold text-green-600" : "",
                                                children: formatAddress(tx.seller)
                                            }, void 0, false, {
                                                fileName: "[project]/components/TransactionHistory.tsx",
                                                lineNumber: 68,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionHistory.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: isBuyer ? "font-semibold text-blue-600" : "",
                                                children: formatAddress(tx.buyer)
                                            }, void 0, false, {
                                                fileName: "[project]/components/TransactionHistory.tsx",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionHistory.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-gray-600",
                                            children: formatDate(tx.timestamp)
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionHistory.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: [
                                                isBuyer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded",
                                                    children: "Mua"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionHistory.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 23
                                                }, this),
                                                isSeller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded",
                                                    children: "Bán"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionHistory.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 23
                                                }, this),
                                                !isBuyer && !isSeller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded",
                                                    children: "Khác"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionHistory.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionHistory.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/TransactionHistory.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/TransactionHistory.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TransactionHistory.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TransactionHistory.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TransactionHistory.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/hooks/useMarketplace.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMarketplace",
    ()=>useMarketplace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@iota/iota-sdk/dist/esm/transactions/Transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Marketplace contract configuration
const MARKETPLACE_MODULE = "contract";
const MARKETPLACE_METHODS = {
    CREATE: "create",
    ADD_ITEM: "add_item",
    BUY_ITEM: "buy_item",
    GET_AVAILABLE_ITEMS: "get_available_items",
    GET_TRANSACTION_HISTORY: "get_transaction_history"
};
function useMarketplace() {
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const { mutate: signAndExecute } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignAndExecuteTransaction"])();
    const packageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNetworkVariable"])("packageId");
    const iotaClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIotaClient"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [marketplaceId, setMarketplaceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Create marketplace
    const createMarketplace = async ()=>{
        if (!packageId || !account) {
            throw new Error("Package ID or account not available");
        }
        try {
            setIsLoading(true);
            setError(null);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
            tx.moveCall({
                arguments: [],
                target: `${packageId}::${MARKETPLACE_MODULE}::${MARKETPLACE_METHODS.CREATE}`
            });
            return new Promise((resolve, reject)=>{
                signAndExecute({
                    transaction: tx
                }, {
                    onSuccess: async ({ digest })=>{
                        try {
                            console.log("Marketplace creation transaction:", digest);
                            // Wait for transaction and get the created object ID
                            const { effects } = await iotaClient.waitForTransaction({
                                digest,
                                options: {
                                    showEffects: true
                                }
                            });
                            const newObjectId = effects?.created?.[0]?.reference?.objectId;
                            if (newObjectId) {
                                console.log("Created marketplace object ID:", newObjectId);
                                resolve(newObjectId);
                            } else {
                                reject(new Error("No object ID found in transaction effects"));
                            }
                        } catch (waitError) {
                            reject(waitError);
                        } finally{
                            setIsLoading(false);
                        }
                    },
                    onError: (err)=>{
                        const error = err instanceof Error ? err : new Error(String(err));
                        setError(error);
                        reject(error);
                        setIsLoading(false);
                    }
                });
            });
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            setError(error);
            setIsLoading(false);
            throw error;
        }
    };
    // Add item to marketplace
    const addItem = async (name, price, marketplaceObjectId)=>{
        if (!packageId || !account) {
            throw new Error("Package ID or account not available");
        }
        try {
            setIsLoading(true);
            setError(null);
            // Convert price to mist (IOTA's smallest unit: 1 IOTA = 1,000,000,000 mist)
            // Input price is already in IOTA, so multiply by 1B to get mist
            const priceInMist = Math.round(price * 1000000000);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
            tx.moveCall({
                arguments: [
                    tx.object(marketplaceObjectId),
                    tx.pure.string(name),
                    tx.pure.u64(priceInMist)
                ],
                target: `${packageId}::${MARKETPLACE_MODULE}::${MARKETPLACE_METHODS.ADD_ITEM}`
            });
            return new Promise((resolve, reject)=>{
                signAndExecute({
                    transaction: tx
                }, {
                    onSuccess: async ({ digest })=>{
                        try {
                            console.log("Add item transaction:", digest);
                            resolve(digest);
                        } catch (waitError) {
                            reject(waitError);
                        } finally{
                            setIsLoading(false);
                        }
                    },
                    onError: (err)=>{
                        const error = err instanceof Error ? err : new Error(String(err));
                        setError(error);
                        reject(error);
                        setIsLoading(false);
                    }
                });
            });
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            setError(error);
            setIsLoading(false);
            throw error;
        }
    };
    // Buy item from marketplace
    const buyItem = async (itemIndex, payment, marketplaceObjectId)=>{
        if (!packageId || !account) {
            throw new Error("Package ID or account not available");
        }
        try {
            setIsLoading(true);
            setError(null);
            console.log(`Buying item: index=${itemIndex}, payment=${payment} IOTA (type: ${typeof payment}), marketplaceId=${marketplaceObjectId}`);
            // Convert payment to mist using BigInt to avoid floating point precision issues
            // IOTA uses 9 decimal places (1 IOTA = 1,000,000,000 mist)
            const MIST_DECIMALS = 9;
            const paymentStr = payment.toString();
            let [integerPart, decimalPart = ""] = paymentStr.split(".");
            // Pad or truncate decimal part to exactly 9 digits
            if (decimalPart.length < MIST_DECIMALS) {
                decimalPart = decimalPart.padEnd(MIST_DECIMALS, '0');
            } else {
                decimalPart = decimalPart.substring(0, MIST_DECIMALS);
            }
            // Combine integer and decimal parts
            const fullMistString = integerPart + decimalPart;
            const paymentInMist = parseInt(fullMistString, 10);
            console.log(`Payment conversion with BigInt precision:`);
            console.log(`  Original: ${payment} IOTA`);
            console.log(`  String representation: "${paymentStr}"`);
            console.log(`  Integer part: "${integerPart}"`);
            console.log(`  Decimal part: "${decimalPart}" (padded to 9 digits)`);
            console.log(`  Combined string: "${fullMistString}"`);
            console.log(`  Final mist value: ${paymentInMist}`);
            console.log(`  Back to IOTA: ${paymentInMist / Math.pow(10, MIST_DECIMALS)}`);
            console.log(`  Expected exactly: ${payment === paymentInMist / Math.pow(10, MIST_DECIMALS) ? 'MATCH' : 'MISMATCH'}`);
            // Validate payment amount
            if (paymentInMist <= 0 || !Number.isInteger(paymentInMist)) {
                throw new Error(`Invalid payment amount: ${payment} IOTA (${paymentInMist} mist)`);
            }
            console.log(`Creating transaction for wallet payment`);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
            // Use a smaller gas budget to avoid confusion
            tx.setGasBudget(100000000); // 0.1 IOTA gas budget (smaller than payment)
            // Create payment by splitting from gas coin
            // NOTE: This might be the issue - using gas coin for payment
            console.log(`WARNING: Using gas coin for payment. Gas budget: 100000000 mist, Payment: ${paymentInMist} mist`);
            // Log the exact u64 value being sent
            const u64Value = tx.pure.u64(paymentInMist);
            console.log(`tx.pure.u64() value:`, u64Value);
            console.log(`Raw paymentInMist value: ${paymentInMist}`);
            console.log(`PaymentInMist as hex: 0x${paymentInMist.toString(16)}`);
            const [paymentCoin] = tx.splitCoins(tx.gas, [
                u64Value
            ]);
            // Buy item using the payment coin
            const remainingCoin = tx.moveCall({
                arguments: [
                    tx.object(marketplaceObjectId),
                    tx.pure.u64(itemIndex),
                    paymentCoin
                ],
                target: `${packageId}::${MARKETPLACE_MODULE}::${MARKETPLACE_METHODS.BUY_ITEM}`
            });
            // Transfer remaining coins back to buyer  
            tx.transferObjects([
                remainingCoin
            ], account.address);
            console.log("Transaction prepared with proper gas budget, executing...");
            return new Promise((resolve, reject)=>{
                signAndExecute({
                    transaction: tx
                }, {
                    onSuccess: async ({ digest })=>{
                        try {
                            console.log("Buy item transaction successful:", digest);
                            resolve(digest);
                        } catch (waitError) {
                            console.error("Wait error:", waitError);
                            reject(waitError);
                        } finally{
                            setIsLoading(false);
                        }
                    },
                    onError: (err)=>{
                        const error = err instanceof Error ? err : new Error(String(err));
                        console.error("Buy item transaction failed:", error);
                        console.error("Error details:", {
                            message: error.message,
                            paymentInMist,
                            paymentInIOTA: payment,
                            itemIndex,
                            marketplaceObjectId
                        });
                        setError(error);
                        reject(error);
                        setIsLoading(false);
                    }
                });
            });
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            setError(error);
            setIsLoading(false);
            throw error;
        }
    };
    // Query available items from marketplace
    const getAvailableItems = async (marketplaceObjectId)=>{
        if (!packageId || !iotaClient) {
            throw new Error("Package ID or client not available");
        }
        try {
            // Call the contract view function
            const result = await iotaClient.devInspectTransactionBlock({
                transactionBlock: (()=>{
                    const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
                    tx.moveCall({
                        arguments: [
                            tx.object(marketplaceObjectId)
                        ],
                        target: `${packageId}::${MARKETPLACE_MODULE}::${MARKETPLACE_METHODS.GET_AVAILABLE_ITEMS}`
                    });
                    return tx;
                })(),
                sender: account?.address || "0x0"
            });
            // Parse the result (this will need to be adapted based on the actual response format)
            console.log("Get available items result:", result);
            return [];
        } catch (error) {
            console.error("Error getting available items:", error);
            throw error;
        }
    };
    // Query transaction history from marketplace
    const getTransactionHistory = async (marketplaceObjectId)=>{
        if (!packageId || !iotaClient) {
            throw new Error("Package ID or client not available");
        }
        try {
            const result = await iotaClient.devInspectTransactionBlock({
                transactionBlock: (()=>{
                    const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
                    tx.moveCall({
                        arguments: [
                            tx.object(marketplaceObjectId)
                        ],
                        target: `${packageId}::${MARKETPLACE_MODULE}::${MARKETPLACE_METHODS.GET_TRANSACTION_HISTORY}`
                    });
                    return tx;
                })(),
                sender: account?.address || "0x0"
            });
            console.log("Get transaction history result:", result);
            return [];
        } catch (error) {
            console.error("Error getting transaction history:", error);
            throw error;
        }
    };
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
        setMarketplaceId
    };
}
}),
"[project]/components/MarketplaceApp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarketplaceApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddItemForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AddItemForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ItemList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ItemList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TransactionHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TransactionHistory.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMarketplace$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMarketplace.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function MarketplaceApp() {
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const packageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNetworkVariable"])("packageId");
    const { addItem, buyItem, createMarketplace, getAvailableItems, getTransactionHistory, isLoading: contractLoading, error: contractError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMarketplace$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMarketplace"])();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('market');
    const [marketplaceId, setMarketplaceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Initialize marketplace when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeMarketplace = async ()=>{
            // Check if marketplace ID exists in localStorage
            const storedMarketplaceId = localStorage.getItem('marketplaceId');
            // Validate stored marketplace ID - must start with 0x and be proper length
            const isValidObjectId = storedMarketplaceId && storedMarketplaceId.startsWith('0x') && storedMarketplaceId.length > 20 && !storedMarketplaceId.includes('marketplace_');
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
    }, [
        account
    ]); // 🔧 Chỉ depend vào account, loại bỏ createMarketplace
    // Load real data from contract when marketplace changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadMarketplaceData = async ()=>{
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
                } finally{
                    setIsLoading(false);
                }
            }
        };
        loadMarketplaceData();
    }, [
        marketplaceId,
        packageId,
        account
    ]);
    const handleAddItem = async (name, priceStr)=>{
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
            const newItem = {
                id: newItemId,
                name,
                price,
                seller: account.address,
                sold: false
            };
            setItems((prev)=>[
                    ...prev,
                    newItem
                ]);
            alert(`✅ Đã thêm sản phẩm "${name}" với giá ${price} IOTA\n\n💡 Bạn vừa trả phí gas nhỏ để ghi dữ liệu lên blockchain. Khi có người mua, bạn sẽ nhận được ${price} IOTA (trừ phí gas cho buyer).`);
        } catch (error) {
            console.error("Error adding item:", error);
            alert(`Có lỗi xảy ra khi thêm sản phẩm: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally{
            setIsLoading(false);
        }
    };
    const handleBuyItem = async (itemIndex, price)=>{
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
            const availableItems = items.filter((item)=>!item.sold);
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
                const realItems = items.filter((item)=>!item.id.startsWith('demo'));
                const realIndex = realItems.findIndex((i)=>i.id === item.id);
                if (realIndex === -1) {
                    alert("Không tìm thấy sản phẩm trong contract");
                    return;
                }
                console.log(`Real contract purchase: item index ${realIndex} in contract`);
                console.log(`MarketplaceApp: Calling buyItem with price=${price} (type: ${typeof price})`);
                await buyItem(realIndex, price, marketplaceId);
                // Update local state after successful purchase
                const originalIndex = items.findIndex((i)=>i.id === item.id);
                setItems((prev)=>prev.map((item, idx)=>idx === originalIndex ? {
                            ...item,
                            sold: true
                        } : item));
                // Add transaction record
                const newTransaction = {
                    item_id: item.id,
                    item_name: item.name,
                    price: item.price,
                    seller: item.seller,
                    buyer: account.address,
                    timestamp: Date.now()
                };
                setTransactions((prev)=>[
                        ...prev,
                        newTransaction
                    ]);
                alert(`Đã mua thành công "${item.name}" với giá ${price} IOTA`);
            }
        } catch (error) {
            console.error("Error buying item:", error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            alert(`Có lỗi xảy ra khi mua sản phẩm: ${errorMessage}`);
        } finally{
            setIsLoading(false);
        }
    };
    if (!account) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-8 rounded-lg shadow-md text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-4",
                    children: "IOTA Marketplace"
                }, void 0, false, {
                    fileName: "[project]/components/MarketplaceApp.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-4",
                    children: "Vui lòng kết nối ví IOTA để sử dụng marketplace"
                }, void 0, false, {
                    fileName: "[project]/components/MarketplaceApp.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Bạn cần một ví IOTA để thực hiện giao dịch mua bán"
                }, void 0, false, {
                    fileName: "[project]/components/MarketplaceApp.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/MarketplaceApp.tsx",
            lineNumber: 227,
            columnNumber: 7
        }, this);
    }
    if (!marketplaceId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-8 rounded-lg shadow-md text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-4",
                    children: "Đang khởi tạo Marketplace..."
                }, void 0, false, {
                    fileName: "[project]/components/MarketplaceApp.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"
                }, void 0, false, {
                    fileName: "[project]/components/MarketplaceApp.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mt-4",
                    children: "Vui lòng chờ trong khi chúng tôi thiết lập marketplace"
                }, void 0, false, {
                    fileName: "[project]/components/MarketplaceApp.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/MarketplaceApp.tsx",
            lineNumber: 239,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            contractError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 border border-red-200 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-red-800 font-semibold",
                        children: "Lỗi giao dịch:"
                    }, void 0, false, {
                        fileName: "[project]/components/MarketplaceApp.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-600 text-sm",
                        children: contractError.message
                    }, void 0, false, {
                        fileName: "[project]/components/MarketplaceApp.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MarketplaceApp.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-blue-800 font-semibold",
                                    children: "Marketplace ID:"
                                }, void 0, false, {
                                    fileName: "[project]/components/MarketplaceApp.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-600 text-sm font-mono",
                                    children: marketplaceId
                                }, void 0, false, {
                                    fileName: "[project]/components/MarketplaceApp.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/MarketplaceApp.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        const newId = prompt("Nhập Marketplace Object ID:", marketplaceId || "");
                                        if (newId && newId.trim()) {
                                            setMarketplaceId(newId.trim());
                                            localStorage.setItem('marketplaceId', newId.trim());
                                        }
                                    },
                                    className: "px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",
                                    children: "Thay đổi"
                                }, void 0, false, {
                                    fileName: "[project]/components/MarketplaceApp.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: async ()=>{
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
                                    },
                                    className: "px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700",
                                    children: "Tạo mới"
                                }, void 0, false, {
                                    fileName: "[project]/components/MarketplaceApp.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/MarketplaceApp.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MarketplaceApp.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MarketplaceApp.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-1 rounded-lg shadow-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex space-x-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('market'),
                            className: `flex-1 py-2 px-4 text-sm font-medium rounded-md ${activeTab === 'market' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-700'}`,
                            children: "Thị trường"
                        }, void 0, false, {
                            fileName: "[project]/components/MarketplaceApp.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('history'),
                            className: `flex-1 py-2 px-4 text-sm font-medium rounded-md ${activeTab === 'history' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-700'}`,
                            children: "Lịch sử giao dịch"
                        }, void 0, false, {
                            fileName: "[project]/components/MarketplaceApp.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MarketplaceApp.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MarketplaceApp.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            activeTab === 'market' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    items.some((item)=>item.id.startsWith('demo')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-yellow-800 font-semibold",
                                children: "Chế độ Demo"
                            }, void 0, false, {
                                fileName: "[project]/components/MarketplaceApp.tsx",
                                lineNumber: 334,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-yellow-700 text-sm",
                                children: "Các sản phẩm dưới đây là demo để test chức năng mua bán. Bạn có thể mua bất kỳ sản phẩm nào (kể cả của bạn) để test."
                            }, void 0, false, {
                                fileName: "[project]/components/MarketplaceApp.tsx",
                                lineNumber: 335,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MarketplaceApp.tsx",
                        lineNumber: 333,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-50 border border-green-200 rounded-lg p-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-green-800 font-semibold",
                                children: "Tại sao cần thanh toán khi thêm sản phẩm?"
                            }, void 0, false, {
                                fileName: "[project]/components/MarketplaceApp.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-green-700 text-sm mt-2 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Gas fee:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MarketplaceApp.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this),
                                            " Mọi thao tác ghi lên blockchain đều cần phí gas (~0.001 IOTA) để trả cho validators."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MarketplaceApp.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Khác biệt:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MarketplaceApp.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this),
                                            "• Thêm sản phẩm = Chỉ trả gas fee nhỏ • Mua sản phẩm = Trả tiền sản phẩm + gas fee"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MarketplaceApp.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Lợi ích:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MarketplaceApp.tsx",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, this),
                                            " Dữ liệu được lưu trữ vĩnh viễn trên blockchain, không thể bị thay đổi."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MarketplaceApp.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MarketplaceApp.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MarketplaceApp.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddItemForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onAddItem: handleAddItem,
                        isLoading: isLoading || contractLoading
                    }, void 0, false, {
                        fileName: "[project]/components/MarketplaceApp.tsx",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ItemList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        items: items,
                        onBuyItem: handleBuyItem,
                        currentUser: account?.address || '',
                        isLoading: isLoading || contractLoading
                    }, void 0, false, {
                        fileName: "[project]/components/MarketplaceApp.tsx",
                        lineNumber: 363,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TransactionHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                transactions: transactions,
                currentUser: account?.address || ''
            }, void 0, false, {
                fileName: "[project]/components/MarketplaceApp.tsx",
                lineNumber: 371,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MarketplaceApp.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_630a8340._.js.map