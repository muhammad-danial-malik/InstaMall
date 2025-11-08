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
      <div className="max-w-4xl mx-auto px-6 py-12">
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

          <div className="relative bg-slate-50 border-2 border-slate-200 rounded-lg p-6 min-h-[600px]">
            {/* Lifelines */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex justify-between w-full max-w-4xl">
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-blue-500 border-2 border-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">
                    Shop Owner
                  </span>
                </div>
                <div className="w-0.5 h-[500px] bg-slate-400"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-green-500 border-2 border-green-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">Web App</span>
                </div>
                <div className="w-0.5 h-[500px] bg-slate-400"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-purple-500 border-2 border-purple-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">
                    API Server
                  </span>
                </div>
                <div className="w-0.5 h-[500px] bg-slate-400"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-orange-500 border-2 border-orange-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">Database</span>
                </div>
                <div className="w-0.5 h-[500px] bg-slate-400"></div>
              </div>
            </div>

            {/* Sequence Messages */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Message 1: Access Registration */}
              <line
                x1="120"
                y1="120"
                x2="280"
                y2="120"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="200"
                y="115"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                1. accessRegistration()
              </text>

              {/* Message 2: Show Registration Form */}
              <line
                x1="280"
                y1="140"
                x2="120"
                y2="140"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <text
                x="200"
                y="135"
                textAnchor="middle"
                className="text-xs fill-green-600 font-medium"
              >
                2. displayForm()
              </text>

              {/* Message 3: Submit Registration */}
              <line
                x1="120"
                y1="160"
                x2="280"
                y2="160"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="200"
                y="155"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                3. submitRegistration(data)
              </text>

              {/* Message 4: Validate Data */}
              <line
                x1="280"
                y1="180"
                x2="360"
                y2="180"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <text
                x="320"
                y="175"
                textAnchor="middle"
                className="text-xs fill-green-600 font-medium"
              >
                4. validateShopData()
              </text>

              {/* Message 5: Create Shop */}
              <line
                x1="360"
                y1="200"
                x2="440"
                y2="200"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <text
                x="400"
                y="195"
                textAnchor="middle"
                className="text-xs fill-purple-600 font-medium"
              >
                5. createShop()
              </text>

              {/* Message 6: Store Shop Data */}
              <line
                x1="440"
                y1="220"
                x2="360"
                y2="220"
                stroke="#F97316"
                strokeWidth="2"
                markerEnd="url(#arrow-orange)"
              />
              <text
                x="400"
                y="215"
                textAnchor="middle"
                className="text-xs fill-orange-600 font-medium"
              >
                6. insertShopRecord()
              </text>

              {/* Message 7: Generate Subscription */}
              <line
                x1="360"
                y1="240"
                x2="440"
                y2="240"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <text
                x="400"
                y="235"
                textAnchor="middle"
                className="text-xs fill-purple-600 font-medium"
              >
                7. createSubscription()
              </text>

              {/* Message 8: Store Subscription */}
              <line
                x1="440"
                y1="260"
                x2="360"
                y2="260"
                stroke="#F97316"
                strokeWidth="2"
                markerEnd="url(#arrow-orange)"
              />
              <text
                x="400"
                y="255"
                textAnchor="middle"
                className="text-xs fill-orange-600 font-medium"
              >
                8. insertSubscription()
              </text>

              {/* Message 9: Send Confirmation */}
              <line
                x1="360"
                y1="280"
                x2="280"
                y2="280"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <text
                x="320"
                y="275"
                textAnchor="middle"
                className="text-xs fill-purple-600 font-medium"
              >
                9. sendConfirmation()
              </text>

              {/* Message 10: Show Success */}
              <line
                x1="280"
                y1="300"
                x2="120"
                y2="300"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <text
                x="200"
                y="295"
                textAnchor="middle"
                className="text-xs fill-green-600 font-medium"
              >
                10. displaySuccess()
              </text>

              {/* Activation bars */}
              <rect
                x="275"
                y="120"
                width="10"
                height="20"
                fill="#10B981"
                opacity="0.3"
              />
              <rect
                x="355"
                y="180"
                width="10"
                height="120"
                fill="#8B5CF6"
                opacity="0.3"
              />
              <rect
                x="435"
                y="200"
                width="10"
                height="80"
                fill="#F97316"
                opacity="0.3"
              />

              {/* Arrow markers */}
              <defs>
                <marker
                  id="arrow-blue"
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
                  id="arrow-green"
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
                  id="arrow-purple"
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
                  id="arrow-orange"
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

          <div className="relative bg-slate-50 border-2 border-slate-200 rounded-lg p-6 min-h-[700px]">
            {/* Lifelines */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex justify-between w-full max-w-5xl">
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-green-500 border-2 border-green-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">
                    Buyer App
                  </span>
                </div>
                <div className="w-0.5 h-[600px] bg-slate-400"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-blue-500 border-2 border-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">
                    API Server
                  </span>
                </div>
                <div className="w-0.5 h-[600px] bg-slate-400"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-purple-500 border-2 border-purple-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">Database</span>
                </div>
                <div className="w-0.5 h-[600px] bg-slate-400"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-orange-500 border-2 border-orange-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">
                    Payment GW
                  </span>
                </div>
                <div className="w-0.5 h-[600px] bg-slate-400"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-red-500 border-2 border-red-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">Shop App</span>
                </div>
                <div className="w-0.5 h-[600px] bg-slate-400"></div>
              </div>
            </div>

            {/* Sequence Messages */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Message 1: Search Products */}
              <line
                x1="80"
                y1="120"
                x2="200"
                y2="120"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <text
                x="140"
                y="115"
                textAnchor="middle"
                className="text-xs fill-green-600 font-medium"
              >
                1. searchProducts(query)
              </text>

              {/* Message 2: Query Database */}
              <line
                x1="200"
                y1="140"
                x2="320"
                y2="140"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="260"
                y="135"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                2. findSubscribedShops()
              </text>

              {/* Message 3: Return Results */}
              <line
                x1="320"
                y1="160"
                x2="200"
                y2="160"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <text
                x="260"
                y="155"
                textAnchor="middle"
                className="text-xs fill-purple-600 font-medium"
              >
                3. returnShopList()
              </text>

              {/* Message 4: Display Results */}
              <line
                x1="200"
                y1="180"
                x2="80"
                y2="180"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="140"
                y="175"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                4. showSearchResults()
              </text>

              {/* Message 5: Select Shop */}
              <line
                x1="80"
                y1="200"
                x2="200"
                y2="200"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <text
                x="140"
                y="195"
                textAnchor="middle"
                className="text-xs fill-green-600 font-medium"
              >
                5. viewShopDetails(shopId)
              </text>

              {/* Message 6: Get Shop Data */}
              <line
                x1="200"
                y1="220"
                x2="320"
                y2="220"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="260"
                y="215"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                6. getShopWithProducts()
              </text>

              {/* Message 7: Return Shop Data */}
              <line
                x1="320"
                y1="240"
                x2="200"
                y2="240"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <text
                x="260"
                y="235"
                textAnchor="middle"
                className="text-xs fill-purple-600 font-medium"
              >
                7. returnShopData()
              </text>

              {/* Message 8: Display Shop */}
              <line
                x1="200"
                y1="260"
                x2="80"
                y2="260"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="140"
                y="255"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                8. renderShopPage()
              </text>

              {/* Message 9: Add to Cart */}
              <line
                x1="80"
                y1="280"
                x2="200"
                y2="280"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <text
                x="140"
                y="275"
                textAnchor="middle"
                className="text-xs fill-green-600 font-medium"
              >
                9. addToCart(productId, qty)
              </text>

              {/* Message 10: Checkout */}
              <line
                x1="80"
                y1="300"
                x2="200"
                y2="300"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <text
                x="140"
                y="295"
                textAnchor="middle"
                className="text-xs fill-green-600 font-medium"
              >
                10. initiateCheckout()
              </text>

              {/* Message 11: Create Order */}
              <line
                x1="200"
                y1="320"
                x2="320"
                y2="320"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="260"
                y="315"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                11. createOrder(cartData)
              </text>

              {/* Message 12: Process Payment */}
              <line
                x1="200"
                y1="340"
                x2="400"
                y2="340"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="300"
                y="335"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                12. processPayment(amount)
              </text>

              {/* Message 13: Payment Success */}
              <line
                x1="400"
                y1="360"
                x2="200"
                y2="360"
                stroke="#F97316"
                strokeWidth="2"
                markerEnd="url(#arrow-orange)"
              />
              <text
                x="300"
                y="355"
                textAnchor="middle"
                className="text-xs fill-orange-600 font-medium"
              >
                13. paymentConfirmed()
              </text>

              {/* Message 14: Update Inventory */}
              <line
                x1="200"
                y1="380"
                x2="320"
                y2="380"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="260"
                y="375"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                14. updateStockLevels()
              </text>

              {/* Message 15: Notify Shop */}
              <line
                x1="200"
                y1="400"
                x2="480"
                y2="400"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="340"
                y="395"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                15. sendOrderNotification()
              </text>

              {/* Message 16: Show Confirmation */}
              <line
                x1="200"
                y1="420"
                x2="80"
                y2="420"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="140"
                y="415"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                16. displayOrderConfirmation()
              </text>

              {/* Activation bars */}
              <rect
                x="195"
                y="120"
                width="10"
                height="320"
                fill="#3B82F6"
                opacity="0.3"
              />
              <rect
                x="315"
                y="140"
                width="10"
                height="120"
                fill="#8B5CF6"
                opacity="0.3"
              />
              <rect
                x="395"
                y="340"
                width="10"
                height="40"
                fill="#F97316"
                opacity="0.3"
              />

              {/* Arrow markers */}
              <defs>
                <marker
                  id="arrow-green"
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
                  id="arrow-blue"
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
                  id="arrow-purple"
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
                  id="arrow-orange"
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

          <div className="relative bg-slate-50 border-2 border-slate-200 rounded-lg p-6 min-h-[500px]">
            {/* Lifelines */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex justify-between w-full max-w-4xl">
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-blue-500 border-2 border-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">Shop App</span>
                </div>
                <div className="w-0.5 h-[400px] bg-slate-400"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-green-500 border-2 border-green-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">
                    Sync Manager
                  </span>
                </div>
                <div className="w-0.5 h-[400px] bg-slate-400"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-purple-500 border-2 border-purple-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">
                    Cloud API
                  </span>
                </div>
                <div className="w-0.5 h-[400px] bg-slate-400"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-orange-500 border-2 border-orange-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">Cloud DB</span>
                </div>
                <div className="w-0.5 h-[400px] bg-slate-400"></div>
              </div>
            </div>

            {/* Sequence Messages */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Message 1: Network Restored */}
              <line
                x1="120"
                y1="120"
                x2="240"
                y2="120"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="180"
                y="115"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                1. networkRestored()
              </text>

              {/* Message 2: Check Pending Changes */}
              <line
                x1="240"
                y1="140"
                x2="120"
                y2="140"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <text
                x="180"
                y="135"
                textAnchor="middle"
                className="text-xs fill-green-600 font-medium"
              >
                2. getPendingChanges()
              </text>

              {/* Message 3: Return Changes */}
              <line
                x1="120"
                y1="160"
                x2="240"
                y2="160"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <text
                x="180"
                y="155"
                textAnchor="middle"
                className="text-xs fill-blue-600 font-medium"
              >
                3. returnChangeQueue()
              </text>

              {/* Message 4: Start Sync */}
              <line
                x1="240"
                y1="180"
                x2="360"
                y2="180"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <text
                x="300"
                y="175"
                textAnchor="middle"
                className="text-xs fill-green-600 font-medium"
              >
                4. initiateSync(changes)
              </text>

              {/* Message 5: Authenticate */}
              <line
                x1="360"
                y1="200"
                x2="480"
                y2="200"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <text
                x="420"
                y="195"
                textAnchor="middle"
                className="text-xs fill-purple-600 font-medium"
              >
                5. authenticateShop()
              </text>

              {/* Message 6: Auth Success */}
              <line
                x1="480"
                y1="220"
                x2="360"
                y2="220"
                stroke="#F97316"
                strokeWidth="2"
                markerEnd="url(#arrow-orange)"
              />
              <text
                x="420"
                y="215"
                textAnchor="middle"
                className="text-xs fill-orange-600 font-medium"
              >
                6. authToken()
              </text>

              {/* Message 7: Sync Products */}
              <line
                x1="360"
                y1="240"
                x2="480"
                y2="240"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <text
                x="420"
                y="235"
                textAnchor="middle"
                className="text-xs fill-purple-600 font-medium"
              >
                7. syncProducts(changes)
              </text>

              {/* Message 8: Update Products */}
              <line
                x1="480"
                y1="260"
                x2="360"
                y2="260"
                stroke="#F97316"
                strokeWidth="2"
                markerEnd="url(#arrow-orange)"
              />
              <text
                x="420"
                y="255"
                textAnchor="middle"
                className="text-xs fill-orange-600 font-medium"
              >
                8. updateProductRecords()
              </text>

              {/* Message 9: Sync Orders */}
              <line
                x1="360"
                y1="280"
                x2="480"
                y2="280"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <text
                x="420"
                y="275"
                textAnchor="middle"
                className="text-xs fill-purple-600 font-medium"
              >
                9. syncOrders(changes)
              </text>

              {/* Message 10: Update Orders */}
              <line
                x1="480"
                y1="300"
                x2="360"
                y2="300"
                stroke="#F97316"
                strokeWidth="2"
                markerEnd="url(#arrow-orange)"
              />
              <text
                x="420"
                y="295"
                textAnchor="middle"
                className="text-xs fill-orange-600 font-medium"
              >
                10. updateOrderRecords()
              </text>

              {/* Message 11: Sync Complete */}
              <line
                x1="360"
                y1="320"
                x2="240"
                y2="320"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <text
                x="300"
                y="315"
                textAnchor="middle"
                className="text-xs fill-purple-600 font-medium"
              >
                11. syncCompleted()
              </text>

              {/* Message 12: Update Local Status */}
              <line
                x1="240"
                y1="340"
                x2="120"
                y2="340"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <text
                x="180"
                y="335"
                textAnchor="middle"
                className="text-xs fill-green-600 font-medium"
              >
                12. markChangesSynced()
              </text>

              {/* Message 13: Show Sync Status */}
              <line
                x1="240"
                y1="360"
                x2="120"
                y2="360"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <text
                x="180"
                y="355"
                textAnchor="middle"
                className="text-xs fill-green-600 font-medium"
              >
                13. displaySyncStatus()
              </text>

              {/* Activation bars */}
              <rect
                x="235"
                y="120"
                width="10"
                height="240"
                fill="#10B981"
                opacity="0.3"
              />
              <rect
                x="355"
                y="180"
                width="10"
                height="160"
                fill="#8B5CF6"
                opacity="0.3"
              />
              <rect
                x="475"
                y="200"
                width="10"
                height="120"
                fill="#F97316"
                opacity="0.3"
              />

              {/* Arrow markers */}
              <defs>
                <marker
                  id="arrow-blue"
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
                  id="arrow-green"
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
                  id="arrow-purple"
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
                  id="arrow-orange"
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
