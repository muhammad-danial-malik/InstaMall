import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Settings } from "lucide-react";

export default function ComponentDiagram() {
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
            <div className="w-16 h-16 bg-linear-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Component Diagram
              </h1>
              <p className="text-xl text-slate-600">
                Modular architecture and dependencies
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              System Architecture
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Component diagrams show the physical structure of the system,
              illustrating the organization and dependencies among software
              components in the InstaMall platform.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              System Components
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <h4 className="font-semibold text-pink-900">
                  🖥️ Frontend Layer
                </h4>
                <p className="text-pink-800 text-sm">
                  React components, UI libraries, state management
                </p>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <h4 className="font-semibold text-pink-900">⚙️ API Gateway</h4>
                <p className="text-pink-800 text-sm">
                  Request routing, authentication, rate limiting
                </p>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <h4 className="font-semibold text-pink-900">
                  🔧 Business Logic
                </h4>
                <p className="text-pink-800 text-sm">
                  Core services, domain logic, workflows
                </p>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <h4 className="font-semibold text-pink-900">💾 Data Layer</h4>
                <p className="text-pink-800 text-sm">
                  Database connections, ORM, caching
                </p>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <h4 className="font-semibold text-pink-900">
                  🔗 External Services
                </h4>
                <p className="text-pink-800 text-sm">
                  Payment gateways, shipping APIs, notifications
                </p>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <h4 className="font-semibold text-pink-900">📊 Analytics</h4>
                <p className="text-pink-800 text-sm">
                  Reporting, monitoring, performance metrics
                </p>
              </div>
            </div>

            <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-pink-900 mb-2">
                🔧 Microservices Architecture
              </h3>
              <p className="text-pink-800">
                Modular design allowing independent deployment, scaling, and
                maintenance of system components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
