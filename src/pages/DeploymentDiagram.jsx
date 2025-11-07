import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Server } from "lucide-react";

export default function DeploymentDiagram() {
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
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-linear-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <Server className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Deployment Diagram
              </h1>
              <p className="text-xl text-slate-600">
                System hardware and software environment
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Infrastructure Architecture
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Deployment diagrams show the physical deployment of software
              components on hardware infrastructure, illustrating how the
              InstaMall system is distributed across different environments.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Deployment Environments
            </h3>
            <div className="space-y-4 mb-6">
              <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                <h4 className="font-semibold text-slate-900 mb-2">
                  🌐 Production Environment
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <span className="bg-white px-2 py-1 rounded">
                    Load Balancer
                  </span>
                  <span className="bg-white px-2 py-1 rounded">
                    Web Servers
                  </span>
                  <span className="bg-white px-2 py-1 rounded">
                    API Gateway
                  </span>
                  <span className="bg-white px-2 py-1 rounded">
                    Database Cluster
                  </span>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                <h4 className="font-semibold text-slate-900 mb-2">
                  🧪 Staging Environment
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <span className="bg-white px-2 py-1 rounded">
                    Test Servers
                  </span>
                  <span className="bg-white px-2 py-1 rounded">
                    QA Database
                  </span>
                  <span className="bg-white px-2 py-1 rounded">Monitoring</span>
                  <span className="bg-white px-2 py-1 rounded">
                    CI/CD Pipeline
                  </span>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                <h4 className="font-semibold text-slate-900 mb-2">
                  💻 Development Environment
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <span className="bg-white px-2 py-1 rounded">
                    Local Machines
                  </span>
                  <span className="bg-white px-2 py-1 rounded">
                    Dev Database
                  </span>
                  <span className="bg-white px-2 py-1 rounded">
                    Version Control
                  </span>
                  <span className="bg-white px-2 py-1 rounded">
                    Code Editors
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Infrastructure Components
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">
                  ☁️ Cloud Services
                </h4>
                <p className="text-slate-700 text-sm">
                  AWS/GCP/Azure infrastructure
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">
                  🐳 Containerization
                </h4>
                <p className="text-slate-700 text-sm">
                  Docker containers & orchestration
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">
                  🔒 Security Layer
                </h4>
                <p className="text-slate-700 text-sm">
                  Firewalls, SSL, authentication
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">📊 Monitoring</h4>
                <p className="text-slate-700 text-sm">
                  Performance tracking & alerting
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                🏗️ Scalability & Reliability
              </h3>
              <p className="text-slate-700">
                Designed for high availability with auto-scaling, load
                balancing, and disaster recovery capabilities to ensure 99.9%
                uptime for the InstaMall platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
