import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Database } from "lucide-react";

export default function DataFlowDiagram() {
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
            <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <Database className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Data Flow Diagram (DFD)
              </h1>
              <p className="text-xl text-slate-600">
                Data movement through the system
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Data Processing & Flow
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Data Flow Diagrams illustrate how data moves through the system,
              showing processes, data stores, external entities, and data flows
              within the InstaMall platform.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Data Flow Components
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-900">🔄 Processes</h4>
                <p className="text-indigo-800 text-sm">
                  Data transformation operations
                </p>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-900">
                  💾 Data Stores
                </h4>
                <p className="text-indigo-800 text-sm">
                  Persistent data repositories
                </p>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-900">
                  👥 External Entities
                </h4>
                <p className="text-indigo-800 text-sm">
                  Users and external systems
                </p>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-900">➡️ Data Flows</h4>
                <p className="text-indigo-800 text-sm">
                  Movement of data between components
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                📊 Data Integrity
              </h3>
              <p className="text-indigo-800">
                Ensures data accuracy, consistency, and security throughout the
                system processes and storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
