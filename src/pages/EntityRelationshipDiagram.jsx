import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Link, CheckCircle, Network } from "lucide-react";

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
            <p className="text-slate-600 mb-6 leading-relaxed">
              Complete Entity-Relationship Diagram showing database structure,
              entities, and their relationships
            </p>
            <div className="w-full overflow-x-auto bg-slate-50 border-2 border-slate-200 rounded-lg">
              <svg
                viewBox="0 0 1600 900"
                className="w-full min-w-max h-auto"
                preserveAspectRatio="xMidYMid meet"
                style={{ minHeight: "700px" }}
              >
                {/* Marker definitions */}
                <defs>
                  <marker
                    id="relationship-arrow"
                    markerWidth="15"
                    markerHeight="15"
                    refX="12"
                    refY="7"
                    orient="auto"
                    markerUnits="strokeWidth"
                  >
                    <path d="M0,0 L0,14 L15,7 z" fill="#6b7280" />
                  </marker>
                  <marker
                    id="one-to-many"
                    markerWidth="20"
                    markerHeight="20"
                    refX="15"
                    refY="10"
                    orient="auto"
                  >
                    <circle cx="5" cy="10" r="3" fill="#ef4444" />
                    <line
                      x1="10"
                      y1="10"
                      x2="20"
                      y2="10"
                      stroke="#ef4444"
                      strokeWidth="2"
                    />
                  </marker>
                </defs>

                {/* Background */}
                <rect width="1600" height="900" fill="#f8fafc" />

                {/* ========== ROW 1: USER MANAGEMENT ========== */}

                {/* USER Entity */}
                <g>
                  <rect
                    x="50"
                    y="40"
                    width="200"
                    height="200"
                    fill="#f0fdfa"
                    stroke="#14b8a6"
                    strokeWidth="2"
                    rx="4"
                  />
                  <line
                    x1="50"
                    y1="75"
                    x2="250"
                    y2="75"
                    stroke="#14b8a6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="50"
                    y1="100"
                    x2="250"
                    y2="100"
                    stroke="#14b8a6"
                    strokeWidth="1.5"
                  />
                  <text
                    x="150"
                    y="65"
                    textAnchor="middle"
                    className="fill-teal-900 font-bold text-sm"
                  >
                    USER
                  </text>
                  <text
                    x="60"
                    y="118"
                    className="fill-teal-800 text-xs font-semibold"
                  >
                    PK: user_id
                  </text>
                  <text x="60" y="135" className="fill-teal-700 text-xs">
                    username
                  </text>
                  <text x="60" y="150" className="fill-teal-700 text-xs">
                    email
                  </text>
                  <text x="60" y="165" className="fill-teal-700 text-xs">
                    password_hash
                  </text>
                  <text x="60" y="180" className="fill-teal-700 text-xs">
                    created_at
                  </text>
                  <text x="60" y="195" className="fill-teal-700 text-xs">
                    user_type
                  </text>
                  <text x="60" y="225" className="fill-teal-600 text-xs italic">
                    (Base Entity)
                  </text>
                </g>

                {/* CUSTOMER Entity */}
                <g>
                  <rect
                    x="330"
                    y="40"
                    width="200"
                    height="200"
                    fill="#f0fdfa"
                    stroke="#14b8a6"
                    strokeWidth="2"
                    rx="4"
                  />
                  <line
                    x1="330"
                    y1="75"
                    x2="530"
                    y2="75"
                    stroke="#14b8a6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="330"
                    y1="100"
                    x2="530"
                    y2="100"
                    stroke="#14b8a6"
                    strokeWidth="1.5"
                  />
                  <text
                    x="430"
                    y="65"
                    textAnchor="middle"
                    className="fill-teal-900 font-bold text-sm"
                  >
                    CUSTOMER
                  </text>
                  <text
                    x="340"
                    y="118"
                    className="fill-teal-800 text-xs font-semibold"
                  >
                    PK,FK: customer_id
                  </text>
                  <text x="340" y="135" className="fill-teal-700 text-xs">
                    first_name
                  </text>
                  <text x="340" y="150" className="fill-teal-700 text-xs">
                    last_name
                  </text>
                  <text x="340" y="165" className="fill-teal-700 text-xs">
                    phone
                  </text>
                  <text x="340" y="180" className="fill-teal-700 text-xs">
                    address
                  </text>
                  <text
                    x="340"
                    y="225"
                    className="fill-teal-600 text-xs italic"
                  >
                    (Specialization)
                  </text>
                </g>

                {/* VENDOR Entity */}
                <g>
                  <rect
                    x="610"
                    y="40"
                    width="200"
                    height="200"
                    fill="#f0fdfa"
                    stroke="#14b8a6"
                    strokeWidth="2"
                    rx="4"
                  />
                  <line
                    x1="610"
                    y1="75"
                    x2="810"
                    y2="75"
                    stroke="#14b8a6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="610"
                    y1="100"
                    x2="810"
                    y2="100"
                    stroke="#14b8a6"
                    strokeWidth="1.5"
                  />
                  <text
                    x="710"
                    y="65"
                    textAnchor="middle"
                    className="fill-teal-900 font-bold text-sm"
                  >
                    VENDOR
                  </text>
                  <text
                    x="620"
                    y="118"
                    className="fill-teal-800 text-xs font-semibold"
                  >
                    PK,FK: vendor_id
                  </text>
                  <text x="620" y="135" className="fill-teal-700 text-xs">
                    business_name
                  </text>
                  <text x="620" y="150" className="fill-teal-700 text-xs">
                    tax_id
                  </text>
                  <text x="620" y="165" className="fill-teal-700 text-xs">
                    rating
                  </text>
                  <text x="620" y="180" className="fill-teal-700 text-xs">
                    status
                  </text>
                  <text
                    x="620"
                    y="225"
                    className="fill-teal-600 text-xs italic"
                  >
                    (Specialization)
                  </text>
                </g>

                {/* ========== ROW 2: PRODUCT & CATEGORY ========== */}

                {/* CATEGORY Entity */}
                <g>
                  <rect
                    x="330"
                    y="350"
                    width="200"
                    height="150"
                    fill="#fefce8"
                    stroke="#eab308"
                    strokeWidth="2"
                    rx="4"
                  />
                  <line
                    x1="330"
                    y1="385"
                    x2="530"
                    y2="385"
                    stroke="#eab308"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="330"
                    y1="410"
                    x2="530"
                    y2="410"
                    stroke="#eab308"
                    strokeWidth="1.5"
                  />
                  <text
                    x="430"
                    y="375"
                    textAnchor="middle"
                    className="fill-yellow-900 font-bold text-sm"
                  >
                    CATEGORY
                  </text>
                  <text
                    x="340"
                    y="428"
                    className="fill-yellow-800 text-xs font-semibold"
                  >
                    PK: category_id
                  </text>
                  <text x="340" y="445" className="fill-yellow-700 text-xs">
                    name
                  </text>
                  <text x="340" y="460" className="fill-yellow-700 text-xs">
                    description
                  </text>
                  <text x="340" y="475" className="fill-yellow-700 text-xs">
                    icon_url
                  </text>
                </g>

                {/* PRODUCT Entity */}
                <g>
                  <rect
                    x="610"
                    y="350"
                    width="200"
                    height="150"
                    fill="#fefce8"
                    stroke="#eab308"
                    strokeWidth="2"
                    rx="4"
                  />
                  <line
                    x1="610"
                    y1="385"
                    x2="810"
                    y2="385"
                    stroke="#eab308"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="610"
                    y1="410"
                    x2="810"
                    y2="410"
                    stroke="#eab308"
                    strokeWidth="1.5"
                  />
                  <text
                    x="710"
                    y="375"
                    textAnchor="middle"
                    className="fill-yellow-900 font-bold text-sm"
                  >
                    PRODUCT
                  </text>
                  <text
                    x="620"
                    y="428"
                    className="fill-yellow-800 text-xs font-semibold"
                  >
                    PK: product_id
                  </text>
                  <text x="620" y="445" className="fill-yellow-700 text-xs">
                    vendor_id (FK)
                  </text>
                  <text x="620" y="460" className="fill-yellow-700 text-xs">
                    category_id (FK)
                  </text>
                  <text x="620" y="475" className="fill-yellow-700 text-xs">
                    name, price, stock
                  </text>
                </g>

                {/* ========== ROW 3: ORDER & TRANSACTIONS ========== */}

                {/* ORDER Entity */}
                <g>
                  <rect
                    x="50"
                    y="650"
                    width="200"
                    height="150"
                    fill="#fef2f2"
                    stroke="#ef4444"
                    strokeWidth="2"
                    rx="4"
                  />
                  <line
                    x1="50"
                    y1="685"
                    x2="250"
                    y2="685"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="50"
                    y1="710"
                    x2="250"
                    y2="710"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                  />
                  <text
                    x="150"
                    y="675"
                    textAnchor="middle"
                    className="fill-red-900 font-bold text-sm"
                  >
                    ORDER
                  </text>
                  <text
                    x="60"
                    y="728"
                    className="fill-red-800 text-xs font-semibold"
                  >
                    PK: order_id
                  </text>
                  <text x="60" y="745" className="fill-red-700 text-xs">
                    customer_id (FK)
                  </text>
                  <text x="60" y="760" className="fill-red-700 text-xs">
                    order_date, status
                  </text>
                  <text x="60" y="775" className="fill-red-700 text-xs">
                    total_amount
                  </text>
                </g>

                {/* ORDER_ITEM Entity */}
                <g>
                  <rect
                    x="330"
                    y="650"
                    width="200"
                    height="150"
                    fill="#fef2f2"
                    stroke="#ef4444"
                    strokeWidth="2"
                    rx="4"
                  />
                  <line
                    x1="330"
                    y1="685"
                    x2="530"
                    y2="685"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="330"
                    y1="710"
                    x2="530"
                    y2="710"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                  />
                  <text
                    x="430"
                    y="675"
                    textAnchor="middle"
                    className="fill-red-900 font-bold text-sm"
                  >
                    ORDER_ITEM
                  </text>
                  <text
                    x="340"
                    y="728"
                    className="fill-red-800 text-xs font-semibold"
                  >
                    PK: order_item_id
                  </text>
                  <text x="340" y="745" className="fill-red-700 text-xs">
                    order_id (FK)
                  </text>
                  <text x="340" y="760" className="fill-red-700 text-xs">
                    product_id (FK)
                  </text>
                  <text x="340" y="775" className="fill-red-700 text-xs">
                    quantity, unit_price
                  </text>
                </g>

                {/* PAYMENT Entity */}
                <g>
                  <rect
                    x="610"
                    y="650"
                    width="200"
                    height="150"
                    fill="#f3e8ff"
                    stroke="#a855f7"
                    strokeWidth="2"
                    rx="4"
                  />
                  <line
                    x1="610"
                    y1="685"
                    x2="810"
                    y2="685"
                    stroke="#a855f7"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="610"
                    y1="710"
                    x2="810"
                    y2="710"
                    stroke="#a855f7"
                    strokeWidth="1.5"
                  />
                  <text
                    x="710"
                    y="675"
                    textAnchor="middle"
                    className="fill-purple-900 font-bold text-sm"
                  >
                    PAYMENT
                  </text>
                  <text
                    x="620"
                    y="728"
                    className="fill-purple-800 text-xs font-semibold"
                  >
                    PK: payment_id
                  </text>
                  <text x="620" y="745" className="fill-purple-700 text-xs">
                    order_id (FK)
                  </text>
                  <text x="620" y="760" className="fill-purple-700 text-xs">
                    amount, method
                  </text>
                  <text x="620" y="775" className="fill-purple-700 text-xs">
                    payment_date, status
                  </text>
                </g>

                {/* ADDRESS Entity */}
                <g>
                  <rect
                    x="890"
                    y="650"
                    width="200"
                    height="150"
                    fill="#f3e8ff"
                    stroke="#a855f7"
                    strokeWidth="2"
                    rx="4"
                  />
                  <line
                    x1="890"
                    y1="685"
                    x2="1090"
                    y2="685"
                    stroke="#a855f7"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="890"
                    y1="710"
                    x2="1090"
                    y2="710"
                    stroke="#a855f7"
                    strokeWidth="1.5"
                  />
                  <text
                    x="990"
                    y="675"
                    textAnchor="middle"
                    className="fill-purple-900 font-bold text-sm"
                  >
                    ADDRESS
                  </text>
                  <text
                    x="900"
                    y="728"
                    className="fill-purple-800 text-xs font-semibold"
                  >
                    PK: address_id
                  </text>
                  <text x="900" y="745" className="fill-purple-700 text-xs">
                    customer_id (FK)
                  </text>
                  <text x="900" y="760" className="fill-purple-700 text-xs">
                    street, city, state
                  </text>
                  <text x="900" y="775" className="fill-purple-700 text-xs">
                    zip_code, country
                  </text>
                </g>

                {/* ========== RELATIONSHIPS ========== */}

                {/* USER -> CUSTOMER (1:1 Inheritance) */}
                <line
                  x1="150"
                  y1="240"
                  x2="150"
                  y2="290"
                  stroke="#6b7280"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="150"
                  y1="290"
                  x2="430"
                  y2="290"
                  stroke="#6b7280"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="430"
                  y1="290"
                  x2="430"
                  y2="40"
                  stroke="#6b7280"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <text
                  x="200"
                  y="310"
                  className="fill-slate-600 text-xs font-semibold"
                >
                  1:1 (IS-A)
                </text>

                {/* USER -> VENDOR (1:1 Inheritance) */}
                <line
                  x1="150"
                  y1="240"
                  x2="150"
                  y2="310"
                  stroke="#6b7280"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="150"
                  y1="310"
                  x2="710"
                  y2="310"
                  stroke="#6b7280"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="710"
                  y1="310"
                  x2="710"
                  y2="40"
                  stroke="#6b7280"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <text
                  x="450"
                  y="330"
                  className="fill-slate-600 text-xs font-semibold"
                >
                  1:1 (IS-A)
                </text>

                {/* VENDOR -> PRODUCT (1:N) */}
                <line
                  x1="710"
                  y1="240"
                  x2="710"
                  y2="300"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="710"
                  y1="300"
                  x2="710"
                  y2="350"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#relationship-arrow)"
                />
                <text
                  x="730"
                  y="305"
                  className="fill-blue-600 text-xs font-semibold"
                >
                  1:N
                </text>

                {/* CATEGORY -> PRODUCT (1:N) */}
                <line
                  x1="430"
                  y1="500"
                  x2="430"
                  y2="575"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="430"
                  y1="575"
                  x2="710"
                  y2="575"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="710"
                  y1="575"
                  x2="710"
                  y2="500"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#relationship-arrow)"
                />
                <text
                  x="550"
                  y="585"
                  className="fill-blue-600 text-xs font-semibold"
                >
                  1:N
                </text>

                {/* CUSTOMER -> ORDER (1:N) */}
                <line
                  x1="430"
                  y1="240"
                  x2="430"
                  y2="590"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <line
                  x1="430"
                  y1="590"
                  x2="150"
                  y2="590"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <line
                  x1="150"
                  y1="590"
                  x2="150"
                  y2="650"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#relationship-arrow)"
                />
                <text
                  x="360"
                  y="600"
                  className="fill-red-600 text-xs font-semibold"
                >
                  1:N
                </text>

                {/* ORDER -> ORDER_ITEM (1:N) */}
                <line
                  x1="250"
                  y1="725"
                  x2="330"
                  y2="725"
                  stroke="#ef4444"
                  strokeWidth="2"
                  markerEnd="url(#relationship-arrow)"
                />
                <text
                  x="280"
                  y="715"
                  className="fill-red-600 text-xs font-semibold"
                >
                  1:N
                </text>

                {/* ORDER_ITEM -> PRODUCT (N:1) */}
                <line
                  x1="530"
                  y1="680"
                  x2="590"
                  y2="680"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="590"
                  y1="680"
                  x2="590"
                  y2="425"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="590"
                  y1="425"
                  x2="610"
                  y2="425"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#relationship-arrow)"
                />
                <text
                  x="570"
                  y="670"
                  className="fill-blue-600 text-xs font-semibold"
                >
                  N:1
                </text>

                {/* ORDER -> PAYMENT (1:1) */}
                <line
                  x1="250"
                  y1="725"
                  x2="570"
                  y2="725"
                  stroke="#a855f7"
                  strokeWidth="2"
                  markerEnd="url(#relationship-arrow)"
                />
                <text
                  x="390"
                  y="715"
                  className="fill-purple-600 text-xs font-semibold"
                >
                  1:1
                </text>

                {/* CUSTOMER -> ADDRESS (1:N) */}
                <line
                  x1="530"
                  y1="140"
                  x2="820"
                  y2="140"
                  stroke="#a855f7"
                  strokeWidth="2"
                />
                <line
                  x1="820"
                  y1="140"
                  x2="820"
                  y2="700"
                  stroke="#a855f7"
                  strokeWidth="2"
                />
                <line
                  x1="820"
                  y1="700"
                  x2="890"
                  y2="700"
                  stroke="#a855f7"
                  strokeWidth="2"
                  markerEnd="url(#relationship-arrow)"
                />
                <text
                  x="750"
                  y="135"
                  className="fill-purple-600 text-xs font-semibold"
                >
                  1:N
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
