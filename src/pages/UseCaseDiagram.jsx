import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Users } from "lucide-react";

export default function UseCaseDiagram() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
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

          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Use Case Diagram
              </h1>
              <p className="text-xl text-slate-600">
                System interactions with users and external systems
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Use Case Analysis
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The use case diagram illustrates the various ways users interact
              with the InstaMall system, showing the relationships between
              actors and use cases.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Primary Actors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-900">👤 Customer</h4>
                <ul className="text-emerald-800 text-sm mt-2">
                  <li>• Browse products</li>
                  <li>• Search and filter</li>
                  <li>• Add to cart</li>
                  <li>• Checkout process</li>
                </ul>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-900">🏪 Vendor</h4>
                <ul className="text-emerald-800 text-sm mt-2">
                  <li>• Manage products</li>
                  <li>• View orders</li>
                  <li>• Update inventory</li>
                  <li>• Analytics dashboard</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              System Use Cases
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                <span className="text-slate-700">
                  User Registration & Authentication
                </span>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                <span className="text-slate-700">
                  Product Catalog Management
                </span>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                <span className="text-slate-700">
                  Order Processing & Fulfillment
                </span>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                <span className="text-slate-700">Payment Processing</span>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                🎯 Use Case Purpose
              </h3>
              <p className="text-emerald-800">
                This diagram helps stakeholders understand the functional
                requirements of the system and how different user types interact
                with various system features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
