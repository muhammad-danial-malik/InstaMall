import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Database, Store, CreditCard, Truck, User } from "lucide-react";

export default function DataFlowDiagram() {
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
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <Database className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Data Flow Diagram (DFD)
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                Data movement through the system
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Level 0 DFD - Context Diagram */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span>
              Level 0 DFD - Context Diagram
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <svg viewBox="0 0 800 500" className="w-full h-auto">
                <defs>
                  <marker
                    id="arrowhead-indigo"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
                  </marker>
                </defs>

                {/* External Entities */}
                {/* Customer */}
                <rect
                  x="50"
                  y="200"
                  width="80"
                  height="60"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="90"
                  y="225"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Customer
                </text>
                <text
                  x="90"
                  y="240"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  User
                </text>

                {/* Vendor */}
                <rect
                  x="670"
                  y="200"
                  width="80"
                  height="60"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="710"
                  y="225"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Vendor
                </text>
                <text
                  x="710"
                  y="240"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Store
                </text>

                {/* Payment Gateway */}
                <rect
                  x="360"
                  y="50"
                  width="80"
                  height="60"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="400"
                  y="70"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Payment
                </text>
                <text
                  x="400"
                  y="83"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Gateway
                </text>
                <text
                  x="400"
                  y="98"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Card
                </text>

                {/* Shipping Service */}
                <rect
                  x="360"
                  y="390"
                  width="80"
                  height="60"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="400"
                  y="410"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Shipping
                </text>
                <text
                  x="400"
                  y="423"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Service
                </text>
                <text
                  x="400"
                  y="438"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Truck
                </text>

                {/* Main Process - InstaMall System */}
                <circle
                  cx="400"
                  cy="250"
                  r="60"
                  fill="#e0e7ff"
                  stroke="#6366f1"
                  strokeWidth="3"
                />
                <text
                  x="400"
                  y="245"
                  textAnchor="middle"
                  className="text-sm font-bold fill-slate-900"
                >
                  InstaMall
                </text>
                <text
                  x="400"
                  y="258"
                  textAnchor="middle"
                  className="text-sm font-bold fill-slate-900"
                >
                  System
                </text>
                <text
                  x="400"
                  y="275"
                  textAnchor="middle"
                  className="text-xs fill-indigo-600"
                >
                  0
                </text>

                {/* Data Flows */}
                {/* Customer to System */}
                <line
                  x1="130"
                  y1="230"
                  x2="340"
                  y2="230"
                  stroke="#6366f1"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-indigo)"
                />
                <text
                  x="235"
                  y="225"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Order Request
                </text>

                {/* System to Customer */}
                <line
                  x1="340"
                  y1="270"
                  x2="130"
                  y2="270"
                  stroke="#6366f1"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-indigo)"
                />
                <text
                  x="235"
                  y="275"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Order Confirmation
                </text>

                {/* Payment Gateway to System */}
                <line
                  x1="400"
                  y1="110"
                  x2="400"
                  y2="190"
                  stroke="#6366f1"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-indigo)"
                />
                <text
                  x="410"
                  y="155"
                  textAnchor="start"
                  className="text-xs fill-slate-700"
                >
                  Payment Info
                </text>

                {/* System to Payment Gateway */}
                <line
                  x1="400"
                  y1="310"
                  x2="400"
                  y2="390"
                  stroke="#6366f1"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-indigo)"
                />
                <text
                  x="410"
                  y="355"
                  textAnchor="start"
                  className="text-xs fill-slate-700"
                >
                  Payment Status
                </text>

                {/* System to Vendor */}
                <line
                  x1="460"
                  y1="250"
                  x2="670"
                  y2="250"
                  stroke="#6366f1"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-indigo)"
                />
                <text
                  x="565"
                  y="245"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Product Data
                </text>

                {/* Vendor to System */}
                <line
                  x1="670"
                  y1="290"
                  x2="460"
                  y2="290"
                  stroke="#6366f1"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-indigo)"
                />
                <text
                  x="565"
                  y="295"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Inventory Update
                </text>

                {/* System to Shipping */}
                <line
                  x1="400"
                  y1="310"
                  x2="400"
                  y2="390"
                  stroke="#6366f1"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-indigo)"
                />
                <text
                  x="380"
                  y="355"
                  textAnchor="end"
                  className="text-xs fill-slate-700"
                >
                  Shipping Request
                </text>

                {/* Shipping to System */}
                <line
                  x1="400"
                  y1="390"
                  x2="400"
                  y2="310"
                  stroke="#6366f1"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-indigo)"
                />
                <text
                  x="380"
                  y="355"
                  textAnchor="end"
                  className="text-xs fill-slate-700"
                >
                  Tracking Info
                </text>
              </svg>
            </div>
          </div>

          {/* Level 1 DFD - Detailed Processes */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
              Level 1 DFD - Detailed Processes
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <svg viewBox="0 0 800 600" className="w-full h-auto">
                <defs>
                  <marker
                    id="arrowhead-purple"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6" />
                  </marker>
                </defs>

                {/* External Entities */}
                <rect
                  x="20"
                  y="250"
                  width="80"
                  height="60"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="60"
                  y="275"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Customer
                </text>

                <rect
                  x="700"
                  y="250"
                  width="80"
                  height="60"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="740"
                  y="275"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Vendor
                </text>

                {/* Data Stores */}
                {/* Customer DB */}
                <rect
                  x="150"
                  y="50"
                  width="100"
                  height="60"
                  fill="#dbeafe"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="150"
                  y1="70"
                  x2="250"
                  y2="70"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="150"
                  y1="85"
                  x2="250"
                  y2="85"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="200"
                  y="68"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Customer DB
                </text>
                <text
                  x="200"
                  y="95"
                  textAnchor="middle"
                  className="text-xs fill-blue-600"
                >
                  D1
                </text>

                {/* Product DB */}
                <rect
                  x="150"
                  y="500"
                  width="100"
                  height="60"
                  fill="#dbeafe"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="150"
                  y1="520"
                  x2="250"
                  y2="520"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="150"
                  y1="535"
                  x2="250"
                  y2="535"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="200"
                  y="518"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Product DB
                </text>
                <text
                  x="200"
                  y="545"
                  textAnchor="middle"
                  className="text-xs fill-blue-600"
                >
                  D2
                </text>

                {/* Order DB */}
                <rect
                  x="550"
                  y="50"
                  width="100"
                  height="60"
                  fill="#dbeafe"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="550"
                  y1="70"
                  x2="650"
                  y2="70"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="550"
                  y1="85"
                  x2="650"
                  y2="85"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="600"
                  y="68"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Order DB
                </text>
                <text
                  x="600"
                  y="95"
                  textAnchor="middle"
                  className="text-xs fill-blue-600"
                >
                  D3
                </text>

                {/* Payment DB */}
                <rect
                  x="550"
                  y="500"
                  width="100"
                  height="60"
                  fill="#dbeafe"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="550"
                  y1="520"
                  x2="650"
                  y2="520"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="550"
                  y1="535"
                  x2="650"
                  y2="535"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="600"
                  y="518"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-900"
                >
                  Payment DB
                </text>
                <text
                  x="600"
                  y="545"
                  textAnchor="middle"
                  className="text-xs fill-blue-600"
                >
                  D4
                </text>

                {/* Processes */}
                {/* Process 1 - User Registration */}
                <circle
                  cx="300"
                  cy="150"
                  r="35"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
                <text
                  x="300"
                  y="148"
                  textAnchor="middle"
                  className="text-xs font-bold fill-slate-900"
                >
                  Register
                </text>
                <text
                  x="300"
                  y="160"
                  textAnchor="middle"
                  className="text-xs font-bold fill-slate-900"
                >
                  User
                </text>
                <text
                  x="300"
                  y="175"
                  textAnchor="middle"
                  className="text-xs fill-amber-600"
                >
                  1
                </text>

                {/* Process 2 - Product Search */}
                <circle
                  cx="300"
                  cy="300"
                  r="35"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
                <text
                  x="300"
                  y="298"
                  textAnchor="middle"
                  className="text-xs font-bold fill-slate-900"
                >
                  Search
                </text>
                <text
                  x="300"
                  y="310"
                  textAnchor="middle"
                  className="text-xs font-bold fill-slate-900"
                >
                  Products
                </text>
                <text
                  x="300"
                  y="325"
                  textAnchor="middle"
                  className="text-xs fill-amber-600"
                >
                  2
                </text>

                {/* Process 3 - Process Order */}
                <circle
                  cx="500"
                  cy="200"
                  r="35"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
                <text
                  x="500"
                  y="198"
                  textAnchor="middle"
                  className="text-xs font-bold fill-slate-900"
                >
                  Process
                </text>
                <text
                  x="500"
                  y="210"
                  textAnchor="middle"
                  className="text-xs font-bold fill-slate-900"
                >
                  Order
                </text>
                <text
                  x="500"
                  y="225"
                  textAnchor="middle"
                  className="text-xs fill-amber-600"
                >
                  3
                </text>

                {/* Process 4 - Payment Processing */}
                <circle
                  cx="500"
                  cy="350"
                  r="35"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
                <text
                  x="500"
                  y="348"
                  textAnchor="middle"
                  className="text-xs font-bold fill-slate-900"
                >
                  Process
                </text>
                <text
                  x="500"
                  y="360"
                  textAnchor="middle"
                  className="text-xs font-bold fill-slate-900"
                >
                  Payment
                </text>
                <text
                  x="500"
                  y="375"
                  textAnchor="middle"
                  className="text-xs fill-amber-600"
                >
                  4
                </text>

                {/* Data Flows */}
                {/* Customer to Process 1 */}
                <line
                  x1="100"
                  y1="280"
                  x2="265"
                  y2="185"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="180"
                  y="235"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Registration Data
                </text>

                {/* Process 1 to Customer DB */}
                <line
                  x1="335"
                  y1="150"
                  x2="250"
                  y2="110"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="295"
                  y="125"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Store Customer
                </text>

                {/* Customer DB to Process 1 */}
                <line
                  x1="250"
                  y1="110"
                  x2="335"
                  y2="150"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="295"
                  y="135"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Customer Info
                </text>

                {/* Process 1 to Customer */}
                <line
                  x1="265"
                  y1="185"
                  x2="100"
                  y2="280"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="180"
                  y="235"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Confirmation
                </text>

                {/* Customer to Process 2 */}
                <line
                  x1="100"
                  y1="280"
                  x2="265"
                  y2="335"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="180"
                  y="315"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Search Query
                </text>

                {/* Process 2 to Product DB */}
                <line
                  x1="335"
                  y1="300"
                  x2="250"
                  y2="500"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="295"
                  y="405"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Query Products
                </text>

                {/* Product DB to Process 2 */}
                <line
                  x1="250"
                  y1="500"
                  x2="335"
                  y2="300"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="295"
                  y="405"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Product Results
                </text>

                {/* Process 2 to Customer */}
                <line
                  x1="265"
                  y1="335"
                  x2="100"
                  y2="280"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="180"
                  y="315"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Search Results
                </text>

                {/* Customer to Process 3 */}
                <line
                  x1="100"
                  y1="280"
                  x2="465"
                  y2="235"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="280"
                  y="255"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Order Details
                </text>

                {/* Process 3 to Order DB */}
                <line
                  x1="465"
                  y1="235"
                  x2="550"
                  y2="110"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="510"
                  y="170"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Store Order
                </text>

                {/* Order DB to Process 3 */}
                <line
                  x1="550"
                  y1="110"
                  x2="465"
                  y2="235"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="510"
                  y="170"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Order Status
                </text>

                {/* Process 3 to Process 4 */}
                <line
                  x1="500"
                  y1="235"
                  x2="500"
                  y2="315"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="510"
                  y="280"
                  textAnchor="start"
                  className="text-xs fill-slate-700"
                >
                  Payment Request
                </text>

                {/* Process 4 to Payment DB */}
                <line
                  x1="465"
                  y1="385"
                  x2="550"
                  y2="500"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="510"
                  y="450"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Store Payment
                </text>

                {/* Payment DB to Process 4 */}
                <line
                  x1="550"
                  y1="500"
                  x2="465"
                  y2="385"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="510"
                  y="450"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Payment Info
                </text>

                {/* Process 4 to Process 3 */}
                <line
                  x1="500"
                  y1="315"
                  x2="500"
                  y2="235"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="490"
                  y="280"
                  textAnchor="end"
                  className="text-xs fill-slate-700"
                >
                  Payment Status
                </text>

                {/* Process 3 to Customer */}
                <line
                  x1="465"
                  y1="235"
                  x2="100"
                  y2="280"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="280"
                  y="255"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Order Confirmation
                </text>

                {/* Vendor to Product DB */}
                <line
                  x1="700"
                  y1="280"
                  x2="650"
                  y2="500"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x="680"
                  y="395"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Product Updates
                </text>
              </svg>
            </div>
          </div>

          {/* DFD Components Legend */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              DFD Components & Notation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded mr-2"></div>
                  <h3 className="font-semibold text-yellow-900">
                    External Entities
                  </h3>
                </div>
                <p className="text-yellow-800 text-sm">
                  Sources/sinks of data outside system scope
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-blue-400 rounded mr-2"></div>
                  <h3 className="font-semibold text-blue-900">Data Stores</h3>
                </div>
                <p className="text-blue-800 text-sm">
                  Persistent data repositories and files
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-purple-400 rounded mr-2"></div>
                  <h3 className="font-semibold text-purple-900">Processes</h3>
                </div>
                <p className="text-purple-800 text-sm">
                  Data transformation and business logic
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
                  <h3 className="font-semibold text-green-900">Data Flows</h3>
                </div>
                <p className="text-green-800 text-sm">
                  Movement of data between components
                </p>
              </div>
            </div>

            <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Data Flow Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">4</div>
                  <div className="text-sm text-slate-600">Main Processes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">4</div>
                  <div className="text-sm text-slate-600">Data Stores</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">12+</div>
                  <div className="text-sm text-slate-600">Data Flows</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
