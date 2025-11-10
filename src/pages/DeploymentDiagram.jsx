import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  Server,
  RefreshCw,
  BarChart3,
  Lock,
  TrendingUp,
} from "lucide-react";

export default function DeploymentDiagram() {
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
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <Server className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Deployment Diagram
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                System hardware and software environment
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Production Environment */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Production Environment
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <svg viewBox="0 0 1000 500" className="w-full h-auto">
                <defs>
                  <marker
                    id="arrowhead-slate"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                  </marker>
                  <pattern
                    id="serverPattern"
                    patternUnits="userSpaceOnUse"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#f1f5f9" />
                    <circle cx="10" cy="10" r="2" fill="#94a3b8" />
                  </pattern>
                </defs>

                {/* Cloud Boundary */}
                <rect
                  x="20"
                  y="20"
                  width="960"
                  height="460"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                  rx="20"
                />
                <text
                  x="50"
                  y="50"
                  className="text-lg font-bold fill-green-700"
                >
                  AWS Cloud Environment
                </text>

                {/* Load Balancer */}
                <rect
                  x="100"
                  y="100"
                  width="80"
                  height="60"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  rx="5"
                />
                <text
                  x="140"
                  y="125"
                  textAnchor="middle"
                  className="text-sm font-bold fill-yellow-900"
                >
                  Load
                </text>
                <text
                  x="140"
                  y="138"
                  textAnchor="middle"
                  className="text-sm font-bold fill-yellow-900"
                >
                  Balancer
                </text>
                <text
                  x="140"
                  y="155"
                  textAnchor="middle"
                  className="text-xs fill-yellow-700"
                >
                  ALB
                </text>

                {/* Web Servers */}
                <rect
                  x="250"
                  y="80"
                  width="120"
                  height="120"
                  fill="url(#serverPattern)"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="310"
                  y="105"
                  textAnchor="middle"
                  className="text-sm font-bold fill-blue-900"
                >
                  Web Servers
                </text>
                <text
                  x="310"
                  y="120"
                  textAnchor="middle"
                  className="text-xs fill-blue-700"
                >
                  EC2 Auto Scaling
                </text>

                {/* Server 1 */}
                <rect
                  x="270"
                  y="135"
                  width="35"
                  height="25"
                  fill="#dbeafe"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  rx="3"
                />
                <text
                  x="287"
                  y="150"
                  textAnchor="middle"
                  className="text-xs fill-blue-900"
                >
                  Srv1
                </text>

                {/* Server 2 */}
                <rect
                  x="315"
                  y="135"
                  width="35"
                  height="25"
                  fill="#dbeafe"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  rx="3"
                />
                <text
                  x="332"
                  y="150"
                  textAnchor="middle"
                  className="text-xs fill-blue-900"
                >
                  Srv2
                </text>

                {/* API Gateway */}
                <rect
                  x="420"
                  y="100"
                  width="80"
                  height="60"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  rx="5"
                />
                <text
                  x="460"
                  y="125"
                  textAnchor="middle"
                  className="text-sm font-bold fill-yellow-900"
                >
                  API
                </text>
                <text
                  x="460"
                  y="138"
                  textAnchor="middle"
                  className="text-sm font-bold fill-yellow-900"
                >
                  Gateway
                </text>
                <text
                  x="460"
                  y="155"
                  textAnchor="middle"
                  className="text-xs fill-yellow-700"
                >
                  API GW
                </text>

                {/* Application Servers */}
                <rect
                  x="550"
                  y="80"
                  width="120"
                  height="120"
                  fill="url(#serverPattern)"
                  stroke="#10b981"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="610"
                  y="105"
                  textAnchor="middle"
                  className="text-sm font-bold fill-green-900"
                >
                  App Servers
                </text>
                <text
                  x="610"
                  y="120"
                  textAnchor="middle"
                  className="text-xs fill-green-700"
                >
                  Microservices
                </text>

                {/* Order Service */}
                <rect
                  x="570"
                  y="135"
                  width="35"
                  height="25"
                  fill="#ecfdf5"
                  stroke="#10b981"
                  strokeWidth="2"
                  rx="3"
                />
                <text
                  x="587"
                  y="150"
                  textAnchor="middle"
                  className="text-xs fill-green-900"
                >
                  Order
                </text>

                {/* Product Service */}
                <rect
                  x="615"
                  y="135"
                  width="35"
                  height="25"
                  fill="#ecfdf5"
                  stroke="#10b981"
                  strokeWidth="2"
                  rx="3"
                />
                <text
                  x="632"
                  y="150"
                  textAnchor="middle"
                  className="text-xs fill-green-900"
                >
                  Product
                </text>

                {/* Database Cluster */}
                <rect
                  x="720"
                  y="100"
                  width="120"
                  height="80"
                  fill="#f3e8ff"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="780"
                  y="125"
                  textAnchor="middle"
                  className="text-sm font-bold fill-purple-900"
                >
                  Database
                </text>
                <text
                  x="780"
                  y="140"
                  textAnchor="middle"
                  className="text-sm font-bold fill-purple-900"
                >
                  Cluster
                </text>

                {/* Primary DB */}
                <rect
                  x="740"
                  y="150"
                  width="35"
                  height="20"
                  fill="#f3e8ff"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  rx="3"
                />
                <text
                  x="757"
                  y="162"
                  textAnchor="middle"
                  className="text-xs fill-purple-900"
                >
                  Primary
                </text>

                {/* Replica DB */}
                <rect
                  x="785"
                  y="150"
                  width="35"
                  height="20"
                  fill="#f3e8ff"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  rx="3"
                />
                <text
                  x="802"
                  y="162"
                  textAnchor="middle"
                  className="text-xs fill-purple-900"
                >
                  Replica
                </text>

                {/* Redis Cache */}
                <rect
                  x="720"
                  y="200"
                  width="80"
                  height="40"
                  fill="#fef2f2"
                  stroke="#ef4444"
                  strokeWidth="3"
                  rx="5"
                />
                <text
                  x="760"
                  y="220"
                  textAnchor="middle"
                  className="text-sm font-bold fill-red-900"
                >
                  Redis Cache
                </text>
                <text
                  x="760"
                  y="235"
                  textAnchor="middle"
                  className="text-xs fill-red-700"
                >
                  ElastiCache
                </text>

                {/* External Services */}
                <rect
                  x="850"
                  y="100"
                  width="100"
                  height="140"
                  fill="#f0fdfa"
                  stroke="#14b8a6"
                  strokeWidth="3"
                  rx="10"
                />
                <text
                  x="900"
                  y="125"
                  textAnchor="middle"
                  className="text-sm font-bold fill-teal-900"
                >
                  External
                </text>
                <text
                  x="900"
                  y="140"
                  textAnchor="middle"
                  className="text-sm font-bold fill-teal-900"
                >
                  Services
                </text>

                {/* Payment API */}
                <rect
                  x="870"
                  y="150"
                  width="60"
                  height="25"
                  fill="#f0fdfa"
                  stroke="#14b8a6"
                  strokeWidth="2"
                  rx="3"
                />
                <text
                  x="900"
                  y="165"
                  textAnchor="middle"
                  className="text-xs fill-teal-900"
                >
                  Stripe API
                </text>

                {/* Shipping API */}
                <rect
                  x="870"
                  y="185"
                  width="60"
                  height="25"
                  fill="#f0fdfa"
                  stroke="#14b8a6"
                  strokeWidth="2"
                  rx="3"
                />
                <text
                  x="900"
                  y="200"
                  textAnchor="middle"
                  className="text-xs fill-teal-900"
                >
                  Shippo API
                </text>

                {/* Monitoring */}
                <rect
                  x="100"
                  y="300"
                  width="100"
                  height="60"
                  fill="#f3e8ff"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  rx="5"
                />
                <text
                  x="150"
                  y="325"
                  textAnchor="middle"
                  className="text-sm font-bold fill-purple-900"
                >
                  Monitoring
                </text>
                <text
                  x="150"
                  y="340"
                  textAnchor="middle"
                  className="text-xs fill-purple-700"
                >
                  CloudWatch
                </text>

                {/* CDN */}
                <rect
                  x="250"
                  y="320"
                  width="80"
                  height="40"
                  fill="#fef3c7"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  rx="5"
                />
                <text
                  x="290"
                  y="340"
                  textAnchor="middle"
                  className="text-sm font-bold fill-yellow-900"
                >
                  CDN
                </text>
                <text
                  x="290"
                  y="355"
                  textAnchor="middle"
                  className="text-xs fill-yellow-700"
                >
                  CloudFront
                </text>

                {/* User Connections */}
                <line
                  x1="50"
                  y1="250"
                  x2="100"
                  y2="130"
                  stroke="#64748b"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-slate)"
                />
                <text
                  x="75"
                  y="190"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  HTTPS
                </text>
                <text
                  x="75"
                  y="205"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  443
                </text>

                {/* Load Balancer to Web Servers */}
                <line
                  x1="180"
                  y1="130"
                  x2="250"
                  y2="130"
                  stroke="#64748b"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-slate)"
                />
                <text
                  x="215"
                  y="125"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  HTTP
                </text>

                {/* Web Servers to API Gateway */}
                <line
                  x1="370"
                  y1="130"
                  x2="420"
                  y2="130"
                  stroke="#64748b"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-slate)"
                />
                <text
                  x="395"
                  y="125"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  REST API
                </text>

                {/* API Gateway to App Servers */}
                <line
                  x1="500"
                  y1="130"
                  x2="550"
                  y2="130"
                  stroke="#64748b"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-slate)"
                />
                <text
                  x="525"
                  y="125"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  gRPC
                </text>

                {/* App Servers to Database */}
                <line
                  x1="670"
                  y1="140"
                  x2="720"
                  y2="140"
                  stroke="#64748b"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-slate)"
                />
                <text
                  x="695"
                  y="135"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  JDBC
                </text>

                {/* App Servers to Cache */}
                <line
                  x1="610"
                  y1="200"
                  x2="720"
                  y2="220"
                  stroke="#64748b"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-slate)"
                />
                <text
                  x="665"
                  y="215"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  Redis Protocol
                </text>

                {/* App Servers to External Services */}
                <line
                  x1="670"
                  y1="160"
                  x2="850"
                  y2="160"
                  stroke="#64748b"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-slate)"
                />
                <text
                  x="760"
                  y="155"
                  textAnchor="middle"
                  className="text-xs fill-slate-700"
                >
                  HTTPS API
                </text>

                {/* Monitoring connections */}
                <line
                  x1="200"
                  y1="330"
                  x2="250"
                  y2="330"
                  stroke="#64748b"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <line
                  x1="330"
                  y1="330"
                  x2="370"
                  y2="330"
                  stroke="#64748b"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <line
                  x1="150"
                  y1="360"
                  x2="150"
                  y2="380"
                  stroke="#64748b"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <text
                  x="150"
                  y="395"
                  textAnchor="middle"
                  className="text-xs fill-slate-600"
                >
                  Metrics Collection
                </text>
              </svg>
            </div>
          </div>

          {/* AWS Architecture Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              AWS Architecture Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Edge Layer */}
              <div className="bg-linear-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                  Edge Layer
                </h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li>• <strong>CloudFront:</strong> Global CDN for static assets</li>
                  <li>• <strong>Route 53:</strong> DNS routing and health checks</li>
                  <li>• <strong>Web ACL:</strong> DDoS protection and WAF rules</li>
                </ul>
              </div>

              {/* Load Balancing */}
              <div className="bg-linear-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  Load Balancing
                </h3>
                <ul className="text-yellow-800 space-y-2 text-sm">
                  <li>• <strong>Application Load Balancer:</strong> Layer 7 routing</li>
                  <li>• <strong>Auto Scaling:</strong> Dynamic capacity management</li>
                  <li>• <strong>Health Checks:</strong> Automatic instance replacement</li>
                </ul>
              </div>

              {/* Application Tier */}
              <div className="bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  Application Tier
                </h3>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• <strong>EC2 Instances:</strong> Web and app servers</li>
                  <li>• <strong>Security Groups:</strong> Network access control</li>
                  <li>• <strong>IAM Roles:</strong> Service permissions & credentials</li>
                </ul>
              </div>

              {/* API Gateway */}
              <div className="bg-linear-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  API Gateway
                </h3>
                <ul className="text-indigo-800 space-y-2 text-sm">
                  <li>• <strong>REST APIs:</strong> Endpoint management</li>
                  <li>• <strong>API Keys:</strong> Client authentication</li>
                  <li>• <strong>Rate Limiting:</strong> Throttling & quotas</li>
                </ul>
              </div>

              {/* Microservices */}
              <div className="bg-linear-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Microservices
                </h3>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>• <strong>Order Service:</strong> Transaction management</li>
                  <li>• <strong>Product Service:</strong> Catalog operations</li>
                  <li>• <strong>User Service:</strong> Profile & authentication</li>
                </ul>
              </div>

              {/* Database Tier */}
              <div className="bg-linear-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  Database Tier
                </h3>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• <strong>RDS Aurora:</strong> Multi-AZ replication</li>
                  <li>• <strong>Read Replicas:</strong> Read performance scaling</li>
                  <li>• <strong>Automated Backups:</strong> Point-in-time recovery</li>
                </ul>
              </div>

              {/* Storage */}
              <div className="bg-linear-to-br from-cyan-50 to-cyan-100 border border-cyan-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-cyan-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></span>
                  Storage
                </h3>
                <ul className="text-cyan-800 space-y-2 text-sm">
                  <li>• <strong>S3 Buckets:</strong> Object storage for assets</li>
                  <li>• <strong>EBS Volumes:</strong> Persistent block storage</li>
                  <li>• <strong>Versioning:</strong> File history & recovery</li>
                </ul>
              </div>

              {/* Caching & Queue */}
              <div className="bg-linear-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                  Caching & Messaging
                </h3>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• <strong>ElastiCache:</strong> In-memory caching</li>
                  <li>• <strong>SQS:</strong> Message queuing service</li>
                  <li>• <strong>SNS:</strong> Event notifications</li>
                </ul>
              </div>

              {/* Monitoring & Logging */}
              <div className="bg-linear-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  Monitoring & Logging
                </h3>
                <ul className="text-red-800 space-y-2 text-sm">
                  <li>• <strong>CloudWatch:</strong> Metrics & alarms</li>
                  <li>• <strong>CloudTrail:</strong> API audit logging</li>
                  <li>• <strong>X-Ray:</strong> Distributed tracing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development & Staging Environments */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Development & Staging Environments
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Development Environment */}
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Development Environment
                </h3>
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  <defs>
                    <pattern
                      id="devPattern"
                      patternUnits="userSpaceOnUse"
                      width="15"
                      height="15"
                    >
                      <rect width="15" height="15" fill="#f8fafc" />
                      <circle cx="7.5" cy="7.5" r="1.5" fill="#cbd5e1" />
                    </pattern>
                  </defs>

                  {/* Developer Machine */}
                  <rect
                    x="50"
                    y="50"
                    width="80"
                    height="60"
                    fill="url(#devPattern)"
                    stroke="#64748b"
                    strokeWidth="2"
                    rx="5"
                  />
                  <text
                    x="90"
                    y="75"
                    textAnchor="middle"
                    className="text-sm font-bold fill-slate-900"
                  >
                    Dev
                  </text>
                  <text
                    x="90"
                    y="88"
                    textAnchor="middle"
                    className="text-sm font-bold fill-slate-900"
                  >
                    Machine
                  </text>

                  {/* Local Services */}
                  <rect
                    x="200"
                    y="40"
                    width="120"
                    height="80"
                    fill="#fef3c7"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    rx="5"
                  />
                  <text
                    x="260"
                    y="60"
                    textAnchor="middle"
                    className="text-sm font-bold fill-yellow-900"
                  >
                    Local Services
                  </text>

                  {/* Docker Container */}
                  <rect
                    x="220"
                    y="70"
                    width="40"
                    height="30"
                    fill="#dbeafe"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    rx="3"
                  />
                  <text
                    x="240"
                    y="87"
                    textAnchor="middle"
                    className="text-xs fill-blue-900"
                  >
                    Docker
                  </text>

                  {/* Database */}
                  <rect
                    x="270"
                    y="70"
                    width="40"
                    height="30"
                    fill="#f3e8ff"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    rx="3"
                  />
                  <text
                    x="290"
                    y="87"
                    textAnchor="middle"
                    className="text-xs fill-purple-900"
                  >
                    DB
                  </text>

                  {/* Version Control */}
                  <rect
                    x="150"
                    y="150"
                    width="100"
                    height="50"
                    fill="#ecfdf5"
                    stroke="#10b981"
                    strokeWidth="2"
                    rx="5"
                  />
                  <text
                    x="200"
                    y="170"
                    textAnchor="middle"
                    className="text-sm font-bold fill-green-900"
                  >
                    Git Repository
                  </text>
                  <text
                    x="200"
                    y="185"
                    textAnchor="middle"
                    className="text-xs fill-green-700"
                  >
                    GitHub
                  </text>

                  {/* CI/CD */}
                  <rect
                    x="50"
                    y="220"
                    width="80"
                    height="50"
                    fill="#fef2f2"
                    stroke="#ef4444"
                    strokeWidth="2"
                    rx="5"
                  />
                  <text
                    x="90"
                    y="240"
                    textAnchor="middle"
                    className="text-sm font-bold fill-red-900"
                  >
                    CI/CD
                  </text>
                  <text
                    x="90"
                    y="255"
                    textAnchor="middle"
                    className="text-xs fill-red-700"
                  >
                    GitHub Actions
                  </text>

                  {/* Connections */}
                  <line
                    x1="130"
                    y1="80"
                    x2="200"
                    y2="70"
                    stroke="#64748b"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-slate)"
                  />
                  <line
                    x1="90"
                    y1="110"
                    x2="90"
                    y2="150"
                    stroke="#64748b"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-slate)"
                  />
                  <line
                    x1="200"
                    y1="200"
                    x2="200"
                    y2="220"
                    stroke="#64748b"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-slate)"
                  />
                </svg>
              </div>

              {/* Staging Environment */}
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Staging Environment
                </h3>
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  {/* Staging Boundary */}
                  <rect
                    x="20"
                    y="20"
                    width="360"
                    height="260"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="8,4"
                    rx="10"
                  />
                  <text
                    x="40"
                    y="40"
                    className="text-sm font-bold fill-yellow-700"
                  >
                    Staging Environment
                  </text>

                  {/* Single Server */}
                  <rect
                    x="80"
                    y="60"
                    width="80"
                    height="60"
                    fill="url(#serverPattern)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    rx="5"
                  />
                  <text
                    x="120"
                    y="85"
                    textAnchor="middle"
                    className="text-sm font-bold fill-blue-900"
                  >
                    App
                  </text>
                  <text
                    x="120"
                    y="98"
                    textAnchor="middle"
                    className="text-sm font-bold fill-blue-900"
                  >
                    Server
                  </text>

                  {/* Database */}
                  <rect
                    x="200"
                    y="80"
                    width="60"
                    height="40"
                    fill="#f3e8ff"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    rx="5"
                  />
                  <text
                    x="230"
                    y="100"
                    textAnchor="middle"
                    className="text-sm font-bold fill-purple-900"
                  >
                    DB
                  </text>

                  {/* Cache */}
                  <rect
                    x="200"
                    y="140"
                    width="60"
                    height="30"
                    fill="#fef2f2"
                    stroke="#ef4444"
                    strokeWidth="2"
                    rx="3"
                  />
                  <text
                    x="230"
                    y="157"
                    textAnchor="middle"
                    className="text-xs fill-red-900"
                  >
                    Redis
                  </text>

                  {/* Testing Tools */}
                  <rect
                    x="50"
                    y="160"
                    width="100"
                    height="50"
                    fill="#ecfdf5"
                    stroke="#10b981"
                    strokeWidth="2"
                    rx="5"
                  />
                  <text
                    x="100"
                    y="180"
                    textAnchor="middle"
                    className="text-sm font-bold fill-green-900"
                  >
                    Testing
                  </text>
                  <text
                    x="100"
                    y="195"
                    textAnchor="middle"
                    className="text-sm font-bold fill-green-900"
                  >
                    Suite
                  </text>

                  {/* Monitoring */}
                  <rect
                    x="200"
                    y="190"
                    width="80"
                    height="40"
                    fill="#f0fdfa"
                    stroke="#14b8a6"
                    strokeWidth="2"
                    rx="5"
                  />
                  <text
                    x="240"
                    y="210"
                    textAnchor="middle"
                    className="text-sm font-bold fill-teal-900"
                  >
                    Monitor
                  </text>

                  {/* Connections */}
                  <line
                    x1="160"
                    y1="90"
                    x2="200"
                    y2="90"
                    stroke="#64748b"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-slate)"
                  />
                  <line
                    x1="230"
                    y1="120"
                    x2="230"
                    y2="140"
                    stroke="#64748b"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-slate)"
                  />
                  <line
                    x1="120"
                    y1="120"
                    x2="120"
                    y2="160"
                    stroke="#64748b"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-slate)"
                  />
                  <line
                    x1="150"
                    y1="210"
                    x2="200"
                    y2="210"
                    stroke="#64748b"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-slate)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Deployment Artifacts */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Deployment Artifacts & Configuration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Container Images
                </h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• instamall-web:v1.2.3</li>
                  <li>• instamall-api:v1.2.3</li>
                  <li>• instamall-worker:v1.2.3</li>
                  <li>• nginx:alpine</li>
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Configuration Files
                </h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• docker-compose.yml</li>
                  <li>• kubernetes manifests</li>
                  <li>• nginx.conf</li>
                  <li>• environment variables</li>
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Infrastructure as Code
                </h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Terraform modules</li>
                  <li>• CloudFormation templates</li>
                  <li>• Ansible playbooks</li>
                  <li>• Helm charts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Deployment Metrics */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Infrastructure Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  99.9%
                </div>
                <div className="text-sm font-medium text-green-900">
                  Uptime SLA
                </div>
                <div className="text-xs text-green-700 mt-1">
                  Production guarantee
                </div>
              </div>
              <div className="text-center bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  &lt;2s
                </div>
                <div className="text-sm font-medium text-blue-900">
                  Response Time
                </div>
                <div className="text-xs text-blue-700 mt-1">
                  Average latency
                </div>
              </div>
              <div className="text-center bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  10k+
                </div>
                <div className="text-sm font-medium text-purple-900">RPM</div>
                <div className="text-xs text-purple-700 mt-1">
                  Requests per minute
                </div>
              </div>
              <div className="text-center bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-600 mb-2">3</div>
                <div className="text-sm font-medium text-yellow-900">
                  Environments
                </div>
                <div className="text-xs text-yellow-700 mt-1">
                  Dev/Staging/Prod
                </div>
              </div>
            </div>

            <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Deployment Strategy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <RefreshCw className="h-4 w-4 mr-2 text-blue-600" />
                    Blue-Green Deployment
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Zero-downtime deployments with instant rollback capability
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2 text-green-600" />
                    Auto Scaling
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Horizontal scaling based on CPU utilization and request load
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <Lock className="h-4 w-4 mr-2 text-red-600" />
                    Multi-AZ Deployment
                  </h4>
                  <p className="text-slate-700 text-sm">
                    High availability across multiple availability zones
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-purple-600" />
                    Continuous Monitoring
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Real-time performance monitoring and alerting systems
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
