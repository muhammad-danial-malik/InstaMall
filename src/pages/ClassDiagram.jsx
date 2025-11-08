import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  GitBranch,
  Users,
  Package,
  Store,
  Settings,
  Link,
  Hammer,
  ClipboardList,
} from "lucide-react";

export default function ClassDiagram() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
          </Button>
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <GitBranch className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Class Diagram
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                Structure of classes and their relationships
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Insta Mall - Class Diagram
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Complete SVG-based class diagram showing system architecture,
            relationships, and design patterns
          </p>

          {/* SVG Class Diagram - Responsive */}
          <div className="w-full overflow-x-auto bg-slate-50 border-2 border-slate-200 rounded-lg">
            <svg
              viewBox="0 0 1600 950"
              className="w-full min-w-max h-auto"
              preserveAspectRatio="xMidYMid meet"
              style={{ minHeight: "700px" }}
            >
              {/* Marker definitions */}
              <defs>
                <marker
                  id="inheritance"
                  markerWidth="15"
                  markerHeight="15"
                  refX="10"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path
                    d="M0,0 L0,6 L10,3 z"
                    fill="white"
                    stroke="#6366f1"
                    strokeWidth="2"
                  />
                </marker>
                <marker
                  id="composition-marker"
                  markerWidth="12"
                  markerHeight="12"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
                </marker>
                <marker
                  id="association-marker"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#6b7280" />
                </marker>
              </defs>

              {/* Background */}
              <rect width="1600" height="950" fill="#f8fafc" />

              {/* ========== ROW 1: USER MANAGEMENT ========== */}

              {/* User Class */}
              <g>
                <rect
                  x="80"
                  y="40"
                  width="200"
                  height="180"
                  fill="#dbeafe"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="80"
                  y1="75"
                  x2="280"
                  y2="75"
                  stroke="#3b82f6"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="135"
                  x2="280"
                  y2="135"
                  stroke="#3b82f6"
                  strokeWidth="1"
                />
                <text
                  x="180"
                  y="65"
                  textAnchor="middle"
                  className="fill-blue-900 font-bold text-sm"
                >
                  «User»
                </text>
                <text x="90" y="95" className="fill-blue-800 text-xs">
                  - id: String
                </text>
                <text x="90" y="110" className="fill-blue-800 text-xs">
                  - name: String
                </text>
                <text x="90" y="125" className="fill-blue-800 text-xs">
                  - email: String
                </text>
                <text
                  x="90"
                  y="150"
                  className="fill-blue-700 font-semibold text-xs"
                >
                  + login(): Boolean
                </text>
                <text
                  x="90"
                  y="165"
                  className="fill-blue-700 font-semibold text-xs"
                >
                  + logout(): void
                </text>
                <text
                  x="90"
                  y="180"
                  className="fill-blue-700 font-semibold text-xs"
                >
                  + updateProfile()
                </text>
              </g>

              {/* ShopOwner Class */}
              <g>
                <rect
                  x="360"
                  y="40"
                  width="220"
                  height="180"
                  fill="#dcfce7"
                  stroke="#22c55e"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="360"
                  y1="75"
                  x2="580"
                  y2="75"
                  stroke="#22c55e"
                  strokeWidth="1"
                />
                <line
                  x1="360"
                  y1="135"
                  x2="580"
                  y2="135"
                  stroke="#22c55e"
                  strokeWidth="1"
                />
                <text
                  x="470"
                  y="65"
                  textAnchor="middle"
                  className="fill-green-900 font-bold text-sm"
                >
                  «ShopOwner»
                </text>
                <text x="370" y="95" className="fill-green-800 text-xs">
                  - shopId: String
                </text>
                <text x="370" y="110" className="fill-green-800 text-xs">
                  - businessName: String
                </text>
                <text x="370" y="125" className="fill-green-800 text-xs">
                  - licenseNumber: String
                </text>
                <text
                  x="370"
                  y="150"
                  className="fill-green-700 font-semibold text-xs"
                >
                  + manageInventory()
                </text>
                <text
                  x="370"
                  y="165"
                  className="fill-green-700 font-semibold text-xs"
                >
                  + viewAnalytics()
                </text>
                <text
                  x="370"
                  y="180"
                  className="fill-green-700 font-semibold text-xs"
                >
                  + processOrders()
                </text>
              </g>

              {/* Buyer Class */}
              <g>
                <rect
                  x="680"
                  y="40"
                  width="220"
                  height="180"
                  fill="#f3e8ff"
                  stroke="#9333ea"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="680"
                  y1="75"
                  x2="900"
                  y2="75"
                  stroke="#9333ea"
                  strokeWidth="1"
                />
                <line
                  x1="680"
                  y1="135"
                  x2="900"
                  y2="135"
                  stroke="#9333ea"
                  strokeWidth="1"
                />
                <text
                  x="790"
                  y="65"
                  textAnchor="middle"
                  className="fill-purple-900 font-bold text-sm"
                >
                  «Buyer»
                </text>
                <text x="690" y="95" className="fill-purple-800 text-xs">
                  - location: GeoPoint
                </text>
                <text x="690" y="110" className="fill-purple-800 text-xs">
                  - searchHistory: List
                </text>
                <text x="690" y="125" className="fill-purple-800 text-xs">
                  - favoriteShops: List
                </text>
                <text
                  x="690"
                  y="150"
                  className="fill-purple-700 font-semibold text-xs"
                >
                  + searchProducts()
                </text>
                <text
                  x="690"
                  y="165"
                  className="fill-purple-700 font-semibold text-xs"
                >
                  + viewShopDetails()
                </text>
                <text
                  x="690"
                  y="180"
                  className="fill-purple-700 font-semibold text-xs"
                >
                  + placeOrder()
                </text>
              </g>

              {/* ========== ROW 2: PRODUCT & SHOP ========== */}

              {/* Product Class */}
              <g>
                <rect
                  x="1000"
                  y="40"
                  width="220"
                  height="180"
                  fill="#fed7aa"
                  stroke="#f97316"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="1000"
                  y1="75"
                  x2="1220"
                  y2="75"
                  stroke="#f97316"
                  strokeWidth="1"
                />
                <line
                  x1="1000"
                  y1="135"
                  x2="1220"
                  y2="135"
                  stroke="#f97316"
                  strokeWidth="1"
                />
                <text
                  x="1110"
                  y="65"
                  textAnchor="middle"
                  className="fill-orange-900 font-bold text-sm"
                >
                  «Product»
                </text>
                <text x="1010" y="95" className="fill-orange-800 text-xs">
                  - id: String
                </text>
                <text x="1010" y="110" className="fill-orange-800 text-xs">
                  - name: String
                </text>
                <text x="1010" y="125" className="fill-orange-800 text-xs">
                  - price: Decimal
                </text>
                <text
                  x="1010"
                  y="150"
                  className="fill-orange-700 font-semibold text-xs"
                >
                  + calculateProfit()
                </text>
                <text
                  x="1010"
                  y="165"
                  className="fill-orange-700 font-semibold text-xs"
                >
                  + isExpired()
                </text>
                <text
                  x="1010"
                  y="180"
                  className="fill-orange-700 font-semibold text-xs"
                >
                  + updateStock()
                </text>
              </g>

              {/* Shop Class */}
              <g>
                <rect
                  x="1320"
                  y="40"
                  width="220"
                  height="180"
                  fill="#e0e7ff"
                  stroke="#6366f1"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="1320"
                  y1="75"
                  x2="1540"
                  y2="75"
                  stroke="#6366f1"
                  strokeWidth="1"
                />
                <line
                  x1="1320"
                  y1="135"
                  x2="1540"
                  y2="135"
                  stroke="#6366f1"
                  strokeWidth="1"
                />
                <text
                  x="1430"
                  y="65"
                  textAnchor="middle"
                  className="fill-indigo-900 font-bold text-sm"
                >
                  «Shop»
                </text>
                <text x="1330" y="95" className="fill-indigo-800 text-xs">
                  - id: String
                </text>
                <text x="1330" y="110" className="fill-indigo-800 text-xs">
                  - ownerId: String
                </text>
                <text x="1330" y="125" className="fill-indigo-800 text-xs">
                  - name: String
                </text>
                <text
                  x="1330"
                  y="150"
                  className="fill-indigo-700 font-semibold text-xs"
                >
                  + getProducts()
                </text>
                <text
                  x="1330"
                  y="165"
                  className="fill-indigo-700 font-semibold text-xs"
                >
                  + calculateRating()
                </text>
                <text
                  x="1330"
                  y="180"
                  className="fill-indigo-700 font-semibold text-xs"
                >
                  + updateProfile()
                </text>
              </g>

              {/* ========== ROW 3: INVENTORY & CATEGORY ========== */}

              {/* Inventory Class */}
              <g>
                <rect
                  x="80"
                  y="300"
                  width="220"
                  height="180"
                  fill="#fecaca"
                  stroke="#ef4444"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="80"
                  y1="335"
                  x2="300"
                  y2="335"
                  stroke="#ef4444"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="395"
                  x2="300"
                  y2="395"
                  stroke="#ef4444"
                  strokeWidth="1"
                />
                <text
                  x="190"
                  y="325"
                  textAnchor="middle"
                  className="fill-red-900 font-bold text-sm"
                >
                  «Inventory»
                </text>
                <text x="90" y="355" className="fill-red-800 text-xs">
                  - productId: String
                </text>
                <text x="90" y="370" className="fill-red-800 text-xs">
                  - currentStock: Integer
                </text>
                <text x="90" y="385" className="fill-red-800 text-xs">
                  - reorderPoint: Integer
                </text>
                <text
                  x="90"
                  y="410"
                  className="fill-red-700 font-semibold text-xs"
                >
                  + isLowStock()
                </text>
                <text
                  x="90"
                  y="425"
                  className="fill-red-700 font-semibold text-xs"
                >
                  + needsReorder()
                </text>
                <text
                  x="90"
                  y="440"
                  className="fill-red-700 font-semibold text-xs"
                >
                  + updateStock()
                </text>
              </g>

              {/* Category Class */}
              <g>
                <rect
                  x="400"
                  y="300"
                  width="200"
                  height="180"
                  fill="#fef08a"
                  stroke="#eab308"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="400"
                  y1="335"
                  x2="600"
                  y2="335"
                  stroke="#eab308"
                  strokeWidth="1"
                />
                <line
                  x1="400"
                  y1="395"
                  x2="600"
                  y2="395"
                  stroke="#eab308"
                  strokeWidth="1"
                />
                <text
                  x="500"
                  y="325"
                  textAnchor="middle"
                  className="fill-yellow-900 font-bold text-sm"
                >
                  «Category»
                </text>
                <text x="410" y="355" className="fill-yellow-800 text-xs">
                  - id: String
                </text>
                <text x="410" y="370" className="fill-yellow-800 text-xs">
                  - name: String
                </text>
                <text x="410" y="385" className="fill-yellow-800 text-xs">
                  - parentId: String
                </text>
                <text
                  x="410"
                  y="410"
                  className="fill-yellow-700 font-semibold text-xs"
                >
                  + getSubcategories()
                </text>
                <text
                  x="410"
                  y="425"
                  className="fill-yellow-700 font-semibold text-xs"
                >
                  + getProducts()
                </text>
              </g>

              {/* Order Class */}
              <g>
                <rect
                  x="720"
                  y="300"
                  width="200"
                  height="180"
                  fill="#cffafe"
                  stroke="#0891b2"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="720"
                  y1="335"
                  x2="920"
                  y2="335"
                  stroke="#0891b2"
                  strokeWidth="1"
                />
                <line
                  x1="720"
                  y1="395"
                  x2="920"
                  y2="395"
                  stroke="#0891b2"
                  strokeWidth="1"
                />
                <text
                  x="820"
                  y="325"
                  textAnchor="middle"
                  className="fill-cyan-900 font-bold text-sm"
                >
                  «Order»
                </text>
                <text x="730" y="355" className="fill-cyan-800 text-xs">
                  - id: String
                </text>
                <text x="730" y="370" className="fill-cyan-800 text-xs">
                  - buyerId: String
                </text>
                <text x="730" y="385" className="fill-cyan-800 text-xs">
                  - totalAmount: Decimal
                </text>
                <text
                  x="730"
                  y="410"
                  className="fill-cyan-700 font-semibold text-xs"
                >
                  + calculateTotal()
                </text>
                <text
                  x="730"
                  y="425"
                  className="fill-cyan-700 font-semibold text-xs"
                >
                  + updateStatus()
                </text>
              </g>

              {/* Subscription Class */}
              <g>
                <rect
                  x="1040"
                  y="300"
                  width="220"
                  height="180"
                  fill="#fbcfe8"
                  stroke="#ec4899"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="1040"
                  y1="335"
                  x2="1260"
                  y2="335"
                  stroke="#ec4899"
                  strokeWidth="1"
                />
                <line
                  x1="1040"
                  y1="395"
                  x2="1260"
                  y2="395"
                  stroke="#ec4899"
                  strokeWidth="1"
                />
                <text
                  x="1150"
                  y="325"
                  textAnchor="middle"
                  className="fill-pink-900 font-bold text-sm"
                >
                  «Subscription»
                </text>
                <text x="1050" y="355" className="fill-pink-800 text-xs">
                  - id: String
                </text>
                <text x="1050" y="370" className="fill-pink-800 text-xs">
                  - planType: String
                </text>
                <text x="1050" y="385" className="fill-pink-800 text-xs">
                  - isActive: Boolean
                </text>
                <text
                  x="1050"
                  y="410"
                  className="fill-pink-700 font-semibold text-xs"
                >
                  + renew(): void
                </text>
                <text
                  x="1050"
                  y="425"
                  className="fill-pink-700 font-semibold text-xs"
                >
                  + upgrade(): void
                </text>
              </g>

              {/* ========== ROW 4: PAYMENT & ORDERITEM ========== */}

              {/* Payment Class */}
              <g>
                <rect
                  x="80"
                  y="560"
                  width="220"
                  height="160"
                  fill="#d1fae5"
                  stroke="#10b981"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="80"
                  y1="595"
                  x2="300"
                  y2="595"
                  stroke="#10b981"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="650"
                  x2="300"
                  y2="650"
                  stroke="#10b981"
                  strokeWidth="1"
                />
                <text
                  x="190"
                  y="585"
                  textAnchor="middle"
                  className="fill-green-900 font-bold text-sm"
                >
                  «Payment»
                </text>
                <text x="90" y="610" className="fill-green-800 text-xs">
                  - id: String
                </text>
                <text x="90" y="625" className="fill-green-800 text-xs">
                  - orderId: String
                </text>
                <text x="90" y="640" className="fill-green-800 text-xs">
                  - amount: Decimal
                </text>
                <text
                  x="90"
                  y="665"
                  className="fill-green-700 font-semibold text-xs"
                >
                  + process()
                </text>
                <text
                  x="90"
                  y="680"
                  className="fill-green-700 font-semibold text-xs"
                >
                  + refund()
                </text>
              </g>

              {/* OrderItem Class */}
              <g>
                <rect
                  x="400"
                  y="560"
                  width="220"
                  height="160"
                  fill="#e5e7eb"
                  stroke="#6b7280"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="400"
                  y1="595"
                  x2="620"
                  y2="595"
                  stroke="#6b7280"
                  strokeWidth="1"
                />
                <line
                  x1="400"
                  y1="650"
                  x2="620"
                  y2="650"
                  stroke="#6b7280"
                  strokeWidth="1"
                />
                <text
                  x="510"
                  y="585"
                  textAnchor="middle"
                  className="fill-gray-900 font-bold text-sm"
                >
                  «OrderItem»
                </text>
                <text x="410" y="610" className="fill-gray-800 text-xs">
                  - id: String
                </text>
                <text x="410" y="625" className="fill-gray-800 text-xs">
                  - productId: String
                </text>
                <text x="410" y="640" className="fill-gray-800 text-xs">
                  - quantity: Integer
                </text>
                <text
                  x="410"
                  y="665"
                  className="fill-gray-700 font-semibold text-xs"
                >
                  + getSubtotal()
                </text>
              </g>

              {/* SyncManager Class */}
              <g>
                <rect
                  x="720"
                  y="560"
                  width="220"
                  height="160"
                  fill="#e9d5ff"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  rx="4"
                />
                <line
                  x1="720"
                  y1="595"
                  x2="940"
                  y2="595"
                  stroke="#8b5cf6"
                  strokeWidth="1"
                />
                <line
                  x1="720"
                  y1="650"
                  x2="940"
                  y2="650"
                  stroke="#8b5cf6"
                  strokeWidth="1"
                />
                <text
                  x="830"
                  y="585"
                  textAnchor="middle"
                  className="fill-purple-900 font-bold text-sm"
                >
                  «SyncManager»
                </text>
                <text x="730" y="610" className="fill-purple-800 text-xs">
                  - isSyncing: Boolean
                </text>
                <text x="730" y="625" className="fill-purple-800 text-xs">
                  - lastSync: Date
                </text>
                <text x="730" y="640" className="fill-purple-800 text-xs">
                  - retryCount: Integer
                </text>
                <text
                  x="730"
                  y="665"
                  className="fill-purple-700 font-semibold text-xs"
                >
                  + sync(): void
                </text>
                <text
                  x="730"
                  y="680"
                  className="fill-purple-700 font-semibold text-xs"
                >
                  + offline(): void
                </text>
              </g>

              {/* ========== RELATIONSHIPS ========== */}

              {/* ShopOwner inherits from User */}
              <path
                d="M 280 130 Q 320 120 360 130"
                stroke="#6366f1"
                strokeWidth="2.5"
                fill="none"
                markerEnd="url(#inheritance)"
              />
              <text
                x="310"
                y="110"
                className="fill-indigo-700 text-xs font-semibold"
              >
                inherits
              </text>

              {/* Buyer inherits from User */}
              <path
                d="M 280 100 Q 480 60 680 100"
                stroke="#6366f1"
                strokeWidth="2.5"
                fill="none"
                markerEnd="url(#inheritance)"
              />
              <text
                x="450"
                y="65"
                className="fill-indigo-700 text-xs font-semibold"
              >
                inherits
              </text>

              {/* Shop manages ShopOwner */}
              <path
                d="M 1320 130 Q 950 150 580 130"
                stroke="#3b82f6"
                strokeWidth="2.5"
                fill="none"
                markerEnd="url(#composition-marker)"
              />
              <text
                x="920"
                y="145"
                className="fill-blue-600 text-xs font-semibold"
              >
                manages 1→*
              </text>

              {/* Product in Category */}
              <path
                d="M 1000 130 Q 750 200 600 320"
                stroke="#eab308"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#association-marker)"
              />
              <text
                x="750"
                y="210"
                className="fill-yellow-700 text-xs font-semibold"
              >
                belongs to
              </text>

              {/* Inventory tracks Product */}
              <path
                d="M 300 330 Q 650 180 1000 130"
                stroke="#3b82f6"
                strokeWidth="2.5"
                fill="none"
                markerEnd="url(#composition-marker)"
              />
              <text
                x="600"
                y="220"
                className="fill-blue-600 text-xs font-semibold"
              >
                tracks 1→1
              </text>

              {/* Buyer places Order */}
              <path
                d="M 790 220 Q 800 260 820 300"
                stroke="#6b7280"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#association-marker)"
              />
              <text
                x="750"
                y="260"
                className="fill-gray-700 text-xs font-semibold"
              >
                places
              </text>

              {/* Order contains OrderItem */}
              <path
                d="M 720 380 L 620 560"
                stroke="#3b82f6"
                strokeWidth="2.5"
                fill="none"
                markerEnd="url(#composition-marker)"
              />
              <text
                x="620"
                y="470"
                className="fill-blue-600 text-xs font-semibold"
              >
                has 1→*
              </text>

              {/* Order has Payment */}
              <path
                d="M 800 480 Q 400 520 190 560"
                stroke="#3b82f6"
                strokeWidth="2.5"
                fill="none"
                markerEnd="url(#composition-marker)"
              />
              <text
                x="450"
                y="520"
                className="fill-blue-600 text-xs font-semibold"
              >
                has 1→1
              </text>

              {/* Shop has Subscription */}
              <path
                d="M 1430 220 Q 1200 260 1150 300"
                stroke="#ec4899"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#association-marker)"
              />
              <text
                x="1250"
                y="260"
                className="fill-pink-700 text-xs font-semibold"
              >
                activates
              </text>

              {/* OrderItem references Product */}
              <path
                d="M 510 720 Q 750 600 1050 220"
                stroke="#6b7280"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#association-marker)"
              />
              <text
                x="750"
                y="500"
                className="fill-gray-700 text-xs font-semibold"
              >
                references
              </text>
            </svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Insta Mall - Detailed Class Documentation
            </h2>

            {/* User Management Classes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-slate-600" />
                User Management Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-blue-900 text-center mb-2">
                    User
                  </div>
                  <div className="border-t border-blue-300 pt-2">
                    <div className="text-blue-800">- id: String</div>
                    <div className="text-blue-800">- name: String</div>
                    <div className="text-blue-800">- email: String</div>
                    <div className="text-blue-800">- phone: String</div>
                    <div className="text-blue-800">- createdAt: Date</div>
                    <div className="text-blue-800">- isActive: Boolean</div>
                  </div>
                  <div className="border-t border-blue-300 pt-2 mt-2">
                    <div className="text-blue-700">+ login(): Boolean</div>
                    <div className="text-blue-700">+ logout(): void</div>
                    <div className="text-blue-700">+ updateProfile(): void</div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-green-900 text-center mb-2">
                    ShopOwner
                  </div>
                  <div className="border-t border-green-300 pt-2">
                    <div className="text-green-800">- shopId: String</div>
                    <div className="text-green-800">- businessName: String</div>
                    <div className="text-green-800">
                      - licenseNumber: String
                    </div>
                    <div className="text-green-800">
                      - subscriptionPlan: String
                    </div>
                  </div>
                  <div className="border-t border-green-300 pt-2 mt-2">
                    <div className="text-green-700">
                      + manageInventory(): void
                    </div>
                    <div className="text-green-700">
                      + viewAnalytics(): void
                    </div>
                    <div className="text-green-700">
                      + processOrders(): void
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-purple-900 text-center mb-2">
                    Buyer
                  </div>
                  <div className="border-t border-purple-300 pt-2">
                    <div className="text-purple-800">- location: GeoPoint</div>
                    <div className="text-purple-800">
                      - searchHistory: List&lt;String&gt;
                    </div>
                    <div className="text-purple-800">
                      - favoriteShops: List&lt;String&gt;
                    </div>
                  </div>
                  <div className="border-t border-purple-300 pt-2 mt-2">
                    <div className="text-purple-700">
                      + searchProducts(): List&lt;Product&gt;
                    </div>
                    <div className="text-purple-700">
                      + viewShopDetails(): Shop
                    </div>
                    <div className="text-purple-700">+ placeOrder(): Order</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product & Inventory Classes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Package className="h-5 w-5 mr-2 text-slate-600" />
                Product & Inventory Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-orange-900 text-center mb-2">
                    Product
                  </div>
                  <div className="border-t border-orange-300 pt-2">
                    <div className="text-orange-800">- id: String</div>
                    <div className="text-orange-800">- name: String</div>
                    <div className="text-orange-800">- description: String</div>
                    <div className="text-orange-800">- barcode: String</div>
                    <div className="text-orange-800">- categoryId: String</div>
                    <div className="text-orange-800">- shopId: String</div>
                    <div className="text-orange-800">- price: Decimal</div>
                    <div className="text-orange-800">- costPrice: Decimal</div>
                    <div className="text-orange-800">- expiryDate: Date</div>
                    <div className="text-orange-800">- imageUrl: String</div>
                  </div>
                  <div className="border-t border-orange-300 pt-2 mt-2">
                    <div className="text-orange-700">
                      + calculateProfit(): Decimal
                    </div>
                    <div className="text-orange-700">
                      + isExpired(): Boolean
                    </div>
                    <div className="text-orange-700">+ updateStock(): void</div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-yellow-900 text-center mb-2">
                    Category
                  </div>
                  <div className="border-t border-yellow-300 pt-2">
                    <div className="text-yellow-800">- id: String</div>
                    <div className="text-yellow-800">- name: String</div>
                    <div className="text-yellow-800">- description: String</div>
                    <div className="text-yellow-800">- parentId: String</div>
                    <div className="text-yellow-800">- imageUrl: String</div>
                  </div>
                  <div className="border-t border-yellow-300 pt-2 mt-2">
                    <div className="text-yellow-700">
                      + getSubcategories(): List&lt;Category&gt;
                    </div>
                    <div className="text-yellow-700">
                      + getProducts(): List&lt;Product&gt;
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-red-900 text-center mb-2">
                    Inventory
                  </div>
                  <div className="border-t border-red-300 pt-2">
                    <div className="text-red-800">- productId: String</div>
                    <div className="text-red-800">- shopId: String</div>
                    <div className="text-red-800">- currentStock: Integer</div>
                    <div className="text-red-800">- minStock: Integer</div>
                    <div className="text-red-800">- maxStock: Integer</div>
                    <div className="text-red-800">- reorderPoint: Integer</div>
                    <div className="text-red-800">- lastUpdated: Date</div>
                  </div>
                  <div className="border-t border-red-300 pt-2 mt-2">
                    <div className="text-red-700">+ isLowStock(): Boolean</div>
                    <div className="text-red-700">
                      + needsReorder(): Boolean
                    </div>
                    <div className="text-red-700">+ updateStock(): void</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop & Subscription Classes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Store className="h-5 w-5 mr-2 text-slate-600" />
                Shop & Subscription Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-indigo-900 text-center mb-2">
                    Shop
                  </div>
                  <div className="border-t border-indigo-300 pt-2">
                    <div className="text-indigo-800">- id: String</div>
                    <div className="text-indigo-800">- ownerId: String</div>
                    <div className="text-indigo-800">- name: String</div>
                    <div className="text-indigo-800">- description: String</div>
                    <div className="text-indigo-800">- address: String</div>
                    <div className="text-indigo-800">- location: GeoPoint</div>
                    <div className="text-indigo-800">- phone: String</div>
                    <div className="text-indigo-800">- logoUrl: String</div>
                    <div className="text-indigo-800">- businessHours: Map</div>
                    <div className="text-indigo-800">- isVisible: Boolean</div>
                    <div className="text-indigo-800">
                      - subscriptionId: String
                    </div>
                  </div>
                  <div className="border-t border-indigo-300 pt-2 mt-2">
                    <div className="text-indigo-700">
                      + getProducts(): List&lt;Product&gt;
                    </div>
                    <div className="text-indigo-700">
                      + calculateRating(): Decimal
                    </div>
                    <div className="text-indigo-700">
                      + updateProfile(): void
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-pink-900 text-center mb-2">
                    Subscription
                  </div>
                  <div className="border-t border-pink-300 pt-2">
                    <div className="text-pink-800">- id: String</div>
                    <div className="text-pink-800">- shopId: String</div>
                    <div className="text-pink-800">- planType: String</div>
                    <div className="text-pink-800">- startDate: Date</div>
                    <div className="text-pink-800">- endDate: Date</div>
                    <div className="text-pink-800">- isActive: Boolean</div>
                    <div className="text-pink-800">- storageLimit: Integer</div>
                    <div className="text-pink-800">
                      - features: List&lt;String&gt;
                    </div>
                  </div>
                  <div className="border-t border-pink-300 pt-2 mt-2">
                    <div className="text-pink-700">+ renew(): void</div>
                    <div className="text-pink-700">+ upgrade(): void</div>
                    <div className="text-pink-700">
                      + checkLimits(): Boolean
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order & Transaction Classes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                🛒 Order & Transaction Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-cyan-900 text-center mb-2">
                    Order
                  </div>
                  <div className="border-t border-cyan-300 pt-2">
                    <div className="text-cyan-800">- id: String</div>
                    <div className="text-cyan-800">- buyerId: String</div>
                    <div className="text-cyan-800">- shopId: String</div>
                    <div className="text-cyan-800">- orderDate: Date</div>
                    <div className="text-cyan-800">- status: String</div>
                    <div className="text-cyan-800">- totalAmount: Decimal</div>
                    <div className="text-cyan-800">
                      - deliveryAddress: String
                    </div>
                    <div className="text-cyan-800">- notes: String</div>
                  </div>
                  <div className="border-t border-cyan-300 pt-2 mt-2">
                    <div className="text-cyan-700">
                      + calculateTotal(): Decimal
                    </div>
                    <div className="text-cyan-700">+ updateStatus(): void</div>
                    <div className="text-cyan-700">+ cancel(): void</div>
                  </div>
                </div>

                <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-teal-900 text-center mb-2">
                    OrderItem
                  </div>
                  <div className="border-t border-teal-300 pt-2">
                    <div className="text-teal-800">- id: String</div>
                    <div className="text-teal-800">- orderId: String</div>
                    <div className="text-teal-800">- productId: String</div>
                    <div className="text-teal-800">- quantity: Integer</div>
                    <div className="text-teal-800">- unitPrice: Decimal</div>
                    <div className="text-teal-800">- totalPrice: Decimal</div>
                  </div>
                  <div className="border-t border-teal-300 pt-2 mt-2">
                    <div className="text-teal-700">
                      + calculateSubtotal(): Decimal
                    </div>
                    <div className="text-teal-700">
                      + updateQuantity(): void
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-emerald-900 text-center mb-2">
                    Payment
                  </div>
                  <div className="border-t border-emerald-300 pt-2">
                    <div className="text-emerald-800">- id: String</div>
                    <div className="text-emerald-800">- orderId: String</div>
                    <div className="text-emerald-800">- amount: Decimal</div>
                    <div className="text-emerald-800">- method: String</div>
                    <div className="text-emerald-800">- status: String</div>
                    <div className="text-emerald-800">
                      - transactionId: String
                    </div>
                    <div className="text-emerald-800">- paymentDate: Date</div>
                  </div>
                  <div className="border-t border-emerald-300 pt-2 mt-2">
                    <div className="text-emerald-700">+ process(): Boolean</div>
                    <div className="text-emerald-700">+ refund(): void</div>
                    <div className="text-emerald-700">
                      + getStatus(): String
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System & Infrastructure Classes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-slate-600" />
                System & Infrastructure Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-gray-900 text-center mb-2">
                    Database
                  </div>
                  <div className="border-t border-gray-300 pt-2">
                    <div className="text-gray-800">
                      - connectionString: String
                    </div>
                    <div className="text-gray-800">- isOnline: Boolean</div>
                    <div className="text-gray-800">- lastSync: Date</div>
                    <div className="text-gray-800">- storageUsed: Integer</div>
                  </div>
                  <div className="border-t border-gray-300 pt-2 mt-2">
                    <div className="text-gray-700">+ connect(): Boolean</div>
                    <div className="text-gray-700">+ sync(): void</div>
                    <div className="text-gray-700">+ backup(): void</div>
                    <div className="text-gray-700">+ restore(): void</div>
                  </div>
                </div>

                <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-slate-900 text-center mb-2">
                    SyncManager
                  </div>
                  <div className="border-t border-slate-300 pt-2">
                    <div className="text-slate-800">
                      - queue: List&lt;SyncOperation&gt;
                    </div>
                    <div className="text-slate-800">- isOnline: Boolean</div>
                    <div className="text-slate-800">- retryCount: Integer</div>
                  </div>
                  <div className="border-t border-slate-300 pt-2 mt-2">
                    <div className="text-slate-700">+ addToQueue(): void</div>
                    <div className="text-slate-700">+ processQueue(): void</div>
                    <div className="text-slate-700">
                      + handleConflict(): void
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Class Relationships */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Link className="h-5 w-5 mr-2 text-slate-600" />
                Class Relationships & Multiplicity
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center justify-center">
                    <span className="bg-blue-100 px-3 py-1 rounded">User</span>
                    <span className="mx-4 text-slate-600">
                      ◄─── Generalization ───►
                    </span>
                    <span className="bg-green-100 px-3 py-1 rounded">
                      ShopOwner
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="bg-blue-100 px-3 py-1 rounded">User</span>
                    <span className="mx-4 text-slate-600">
                      ◄─── Generalization ───►
                    </span>
                    <span className="bg-purple-100 px-3 py-1 rounded">
                      Buyer
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="bg-orange-100 px-3 py-1 rounded">
                      Shop
                    </span>
                    <span className="mx-4 text-slate-600">1 ───► 0..*</span>
                    <span className="bg-yellow-100 px-3 py-1 rounded">
                      Product
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="bg-orange-100 px-3 py-1 rounded">
                      Shop
                    </span>
                    <span className="mx-4 text-slate-600">1 ───► 1</span>
                    <span className="bg-pink-100 px-3 py-1 rounded">
                      Subscription
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="bg-cyan-100 px-3 py-1 rounded">Order</span>
                    <span className="mx-4 text-slate-600">1 ───► 1..*</span>
                    <span className="bg-teal-100 px-3 py-1 rounded">
                      OrderItem
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="bg-cyan-100 px-3 py-1 rounded">Order</span>
                    <span className="mx-4 text-slate-600">1 ───► 1</span>
                    <span className="bg-emerald-100 px-3 py-1 rounded">
                      Payment
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Patterns Used */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Hammer className="h-5 w-5 mr-2 text-slate-600" />
                Design Patterns Implemented
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                  <h4 className="font-semibold text-violet-900 mb-2">
                    Repository Pattern
                  </h4>
                  <p className="text-violet-800 text-sm">
                    Data access layer abstraction for Product, Order, and User
                    repositories with consistent CRUD operations.
                  </p>
                </div>
                <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                  <h4 className="font-semibold text-rose-900 mb-2">
                    Observer Pattern
                  </h4>
                  <p className="text-rose-800 text-sm">
                    Stock alerts and notifications when inventory levels change
                    or orders are placed.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-900 mb-2">
                    Factory Pattern
                  </h4>
                  <p className="text-amber-800 text-sm">
                    Subscription plan creation and payment method instantiation
                    based on user selection.
                  </p>
                </div>
                <div className="bg-lime-50 border border-lime-200 rounded-lg p-4">
                  <h4 className="font-semibold text-lime-900 mb-2">
                    Singleton Pattern
                  </h4>
                  <p className="text-lime-800 text-sm">
                    Database connection and SyncManager instances to ensure
                    single point of control.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r from-slate-100 to-slate-200 border border-slate-300 rounded-lg p-8 mt-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <ClipboardList className="h-5 w-5 mr-2 text-slate-600" />
                Class Diagram Summary
              </h3>
              <p className="text-slate-700 mb-4">
                This comprehensive class diagram represents the complete
                architecture of the Insta Mall system, incorporating
                offline-online hybrid functionality, subscription-based
                marketplace visibility, and robust inventory management
                capabilities as specified in the detailed project requirements.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">12+</div>
                  <div className="text-sm text-slate-600">Core Classes</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">4</div>
                  <div className="text-sm text-slate-600">Design Patterns</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">6</div>
                  <div className="text-sm text-slate-600">Relationships</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-slate-600">
                    Requirements Covered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
