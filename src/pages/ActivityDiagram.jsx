import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Activity } from "lucide-react";

export default function ActivityDiagram() {
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
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <Activity className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Activity Diagram
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                Workflow and process logic visualization
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Customer Purchase Flow */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-rose-500 rounded-full mr-3"></span>
              Customer Purchase Flow
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <svg viewBox="0 0 800 600" className="w-full h-auto">
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                  </marker>
                </defs>

                {/* Start */}
                <circle
                  cx="400"
                  cy="30"
                  r="20"
                  fill="#ef4444"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <text
                  x="400"
                  y="36"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-white"
                >
                  Start
                </text>

                {/* Browse Products */}
                <rect
                  x="350"
                  y="80"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="400"
                  y="102"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Browse Products
                </text>

                {/* Arrow */}
                <line
                  x1="400"
                  y1="50"
                  x2="400"
                  y2="80"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* Select Product */}
                <rect
                  x="350"
                  y="150"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="400"
                  y="172"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Select Product
                </text>

                {/* Arrow */}
                <line
                  x1="400"
                  y1="120"
                  x2="400"
                  y2="150"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* Add to Cart */}
                <rect
                  x="350"
                  y="220"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="400"
                  y="242"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Add to Cart
                </text>

                {/* Arrow */}
                <line
                  x1="400"
                  y1="190"
                  x2="400"
                  y2="220"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* Decision: Continue Shopping? */}
                <polygon
                  points="400,290 380,310 420,310"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="400"
                  y="305"
                  textAnchor="middle"
                  className="text-xs font-medium fill-slate-900"
                >
                  Continue
                </text>
                <text
                  x="400"
                  y="318"
                  textAnchor="middle"
                  className="text-xs font-medium fill-slate-900"
                >
                  Shopping?
                </text>

                {/* Arrow */}
                <line
                  x1="400"
                  y1="260"
                  x2="400"
                  y2="290"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* Yes - Back to Browse */}
                <line
                  x1="380"
                  y1="300"
                  x2="300"
                  y2="300"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <text
                  x="330"
                  y="295"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Yes
                </text>
                <line
                  x1="300"
                  y1="300"
                  x2="300"
                  y2="100"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <line
                  x1="300"
                  y1="100"
                  x2="350"
                  y2="100"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* No - Proceed to Checkout */}
                <line
                  x1="420"
                  y1="300"
                  x2="500"
                  y2="300"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <text
                  x="475"
                  y="295"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  No
                </text>

                {/* Checkout */}
                <rect
                  x="500"
                  y="320"
                  width="80"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="540"
                  y="342"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Checkout
                </text>

                {/* Arrow */}
                <line
                  x1="500"
                  y1="300"
                  x2="540"
                  y2="320"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* Payment */}
                <rect
                  x="500"
                  y="390"
                  width="80"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="540"
                  y="412"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Payment
                </text>

                {/* Arrow */}
                <line
                  x1="540"
                  y1="360"
                  x2="540"
                  y2="390"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* Decision: Payment Success? */}
                <polygon
                  points="540,470 520,490 560,490"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="540"
                  y="485"
                  textAnchor="middle"
                  className="text-xs font-medium fill-slate-900"
                >
                  Payment
                </text>
                <text
                  x="540"
                  y="498"
                  textAnchor="middle"
                  className="text-xs font-medium fill-slate-900"
                >
                  Success?
                </text>

                {/* Arrow */}
                <line
                  x1="540"
                  y1="430"
                  x2="540"
                  y2="470"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* Yes - Order Confirmation */}
                <line
                  x1="520"
                  y1="480"
                  x2="440"
                  y2="480"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <text
                  x="470"
                  y="475"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Yes
                </text>

                <rect
                  x="380"
                  y="500"
                  width="120"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#dcfce7"
                  stroke="#22c55e"
                  strokeWidth="2"
                />
                <text
                  x="440"
                  y="522"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Order Confirmation
                </text>

                {/* Arrow */}
                <line
                  x1="440"
                  y1="480"
                  x2="440"
                  y2="500"
                  stroke="#22c55e"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* End */}
                <circle
                  cx="440"
                  cy="570"
                  r="20"
                  fill="#22c55e"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
                <text
                  x="440"
                  y="576"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-white"
                >
                  End
                </text>

                {/* Arrow */}
                <line
                  x1="440"
                  y1="540"
                  x2="440"
                  y2="570"
                  stroke="#22c55e"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* No - Payment Failed */}
                <line
                  x1="560"
                  y1="480"
                  x2="640"
                  y2="480"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <text
                  x="610"
                  y="475"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  No
                </text>

                <rect
                  x="620"
                  y="500"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="670"
                  y="522"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Retry Payment
                </text>

                {/* Arrow back to Payment */}
                <line
                  x1="670"
                  y1="540"
                  x2="670"
                  y2="560"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <line
                  x1="670"
                  y1="560"
                  x2="580"
                  y2="560"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <line
                  x1="580"
                  y1="560"
                  x2="580"
                  y2="430"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <line
                  x1="580"
                  y1="430"
                  x2="540"
                  y2="430"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>
          </div>

          {/* Order Processing Flow */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Order Processing Flow
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <svg viewBox="0 0 800 500" className="w-full h-auto">
                <defs>
                  <marker
                    id="arrowhead-blue"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                  </marker>
                </defs>

                {/* Order Received */}
                <rect
                  x="350"
                  y="30"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#eff6ff"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="400"
                  y="52"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Order Received
                </text>

                {/* Payment Verification */}
                <rect
                  x="350"
                  y="100"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#eff6ff"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="400"
                  y="115"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Payment
                </text>
                <text
                  x="400"
                  y="128"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Verification
                </text>

                {/* Arrow */}
                <line
                  x1="400"
                  y1="70"
                  x2="400"
                  y2="100"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-blue)"
                />

                {/* Decision: Payment Valid? */}
                <polygon
                  points="400,170 380,190 420,190"
                  fill="#eff6ff"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="400"
                  y="185"
                  textAnchor="middle"
                  className="text-xs font-medium fill-slate-900"
                >
                  Payment
                </text>
                <text
                  x="400"
                  y="198"
                  textAnchor="middle"
                  className="text-xs font-medium fill-slate-900"
                >
                  Valid?
                </text>

                {/* Arrow */}
                <line
                  x1="400"
                  y1="140"
                  x2="400"
                  y2="170"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-blue)"
                />

                {/* Yes - Inventory Check */}
                <line
                  x1="380"
                  y1="180"
                  x2="300"
                  y2="180"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-blue)"
                />
                <text
                  x="330"
                  y="175"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Yes
                </text>

                <rect
                  x="240"
                  y="200"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#eff6ff"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="290"
                  y="215"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Inventory
                </text>
                <text
                  x="290"
                  y="228"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Check
                </text>

                {/* Arrow */}
                <line
                  x1="290"
                  y1="180"
                  x2="290"
                  y2="200"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-blue)"
                />

                {/* Decision: Stock Available? */}
                <polygon
                  points="290,280 270,300 310,300"
                  fill="#eff6ff"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="290"
                  y="295"
                  textAnchor="middle"
                  className="text-xs font-medium fill-slate-900"
                >
                  Stock
                </text>
                <text
                  x="290"
                  y="308"
                  textAnchor="middle"
                  className="text-xs font-medium fill-slate-900"
                >
                  Available?
                </text>

                {/* Arrow */}
                <line
                  x1="290"
                  y1="240"
                  x2="290"
                  y2="280"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-blue)"
                />

                {/* Yes - Prepare Shipment */}
                <line
                  x1="270"
                  y1="290"
                  x2="190"
                  y2="290"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-blue)"
                />
                <text
                  x="220"
                  y="285"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Yes
                </text>

                <rect
                  x="130"
                  y="310"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#eff6ff"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="180"
                  y="325"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Prepare
                </text>
                <text
                  x="180"
                  y="338"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Shipment
                </text>

                {/* Arrow */}
                <line
                  x1="180"
                  y1="290"
                  x2="180"
                  y2="310"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-blue)"
                />

                {/* Ship Order */}
                <rect
                  x="130"
                  y="380"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#eff6ff"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="180"
                  y="395"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Ship Order
                </text>

                {/* Arrow */}
                <line
                  x1="180"
                  y1="350"
                  x2="180"
                  y2="380"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-blue)"
                />

                {/* Delivery */}
                <rect
                  x="130"
                  y="450"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#dcfce7"
                  stroke="#22c55e"
                  strokeWidth="2"
                />
                <text
                  x="180"
                  y="465"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Delivered
                </text>

                {/* Arrow */}
                <line
                  x1="180"
                  y1="420"
                  x2="180"
                  y2="450"
                  stroke="#22c55e"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* No - Backorder */}
                <line
                  x1="310"
                  y1="290"
                  x2="390"
                  y2="290"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-blue)"
                />
                <text
                  x="360"
                  y="285"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  No
                </text>

                <rect
                  x="350"
                  y="310"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
                <text
                  x="400"
                  y="325"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Backorder
                </text>
                <text
                  x="400"
                  y="338"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Item
                </text>

                {/* Arrow */}
                <line
                  x1="400"
                  y1="290"
                  x2="400"
                  y2="310"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* Notify Customer */}
                <rect
                  x="350"
                  y="380"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
                <text
                  x="400"
                  y="395"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Notify
                </text>
                <text
                  x="400"
                  y="408"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Customer
                </text>

                {/* Arrow */}
                <line
                  x1="400"
                  y1="350"
                  x2="400"
                  y2="380"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* No - Cancel Order */}
                <line
                  x1="420"
                  y1="180"
                  x2="500"
                  y2="180"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-blue)"
                />
                <text
                  x="470"
                  y="175"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  No
                </text>

                <rect
                  x="460"
                  y="200"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="510"
                  y="215"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Cancel
                </text>
                <text
                  x="510"
                  y="228"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Order
                </text>

                {/* Arrow */}
                <line
                  x1="510"
                  y1="180"
                  x2="510"
                  y2="200"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* Refund */}
                <rect
                  x="460"
                  y="280"
                  width="100"
                  height="40"
                  rx="20"
                  ry="20"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="510"
                  y="295"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Process
                </text>
                <text
                  x="510"
                  y="308"
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  Refund
                </text>

                {/* Arrow */}
                <line
                  x1="510"
                  y1="240"
                  x2="510"
                  y2="280"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>
          </div>

          {/* Summary Metrics */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Activity Diagram Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                <h3 className="font-semibold text-rose-900 mb-2">
                  Customer Flow
                </h3>
                <p className="text-rose-800 text-sm">
                  6 main activities, 2 decision points, 3 possible paths
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Order Processing
                </h3>
                <p className="text-blue-800 text-sm">
                  7 activities, 3 decision points, parallel processing
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">
                  Success Metrics
                </h3>
                <p className="text-green-800 text-sm">
                  95% successful payments, 98% on-time delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
