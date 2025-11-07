import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";

export default function FullProjectDocumentation() {
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
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Full Project Documentation
              </h1>
              <p className="text-xl text-slate-600">
                Comprehensive system overview and development guide
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Project Overview
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The InstaMall project is a comprehensive e-commerce platform
              designed to provide a seamless shopping experience for customers
              while offering powerful management tools for administrators and
              vendors.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>User authentication and authorization system</li>
              <li>
                Product catalog management with advanced search and filtering
              </li>
              <li>Shopping cart and checkout functionality</li>
              <li>Order management and tracking system</li>
              <li>Payment gateway integration</li>
              <li>Inventory management for vendors</li>
              <li>Analytics and reporting dashboard</li>
              <li>Multi-vendor marketplace support</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">Frontend</h4>
                <p className="text-slate-600 text-sm">React, Tailwind CSS</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">Backend</h4>
                <p className="text-slate-600 text-sm">Node.js, Express</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">Database</h4>
                <p className="text-slate-600 text-sm">MongoDB, PostgreSQL</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                📋 Documentation Status
              </h3>
              <p className="text-blue-800">
                This comprehensive documentation covers all aspects of the
                InstaMall system, including architecture, design patterns, API
                specifications, and deployment guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
