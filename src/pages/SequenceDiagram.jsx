import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Store,
  RefreshCw,
  Target,
  BarChart3,
} from "lucide-react";

export default function SequenceDiagram() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
          </Button>
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Sequence Diagrams
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                Chronological flow of interactions in the Insta Mall system
              </p>
            </div>
          </div>
        </div>

        {/* Sequence Diagram 1: Shop Owner Registration */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center">
              <Store className="h-6 w-6 mr-2 text-slate-600" />
              Shop Owner Registration & Setup
            </h2>
            <p className="text-slate-600">
              Complete sequence of interactions when a shop owner registers and
              sets up their shop
            </p>
          </div>

          {/* Responsive SVG Sequence Diagram */}
          <div className="w-full overflow-x-auto bg-slate-50 border-2 border-slate-200 rounded-lg">
            <svg
              viewBox="0 0 1400 500"
              className="w-full min-w-max h-auto"
              preserveAspectRatio="xMidYMid meet"
              style={{ minHeight: "450px" }}
            >
              <defs>
                <marker
                  id="seq-arrow"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#1f2937" />
                </marker>
              </defs>

              {/* Background */}
              <rect width="1400" height="500" fill="#f8fafc" />

              {/* Actor Headers */}
              <rect
                x="80"
                y="20"
                width="140"
                height="50"
                fill="#3b82f6"
                stroke="#1e40af"
                strokeWidth="2"
                rx="4"
              />
              <text
                x="150"
                y="50"
                textAnchor="middle"
                className="fill-white font-bold text-sm"
              >
                Shop Owner
              </text>

              <rect
                x="320"
                y="20"
                width="140"
                height="50"
                fill="#10b981"
                stroke="#047857"
                strokeWidth="2"
                rx="4"
              />
              <text
                x="390"
                y="50"
                textAnchor="middle"
                className="fill-white font-bold text-sm"
              >
                Web App
              </text>

              <rect
                x="560"
                y="20"
                width="140"
                height="50"
                fill="#8b5cf6"
                stroke="#6d28d9"
                strokeWidth="2"
                rx="4"
              />
              <text
                x="630"
                y="50"
                textAnchor="middle"
                className="fill-white font-bold text-sm"
              >
                API Server
              </text>

              <rect
                x="800"
                y="20"
                width="140"
                height="50"
                fill="#f97316"
                stroke="#c2410c"
                strokeWidth="2"
                rx="4"
              />
              <text
                x="870"
                y="50"
                textAnchor="middle"
                className="fill-white font-bold text-sm"
              >
                Database
              </text>

              {/* Lifelines */}
              <line
                x1="150"
                y1="70"
                x2="150"
                y2="480"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <line
                x1="390"
                y1="70"
                x2="390"
                y2="480"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <line
                x1="630"
                y1="70"
                x2="630"
                y2="480"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <line
                x1="870"
                y1="70"
                x2="870"
                y2="480"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="5,5"
              />

              {/* Sequence Messages */}
              <line
                x1="150"
                y1="100"
                x2="390"
                y2="100"
                stroke="#3b82f6"
                strokeWidth="2.5"
                markerEnd="url(#seq-arrow)"
              />
              <text
                x="270"
                y="90"
                textAnchor="middle"
                className="fill-blue-700 text-xs font-semibold"
              >
                1. accessRegistration()
              </text>

              <line
                x1="390"
                y1="130"
                x2="150"
                y2="130"
                stroke="#10b981"
                strokeWidth="2.5"
                markerEnd="url(#seq-arrow)"
              />
              <text
                x="270"
                y="120"
                textAnchor="middle"
                className="fill-green-700 text-xs font-semibold"
              >
                2. displayForm()
              </text>

              <line
                x1="150"
                y1="160"
                x2="390"
                y2="160"
                stroke="#3b82f6"
                strokeWidth="2.5"
                markerEnd="url(#seq-arrow)"
              />
              <text
                x="270"
                y="150"
                textAnchor="middle"
                className="fill-blue-700 text-xs font-semibold"
              >
                3. submitRegistration(data)
              </text>

              <line
                x1="390"
                y1="190"
                x2="630"
                y2="190"
                stroke="#10b981"
                strokeWidth="2.5"
                markerEnd="url(#seq-arrow)"
              />
              <text
                x="510"
                y="180"
                textAnchor="middle"
                className="fill-green-700 text-xs font-semibold"
              >
                4. validateShopData()
              </text>

              <line
                x1="630"
                y1="220"
                x2="870"
                y2="220"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                markerEnd="url(#seq-arrow)"
              />
              <text
                x="750"
                y="210"
                textAnchor="middle"
                className="fill-purple-700 text-xs font-semibold"
              >
                5. createShop()
              </text>

              <line
                x1="870"
                y1="250"
                x2="630"
                y2="250"
                stroke="#f97316"
                strokeWidth="2.5"
                markerEnd="url(#seq-arrow)"
              />
              <text
                x="750"
                y="240"
                textAnchor="middle"
                className="fill-orange-700 text-xs font-semibold"
              >
                6. insertShopRecord()
              </text>

              <line
                x1="630"
                y1="280"
                x2="870"
                y2="280"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                markerEnd="url(#seq-arrow)"
              />
              <text
                x="750"
                y="270"
                textAnchor="middle"
                className="fill-purple-700 text-xs font-semibold"
              >
                7. createSubscription()
              </text>

              <line
                x1="870"
                y1="310"
                x2="630"
                y2="310"
                stroke="#f97316"
                strokeWidth="2.5"
                markerEnd="url(#seq-arrow)"
              />
              <text
                x="750"
                y="300"
                textAnchor="middle"
                className="fill-orange-700 text-xs font-semibold"
              >
                8. insertSubscription()
              </text>

              <line
                x1="630"
                y1="340"
                x2="390"
                y2="340"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                markerEnd="url(#seq-arrow)"
              />
              <text
                x="510"
                y="330"
                textAnchor="middle"
                className="fill-purple-700 text-xs font-semibold"
              >
                9. sendConfirmation()
              </text>

              <line
                x1="390"
                y1="370"
                x2="150"
                y2="370"
                stroke="#10b981"
                strokeWidth="2.5"
                markerEnd="url(#seq-arrow)"
              />
              <text
                x="270"
                y="360"
                textAnchor="middle"
                className="fill-green-700 text-xs font-semibold"
              >
                10. displaySuccess()
              </text>

              {/* Note boxes */}
              <rect
                x="950"
                y="100"
                width="220"
                height="80"
                fill="#fef3c7"
                stroke="#d97706"
                strokeWidth="1.5"
                rx="4"
              />
              <text
                x="960"
                y="120"
                className="fill-amber-900 text-xs font-semibold"
              >
                Activation Sequence:
              </text>
              <text x="960" y="135" className="fill-amber-900 text-xs">
                1. Shop Owner initiates registration
              </text>
              <text x="960" y="150" className="fill-amber-900 text-xs">
                2. System validates data
              </text>
              <text x="960" y="165" className="fill-amber-900 text-xs">
                3. Database stores records
              </text>
            </svg>
          </div>
        </div>

        {/* Sequence Diagram 2: Buyer Purchase Flow */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              🛒 Buyer Product Search & Purchase
            </h2>
            <p className="text-slate-600">
              End-to-end sequence of buyer discovering products and completing a
              purchase
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6 overflow-x-auto">
            <svg
              viewBox="0 0 1600 650"
              className="w-full min-w-max h-auto"
              preserveAspectRatio="xMidYMid meet"
              style={{ minHeight: "500px" }}
            >
              <defs>
                <marker
                  id="seq2-arrow-green"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#10B981" />
                </marker>
                <marker
                  id="seq2-arrow-blue"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#3B82F6" />
                </marker>
                <marker
                  id="seq2-arrow-purple"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#8B5CF6" />
                </marker>
                <marker
                  id="seq2-arrow-orange"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#F97316" />
                </marker>
                <marker
                  id="seq2-arrow-red"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#EF4444" />
                </marker>
              </defs>

              {/* Actor headers */}
              <g id="seq2-actor-headers">
                <rect
                  x="80"
                  y="20"
                  width="100"
                  height="40"
                  fill="#10B981"
                  rx="4"
                />
                <text
                  x="130"
                  y="45"
                  textAnchor="middle"
                  className="fill-white text-sm font-bold"
                >
                  Buyer App
                </text>

                <rect
                  x="300"
                  y="20"
                  width="100"
                  height="40"
                  fill="#3B82F6"
                  rx="4"
                />
                <text
                  x="350"
                  y="45"
                  textAnchor="middle"
                  className="fill-white text-sm font-bold"
                >
                  API Server
                </text>

                <rect
                  x="520"
                  y="20"
                  width="100"
                  height="40"
                  fill="#8B5CF6"
                  rx="4"
                />
                <text
                  x="570"
                  y="45"
                  textAnchor="middle"
                  className="fill-white text-sm font-bold"
                >
                  Database
                </text>

                <rect
                  x="740"
                  y="20"
                  width="100"
                  height="40"
                  fill="#F97316"
                  rx="4"
                />
                <text
                  x="790"
                  y="45"
                  textAnchor="middle"
                  className="fill-white text-sm font-bold"
                >
                  Payment GW
                </text>

                <rect
                  x="960"
                  y="20"
                  width="100"
                  height="40"
                  fill="#EF4444"
                  rx="4"
                />
                <text
                  x="1010"
                  y="45"
                  textAnchor="middle"
                  className="fill-white text-sm font-bold"
                >
                  Shop App
                </text>
              </g>

              {/* Lifelines (dashed vertical lines) */}
              <g
                id="seq2-lifelines"
                stroke="#9CA3AF"
                strokeDasharray="5,5"
                strokeWidth="1.5"
              >
                <line x1="130" y1="60" x2="130" y2="620" />
                <line x1="350" y1="60" x2="350" y2="620" />
                <line x1="570" y1="60" x2="570" y2="620" />
                <line x1="790" y1="60" x2="790" y2="620" />
                <line x1="1010" y1="60" x2="1010" y2="620" />
              </g>

              {/* Sequence Messages */}
              {/* 1. searchProducts */}
              <path
                d="M 130 100 Q 240 90 350 100"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-green)"
              />
              <text
                x="240"
                y="85"
                textAnchor="middle"
                className="fill-green-600 text-xs font-medium"
              >
                1. searchProducts(query)
              </text>

              {/* 2. findSubscribedShops */}
              <path
                d="M 350 130 Q 460 120 570 130"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-blue)"
              />
              <text
                x="460"
                y="115"
                textAnchor="middle"
                className="fill-blue-600 text-xs font-medium"
              >
                2. findSubscribedShops()
              </text>

              {/* 3. returnShopList */}
              <path
                d="M 570 160 Q 460 150 350 160"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-purple)"
              />
              <text
                x="460"
                y="145"
                textAnchor="middle"
                className="fill-purple-600 text-xs font-medium"
              >
                3. returnShopList()
              </text>

              {/* 4. showSearchResults */}
              <path
                d="M 350 190 Q 240 180 130 190"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-blue)"
              />
              <text
                x="240"
                y="175"
                textAnchor="middle"
                className="fill-blue-600 text-xs font-medium"
              >
                4. showSearchResults()
              </text>

              {/* 5. viewShopDetails */}
              <path
                d="M 130 220 Q 240 210 350 220"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-green)"
              />
              <text
                x="240"
                y="205"
                textAnchor="middle"
                className="fill-green-600 text-xs font-medium"
              >
                5. viewShopDetails(shopId)
              </text>

              {/* 6. getShopWithProducts */}
              <path
                d="M 350 250 Q 460 240 570 250"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-blue)"
              />
              <text
                x="460"
                y="235"
                textAnchor="middle"
                className="fill-blue-600 text-xs font-medium"
              >
                6. getShopWithProducts()
              </text>

              {/* 7. returnShopData */}
              <path
                d="M 570 280 Q 460 270 350 280"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-purple)"
              />
              <text
                x="460"
                y="265"
                textAnchor="middle"
                className="fill-purple-600 text-xs font-medium"
              >
                7. returnShopData()
              </text>

              {/* 8. renderShopPage */}
              <path
                d="M 350 310 Q 240 300 130 310"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-blue)"
              />
              <text
                x="240"
                y="295"
                textAnchor="middle"
                className="fill-blue-600 text-xs font-medium"
              >
                8. renderShopPage()
              </text>

              {/* 9. addToCart */}
              <path
                d="M 130 340 Q 240 330 350 340"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-green)"
              />
              <text
                x="240"
                y="325"
                textAnchor="middle"
                className="fill-green-600 text-xs font-medium"
              >
                9. addToCart(productId, qty)
              </text>

              {/* 10. initiateCheckout */}
              <path
                d="M 130 370 Q 240 360 350 370"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-green)"
              />
              <text
                x="240"
                y="355"
                textAnchor="middle"
                className="fill-green-600 text-xs font-medium"
              >
                10. initiateCheckout()
              </text>

              {/* 11. createOrder */}
              <path
                d="M 350 400 Q 460 390 570 400"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-blue)"
              />
              <text
                x="460"
                y="385"
                textAnchor="middle"
                className="fill-blue-600 text-xs font-medium"
              >
                11. createOrder(cartData)
              </text>

              {/* 12. processPayment */}
              <path
                d="M 350 430 Q 570 420 790 430"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-blue)"
              />
              <text
                x="570"
                y="415"
                textAnchor="middle"
                className="fill-blue-600 text-xs font-medium"
              >
                12. processPayment(amount)
              </text>

              {/* 13. paymentConfirmed */}
              <path
                d="M 790 460 Q 570 450 350 460"
                stroke="#F97316"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-orange)"
              />
              <text
                x="570"
                y="445"
                textAnchor="middle"
                className="fill-orange-600 text-xs font-medium"
              >
                13. paymentConfirmed()
              </text>

              {/* 14. updateStockLevels */}
              <path
                d="M 350 490 Q 460 480 570 490"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-blue)"
              />
              <text
                x="460"
                y="475"
                textAnchor="middle"
                className="fill-blue-600 text-xs font-medium"
              >
                14. updateStockLevels()
              </text>

              {/* 15. sendOrderNotification */}
              <path
                d="M 350 520 Q 680 510 1010 520"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-blue)"
              />
              <text
                x="680"
                y="505"
                textAnchor="middle"
                className="fill-blue-600 text-xs font-medium"
              >
                15. sendOrderNotification()
              </text>

              {/* 16. displayOrderConfirmation */}
              <path
                d="M 350 550 Q 240 540 130 550"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq2-arrow-blue)"
              />
              <text
                x="240"
                y="535"
                textAnchor="middle"
                className="fill-blue-600 text-xs font-medium"
              >
                16. displayOrderConfirmation()
              </text>

              {/* Activation boxes */}
              <rect
                x="345"
                y="100"
                width="10"
                height="460"
                fill="#3B82F6"
                opacity="0.2"
              />
              <rect
                x="565"
                y="130"
                width="10"
                height="360"
                fill="#8B5CF6"
                opacity="0.2"
              />
              <rect
                x="785"
                y="430"
                width="10"
                height="30"
                fill="#F97316"
                opacity="0.2"
              />
              <rect
                x="1005"
                y="520"
                width="10"
                height="20"
                fill="#EF4444"
                opacity="0.2"
              />
            </svg>
          </div>
        </div>

        {/* Sequence Diagram 3: Data Synchronization */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center">
              <RefreshCw className="h-6 w-6 mr-2 text-slate-600" />
              Offline-to-Online Data Synchronization
            </h2>
            <p className="text-slate-600">
              Sequence of events when offline shop data syncs with cloud when
              connectivity is restored
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6 overflow-x-auto">
            <svg
              viewBox="0 0 1200 550"
              className="w-full min-w-max h-auto"
              preserveAspectRatio="xMidYMid meet"
              style={{ minHeight: "450px" }}
            >
              <defs>
                <marker
                  id="seq3-arrow-blue"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#3B82F6" />
                </marker>
                <marker
                  id="seq3-arrow-green"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#10B981" />
                </marker>
                <marker
                  id="seq3-arrow-purple"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#8B5CF6" />
                </marker>
                <marker
                  id="seq3-arrow-orange"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#F97316" />
                </marker>
              </defs>

              {/* Actor headers */}
              <g id="seq3-actor-headers">
                <rect
                  x="60"
                  y="20"
                  width="100"
                  height="40"
                  fill="#3B82F6"
                  rx="4"
                />
                <text
                  x="110"
                  y="45"
                  textAnchor="middle"
                  className="fill-white text-sm font-bold"
                >
                  Shop App
                </text>

                <rect
                  x="260"
                  y="20"
                  width="120"
                  height="40"
                  fill="#10B981"
                  rx="4"
                />
                <text
                  x="320"
                  y="45"
                  textAnchor="middle"
                  className="fill-white text-sm font-bold"
                >
                  Sync Manager
                </text>

                <rect
                  x="500"
                  y="20"
                  width="100"
                  height="40"
                  fill="#8B5CF6"
                  rx="4"
                />
                <text
                  x="550"
                  y="45"
                  textAnchor="middle"
                  className="fill-white text-sm font-bold"
                >
                  Cloud API
                </text>

                <rect
                  x="700"
                  y="20"
                  width="100"
                  height="40"
                  fill="#F97316"
                  rx="4"
                />
                <text
                  x="750"
                  y="45"
                  textAnchor="middle"
                  className="fill-white text-sm font-bold"
                >
                  Cloud DB
                </text>
              </g>

              {/* Lifelines (dashed vertical lines) */}
              <g
                id="seq3-lifelines"
                stroke="#9CA3AF"
                strokeDasharray="5,5"
                strokeWidth="1.5"
              >
                <line x1="110" y1="60" x2="110" y2="520" />
                <line x1="320" y1="60" x2="320" y2="520" />
                <line x1="550" y1="60" x2="550" y2="520" />
                <line x1="750" y1="60" x2="750" y2="520" />
              </g>

              {/* Sequence Messages */}
              {/* 1. networkRestored */}
              <path
                d="M 110 90 Q 215 80 320 90"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-blue)"
              />
              <text
                x="215"
                y="75"
                textAnchor="middle"
                className="fill-blue-600 text-xs font-medium"
              >
                1. networkRestored()
              </text>

              {/* 2. getPendingChanges */}
              <path
                d="M 320 120 Q 215 110 110 120"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-green)"
              />
              <text
                x="215"
                y="105"
                textAnchor="middle"
                className="fill-green-600 text-xs font-medium"
              >
                2. getPendingChanges()
              </text>

              {/* 3. returnChangeQueue */}
              <path
                d="M 110 150 Q 215 140 320 150"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-blue)"
              />
              <text
                x="215"
                y="135"
                textAnchor="middle"
                className="fill-blue-600 text-xs font-medium"
              >
                3. returnChangeQueue()
              </text>

              {/* 4. initiateSync */}
              <path
                d="M 320 180 Q 435 170 550 180"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-green)"
              />
              <text
                x="435"
                y="165"
                textAnchor="middle"
                className="fill-green-600 text-xs font-medium"
              >
                4. initiateSync(changes)
              </text>

              {/* 5. authenticateShop */}
              <path
                d="M 550 210 Q 650 200 750 210"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-purple)"
              />
              <text
                x="650"
                y="195"
                textAnchor="middle"
                className="fill-purple-600 text-xs font-medium"
              >
                5. authenticateShop()
              </text>

              {/* 6. authToken */}
              <path
                d="M 750 240 Q 650 230 550 240"
                stroke="#F97316"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-orange)"
              />
              <text
                x="650"
                y="225"
                textAnchor="middle"
                className="fill-orange-600 text-xs font-medium"
              >
                6. authToken()
              </text>

              {/* 7. syncProducts */}
              <path
                d="M 550 270 Q 650 260 750 270"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-purple)"
              />
              <text
                x="650"
                y="255"
                textAnchor="middle"
                className="fill-purple-600 text-xs font-medium"
              >
                7. syncProducts(changes)
              </text>

              {/* 8. updateProductRecords */}
              <path
                d="M 750 300 Q 650 290 550 300"
                stroke="#F97316"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-orange)"
              />
              <text
                x="650"
                y="285"
                textAnchor="middle"
                className="fill-orange-600 text-xs font-medium"
              >
                8. updateProductRecords()
              </text>

              {/* 9. syncOrders */}
              <path
                d="M 550 330 Q 650 320 750 330"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-purple)"
              />
              <text
                x="650"
                y="315"
                textAnchor="middle"
                className="fill-purple-600 text-xs font-medium"
              >
                9. syncOrders(changes)
              </text>

              {/* 10. updateOrderRecords */}
              <path
                d="M 750 360 Q 650 350 550 360"
                stroke="#F97316"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-orange)"
              />
              <text
                x="650"
                y="345"
                textAnchor="middle"
                className="fill-orange-600 text-xs font-medium"
              >
                10. updateOrderRecords()
              </text>

              {/* 11. syncCompleted */}
              <path
                d="M 550 390 Q 435 380 320 390"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-purple)"
              />
              <text
                x="435"
                y="375"
                textAnchor="middle"
                className="fill-purple-600 text-xs font-medium"
              >
                11. syncCompleted()
              </text>

              {/* 12. markChangesSynced */}
              <path
                d="M 320 420 Q 215 410 110 420"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-green)"
              />
              <text
                x="215"
                y="405"
                textAnchor="middle"
                className="fill-green-600 text-xs font-medium"
              >
                12. markChangesSynced()
              </text>

              {/* 13. displaySyncStatus */}
              <path
                d="M 320 450 Q 215 440 110 450"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#seq3-arrow-green)"
              />
              <text
                x="215"
                y="435"
                textAnchor="middle"
                className="fill-green-600 text-xs font-medium"
              >
                13. displaySyncStatus()
              </text>

              {/* Activation boxes */}
              <rect
                x="315"
                y="90"
                width="10"
                height="370"
                fill="#10B981"
                opacity="0.2"
              />
              <rect
                x="545"
                y="180"
                width="10"
                height="210"
                fill="#8B5CF6"
                opacity="0.2"
              />
              <rect
                x="745"
                y="210"
                width="10"
                height="150"
                fill="#F97316"
                opacity="0.2"
              />
            </svg>
          </div>
        </div>

        {/* Sequence Diagram Explanations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Message Types */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
              <ArrowRight className="h-5 w-5 mr-2 text-amber-600" />
              Message Types & Notation
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 mr-3 shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Synchronous Messages
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Solid arrows with filled heads - caller waits for response
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-3 shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Return Messages
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Dashed arrows - responses to synchronous calls
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Activation Bars
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Rectangles on lifelines showing object activity periods
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-3 shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Lifelines</h4>
                  <p className="text-slate-700 text-sm">
                    Vertical dashed lines representing object existence over
                    time
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Scenarios */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-slate-600" />
              Critical System Scenarios
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-blue-900">
                  Shop Registration
                </h4>
                <p className="text-blue-800 text-sm">
                  Complete onboarding flow from registration to marketplace
                  visibility
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-900">Purchase Flow</h4>
                <p className="text-green-800 text-sm">
                  End-to-end buyer journey from search to order confirmation
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-purple-900">
                  Data Synchronization
                </h4>
                <p className="text-purple-800 text-sm">
                  Offline-to-online data sync ensuring data consistency
                </p>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-orange-900">
                  Payment Processing
                </h4>
                <p className="text-orange-800 text-sm">
                  Secure payment flow with external gateway integration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-linear-to-r from-slate-100 to-slate-200 border border-slate-300 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-slate-600" />
            Sequence Diagram Performance Metrics
          </h3>
          <p className="text-slate-700 mb-4">
            Key timing and performance requirements for critical system
            interactions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">&lt; 2s</div>
              <div className="text-sm text-slate-600">Product Search</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">&lt; 5s</div>
              <div className="text-sm text-slate-600">Payment Processing</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">&lt; 30s</div>
              <div className="text-sm text-slate-600">Data Synchronization</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600">&lt; 1s</div>
              <div className="text-sm text-slate-600">Local Operations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
