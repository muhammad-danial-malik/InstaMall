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
                Requirements Engineering
              </h1>
              <p className="text-xl text-slate-600">
                Comprehensive requirements specification for Insta Mall system
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Insta Mall - Requirements Specification
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Complete requirements engineering documentation for the hybrid
              offline-online inventory management system with local marketplace
              functionality, based on detailed stakeholder analysis and system
              specifications.
            </p>

            {/* Functional Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                📋 Functional Requirements
              </h3>

              {/* Shop Owner Requirements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">
                  Shop Owner Features
                </h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                        FR-001
                      </span>
                      <div>
                        <h5 className="font-semibold text-blue-900">
                          Offline Inventory Management
                        </h5>
                        <p className="text-blue-800 text-sm">
                          System shall allow shop owners to add, edit, and
                          delete product inventory while offline, with automatic
                          synchronization when internet connectivity is
                          restored.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                        FR-002
                      </span>
                      <div>
                        <h5 className="font-semibold text-blue-900">
                          Barcode & QR Scanning
                        </h5>
                        <p className="text-blue-800 text-sm">
                          System shall support barcode and QR code scanning for
                          quick product identification and inventory updates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                        FR-003
                      </span>
                      <div>
                        <h5 className="font-semibold text-blue-900">
                          Low Stock Alerts
                        </h5>
                        <p className="text-blue-800 text-sm">
                          System shall generate automatic alerts when product
                          stock falls below predefined minimum levels, with
                          reorder suggestions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                        FR-004
                      </span>
                      <div>
                        <h5 className="font-semibold text-blue-900">
                          Expiry Tracking
                        </h5>
                        <p className="text-blue-800 text-sm">
                          System shall track product expiry dates and provide
                          warnings for perishable items approaching expiration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                        FR-005
                      </span>
                      <div>
                        <h5 className="font-semibold text-blue-900">
                          Customizable UI Themes
                        </h5>
                        <p className="text-blue-800 text-sm">
                          System shall provide 50+ customizable UI themes with
                          branded colors, logos, and invoice templates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buyer Requirements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">
                  Buyer Features
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                        FR-006
                      </span>
                      <div>
                        <h5 className="font-semibold text-green-900">
                          Product Search
                        </h5>
                        <p className="text-green-800 text-sm">
                          Buyers shall be able to search for products by name
                          across nearby subscribed shops with real-time results.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                        FR-007
                      </span>
                      <div>
                        <h5 className="font-semibold text-green-900">
                          Map-Based Shop Discovery
                        </h5>
                        <p className="text-green-800 text-sm">
                          System shall display subscribed shops on an
                          interactive map with route planning and distance
                          sorting.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                        FR-008
                      </span>
                      <div>
                        <h5 className="font-semibold text-green-900">
                          Shop Profiles & Reviews
                        </h5>
                        <p className="text-green-800 text-sm">
                          Buyers shall view detailed shop profiles including
                          hours, contact info, ratings, and customer reviews.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subscription & Payment Requirements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">
                  Subscription & Payment Features
                </h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                        FR-009
                      </span>
                      <div>
                        <h5 className="font-semibold text-purple-900">
                          Tiered Subscription Plans
                        </h5>
                        <p className="text-purple-800 text-sm">
                          System shall offer Standard, Professional, and Full
                          subscription plans with different visibility levels
                          and features.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                        FR-010
                      </span>
                      <div>
                        <h5 className="font-semibold text-purple-900">
                          Payment Integration
                        </h5>
                        <p className="text-purple-800 text-sm">
                          System shall integrate with JazzCash and Easypaisa for
                          secure recurring subscription payments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Functional Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                ⚡ Non-Functional Requirements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Performance
                  </h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>
                      • Offline operation: 100% functionality without internet
                    </li>
                    <li>• Sync time: &lt; 30 seconds for 1000 products</li>
                    <li>• Search response: &lt; 2 seconds</li>
                    <li>• App startup: &lt; 5 seconds</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Security
                  </h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• Data encryption at rest and in transit</li>
                    <li>• Secure payment processing (PCI compliant)</li>
                    <li>• User authentication with role-based access</li>
                    <li>• Regular security audits and updates</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Usability
                  </h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• Intuitive interface for non-technical users</li>
                    <li>• Urdu and English language support</li>
                    <li>• Training time: &lt; 2 hours</li>
                    <li>• Error recovery with clear messages</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Reliability
                  </h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 99.5% uptime for cloud services</li>
                    <li>• Automatic data backup and recovery</li>
                    <li>• Offline data persistence</li>
                    <li>• Conflict resolution for sync issues</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Stories */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                👥 User Stories
              </h3>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      US-001
                    </span>
                    <div>
                      <h5 className="font-semibold text-blue-900">
                        Shop Owner Inventory Management
                      </h5>
                      <p className="text-blue-800 text-sm italic mb-2">
                        As a shop owner, I want to add new products to my
                        inventory so that I can track my stock accurately.
                      </p>
                      <div className="text-xs text-blue-700">
                        <strong>Acceptance Criteria:</strong> Product name,
                        price, barcode, category, expiry date, minimum stock
                        level
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      US-002
                    </span>
                    <div>
                      <h5 className="font-semibold text-green-900">
                        Buyer Product Search
                      </h5>
                      <p className="text-green-800 text-sm italic mb-2">
                        As a buyer, I want to search for products near me so
                        that I can find what I need quickly.
                      </p>
                      <div className="text-xs text-green-700">
                        <strong>Acceptance Criteria:</strong> Search by product
                        name, filter by distance, show shop details and routes
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      US-003
                    </span>
                    <div>
                      <h5 className="font-semibold text-purple-900">
                        Subscription-Based Visibility
                      </h5>
                      <p className="text-purple-800 text-sm italic mb-2">
                        As a shop owner, I want to subscribe to appear in buyer
                        searches so that I can increase my customer reach.
                      </p>
                      <div className="text-xs text-purple-700">
                        <strong>Acceptance Criteria:</strong> Only subscribed
                        shops visible, tiered visibility levels, monthly billing
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5">
                      US-004
                    </span>
                    <div>
                      <h5 className="font-semibold text-orange-900">
                        Offline Operation
                      </h5>
                      <p className="text-orange-800 text-sm italic mb-2">
                        As a shop owner in rural areas, I want to use the system
                        offline so that poor internet doesn't affect my
                        business.
                      </p>
                      <div className="text-xs text-orange-700">
                        <strong>Acceptance Criteria:</strong> Full functionality
                        offline, automatic sync when online, data persistence
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                🎯 Use Cases
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mr-2">
                      UC-001
                    </span>
                    Product Inventory Management
                  </h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div>
                      <strong>Actor:</strong> Shop Owner
                    </div>
                    <div>
                      <strong>Preconditions:</strong> User logged in, shop
                      registered
                    </div>
                    <div>
                      <strong>Main Flow:</strong>
                    </div>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Navigate to inventory section</li>
                      <li>Scan or enter product details</li>
                      <li>Set pricing and stock levels</li>
                      <li>Upload product image</li>
                      <li>Save product to database</li>
                    </ol>
                    <div>
                      <strong>Postconditions:</strong> Product added to
                      inventory, visible to buyers
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded mr-2">
                      UC-002
                    </span>
                    Buyer Product Search
                  </h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div>
                      <strong>Actor:</strong> Buyer
                    </div>
                    <div>
                      <strong>Preconditions:</strong> App installed, location
                      enabled
                    </div>
                    <div>
                      <strong>Main Flow:</strong>
                    </div>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Open buyer app</li>
                      <li>Enter product name in search</li>
                      <li>View nearby subscribed shops</li>
                      <li>Select shop for details</li>
                      <li>Get directions to shop</li>
                    </ol>
                    <div>
                      <strong>Postconditions:</strong> Buyer can navigate to
                      shop location
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded mr-2">
                      UC-003
                    </span>
                    Subscription Management
                  </h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div>
                      <strong>Actor:</strong> Shop Owner
                    </div>
                    <div>
                      <strong>Preconditions:</strong> Shop registered, payment
                      method available
                    </div>
                    <div>
                      <strong>Main Flow:</strong>
                    </div>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Select subscription plan</li>
                      <li>Enter payment details</li>
                      <li>Confirm subscription</li>
                      <li>Receive confirmation</li>
                      <li>Shop becomes visible to buyers</li>
                    </ol>
                    <div>
                      <strong>Postconditions:</strong> Shop visible in
                      marketplace, monthly billing active
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded mr-2">
                      UC-004
                    </span>
                    Data Synchronization
                  </h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div>
                      <strong>Actor:</strong> System
                    </div>
                    <div>
                      <strong>Preconditions:</strong> Offline changes made,
                      internet restored
                    </div>
                    <div>
                      <strong>Main Flow:</strong>
                    </div>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Detect internet connectivity</li>
                      <li>Queue pending changes</li>
                      <li>Sync with cloud database</li>
                      <li>Resolve conflicts if any</li>
                      <li>Update local database</li>
                    </ol>
                    <div>
                      <strong>Postconditions:</strong> Local and cloud data
                      synchronized
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements Traceability Matrix */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                🔗 Requirements Traceability Matrix
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="border border-slate-200 px-4 py-2 text-left text-xs font-semibold text-slate-900">
                        Requirement ID
                      </th>
                      <th className="border border-slate-200 px-4 py-2 text-left text-xs font-semibold text-slate-900">
                        Description
                      </th>
                      <th className="border border-slate-200 px-4 py-2 text-left text-xs font-semibold text-slate-900">
                        User Story
                      </th>
                      <th className="border border-slate-200 px-4 py-2 text-left text-xs font-semibold text-slate-900">
                        Use Case
                      </th>
                      <th className="border border-slate-200 px-4 py-2 text-left text-xs font-semibold text-slate-900">
                        Test Case
                      </th>
                      <th className="border border-slate-200 px-4 py-2 text-left text-xs font-semibold text-slate-900">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-200 px-4 py-2 text-xs font-mono text-blue-600">
                        FR-001
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        Offline Inventory Management
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        US-001
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        UC-001
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        TC-001
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                          Implemented
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-200 px-4 py-2 text-xs font-mono text-blue-600">
                        FR-006
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        Product Search
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        US-002
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        UC-002
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        TC-006
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          In Progress
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-200 px-4 py-2 text-xs font-mono text-blue-600">
                        FR-009
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        Tiered Subscription Plans
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        US-003
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        UC-003
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        TC-009
                      </td>
                      <td className="border border-slate-200 px-4 py-2 text-xs">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          Planned
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Acceptance Criteria */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                ✅ Acceptance Criteria
              </h3>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-900 mb-2">
                    Minimum Viable Product (MVP) Criteria
                  </h4>
                  <ul className="text-emerald-800 text-sm space-y-1">
                    <li>
                      • ✅ Offline inventory management with local database
                    </li>
                    <li>• ✅ Basic product CRUD operations</li>
                    <li>• ✅ Cloud synchronization when online</li>
                    <li>• ✅ Simple buyer app with shop listing</li>
                    <li>• ✅ Subscription-based shop visibility</li>
                    <li>• ✅ Monthly billing integration</li>
                  </ul>
                </div>

                <div className="bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-900 mb-2">
                    Phase 2 Enhancement Criteria
                  </h4>
                  <ul className="text-cyan-800 text-sm space-y-1">
                    <li>• 🔄 Advanced search with filters and sorting</li>
                    <li>• 🔄 Barcode/QR scanning integration</li>
                    <li>• 🔄 Low stock alerts and reorder suggestions</li>
                    <li>• 🔄 Product image uploads and compression</li>
                    <li>• 🔄 Customer reviews and ratings</li>
                    <li>• 🔄 Analytics dashboard for shop owners</li>
                  </ul>
                </div>

                <div className="bg-linear-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-lg p-4">
                  <h4 className="font-semibold text-violet-900 mb-2">
                    Quality Assurance Criteria
                  </h4>
                  <ul className="text-violet-800 text-sm space-y-1">
                    <li>• 📊 95% test coverage for critical paths</li>
                    <li>
                      • 📊 Performance benchmarks met (startup &lt; 5s, search
                      &lt; 2s)
                    </li>
                    <li>
                      • 📊 Security audit passed with no critical
                      vulnerabilities
                    </li>
                    <li>
                      • 📊 User acceptance testing completed with 90%
                      satisfaction
                    </li>
                    <li>
                      • 📊 Offline functionality verified across different
                      network conditions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r from-slate-100 to-slate-200 border border-slate-300 rounded-lg p-8 mt-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                📊 Requirements Engineering Summary
              </h3>
              <p className="text-slate-700 mb-4">
                This comprehensive requirements specification provides the
                foundation for developing the Insta Mall hybrid inventory
                management and marketplace system, ensuring all stakeholder
                needs are addressed through systematic requirement engineering
                practices.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-slate-600">
                    Functional Requirements
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-sm text-slate-600">
                    Non-Functional Requirements
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-slate-600">User Stories</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600">6</div>
                  <div className="text-sm text-slate-600">Use Cases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
