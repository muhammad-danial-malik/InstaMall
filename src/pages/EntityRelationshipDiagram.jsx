import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Link, CheckCircle } from "lucide-react";

export default function EntityRelationshipDiagram() {
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
              <Network className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Entity-Relationship Diagram (ERD)
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                Database structure and relationships
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Main ER Diagram */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-3"></span>
              InstaMall Database Schema
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <svg viewBox="0 0 1000 700" className="w-full h-auto">
                <defs>
                  <marker
                    id="arrowhead-teal"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#14b8a6" />
                  </marker>
                  <marker
                    id="diamond"
                    markerWidth="12"
                    markerHeight="12"
                    refX="6"
                    refY="6"
                    orient="auto"
                  >
                    <polygon points="6 0, 12 6, 6 12, 0 6" fill="#14b8a6" />
                  </marker>
                </defs>

                {/* User Entity */}
                <rect
                  x="50"
                  y="50"
                  width="150"
                  height="180"
                  fill="#f0fdfa"
                  stroke="#14b8a6"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="125"
                  y="75"
                  textAnchor="middle"
                  className="text-lg font-bold fill-teal-900"
                >
                  USER
                </text>
                <line
                  x1="50"
                  y1="85"
                  x2="200"
                  y2="85"
                  stroke="#14b8a6"
                  strokeWidth="2"
                />
                <text
                  x="60"
                  y="105"
                  className="text-sm font-semibold fill-teal-800"
                >
                  + user_id (PK)
                </text>
                <text x="60" y="125" className="text-sm fill-teal-700">
                  + username
                </text>
                <text x="60" y="145" className="text-sm fill-teal-700">
                  + email
                </text>
                <text x="60" y="165" className="text-sm fill-teal-700">
                  + password_hash
                </text>
                <text x="60" y="185" className="text-sm fill-teal-700">
                  + created_at
                </text>
                <text x="60" y="205" className="text-sm fill-teal-700">
                  + user_type
                </text>

                {/* Customer Entity (inherits from User) */}
                <rect
                  x="50"
                  y="280"
                  width="150"
                  height="120"
                  fill="#f0fdfa"
                  stroke="#14b8a6"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="125"
                  y="300"
                  textAnchor="middle"
                  className="text-lg font-bold fill-teal-900"
                >
                  CUSTOMER
                </text>
                <line
                  x1="50"
                  y1="310"
                  x2="200"
                  y2="310"
                  stroke="#14b8a6"
                  strokeWidth="2"
                />
                <text
                  x="60"
                  y="330"
                  className="text-sm font-semibold fill-teal-800"
                >
                  + customer_id (PK,FK)
                </text>
                <text x="60" y="350" className="text-sm fill-teal-700">
                  + first_name
                </text>
                <text x="60" y="370" className="text-sm fill-teal-700">
                  + last_name
                </text>
                <text x="60" y="390" className="text-sm fill-teal-700">
                  + phone
                </text>

                {/* Vendor Entity (inherits from User) */}
                <rect
                  x="50"
                  y="450"
                  width="150"
                  height="120"
                  fill="#f0fdfa"
                  stroke="#14b8a6"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="125"
                  y="470"
                  textAnchor="middle"
                  className="text-lg font-bold fill-teal-900"
                >
                  VENDOR
                </text>
                <line
                  x1="50"
                  y1="480"
                  x2="200"
                  y2="480"
                  stroke="#14b8a6"
                  strokeWidth="2"
                />
                <text
                  x="60"
                  y="500"
                  className="text-sm font-semibold fill-teal-800"
                >
                  + vendor_id (PK,FK)
                </text>
                <text x="60" y="520" className="text-sm fill-teal-700">
                  + business_name
                </text>
                <text x="60" y="540" className="text-sm fill-teal-700">
                  + tax_id
                </text>
                <text x="60" y="560" className="text-sm fill-teal-700">
                  + rating
                </text>

                {/* Product Entity */}
                <rect
                  x="300"
                  y="50"
                  width="150"
                  height="180"
                  fill="#fefce8"
                  stroke="#eab308"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="375"
                  y="75"
                  textAnchor="middle"
                  className="text-lg font-bold fill-yellow-900"
                >
                  PRODUCT
                </text>
                <line
                  x1="300"
                  y1="85"
                  x2="450"
                  y2="85"
                  stroke="#eab308"
                  strokeWidth="2"
                />
                <text
                  x="310"
                  y="105"
                  className="text-sm font-semibold fill-yellow-800"
                >
                  + product_id (PK)
                </text>
                <text x="310" y="125" className="text-sm fill-yellow-700">
                  + vendor_id (FK)
                </text>
                <text x="310" y="145" className="text-sm fill-yellow-700">
                  + name
                </text>
                <text x="310" y="165" className="text-sm fill-yellow-700">
                  + description
                </text>
                <text x="310" y="185" className="text-sm fill-yellow-700">
                  + price
                </text>
                <text x="310" y="205" className="text-sm fill-yellow-700">
                  + stock_quantity
                </text>

                {/* Category Entity */}
                <rect
                  x="300"
                  y="280"
                  width="150"
                  height="120"
                  fill="#fefce8"
                  stroke="#eab308"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="375"
                  y="300"
                  textAnchor="middle"
                  className="text-lg font-bold fill-yellow-900"
                >
                  CATEGORY
                </text>
                <line
                  x1="300"
                  y1="310"
                  x2="450"
                  y2="310"
                  stroke="#eab308"
                  strokeWidth="2"
                />
                <text
                  x="310"
                  y="330"
                  className="text-sm font-semibold fill-yellow-800"
                >
                  + category_id (PK)
                </text>
                <text x="310" y="350" className="text-sm fill-yellow-700">
                  + name
                </text>
                <text x="310" y="370" className="text-sm fill-yellow-700">
                  + description
                </text>

                {/* Order Entity */}
                <rect
                  x="550"
                  y="50"
                  width="150"
                  height="180"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="625"
                  y="75"
                  textAnchor="middle"
                  className="text-lg font-bold fill-red-900"
                >
                  ORDER
                </text>
                <line
                  x1="550"
                  y1="85"
                  x2="700"
                  y2="85"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="560"
                  y="105"
                  className="text-sm font-semibold fill-red-800"
                >
                  + order_id (PK)
                </text>
                <text x="560" y="125" className="text-sm fill-red-700">
                  + customer_id (FK)
                </text>
                <text x="560" y="145" className="text-sm fill-red-700">
                  + order_date
                </text>
                <text x="560" y="165" className="text-sm fill-red-700">
                  + total_amount
                </text>
                <text x="560" y="185" className="text-sm fill-red-700">
                  + status
                </text>
                <text x="560" y="205" className="text-sm fill-red-700">
                  + shipping_address
                </text>

                {/* Order_Item Entity */}
                <rect
                  x="550"
                  y="280"
                  width="150"
                  height="140"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="625"
                  y="300"
                  textAnchor="middle"
                  className="text-lg font-bold fill-red-900"
                >
                  ORDER_ITEM
                </text>
                <line
                  x1="550"
                  y1="310"
                  x2="700"
                  y2="310"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <text
                  x="560"
                  y="330"
                  className="text-sm font-semibold fill-red-800"
                >
                  + order_item_id (PK)
                </text>
                <text x="560" y="350" className="text-sm fill-red-700">
                  + order_id (FK)
                </text>
                <text x="560" y="370" className="text-sm fill-red-700">
                  + product_id (FK)
                </text>
                <text x="560" y="390" className="text-sm fill-red-700">
                  + quantity
                </text>
                <text x="560" y="410" className="text-sm fill-red-700">
                  + unit_price
                </text>

                {/* Payment Entity */}
                <rect
                  x="800"
                  y="50"
                  width="150"
                  height="160"
                  fill="#f3e8ff"
                  stroke="#a855f7"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="875"
                  y="75"
                  textAnchor="middle"
                  className="text-lg font-bold fill-purple-900"
                >
                  PAYMENT
                </text>
                <line
                  x1="800"
                  y1="85"
                  x2="950"
                  y2="85"
                  stroke="#a855f7"
                  strokeWidth="2"
                />
                <text
                  x="810"
                  y="105"
                  className="text-sm font-semibold fill-purple-800"
                >
                  + payment_id (PK)
                </text>
                <text x="810" y="125" className="text-sm fill-purple-700">
                  + order_id (FK)
                </text>
                <text x="810" y="145" className="text-sm fill-purple-700">
                  + amount
                </text>
                <text x="810" y="165" className="text-sm fill-purple-700">
                  + payment_method
                </text>
                <text x="810" y="185" className="text-sm fill-purple-700">
                  + payment_date
                </text>

                {/* Address Entity */}
                <rect
                  x="800"
                  y="280"
                  width="150"
                  height="140"
                  fill="#f3e8ff"
                  stroke="#a855f7"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="875"
                  y="300"
                  textAnchor="middle"
                  className="text-lg font-bold fill-purple-900"
                >
                  ADDRESS
                </text>
                <line
                  x1="800"
                  y1="310"
                  x2="950"
                  y2="310"
                  stroke="#a855f7"
                  strokeWidth="2"
                />
                <text
                  x="810"
                  y="330"
                  className="text-sm font-semibold fill-purple-800"
                >
                  + address_id (PK)
                </text>
                <text x="810" y="350" className="text-sm fill-purple-700">
                  + customer_id (FK)
                </text>
                <text x="810" y="370" className="text-sm fill-purple-700">
                  + street
                </text>
                <text x="810" y="390" className="text-sm fill-purple-700">
                  + city
                </text>
                <text x="810" y="410" className="text-sm fill-purple-700">
                  + state
                </text>
                <text x="810" y="430" className="text-sm fill-purple-700">
                  + zip_code
                </text>

                {/* Relationships */}
                {/* User -> Customer (1:1) */}
                <line
                  x1="200"
                  y1="160"
                  x2="200"
                  y2="280"
                  stroke="#14b8a6"
                  strokeWidth="2"
                />
                <circle
                  cx="200"
                  cy="220"
                  r="8"
                  fill="white"
                  stroke="#14b8a6"
                  strokeWidth="2"
                />
                <circle cx="200" cy="220" r="4" fill="#14b8a6" />
                <text x="215" y="225" className="text-xs fill-teal-700">
                  1
                </text>
                <circle
                  cx="200"
                  cy="320"
                  r="8"
                  fill="white"
                  stroke="#14b8a6"
                  strokeWidth="2"
                />
                <circle cx="200" cy="320" r="4" fill="#14b8a6" />
                <text x="215" y="325" className="text-xs fill-teal-700">
                  1
                </text>

                {/* User -> Vendor (1:1) */}
                <line
                  x1="200"
                  y1="200"
                  x2="200"
                  y2="450"
                  stroke="#14b8a6"
                  strokeWidth="2"
                />
                <circle
                  cx="200"
                  cy="325"
                  r="8"
                  fill="white"
                  stroke="#14b8a6"
                  strokeWidth="2"
                />
                <circle cx="200" cy="325" r="4" fill="#14b8a6" />
                <text x="215" y="330" className="text-xs fill-teal-700">
                  1
                </text>
                <circle
                  cx="200"
                  cy="480"
                  r="8"
                  fill="white"
                  stroke="#14b8a6"
                  strokeWidth="2"
                />
                <circle cx="200" cy="480" r="4" fill="#14b8a6" />
                <text x="215" y="485" className="text-xs fill-teal-700">
                  1
                </text>

                {/* Vendor -> Product (1:N) */}
                <line
                  x1="200"
                  y1="510"
                  x2="300"
                  y2="140"
                  stroke="#eab308"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-teal)"
                />
                <circle
                  cx="250"
                  cy="325"
                  r="8"
                  fill="white"
                  stroke="#eab308"
                  strokeWidth="2"
                />
                <circle cx="250" cy="325" r="4" fill="#eab308" />
                <text x="265" y="330" className="text-xs fill-yellow-700">
                  1
                </text>
                <polygon points="300,140 290,130 310,130" fill="#eab308" />
                <text x="315" y="145" className="text-xs fill-yellow-700">
                  N
                </text>

                {/* Product -> Category (N:1) */}
                <line
                  x1="375"
                  y1="230"
                  x2="375"
                  y2="280"
                  stroke="#eab308"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-teal)"
                />
                <polygon points="375,280 365,270 385,270" fill="#eab308" />
                <text x="390" y="285" className="text-xs fill-yellow-700">
                  N
                </text>
                <circle
                  cx="375"
                  cy="310"
                  r="8"
                  fill="white"
                  stroke="#eab308"
                  strokeWidth="2"
                />
                <circle cx="375" cy="310" r="4" fill="#eab308" />
                <text x="390" y="315" className="text-xs fill-yellow-700">
                  1
                </text>

                {/* Customer -> Order (1:N) */}
                <line
                  x1="200"
                  y1="340"
                  x2="550"
                  y2="140"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-teal)"
                />
                <circle
                  cx="375"
                  cy="240"
                  r="8"
                  fill="white"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <circle cx="375" cy="240" r="4" fill="#ef4444" />
                <text x="390" y="245" className="text-xs fill-red-700">
                  1
                </text>
                <polygon points="550,140 540,130 560,130" fill="#ef4444" />
                <text x="565" y="145" className="text-xs fill-red-700">
                  N
                </text>

                {/* Order -> Order_Item (1:N) */}
                <line
                  x1="625"
                  y1="230"
                  x2="625"
                  y2="280"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-teal)"
                />
                <circle
                  cx="625"
                  cy="255"
                  r="8"
                  fill="white"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <circle cx="625" cy="255" r="4" fill="#ef4444" />
                <text x="640" y="260" className="text-xs fill-red-700">
                  1
                </text>
                <polygon points="625,280 615,270 635,270" fill="#ef4444" />
                <text x="640" y="285" className="text-xs fill-red-700">
                  N
                </text>

                {/* Order_Item -> Product (N:1) */}
                <line
                  x1="550"
                  y1="350"
                  x2="450"
                  y2="140"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-teal)"
                />
                <polygon points="450,140 440,130 460,130" fill="#ef4444" />
                <text x="465" y="145" className="text-xs fill-red-700">
                  N
                </text>
                <circle
                  cx="500"
                  cy="245"
                  r="8"
                  fill="white"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <circle cx="500" cy="245" r="4" fill="#ef4444" />
                <text x="515" y="250" className="text-xs fill-red-700">
                  1
                </text>

                {/* Order -> Payment (1:1) */}
                <line
                  x1="700"
                  y1="140"
                  x2="800"
                  y2="130"
                  stroke="#a855f7"
                  strokeWidth="2"
                />
                <circle
                  cx="750"
                  cy="135"
                  r="8"
                  fill="white"
                  stroke="#a855f7"
                  strokeWidth="2"
                />
                <circle cx="750" cy="135" r="4" fill="#a855f7" />
                <text x="765" y="140" className="text-xs fill-purple-700">
                  1
                </text>
                <circle
                  cx="800"
                  cy="130"
                  r="8"
                  fill="white"
                  stroke="#a855f7"
                  strokeWidth="2"
                />
                <circle cx="800" cy="130" r="4" fill="#a855f7" />
                <text x="815" y="135" className="text-xs fill-purple-700">
                  1
                </text>

                {/* Customer -> Address (1:N) */}
                <line
                  x1="200"
                  y1="380"
                  x2="800"
                  y2="350"
                  stroke="#a855f7"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-teal)"
                />
                <circle
                  cx="500"
                  cy="365"
                  r="8"
                  fill="white"
                  stroke="#a855f7"
                  strokeWidth="2"
                />
                <circle cx="500" cy="365" r="4" fill="#a855f7" />
                <text x="515" y="370" className="text-xs fill-purple-700">
                  1
                </text>
                <polygon points="800,350 790,340 810,340" fill="#a855f7" />
                <text x="815" y="355" className="text-xs fill-purple-700">
                  N
                </text>
              </svg>
            </div>
          </div>

          {/* ER Diagram Components */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              ER Diagram Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h3 className="font-semibold text-teal-900 mb-2">Entities</h3>
                <p className="text-teal-800 text-sm">
                  7 main entities representing core business objects
                </p>
                <ul className="text-teal-700 text-sm mt-2">
                  <li>• User (base entity)</li>
                  <li>• Customer & Vendor (subtypes)</li>
                  <li>• Product, Category</li>
                  <li>• Order & Order_Item</li>
                  <li>• Payment, Address</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 mb-2">
                  Attributes
                </h3>
                <p className="text-yellow-800 text-sm">
                  Primary keys, foreign keys, and data attributes
                </p>
                <ul className="text-yellow-700 text-sm mt-2">
                  <li>• PK: Primary keys</li>
                  <li>• FK: Foreign keys</li>
                  <li>• Data types: VARCHAR, INT, DECIMAL, DATE</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-2">
                  Relationships
                </h3>
                <p className="text-purple-800 text-sm">
                  Cardinality and participation constraints
                </p>
                <ul className="text-purple-700 text-sm mt-2">
                  <li>• 1:1 (User-Customer)</li>
                  <li>• 1:N (Customer-Order)</li>
                  <li>• N:1 (Product-Category)</li>
                  <li>• Inheritance (User subtypes)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Database Schema Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Database Schema Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center bg-teal-50 border border-teal-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-teal-600 mb-2">7</div>
                <div className="text-sm font-medium text-teal-900">
                  Entities
                </div>
                <div className="text-xs text-teal-700 mt-1">
                  Core business objects
                </div>
              </div>
              <div className="text-center bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-600 mb-2">8</div>
                <div className="text-sm font-medium text-yellow-900">
                  Relationships
                </div>
                <div className="text-xs text-yellow-700 mt-1">
                  Entity connections
                </div>
              </div>
              <div className="text-center bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  25+
                </div>
                <div className="text-sm font-medium text-purple-900">
                  Attributes
                </div>
                <div className="text-xs text-purple-700 mt-1">Data fields</div>
              </div>
              <div className="text-center bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  3NF
                </div>
                <div className="text-sm font-medium text-green-900">
                  Normalization
                </div>
                <div className="text-xs text-green-700 mt-1">
                  Optimal design
                </div>
              </div>
            </div>

            <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Key Design Principles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Normalization
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Third normal form eliminates data redundancy
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Referential Integrity
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Foreign key constraints maintain data consistency
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Inheritance
                  </h4>
                  <p className="text-slate-700 text-sm">
                    User entity subtypes for Customer/Vendor roles
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Scalability
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Design supports future business growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
