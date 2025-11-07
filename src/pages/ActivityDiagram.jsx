import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Activity } from "lucide-react";

export default function ActivityDiagram() {
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
            <div className="w-16 h-16 bg-linear-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Activity Diagram
              </h1>
              <p className="text-xl text-slate-600">
                Workflow and process logic visualization
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Business Process Flows
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Activity diagrams model the workflow of business processes,
              showing the flow of control from one activity to another within
              the InstaMall system.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Process Workflows
            </h3>
            <div className="space-y-4 mb-6">
              <div className="border border-rose-200 rounded-lg p-4 bg-rose-50">
                <h4 className="font-semibold text-rose-900 mb-2">
                  🛍️ Customer Purchase Flow
                </h4>
                <p className="text-rose-800 text-sm">
                  Browse → Select → Add to Cart → Checkout → Payment →
                  Confirmation
                </p>
              </div>
              <div className="border border-rose-200 rounded-lg p-4 bg-rose-50">
                <h4 className="font-semibold text-rose-900 mb-2">
                  📦 Order Processing
                </h4>
                <p className="text-rose-800 text-sm">
                  Order Received → Payment Verification → Inventory Check →
                  Shipping → Delivery
                </p>
              </div>
              <div className="border border-rose-200 rounded-lg p-4 bg-rose-50">
                <h4 className="font-semibold text-rose-900 mb-2">
                  🔄 Returns & Refunds
                </h4>
                <p className="text-rose-800 text-sm">
                  Return Request → Inspection → Approval → Refund → Restocking
                </p>
              </div>
            </div>

            <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-rose-900 mb-2">
                🔀 Decision Points
              </h3>
              <p className="text-rose-800">
                Shows conditional logic, parallel processes, and decision-making
                points in the business workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
