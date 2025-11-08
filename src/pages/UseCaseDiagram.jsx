import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Users, Link, ClipboardList, Target } from "lucide-react";

export default function UseCaseDiagram() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
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

          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Use Case Diagram
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
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

          {/* UML Diagram Canvas - Responsive SVG Based */}
          <div className="w-full overflow-x-auto bg-slate-50 border-2 border-slate-200 rounded-lg">
            <svg
              viewBox="0 0 1200 800"
              className="w-full min-w-max h-auto"
              preserveAspectRatio="xMidYMid meet"
              style={{ minHeight: "600px" }}
            >
              {/* Marker definitions */}
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

              {/* Background */}
              <rect width="1200" height="800" fill="#f8fafc" />

              {/* System Boundary */}
              <rect
                x="120"
                y="80"
                width="960"
                height="640"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2"
                rx="8"
              />
              <text
                x="600"
                y="60"
                textAnchor="middle"
                className="fill-blue-600 font-semibold text-sm"
              >
                Insta Mall System
              </text>

              {/* Top Horizontal Line */}
              <line
                x1="120"
                y1="320"
                x2="1080"
                y2="320"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="4,4"
              />

              {/* Left Vertical Line */}
              <line
                x1="300"
                y1="80"
                x2="300"
                y2="720"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="4,4"
              />

              {/* Right Vertical Line */}
              <line
                x1="900"
                y1="80"
                x2="900"
                y2="720"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="4,4"
              />

              {/* Center Horizontal Grid */}
              <line
                x1="600"
                y1="80"
                x2="600"
                y2="720"
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="4,4"
              />

              {/* ========== ACTORS ========== */}

              {/* Shop Owner Actor (Top Left) */}
              <g>
                {/* Stick Figure */}
                <circle cx="80" cy="100" r="8" fill="#1e293b" />
                <line
                  x1="80"
                  y1="108"
                  x2="80"
                  y2="135"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                <line
                  x1="65"
                  y1="120"
                  x2="95"
                  y2="120"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                <line
                  x1="80"
                  y1="135"
                  x2="65"
                  y2="155"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                <line
                  x1="80"
                  y1="135"
                  x2="95"
                  y2="155"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                {/* Label */}
                <rect
                  x="40"
                  y="165"
                  width="80"
                  height="24"
                  fill="#dbeafe"
                  stroke="#60a5fa"
                  strokeWidth="1"
                  rx="4"
                />
                <text
                  x="80"
                  y="181"
                  textAnchor="middle"
                  className="fill-blue-900 font-semibold text-xs"
                >
                  Shop Owner
                </text>
              </g>

              {/* Buyer Actor (Top Right) */}
              <g>
                {/* Stick Figure */}
                <circle cx="1120" cy="100" r="8" fill="#1e293b" />
                <line
                  x1="1120"
                  y1="108"
                  x2="1120"
                  y2="135"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                <line
                  x1="1105"
                  y1="120"
                  x2="1135"
                  y2="120"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                <line
                  x1="1120"
                  y1="135"
                  x2="1105"
                  y2="155"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                <line
                  x1="1120"
                  y1="135"
                  x2="1135"
                  y2="155"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                {/* Label */}
                <rect
                  x="1070"
                  y="165"
                  width="100"
                  height="24"
                  fill="#dcfce7"
                  stroke="#86efac"
                  strokeWidth="1"
                  rx="4"
                />
                <text
                  x="1120"
                  y="181"
                  textAnchor="middle"
                  className="fill-green-900 font-semibold text-xs"
                >
                  Buyer
                </text>
              </g>

              {/* System Admin Actor (Bottom Left) */}
              <g>
                {/* Stick Figure */}
                <circle cx="80" cy="700" r="8" fill="#1e293b" />
                <line
                  x1="80"
                  y1="708"
                  x2="80"
                  y2="735"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                <line
                  x1="65"
                  y1="720"
                  x2="95"
                  y2="720"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                <line
                  x1="80"
                  y1="735"
                  x2="65"
                  y2="755"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                <line
                  x1="80"
                  y1="735"
                  x2="95"
                  y2="755"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                {/* Label */}
                <rect
                  x="40"
                  y="765"
                  width="80"
                  height="24"
                  fill="#e9d5ff"
                  stroke="#d8b4fe"
                  strokeWidth="1"
                  rx="4"
                />
                <text
                  x="80"
                  y="781"
                  textAnchor="middle"
                  className="fill-purple-900 font-semibold text-xs"
                >
                  System Admin
                </text>
              </g>

              {/* Payment Gateway Actor (Bottom Right) */}
              <g>
                {/* Box */}
                <rect
                  x="1100"
                  y="685"
                  width="60"
                  height="50"
                  fill="#fed7aa"
                  stroke="#fb923c"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="1130"
                  y="715"
                  textAnchor="middle"
                  className="fill-white font-bold text-sm"
                >
                  PG
                </text>
                {/* Label */}
                <rect
                  x="1070"
                  y="745"
                  width="120"
                  height="24"
                  fill="#fed7aa"
                  stroke="#fb923c"
                  strokeWidth="1"
                  rx="4"
                />
                <text
                  x="1130"
                  y="761"
                  textAnchor="middle"
                  className="fill-orange-900 font-semibold text-xs"
                >
                  Payment Gateway
                </text>
              </g>

              {/* ========== USE CASES (INSIDE SYSTEM BOUNDARY) ========== */}

              {/* Shop Owner Use Cases (Top Left Region) */}
              <ellipse
                cx="220"
                cy="140"
                rx="50"
                ry="25"
                fill="#dbeafe"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <text
                x="220"
                y="145"
                textAnchor="middle"
                className="fill-blue-900 font-semibold text-xs"
              >
                Manage
              </text>
              <text
                x="220"
                y="157"
                textAnchor="middle"
                className="fill-blue-900 font-semibold text-xs"
              >
                Inventory
              </text>

              <ellipse
                cx="220"
                cy="200"
                rx="50"
                ry="25"
                fill="#dbeafe"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <text
                x="220"
                y="205"
                textAnchor="middle"
                className="fill-blue-900 font-semibold text-xs"
              >
                Process
              </text>
              <text
                x="220"
                y="217"
                textAnchor="middle"
                className="fill-blue-900 font-semibold text-xs"
              >
                Orders
              </text>

              <ellipse
                cx="220"
                cy="260"
                rx="50"
                ry="25"
                fill="#dbeafe"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <text
                x="220"
                y="265"
                textAnchor="middle"
                className="fill-blue-900 font-semibold text-xs"
              >
                View
              </text>
              <text
                x="220"
                y="277"
                textAnchor="middle"
                className="fill-blue-900 font-semibold text-xs"
              >
                Analytics
              </text>

              <ellipse
                cx="220"
                cy="320"
                rx="50"
                ry="25"
                fill="#dbeafe"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <text
                x="220"
                y="325"
                textAnchor="middle"
                className="fill-blue-900 font-semibold text-xs"
              >
                Manage
              </text>
              <text
                x="220"
                y="337"
                textAnchor="middle"
                className="fill-blue-900 font-semibold text-xs"
              >
                Subscription
              </text>

              {/* Buyer Use Cases (Top Right Region) */}
              <ellipse
                cx="980"
                cy="140"
                rx="50"
                ry="25"
                fill="#dcfce7"
                stroke="#86efac"
                strokeWidth="2"
              />
              <text
                x="980"
                y="145"
                textAnchor="middle"
                className="fill-green-900 font-semibold text-xs"
              >
                Search
              </text>
              <text
                x="980"
                y="157"
                textAnchor="middle"
                className="fill-green-900 font-semibold text-xs"
              >
                Products
              </text>

              <ellipse
                cx="980"
                cy="200"
                rx="50"
                ry="25"
                fill="#dcfce7"
                stroke="#86efac"
                strokeWidth="2"
              />
              <text
                x="980"
                y="205"
                textAnchor="middle"
                className="fill-green-900 font-semibold text-xs"
              >
                View Shop
              </text>
              <text
                x="980"
                y="217"
                textAnchor="middle"
                className="fill-green-900 font-semibold text-xs"
              >
                Details
              </text>

              <ellipse
                cx="980"
                cy="260"
                rx="50"
                ry="25"
                fill="#dcfce7"
                stroke="#86efac"
                strokeWidth="2"
              />
              <text
                x="980"
                y="265"
                textAnchor="middle"
                className="fill-green-900 font-semibold text-xs"
              >
                Place
              </text>
              <text
                x="980"
                y="277"
                textAnchor="middle"
                className="fill-green-900 font-semibold text-xs"
              >
                Order
              </text>

              <ellipse
                cx="980"
                cy="320"
                rx="50"
                ry="25"
                fill="#dcfce7"
                stroke="#86efac"
                strokeWidth="2"
              />
              <text
                x="980"
                y="325"
                textAnchor="middle"
                className="fill-green-900 font-semibold text-xs"
              >
                Rate &amp;
              </text>
              <text
                x="980"
                y="337"
                textAnchor="middle"
                className="fill-green-900 font-semibold text-xs"
              >
                Review
              </text>

              {/* System Admin Use Cases (Bottom Left Region) */}
              <ellipse
                cx="220"
                cy="520"
                rx="50"
                ry="25"
                fill="#e9d5ff"
                stroke="#d8b4fe"
                strokeWidth="2"
              />
              <text
                x="220"
                y="525"
                textAnchor="middle"
                className="fill-purple-900 font-semibold text-xs"
              >
                Manage
              </text>
              <text
                x="220"
                y="537"
                textAnchor="middle"
                className="fill-purple-900 font-semibold text-xs"
              >
                Users
              </text>

              <ellipse
                cx="220"
                cy="580"
                rx="50"
                ry="25"
                fill="#e9d5ff"
                stroke="#d8b4fe"
                strokeWidth="2"
              />
              <text
                x="220"
                y="585"
                textAnchor="middle"
                className="fill-purple-900 font-semibold text-xs"
              >
                System
              </text>
              <text
                x="220"
                y="597"
                textAnchor="middle"
                className="fill-purple-900 font-semibold text-xs"
              >
                Monitoring
              </text>

              <ellipse
                cx="220"
                cy="640"
                rx="50"
                ry="25"
                fill="#e9d5ff"
                stroke="#d8b4fe"
                strokeWidth="2"
              />
              <text
                x="220"
                y="645"
                textAnchor="middle"
                className="fill-purple-900 font-semibold text-xs"
              >
                Data
              </text>
              <text
                x="220"
                y="657"
                textAnchor="middle"
                className="fill-purple-900 font-semibold text-xs"
              >
                Backup
              </text>

              {/* Payment Gateway Use Cases (Bottom Right Region) */}
              <ellipse
                cx="980"
                cy="520"
                rx="50"
                ry="25"
                fill="#fed7aa"
                stroke="#fb923c"
                strokeWidth="2"
              />
              <text
                x="980"
                y="525"
                textAnchor="middle"
                className="fill-orange-900 font-semibold text-xs"
              >
                Process
              </text>
              <text
                x="980"
                y="537"
                textAnchor="middle"
                className="fill-orange-900 font-semibold text-xs"
              >
                Payment
              </text>

              <ellipse
                cx="980"
                cy="580"
                rx="50"
                ry="25"
                fill="#fed7aa"
                stroke="#fb923c"
                strokeWidth="2"
              />
              <text
                x="980"
                y="585"
                textAnchor="middle"
                className="fill-orange-900 font-semibold text-xs"
              >
                Handle
              </text>
              <text
                x="980"
                y="597"
                textAnchor="middle"
                className="fill-orange-900 font-semibold text-xs"
              >
                Refunds
              </text>

              {/* Central Use Case - User Authentication */}
              <ellipse
                cx="600"
                cy="400"
                rx="55"
                ry="30"
                fill="#f1f5f9"
                stroke="#94a3b8"
                strokeWidth="2"
              />
              <text
                x="600"
                y="403"
                textAnchor="middle"
                className="fill-slate-900 font-semibold text-xs"
              >
                User
              </text>
              <text
                x="600"
                y="415"
                textAnchor="middle"
                className="fill-slate-900 font-semibold text-xs"
              >
                Authentication
              </text>

              {/* ========== ASSOCIATIONS (ACTOR TO USE CASE) ========== */}

              {/* Shop Owner to Use Cases */}
              <line
                x1="130"
                y1="130"
                x2="170"
                y2="140"
                stroke="#3b82f6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <line
                x1="130"
                y1="140"
                x2="170"
                y2="200"
                stroke="#3b82f6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <line
                x1="130"
                y1="150"
                x2="170"
                y2="260"
                stroke="#3b82f6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />
              <line
                x1="130"
                y1="160"
                x2="170"
                y2="320"
                stroke="#3b82f6"
                strokeWidth="2"
                markerEnd="url(#arrow-blue)"
              />

              {/* Buyer to Use Cases */}
              <line
                x1="1070"
                y1="130"
                x2="1030"
                y2="140"
                stroke="#10b981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <line
                x1="1070"
                y1="140"
                x2="1030"
                y2="200"
                stroke="#10b981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <line
                x1="1070"
                y1="150"
                x2="1030"
                y2="260"
                stroke="#10b981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />
              <line
                x1="1070"
                y1="160"
                x2="1030"
                y2="320"
                stroke="#10b981"
                strokeWidth="2"
                markerEnd="url(#arrow-green)"
              />

              {/* System Admin to Use Cases */}
              <line
                x1="130"
                y1="710"
                x2="170"
                y2="520"
                stroke="#8b5cf6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <line
                x1="130"
                y1="720"
                x2="170"
                y2="580"
                stroke="#8b5cf6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />
              <line
                x1="130"
                y1="730"
                x2="170"
                y2="640"
                stroke="#8b5cf6"
                strokeWidth="2"
                markerEnd="url(#arrow-purple)"
              />

              {/* Payment Gateway to Use Cases */}
              <line
                x1="1100"
                y1="710"
                x2="1030"
                y2="520"
                stroke="#f97316"
                strokeWidth="2"
                markerEnd="url(#arrow-orange)"
              />
              <line
                x1="1100"
                y1="725"
                x2="1030"
                y2="580"
                stroke="#f97316"
                strokeWidth="2"
                markerEnd="url(#arrow-orange)"
              />

              {/* ========== INCLUDE/EXTEND RELATIONSHIPS ========== */}

              {/* Include relationships - Authentication is included in ALL use cases */}
              {/* To Shop Owner Use Cases (Manage Inventory) */}
              <path
                d="M 555 375 Q 450 300 240 165"
                stroke="#eab308"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#arrow-yellow)"
              />
              <text
                x="420"
                y="290"
                className="fill-yellow-700 text-xs font-semibold"
              >
                &lt;&lt;include&gt;&gt;
              </text>

              {/* To Buyer Use Cases (Search Products) */}
              <path
                d="M 645 375 Q 750 300 960 165"
                stroke="#eab308"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#arrow-yellow)"
              />
              <text
                x="780"
                y="290"
                className="fill-yellow-700 text-xs font-semibold"
              >
                &lt;&lt;include&gt;&gt;
              </text>

              {/* To System Admin Use Cases (Manage Users) */}
              <path
                d="M 555 425 Q 450 480 240 540"
                stroke="#eab308"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#arrow-yellow)"
              />
              <text
                x="420"
                y="490"
                className="fill-yellow-700 text-xs font-semibold"
              >
                &lt;&lt;include&gt;&gt;
              </text>

              {/* To Payment Gateway Use Cases (Process Payment) */}
              <path
                d="M 645 425 Q 750 480 960 540"
                stroke="#eab308"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#arrow-yellow)"
              />
              <text
                x="780"
                y="490"
                className="fill-yellow-700 text-xs font-semibold"
              >
                &lt;&lt;include&gt;&gt;
              </text>

              {/* Extend relationships - Special cases */}
              <path
                d="M 580 365 Q 500 300 300 200"
                stroke="#ef4444"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#arrow-red)"
              />
              <text
                x="400"
                y="280"
                className="fill-red-700 text-xs font-semibold"
              >
                &lt;&lt;extend&gt;&gt;
              </text>
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
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
              <Link className="h-5 w-5 mr-2 text-slate-600" />
              UML Relationship Types
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
          <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
            <ClipboardList className="h-5 w-5 mr-2 text-slate-600" />
            Detailed Use Case Specifications
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
          <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2 text-slate-600" />
            Use Case Diagram Summary
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
