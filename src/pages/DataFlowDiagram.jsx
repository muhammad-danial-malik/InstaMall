import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  Database,
  Store,
  CreditCard,
  Truck,
  User,
} from "lucide-react";

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
            <div className="bg-slate-50 rounded-lg p-8 overflow-x-auto flex justify-center">
              <div className="flex flex-col items-center w-full max-w-6xl">
                {/* Payment Gateway - Top */}
                <div className="flex justify-center mb-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex flex-col items-center gap-2 bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow">
                      <CreditCard className="h-8 w-8 text-amber-600" />
                      <div className="text-center">
                        <p className="text-sm font-semibold text-slate-900">
                          Payment
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          Gateway
                        </p>
                        <p className="text-xs text-slate-700">Card</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <svg
                  className="h-12 w-full max-w-xs mb-4"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <marker
                      id="arrowdown"
                      markerWidth="10"
                      markerHeight="10"
                      refX="5"
                      refY="5"
                      orient="auto"
                    >
                      <polygon points="0,0 10,5 0,10" fill="#6366f1" />
                    </marker>
                  </defs>
                  <line
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="32"
                    stroke="#6366f1"
                    strokeWidth="2"
                    markerEnd="url(#arrowdown)"
                  />
                  <text
                    x="65"
                    y="20"
                    fontSize="10"
                    fill="#6366f1"
                    className="font-semibold"
                  >
                    Payment Info
                  </text>
                </svg>

                {/* Main Row - Customer | System | Vendor */}
                <div className="flex justify-between items-center gap-4 w-full mb-4">
                  {/* Customer */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex flex-col items-center gap-2 bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow w-32">
                      <User className="h-8 w-8 text-amber-600" />
                      <div className="text-center">
                        <p className="text-sm font-semibold text-slate-900">
                          Customer
                        </p>
                        <p className="text-xs text-slate-700">User</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrows */}
                  <svg
                    className="flex-1 h-16"
                    viewBox="0 0 100 60"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <marker
                        id="arrow-right"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="5"
                        orient="auto"
                      >
                        <polygon points="0,0 10,5 0,10" fill="#6366f1" />
                      </marker>
                      <marker
                        id="arrow-left"
                        markerWidth="10"
                        markerHeight="10"
                        refX="1"
                        refY="5"
                        orient="auto"
                      >
                        <polygon points="10,0 0,5 10,10" fill="#6366f1" />
                      </marker>
                    </defs>
                    {/* Forward arrow */}
                    <line
                      x1="10"
                      y1="20"
                      x2="90"
                      y2="20"
                      stroke="#6366f1"
                      strokeWidth="2"
                      markerEnd="url(#arrow-right)"
                    />
                    <text
                      x="50"
                      y="15"
                      fontSize="10"
                      fill="#6366f1"
                      textAnchor="middle"
                      className="font-semibold"
                    >
                      Order Request
                    </text>
                    {/* Back arrow */}
                    <line
                      x1="90"
                      y1="40"
                      x2="10"
                      y2="40"
                      stroke="#6366f1"
                      strokeWidth="2"
                      markerEnd="url(#arrow-left)"
                    />
                    <text
                      x="50"
                      y="55"
                      fontSize="10"
                      fill="#6366f1"
                      textAnchor="middle"
                      className="font-semibold"
                    >
                      Order Confirmation
                    </text>
                  </svg>

                  {/* InstaMall System Center */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex flex-col items-center justify-center bg-linear-to-br from-indigo-100 to-indigo-200 border-4 border-indigo-500 rounded-full w-40 h-40 shadow-xl hover:shadow-2xl transition-shadow">
                      <p className="text-lg font-bold text-slate-900">
                        InstaMall
                      </p>
                      <p className="text-lg font-bold text-slate-900">System</p>
                      <p className="text-xs text-indigo-600 font-semibold">
                        Level 0
                      </p>
                    </div>
                  </div>

                  {/* Arrows */}
                  <svg
                    className="flex-1 h-16"
                    viewBox="0 0 100 60"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <marker
                        id="arrow-right2"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="5"
                        orient="auto"
                      >
                        <polygon points="0,0 10,5 0,10" fill="#6366f1" />
                      </marker>
                      <marker
                        id="arrow-left2"
                        markerWidth="10"
                        markerHeight="10"
                        refX="1"
                        refY="5"
                        orient="auto"
                      >
                        <polygon points="10,0 0,5 10,10" fill="#6366f1" />
                      </marker>
                    </defs>
                    {/* Forward arrow */}
                    <line
                      x1="10"
                      y1="20"
                      x2="90"
                      y2="20"
                      stroke="#6366f1"
                      strokeWidth="2"
                      markerEnd="url(#arrow-right2)"
                    />
                    <text
                      x="50"
                      y="15"
                      fontSize="10"
                      fill="#6366f1"
                      textAnchor="middle"
                      className="font-semibold"
                    >
                      Product Data
                    </text>
                    {/* Back arrow */}
                    <line
                      x1="90"
                      y1="40"
                      x2="10"
                      y2="40"
                      stroke="#6366f1"
                      strokeWidth="2"
                      markerEnd="url(#arrow-left2)"
                    />
                    <text
                      x="50"
                      y="55"
                      fontSize="10"
                      fill="#6366f1"
                      textAnchor="middle"
                      className="font-semibold"
                    >
                      Inventory Update
                    </text>
                  </svg>

                  {/* Vendor */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex flex-col items-center gap-2 bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow w-32">
                      <Store className="h-8 w-8 text-amber-600" />
                      <div className="text-center">
                        <p className="text-sm font-semibold text-slate-900">
                          Vendor
                        </p>
                        <p className="text-xs text-slate-700">Store</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <svg
                  className="h-12 w-full max-w-xs mb-4 mt-4"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <marker
                      id="arrowdown2"
                      markerWidth="10"
                      markerHeight="10"
                      refX="5"
                      refY="5"
                      orient="auto"
                    >
                      <polygon points="0,0 10,5 0,10" fill="#6366f1" />
                    </marker>
                  </defs>
                  <line
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="32"
                    stroke="#6366f1"
                    strokeWidth="2"
                    markerEnd="url(#arrowdown2)"
                  />
                  <text
                    x="35"
                    y="20"
                    fontSize="10"
                    fill="#6366f1"
                    className="font-semibold"
                  >
                    Shipping Request
                  </text>
                </svg>

                {/* Arrow Up */}
                <svg
                  className="h-12 w-full max-w-xs mb-8"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <marker
                      id="arrowup2"
                      markerWidth="10"
                      markerHeight="10"
                      refX="5"
                      refY="5"
                      orient="auto"
                    >
                      <polygon points="10,0 0,5 10,10" fill="#6366f1" />
                    </marker>
                  </defs>
                  <line
                    x1="50"
                    y1="40"
                    x2="50"
                    y2="8"
                    stroke="#6366f1"
                    strokeWidth="2"
                    markerEnd="url(#arrowup2)"
                  />
                  <text
                    x="65"
                    y="25"
                    fontSize="10"
                    fill="#6366f1"
                    className="font-semibold"
                  >
                    Tracking Info
                  </text>
                </svg>

                {/* Shipping Service - Bottom */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex flex-col items-center gap-2 bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow">
                      <Truck className="h-8 w-8 text-amber-600" />
                      <div className="text-center">
                        <p className="text-sm font-semibold text-slate-900">
                          Shipping
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          Service
                        </p>
                        <p className="text-xs text-slate-700">Truck</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Up from Shipping to System */}
                <svg
                  className="h-12 w-full max-w-xs mt-8"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <marker
                      id="arrowup"
                      markerWidth="10"
                      markerHeight="10"
                      refX="5"
                      refY="5"
                      orient="auto"
                    >
                      <polygon points="10,0 0,5 10,10" fill="#6366f1" />
                    </marker>
                  </defs>
                  <line
                    x1="50"
                    y1="40"
                    x2="50"
                    y2="8"
                    stroke="#6366f1"
                    strokeWidth="2"
                    markerEnd="url(#arrowup)"
                  />
                  <text
                    x="65"
                    y="25"
                    fontSize="10"
                    fill="#6366f1"
                    className="font-semibold"
                  >
                    Payment Status
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Level 1 DFD - Detailed Processes */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
              Level 1 DFD - Detailed Processes
            </h2>
            <div className="bg-slate-50 rounded-lg p-8 overflow-x-auto">
              <div className="flex flex-col items-center w-full min-h-screen">
                {/* Top Row - Data Stores */}
                <div className="flex justify-around items-start w-full mb-12 gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-2 bg-linear-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-lg px-4 py-3 shadow-md w-24">
                      <p className="text-xs font-semibold text-slate-900">
                        Customer DB
                      </p>
                      <p className="text-xs text-blue-600 font-bold">D1</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-2 bg-linear-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-lg px-4 py-3 shadow-md w-24">
                      <p className="text-xs font-semibold text-slate-900">
                        Product DB
                      </p>
                      <p className="text-xs text-blue-600 font-bold">D2</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-2 bg-linear-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-lg px-4 py-3 shadow-md w-24">
                      <p className="text-xs font-semibold text-slate-900">
                        Order DB
                      </p>
                      <p className="text-xs text-blue-600 font-bold">D3</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-2 bg-linear-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-lg px-4 py-3 shadow-md w-24">
                      <p className="text-xs font-semibold text-slate-900">
                        Payment DB
                      </p>
                      <p className="text-xs text-blue-600 font-bold">D4</p>
                    </div>
                  </div>
                </div>

                {/* Middle Row - Processes */}
                <div className="flex justify-around items-center w-full mb-12 gap-8">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex flex-col items-center justify-center bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-full w-24 h-24 shadow-md hover:shadow-lg transition-shadow">
                      <p className="text-xs font-bold text-slate-900">
                        Register
                      </p>
                      <p className="text-xs font-bold text-slate-900">User</p>
                      <p className="text-xs text-amber-600 font-bold mt-1">1</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="flex flex-col items-center justify-center bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-full w-24 h-24 shadow-md hover:shadow-lg transition-shadow">
                      <p className="text-xs font-bold text-slate-900">Search</p>
                      <p className="text-xs font-bold text-slate-900">
                        Products
                      </p>
                      <p className="text-xs text-amber-600 font-bold mt-1">2</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="flex flex-col items-center justify-center bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-full w-24 h-24 shadow-md hover:shadow-lg transition-shadow">
                      <p className="text-xs font-bold text-slate-900">
                        Process
                      </p>
                      <p className="text-xs font-bold text-slate-900">Order</p>
                      <p className="text-xs text-amber-600 font-bold mt-1">3</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="flex flex-col items-center justify-center bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-full w-24 h-24 shadow-md hover:shadow-lg transition-shadow">
                      <p className="text-xs font-bold text-slate-900">
                        Process
                      </p>
                      <p className="text-xs font-bold text-slate-900">
                        Payment
                      </p>
                      <p className="text-xs text-amber-600 font-bold mt-1">4</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row - External Entities */}
                <div className="flex justify-around items-start w-full gap-8">
                  <div className="flex-1 flex justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <User className="h-8 w-8 text-amber-600" />
                      <div className="flex flex-col items-center gap-2 bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-xl px-4 py-3 shadow-md w-28">
                        <p className="text-xs font-semibold text-slate-900">
                          Customer
                        </p>
                        <p className="text-xs text-slate-700">User</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <Store className="h-8 w-8 text-amber-600" />
                      <div className="flex flex-col items-center gap-2 bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-xl px-4 py-3 shadow-md w-28">
                        <p className="text-xs font-semibold text-slate-900">
                          Vendor
                        </p>
                        <p className="text-xs text-slate-700">Store</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Flow Description */}
                <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-2">
                      Process 1: Register User
                    </p>
                    <p className="text-slate-700">
                      Customer registration data → Store in Customer DB
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-2">
                      Process 2: Search Products
                    </p>
                    <p className="text-slate-700">
                      Search query → Query Product DB → Return results
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-2">
                      Process 3: Process Order
                    </p>
                    <p className="text-slate-700">
                      Order details → Store in Order DB → Confirmation
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-2">
                      Process 4: Payment Processing
                    </p>
                    <p className="text-slate-700">
                      Payment request → Process payment → Store in DB
                    </p>
                  </div>
                </div>
              </div>
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
