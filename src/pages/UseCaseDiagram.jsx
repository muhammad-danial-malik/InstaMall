import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Users } from "lucide-react";

export default function UseCaseDiagram() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>

          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Use Case Diagram
              </h1>
              <p className="text-xl text-slate-600">
                UML representation of system interactions and user scenarios
              </p>
            </div>
          </div>
        </div>

        {/* UML Use Case Diagram */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Insta Mall - Use Case Diagram
            </h2>
            <p className="text-slate-600">
              Comprehensive UML use case diagram showing actors, use cases, and
              their relationships
            </p>
          </div>

          {/* UML Diagram Canvas */}
          <div className="relative bg-slate-50 border-2 border-slate-200 rounded-lg p-8 min-h-[800px]">
            {/* System Boundary */}
            <div className="absolute inset-4 border-2 border-blue-400 rounded-lg bg-blue-50/20">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-4">
                <span className="text-blue-600 font-semibold">
                  Insta Mall System
                </span>
              </div>
            </div>

            {/* Actors */}
            {/* Shop Owner Actor */}
            <div className="absolute top-20 left-8 flex flex-col items-center">
              <div className="flex flex-col items-center mb-2">
                <div className="w-8 h-12 bg-slate-800 rounded-t-full relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full"></div>
                </div>
                <div className="w-6 h-8 bg-slate-800 rounded-b-lg"></div>
                <div className="w-12 h-1 bg-slate-800 mt-1"></div>
                <div className="w-8 h-1 bg-slate-800 mt-1"></div>
              </div>
              <div className="bg-blue-100 border border-blue-300 rounded-lg px-3 py-1 text-xs font-semibold text-blue-900">
                Shop Owner
              </div>
            </div>

            {/* Buyer Actor */}
            <div className="absolute top-20 right-8 flex flex-col items-center">
              <div className="flex flex-col items-center mb-2">
                <div className="w-8 h-12 bg-slate-800 rounded-t-full relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full"></div>
                </div>
                <div className="w-6 h-8 bg-slate-800 rounded-b-lg"></div>
                <div className="w-12 h-1 bg-slate-800 mt-1"></div>
                <div className="w-8 h-1 bg-slate-800 mt-1"></div>
              </div>
              <div className="bg-green-100 border border-green-300 rounded-lg px-3 py-1 text-xs font-semibold text-green-900">
                Buyer
              </div>
            </div>

            {/* System Administrator Actor */}
            <div className="absolute bottom-20 left-8 flex flex-col items-center">
              <div className="flex flex-col items-center mb-2">
                <div className="w-8 h-12 bg-slate-800 rounded-t-full relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full"></div>
                </div>
                <div className="w-6 h-8 bg-slate-800 rounded-b-lg"></div>
                <div className="w-12 h-1 bg-slate-800 mt-1"></div>
                <div className="w-8 h-1 bg-slate-800 mt-1"></div>
              </div>
              <div className="bg-purple-100 border border-purple-300 rounded-lg px-3 py-1 text-xs font-semibold text-purple-900">
                System Admin
              </div>
            </div>

            {/* Payment Gateway Actor */}
            <div className="absolute bottom-20 right-8 flex flex-col items-center">
              <div className="w-16 h-12 bg-orange-500 border-2 border-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">PG</span>
              </div>
              <div className="bg-orange-100 border border-orange-300 rounded-lg px-3 py-1 text-xs font-semibold text-orange-900 mt-2">
                Payment Gateway
              </div>
            </div>

            {/* Shop Owner Use Cases */}
            <div className="absolute top-32 left-32 space-y-4">
              <div className="bg-blue-100 border-2 border-blue-400 rounded-full px-4 py-2 text-xs font-semibold text-blue-900 text-center min-w-[120px]">
                Manage Inventory
              </div>
              <div className="bg-blue-100 border-2 border-blue-400 rounded-full px-4 py-2 text-xs font-semibold text-blue-900 text-center min-w-[120px]">
                Process Orders
              </div>
              <div className="bg-blue-100 border-2 border-blue-400 rounded-full px-4 py-2 text-xs font-semibold text-blue-900 text-center min-w-[120px]">
                View Analytics
              </div>
              <div className="bg-blue-100 border-2 border-blue-400 rounded-full px-4 py-2 text-xs font-semibold text-blue-900 text-center min-w-[120px]">
                Manage Subscription
              </div>
            </div>

            {/* Buyer Use Cases */}
            <div className="absolute top-32 right-32 space-y-4">
              <div className="bg-green-100 border-2 border-green-400 rounded-full px-4 py-2 text-xs font-semibold text-green-900 text-center min-w-[120px]">
                Search Products
              </div>
              <div className="bg-green-100 border-2 border-green-400 rounded-full px-4 py-2 text-xs font-semibold text-green-900 text-center min-w-[120px]">
                View Shop Details
              </div>
              <div className="bg-green-100 border-2 border-green-400 rounded-full px-4 py-2 text-xs font-semibold text-green-900 text-center min-w-[120px]">
                Place Order
              </div>
              <div className="bg-green-100 border-2 border-green-400 rounded-full px-4 py-2 text-xs font-semibold text-green-900 text-center min-w-[120px]">
                Rate & Review
              </div>
            </div>

            {/* System Admin Use Cases */}
            <div className="absolute bottom-32 left-32 space-y-4">
              <div className="bg-purple-100 border-2 border-purple-400 rounded-full px-4 py-2 text-xs font-semibold text-purple-900 text-center min-w-[120px]">
                Manage Users
              </div>
              <div className="bg-purple-100 border-2 border-purple-400 rounded-full px-4 py-2 text-xs font-semibold text-purple-900 text-center min-w-[120px]">
                System Monitoring
              </div>
              <div className="bg-purple-100 border-2 border-purple-400 rounded-full px-4 py-2 text-xs font-semibold text-purple-900 text-center min-w-[120px]">
                Data Backup
              </div>
            </div>

            {/* Payment Gateway Use Cases */}
            <div className="absolute bottom-32 right-32 space-y-4">
              <div className="bg-orange-100 border-2 border-orange-400 rounded-full px-4 py-2 text-xs font-semibold text-orange-900 text-center min-w-[120px]">
                Process Payment
              </div>
              <div className="bg-orange-100 border-2 border-orange-400 rounded-full px-4 py-2 text-xs font-semibold text-orange-900 text-center min-w-[120px]">
                Handle Refunds
              </div>
            </div>

            {/* Authentication Use Case (Shared) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-slate-100 border-2 border-slate-400 rounded-full px-4 py-2 text-xs font-semibold text-slate-900 text-center min-w-[120px]">
                User Authentication
              </div>
            </div>

            {/* Include Relationships */}
            {/* Authentication includes */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="bg-yellow-100 border border-yellow-400 rounded px-2 py-1 text-xs text-yellow-900">
                &lt;&lt;include&gt;&gt;
              </div>
            </div>

            {/* Extend Relationships */}
            <div className="absolute top-1/2 right-1/4 transform -translate-y-16">
              <div className="bg-red-100 border border-red-400 rounded px-2 py-1 text-xs text-red-900">
                &lt;&lt;extend&gt;&gt;
              </div>
            </div>

            {/* Association Lines (simplified with arrows) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Shop Owner to Use Cases */}
              <line
                x1="120"
                y1="140"
                x2="200"
                y2="160"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <line
                x1="120"
                y1="140"
                x2="200"
                y2="200"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <line
                x1="120"
                y1="140"
                x2="200"
                y2="240"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <line
                x1="120"
                y1="140"
                x2="200"
                y2="280"
                stroke="#3B82F6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />

              {/* Buyer to Use Cases */}
              <line
                x1="520"
                y1="140"
                x2="440"
                y2="160"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <line
                x1="520"
                y1="140"
                x2="440"
                y2="200"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <line
                x1="520"
                y1="140"
                x2="440"
                y2="240"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <line
                x1="520"
                y1="140"
                x2="440"
                y2="280"
                stroke="#10B981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />

              {/* System Admin to Use Cases */}
              <line
                x1="120"
                y1="380"
                x2="200"
                y2="360"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <line
                x1="120"
                y1="380"
                x2="200"
                y2="400"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <line
                x1="120"
                y1="380"
                x2="200"
                y2="440"
                stroke="#8B5CF6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />

              {/* Payment Gateway to Use Cases */}
              <line
                x1="520"
                y1="380"
                x2="440"
                y2="360"
                stroke="#F97316"
                strokeWidth="2"
                markerEnd="url(#arrow-orange)"
              />
              <line
                x1="520"
                y1="380"
                x2="440"
                y2="400"
                stroke="#F97316"
                strokeWidth="2"
                markerEnd="url(#arrow-orange)"
              />

              {/* Authentication relationships */}
              <line
                x1="320"
                y1="320"
                x2="320"
                y2="200"
                stroke="#6B7280"
                strokeWidth="2"
                markerEnd="url(#arrow-gray)"
              />
              <line
                x1="320"
                y1="320"
                x2="200"
                y2="320"
                stroke="#6B7280"
                strokeWidth="2"
                markerEnd="url(#arrow-gray)"
              />
              <line
                x1="320"
                y1="320"
                x2="440"
                y2="320"
                stroke="#6B7280"
                strokeWidth="2"
                markerEnd="url(#arrow-gray)"
              />

              {/* Include relationship lines */}
              <line
                x1="320"
                y1="300"
                x2="320"
                y2="280"
                stroke="#EAB308"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
              <line
                x1="320"
                y1="280"
                x2="260"
                y2="260"
                stroke="#EAB308"
                strokeWidth="1"
                strokeDasharray="5,5"
                markerEnd="url(#arrow-yellow)"
              />

              {/* Extend relationship lines */}
              <line
                x1="440"
                y1="300"
                x2="440"
                y2="280"
                stroke="#EF4444"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
              <line
                x1="440"
                y1="280"
                x2="380"
                y2="260"
                stroke="#EF4444"
                strokeWidth="1"
                strokeDasharray="5,5"
                markerEnd="url(#arrow-red)"
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
                <marker
                  id="arrow-gray"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#6B7280" />
                </marker>
                <marker
                  id="arrow-yellow"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#EAB308" />
                </marker>
                <marker
                  id="arrow-red"
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
            </svg>
          </div>
        </div>

        {/* Use Case Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Actor Descriptions */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2 text-slate-600" />
              Actors & Responsibilities
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-blue-900">Shop Owner</h4>
                <ul className="text-blue-800 text-sm mt-1 space-y-1">
                  <li>• Manages product inventory and pricing</li>
                  <li>• Processes customer orders</li>
                  <li>• Views sales analytics and reports</li>
                  <li>• Manages subscription and branding</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-900">Buyer</h4>
                <ul className="text-green-800 text-sm mt-1 space-y-1">
                  <li>• Searches for products across shops</li>
                  <li>• Views detailed shop information</li>
                  <li>• Places orders and tracks delivery</li>
                  <li>• Rates and reviews shops/products</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-purple-900">
                  System Administrator
                </h4>
                <ul className="text-purple-800 text-sm mt-1 space-y-1">
                  <li>• Manages user accounts and permissions</li>
                  <li>• Monitors system performance</li>
                  <li>• Performs data backup and recovery</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-orange-900">
                  Payment Gateway
                </h4>
                <ul className="text-orange-800 text-sm mt-1 space-y-1">
                  <li>• Processes subscription payments</li>
                  <li>• Handles order payments</li>
                  <li>• Manages refunds and chargebacks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Relationship Types */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              🔗 UML Relationship Types
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-slate-600 rounded-full mt-1 mr-3 shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Association</h4>
                  <p className="text-slate-700 text-sm">
                    Communication between actor and use case (solid line with
                    arrow)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1 mr-3 shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    &lt;&lt;include&gt;&gt;
                  </h4>
                  <p className="text-slate-700 text-sm">
                    One use case always includes behavior of another (dashed
                    line with arrow)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-red-500 rounded-full mt-1 mr-3 shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    &lt;&lt;extend&gt;&gt;
                  </h4>
                  <p className="text-slate-700 text-sm">
                    One use case may extend behavior of another under certain
                    conditions
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-slate-400 rounded-full mt-1 mr-3 shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Generalization
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Inheritance relationship between actors or use cases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Use Cases Table */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mt-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            📋 Detailed Use Case Specifications
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-slate-200 rounded-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold text-slate-900">
                    Use Case
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold text-slate-900">
                    Actor
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold text-slate-900">
                    Description
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold text-slate-900">
                    Preconditions
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold text-slate-900">
                    Postconditions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-2 text-sm font-medium text-blue-900">
                    Manage Inventory
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-blue-700">
                    Shop Owner
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    Add, edit, delete products and manage stock levels
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    User authenticated, shop registered
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    Inventory updated, changes synced
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-2 text-sm font-medium text-green-900">
                    Search Products
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-green-700">
                    Buyer
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    Search products by name across subscribed shops
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    App installed, location enabled
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    Search results displayed with shop details
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-2 text-sm font-medium text-purple-900">
                    User Authentication
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-purple-700">
                    All Users
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    Login/logout with secure authentication
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    Valid user credentials
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    User session established
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-2 text-sm font-medium text-orange-900">
                    Process Payment
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-orange-700">
                    Payment Gateway
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    Handle subscription and order payments
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    Valid payment details provided
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    Payment processed successfully
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-linear-to-r from-slate-100 to-slate-200 border border-slate-300 rounded-lg p-8 mt-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            🎯 Use Case Diagram Summary
          </h3>
          <p className="text-slate-700 mb-4">
            This comprehensive UML use case diagram illustrates the complete
            interaction landscape of the Insta Mall system, showing how
            different actors engage with various system functionalities through
            clearly defined use cases and relationships.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">4</div>
              <div className="text-sm text-slate-600">Primary Actors</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">12+</div>
              <div className="text-sm text-slate-600">Use Cases</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-sm text-slate-600">Relationship Types</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-slate-600">
                Requirements Coverage
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
