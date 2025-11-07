import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Link } from "lucide-react";

export default function EntityRelationshipDiagram() {
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
            <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <Link className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Entity-Relationship Diagram (ERD)
              </h1>
              <p className="text-xl text-slate-600">
                Database structure and relationships
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Database Schema Design
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The Entity-Relationship Diagram shows the logical structure of the
              database, including entities, attributes, and relationships within
              the InstaMall system.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Core Entities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-900">👤 Users</h4>
                <p className="text-teal-800 text-sm">
                  Customer and vendor accounts
                </p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-900">📦 Products</h4>
                <p className="text-teal-800 text-sm">
                  Product catalog and details
                </p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-900">🛒 Orders</h4>
                <p className="text-teal-800 text-sm">Purchase transactions</p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-900">🏪 Categories</h4>
                <p className="text-teal-800 text-sm">Product categorization</p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-900">💳 Payments</h4>
                <p className="text-teal-800 text-sm">Transaction records</p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-900">📍 Addresses</h4>
                <p className="text-teal-800 text-sm">
                  Shipping and billing info
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Relationship Types
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-700">One-to-One (1:1)</span>
                <span className="text-teal-600 font-medium">
                  User ↔ Profile
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-700">One-to-Many (1:N)</span>
                <span className="text-teal-600 font-medium">
                  Category → Products
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-700">Many-to-Many (N:N)</span>
                <span className="text-teal-600 font-medium">
                  Products ↔ Orders
                </span>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-teal-900 mb-2">
                🗄️ Database Optimization
              </h3>
              <p className="text-teal-800">
                Designed for performance with proper indexing, normalization,
                and referential integrity constraints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
