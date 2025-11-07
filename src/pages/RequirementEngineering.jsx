import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Zap } from "lucide-react";

export default function RequirementEngineering() {
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
            <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                State Machine Diagram
              </h1>
              <p className="text-xl text-slate-600">
                State transitions for orders and inventory
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              System State Management
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              State machine diagrams model the behavior of objects that change
              state in response to events, showing the lifecycle of orders and
              inventory items in the InstaMall system.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Order States
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                <span className="text-orange-900 font-medium">Pending</span>
                <span className="text-orange-700 text-sm ml-auto">
                  Initial order state
                </span>
              </div>
              <div className="flex items-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                <span className="text-orange-900 font-medium">Confirmed</span>
                <span className="text-orange-700 text-sm ml-auto">
                  Payment verified
                </span>
              </div>
              <div className="flex items-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                <span className="text-orange-900 font-medium">Processing</span>
                <span className="text-orange-700 text-sm ml-auto">
                  Order being prepared
                </span>
              </div>
              <div className="flex items-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                <span className="text-orange-900 font-medium">Shipped</span>
                <span className="text-orange-700 text-sm ml-auto">
                  Order in transit
                </span>
              </div>
              <div className="flex items-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                <span className="text-green-900 font-medium">Delivered</span>
                <span className="text-green-700 text-sm ml-auto">
                  Final state
                </span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Inventory States
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">📦 In Stock</h4>
                <p className="text-slate-700 text-sm">Available for purchase</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">⚠️ Low Stock</h4>
                <p className="text-slate-700 text-sm">Limited availability</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">
                  🚫 Out of Stock
                </h4>
                <p className="text-slate-700 text-sm">
                  Temporarily unavailable
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">🔄 Restocking</h4>
                <p className="text-slate-700 text-sm">Being replenished</p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">
                ⚡ Event-Driven Architecture
              </h3>
              <p className="text-orange-800">
                State transitions are triggered by events such as user actions,
                payment confirmations, and external service callbacks, ensuring
                reliable system behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
