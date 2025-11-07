import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, GitBranch } from "lucide-react";

export default function ClassDiagram() {
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
            <div className="w-16 h-16 bg-linear-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <GitBranch className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Class Diagram
              </h1>
              <p className="text-xl text-slate-600">
                Structure of classes and their relationships
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Object-Oriented Design
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The class diagram represents the static structure of the InstaMall
              system, showing classes, their attributes, methods, and
              relationships.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Core Classes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                <h4 className="font-semibold text-violet-900">User</h4>
                <p className="text-violet-800 text-sm">
                  Base user class with authentication
                </p>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                <h4 className="font-semibold text-violet-900">Product</h4>
                <p className="text-violet-800 text-sm">
                  Product catalog and inventory
                </p>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                <h4 className="font-semibold text-violet-900">Order</h4>
                <p className="text-violet-800 text-sm">
                  Order management and tracking
                </p>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                <h4 className="font-semibold text-violet-900">Cart</h4>
                <p className="text-violet-800 text-sm">
                  Shopping cart functionality
                </p>
              </div>
            </div>

            <div className="bg-violet-50 border border-violet-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-violet-900 mb-2">
                🏗️ Design Patterns
              </h3>
              <p className="text-violet-800">
                Implements MVC pattern, Factory pattern for object creation, and
                Observer pattern for notifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
