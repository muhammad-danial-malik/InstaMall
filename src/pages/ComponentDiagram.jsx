import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Settings, CheckCircle } from "lucide-react";

export default function ComponentDiagram() {
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
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <Settings className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Component Diagram
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                Modular architecture and dependencies
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Main Component Architecture */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
              InstaMall Component Architecture
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <svg viewBox="0 0 1000 600" className="w-full h-auto">
                <defs>
                  <marker
                    id="arrowhead-pink"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ec4899" />
                  </marker>
                  <marker
                    id="interface-circle"
                    markerWidth="8"
                    markerHeight="8"
                    refX="4"
                    refY="4"
                    orient="auto"
                  >
                    <circle cx="4" cy="4" r="3" fill="#ec4899" />
                  </marker>
                </defs>

                {/* Presentation Layer */}
                <rect
                  x="50"
                  y="50"
                  width="200"
                  height="120"
                  fill="#fdf2f8"
                  stroke="#ec4899"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="150"
                  y="75"
                  textAnchor="middle"
                  className="text-lg font-bold fill-pink-900"
                >
                  Presentation Layer
                </text>
                <line
                  x1="50"
                  y1="85"
                  x2="250"
                  y2="85"
                  stroke="#ec4899"
                  strokeWidth="2"
                />

                {/* React App */}
                <rect
                  x="70"
                  y="100"
                  width="80"
                  height="50"
                  fill="#fce7f3"
                  stroke="#ec4899"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="110"
                  y="118"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-pink-900"
                >
                  React App
                </text>
                <text
                  x="110"
                  y="132"
                  textAnchor="middle"
                  className="text-xs fill-pink-700"
                >
                  SPA
                </text>

                {/* UI Components */}
                <rect
                  x="170"
                  y="100"
                  width="80"
                  height="50"
                  fill="#fce7f3"
                  stroke="#ec4899"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="210"
                  y="115"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-pink-900"
                >
                  UI
                </text>
                <text
                  x="210"
                  y="128"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-pink-900"
                >
                  Components
                </text>

                {/* Application Layer */}
                <rect
                  x="300"
                  y="50"
                  width="200"
                  height="120"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="400"
                  y="75"
                  textAnchor="middle"
                  className="text-lg font-bold fill-yellow-900"
                >
                  Application Layer
                </text>
                <line
                  x1="300"
                  y1="85"
                  x2="500"
                  y2="85"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />

                {/* API Gateway */}
                <rect
                  x="320"
                  y="100"
                  width="80"
                  height="50"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="360"
                  y="115"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-yellow-900"
                >
                  API
                </text>
                <text
                  x="360"
                  y="128"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-yellow-900"
                >
                  Gateway
                </text>

                {/* Auth Service */}
                <rect
                  x="420"
                  y="100"
                  width="70"
                  height="50"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="455"
                  y="115"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-yellow-900"
                >
                  Auth
                </text>
                <text
                  x="455"
                  y="128"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-yellow-900"
                >
                  Service
                </text>

                {/* Business Layer */}
                <rect
                  x="550"
                  y="50"
                  width="200"
                  height="120"
                  fill="#ecfdf5"
                  stroke="#10b981"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="650"
                  y="75"
                  textAnchor="middle"
                  className="text-lg font-bold fill-green-900"
                >
                  Business Layer
                </text>
                <line
                  x1="550"
                  y1="85"
                  x2="750"
                  y2="85"
                  stroke="#10b981"
                  strokeWidth="2"
                />

                {/* Order Service */}
                <rect
                  x="570"
                  y="100"
                  width="70"
                  height="50"
                  fill="#ecfdf5"
                  stroke="#10b981"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="605"
                  y="115"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-green-900"
                >
                  Order
                </text>
                <text
                  x="605"
                  y="128"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-green-900"
                >
                  Service
                </text>

                {/* Product Service */}
                <rect
                  x="660"
                  y="100"
                  width="70"
                  height="50"
                  fill="#ecfdf5"
                  stroke="#10b981"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="695"
                  y="115"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-green-900"
                >
                  Product
                </text>
                <text
                  x="695"
                  y="128"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-green-900"
                >
                  Service
                </text>

                {/* Data Layer */}
                <rect
                  x="400"
                  y="220"
                  width="200"
                  height="120"
                  fill="#eff6ff"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="500"
                  y="245"
                  textAnchor="middle"
                  className="text-lg font-bold fill-blue-900"
                >
                  Data Layer
                </text>
                <line
                  x1="400"
                  y1="255"
                  x2="600"
                  y2="255"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />

                {/* Database */}
                <rect
                  x="420"
                  y="270"
                  width="70"
                  height="50"
                  fill="#eff6ff"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="455"
                  y="285"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-blue-900"
                >
                  PostgreSQL
                </text>
                <text
                  x="455"
                  y="298"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-blue-900"
                >
                  DB
                </text>

                {/* Cache */}
                <rect
                  x="510"
                  y="270"
                  width="70"
                  height="50"
                  fill="#eff6ff"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="545"
                  y="285"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-blue-900"
                >
                  Redis
                </text>
                <text
                  x="545"
                  y="298"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-blue-900"
                >
                  Cache
                </text>

                {/* External Services */}
                <rect
                  x="700"
                  y="220"
                  width="200"
                  height="120"
                  fill="#f3e8ff"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="800"
                  y="245"
                  textAnchor="middle"
                  className="text-lg font-bold fill-purple-900"
                >
                  External Services
                </text>
                <line
                  x1="700"
                  y1="255"
                  x2="900"
                  y2="255"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                />

                {/* Payment Gateway */}
                <rect
                  x="720"
                  y="270"
                  width="70"
                  height="50"
                  fill="#f3e8ff"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="755"
                  y="285"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-purple-900"
                >
                  Payment
                </text>
                <text
                  x="755"
                  y="298"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-purple-900"
                >
                  API
                </text>

                {/* Shipping API */}
                <rect
                  x="810"
                  y="270"
                  width="70"
                  height="50"
                  fill="#f3e8ff"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x="845"
                  y="285"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-purple-900"
                >
                  Shipping
                </text>
                <text
                  x="845"
                  y="298"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-purple-900"
                >
                  API
                </text>

                {/* Dependencies and Interfaces */}
                {/* Presentation to Application */}
                <line
                  x1="250"
                  y1="125"
                  x2="300"
                  y2="125"
                  stroke="#ec4899"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-pink)"
                />
                <text
                  x="275"
                  y="120"
                  textAnchor="middle"
                  className="text-xs fill-pink-700"
                >
                  HTTP/REST
                </text>

                {/* Application to Business */}
                <line
                  x1="500"
                  y1="125"
                  x2="550"
                  y2="125"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-pink)"
                />
                <text
                  x="525"
                  y="120"
                  textAnchor="middle"
                  className="text-xs fill-yellow-700"
                >
                  Service Calls
                </text>

                {/* Business to Data */}
                <line
                  x1="650"
                  y1="170"
                  x2="500"
                  y2="220"
                  stroke="#10b981"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-pink)"
                />
                <text
                  x="575"
                  y="190"
                  textAnchor="middle"
                  className="text-xs fill-green-700"
                >
                  ORM/Queries
                </text>

                {/* Business to External */}
                <line
                  x1="750"
                  y1="125"
                  x2="700"
                  y2="220"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-pink)"
                />
                <text
                  x="725"
                  y="170"
                  textAnchor="middle"
                  className="text-xs fill-purple-700"
                >
                  API Calls
                </text>

                {/* Application to Data */}
                <line
                  x1="500"
                  y1="170"
                  x2="500"
                  y2="220"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-pink)"
                />
                <text
                  x="510"
                  y="190"
                  textAnchor="middle"
                  className="text-xs fill-blue-700"
                >
                  Direct Access
                </text>

                {/* Interfaces */}
                {/* API Interface */}
                <circle cx="360" cy="95" r="4" fill="#f59e0b" />
                <text x="375" y="100" className="text-xs fill-yellow-700">
                  «interface»
                </text>
                <text x="375" y="112" className="text-xs fill-yellow-700">
                  IAPIGateway
                </text>

                {/* Service Interface */}
                <circle cx="605" cy="95" r="4" fill="#10b981" />
                <text x="620" y="100" className="text-xs fill-green-700">
                  «interface»
                </text>
                <text x="620" y="112" className="text-xs fill-green-700">
                  IOrderService
                </text>

                <circle cx="695" cy="95" r="4" fill="#10b981" />
                <text x="710" y="100" className="text-xs fill-green-700">
                  «interface»
                </text>
                <text x="710" y="112" className="text-xs fill-green-700">
                  IProductService
                </text>

                {/* Data Interface */}
                <circle cx="455" cy="265" r="4" fill="#3b82f6" />
                <text x="470" y="270" className="text-xs fill-blue-700">
                  «interface»
                </text>
                <text x="470" y="282" className="text-xs fill-blue-700">
                  IDatabase
                </text>

                <circle cx="545" cy="265" r="4" fill="#3b82f6" />
                <text x="560" y="270" className="text-xs fill-blue-700">
                  «interface»
                </text>
                <text x="560" y="282" className="text-xs fill-blue-700">
                  ICache
                </text>
              </svg>
            </div>
          </div>

          {/* Component Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Component Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <h3 className="font-semibold text-pink-900 mb-2">
                  Frontend Components
                </h3>
                <ul className="text-pink-800 text-sm space-y-1">
                  <li>• React Components</li>
                  <li>• State Management (Redux)</li>
                  <li>• UI Library (Shadcn/UI)</li>
                  <li>• Routing (React Router)</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 mb-2">
                  Application Layer
                </h3>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• API Gateway (Express.js)</li>
                  <li>• Authentication Service</li>
                  <li>• Request Validation</li>
                  <li>• Rate Limiting</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">
                  Business Services
                </h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Order Management</li>
                  <li>• Product Catalog</li>
                  <li>• User Management</li>
                  <li>• Inventory Control</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Data Components
                </h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• PostgreSQL Database</li>
                  <li>• Redis Cache Layer</li>
                  <li>• ORM (Prisma/TypeORM)</li>
                  <li>• Connection Pooling</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-2">
                  External Integrations
                </h3>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• Payment Gateway (Stripe)</li>
                  <li>• Shipping API</li>
                  <li>• Email Service</li>
                  <li>• Analytics Platform</li>
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Infrastructure
                </h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Docker Containers</li>
                  <li>• Kubernetes Orchestration</li>
                  <li>• Load Balancers</li>
                  <li>• Monitoring Stack</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Component Metrics */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Architecture Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center bg-pink-50 border border-pink-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-pink-600 mb-2">12</div>
                <div className="text-sm font-medium text-pink-900">
                  Components
                </div>
                <div className="text-xs text-pink-700 mt-1">Modular pieces</div>
              </div>
              <div className="text-center bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-600 mb-2">8</div>
                <div className="text-sm font-medium text-yellow-900">
                  Interfaces
                </div>
                <div className="text-xs text-yellow-700 mt-1">Contracts</div>
              </div>
              <div className="text-center bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  15+
                </div>
                <div className="text-sm font-medium text-green-900">
                  Dependencies
                </div>
                <div className="text-xs text-green-700 mt-1">Relationships</div>
              </div>
              <div className="text-center bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-sm font-medium text-blue-900">Layers</div>
                <div className="text-xs text-blue-700 mt-1">
                  Architecture tiers
                </div>
              </div>
            </div>

            <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Quality Attributes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Maintainability
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Loose coupling and high cohesion through interface
                    segregation
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Scalability
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Independent scaling of components based on load requirements
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Testability
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Dependency injection enables comprehensive unit and
                    integration testing
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Reusability
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Well-defined interfaces allow component reuse across
                    different contexts
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
