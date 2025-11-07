import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SequenceDiagram() {
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
            <div className="w-16 h-16 bg-linear-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Sequence Diagram
              </h1>
              <p className="text-xl text-slate-600">
                Order of interactions between system modules
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Interaction Flow
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Sequence diagrams show the chronological order of messages
              exchanged between objects in a system, illustrating the dynamic
              behavior of the InstaMall platform.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Key Sequences
            </h3>
            <div className="space-y-4 mb-6">
              <div className="border border-amber-200 rounded-lg p-4 bg-amber-50">
                <h4 className="font-semibold text-amber-900 mb-2">
                  🔐 User Authentication Flow
                </h4>
                <p className="text-amber-800 text-sm">
                  User → Login Form → Auth Service → Database → JWT Token
                </p>
              </div>
              <div className="border border-amber-200 rounded-lg p-4 bg-amber-50">
                <h4 className="font-semibold text-amber-900 mb-2">
                  🛒 Checkout Process
                </h4>
                <p className="text-amber-800 text-sm">
                  Cart → Order Service → Payment Gateway → Inventory →
                  Confirmation
                </p>
              </div>
              <div className="border border-amber-200 rounded-lg p-4 bg-amber-50">
                <h4 className="font-semibold text-amber-900 mb-2">
                  📦 Order Fulfillment
                </h4>
                <p className="text-amber-800 text-sm">
                  Order → Warehouse → Shipping → Tracking → Delivery
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                ⏱️ Timing & Synchronization
              </h3>
              <p className="text-amber-800">
                Critical for understanding system performance, identifying
                bottlenecks, and ensuring proper synchronization of operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
