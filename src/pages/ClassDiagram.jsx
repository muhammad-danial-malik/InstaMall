import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  GitBranch,
  Users,
  Package,
  Store,
  Settings,
  Link,
  Hammer,
  ClipboardList,
} from "lucide-react";

export default function ClassDiagram() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
          </Button>
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <GitBranch className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Class Diagram
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                Structure of classes and their relationships
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Insta Mall - Inventory Management & Local Marketplace
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Complete class diagram for the hybrid offline-online inventory
              management system with local marketplace functionality, based on
              the detailed project requirements.
            </p>

            {/* User Management Classes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-slate-600" />
                User Management Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-blue-900 text-center mb-2">
                    User
                  </div>
                  <div className="border-t border-blue-300 pt-2">
                    <div className="text-blue-800">- id: String</div>
                    <div className="text-blue-800">- name: String</div>
                    <div className="text-blue-800">- email: String</div>
                    <div className="text-blue-800">- phone: String</div>
                    <div className="text-blue-800">- createdAt: Date</div>
                    <div className="text-blue-800">- isActive: Boolean</div>
                  </div>
                  <div className="border-t border-blue-300 pt-2 mt-2">
                    <div className="text-blue-700">+ login(): Boolean</div>
                    <div className="text-blue-700">+ logout(): void</div>
                    <div className="text-blue-700">+ updateProfile(): void</div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-green-900 text-center mb-2">
                    ShopOwner
                  </div>
                  <div className="border-t border-green-300 pt-2">
                    <div className="text-green-800">- shopId: String</div>
                    <div className="text-green-800">- businessName: String</div>
                    <div className="text-green-800">
                      - licenseNumber: String
                    </div>
                    <div className="text-green-800">
                      - subscriptionPlan: String
                    </div>
                  </div>
                  <div className="border-t border-green-300 pt-2 mt-2">
                    <div className="text-green-700">
                      + manageInventory(): void
                    </div>
                    <div className="text-green-700">
                      + viewAnalytics(): void
                    </div>
                    <div className="text-green-700">
                      + processOrders(): void
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-purple-900 text-center mb-2">
                    Buyer
                  </div>
                  <div className="border-t border-purple-300 pt-2">
                    <div className="text-purple-800">- location: GeoPoint</div>
                    <div className="text-purple-800">
                      - searchHistory: List&lt;String&gt;
                    </div>
                    <div className="text-purple-800">
                      - favoriteShops: List&lt;String&gt;
                    </div>
                  </div>
                  <div className="border-t border-purple-300 pt-2 mt-2">
                    <div className="text-purple-700">
                      + searchProducts(): List&lt;Product&gt;
                    </div>
                    <div className="text-purple-700">
                      + viewShopDetails(): Shop
                    </div>
                    <div className="text-purple-700">+ placeOrder(): Order</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product & Inventory Classes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Package className="h-5 w-5 mr-2 text-slate-600" />
                Product & Inventory Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-orange-900 text-center mb-2">
                    Product
                  </div>
                  <div className="border-t border-orange-300 pt-2">
                    <div className="text-orange-800">- id: String</div>
                    <div className="text-orange-800">- name: String</div>
                    <div className="text-orange-800">- description: String</div>
                    <div className="text-orange-800">- barcode: String</div>
                    <div className="text-orange-800">- categoryId: String</div>
                    <div className="text-orange-800">- shopId: String</div>
                    <div className="text-orange-800">- price: Decimal</div>
                    <div className="text-orange-800">- costPrice: Decimal</div>
                    <div className="text-orange-800">- expiryDate: Date</div>
                    <div className="text-orange-800">- imageUrl: String</div>
                  </div>
                  <div className="border-t border-orange-300 pt-2 mt-2">
                    <div className="text-orange-700">
                      + calculateProfit(): Decimal
                    </div>
                    <div className="text-orange-700">
                      + isExpired(): Boolean
                    </div>
                    <div className="text-orange-700">+ updateStock(): void</div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-yellow-900 text-center mb-2">
                    Category
                  </div>
                  <div className="border-t border-yellow-300 pt-2">
                    <div className="text-yellow-800">- id: String</div>
                    <div className="text-yellow-800">- name: String</div>
                    <div className="text-yellow-800">- description: String</div>
                    <div className="text-yellow-800">- parentId: String</div>
                    <div className="text-yellow-800">- imageUrl: String</div>
                  </div>
                  <div className="border-t border-yellow-300 pt-2 mt-2">
                    <div className="text-yellow-700">
                      + getSubcategories(): List&lt;Category&gt;
                    </div>
                    <div className="text-yellow-700">
                      + getProducts(): List&lt;Product&gt;
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-red-900 text-center mb-2">
                    Inventory
                  </div>
                  <div className="border-t border-red-300 pt-2">
                    <div className="text-red-800">- productId: String</div>
                    <div className="text-red-800">- shopId: String</div>
                    <div className="text-red-800">- currentStock: Integer</div>
                    <div className="text-red-800">- minStock: Integer</div>
                    <div className="text-red-800">- maxStock: Integer</div>
                    <div className="text-red-800">- reorderPoint: Integer</div>
                    <div className="text-red-800">- lastUpdated: Date</div>
                  </div>
                  <div className="border-t border-red-300 pt-2 mt-2">
                    <div className="text-red-700">+ isLowStock(): Boolean</div>
                    <div className="text-red-700">
                      + needsReorder(): Boolean
                    </div>
                    <div className="text-red-700">+ updateStock(): void</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop & Subscription Classes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Store className="h-5 w-5 mr-2 text-slate-600" />
                Shop & Subscription Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-indigo-900 text-center mb-2">
                    Shop
                  </div>
                  <div className="border-t border-indigo-300 pt-2">
                    <div className="text-indigo-800">- id: String</div>
                    <div className="text-indigo-800">- ownerId: String</div>
                    <div className="text-indigo-800">- name: String</div>
                    <div className="text-indigo-800">- description: String</div>
                    <div className="text-indigo-800">- address: String</div>
                    <div className="text-indigo-800">- location: GeoPoint</div>
                    <div className="text-indigo-800">- phone: String</div>
                    <div className="text-indigo-800">- logoUrl: String</div>
                    <div className="text-indigo-800">- businessHours: Map</div>
                    <div className="text-indigo-800">- isVisible: Boolean</div>
                    <div className="text-indigo-800">
                      - subscriptionId: String
                    </div>
                  </div>
                  <div className="border-t border-indigo-300 pt-2 mt-2">
                    <div className="text-indigo-700">
                      + getProducts(): List&lt;Product&gt;
                    </div>
                    <div className="text-indigo-700">
                      + calculateRating(): Decimal
                    </div>
                    <div className="text-indigo-700">
                      + updateProfile(): void
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-pink-900 text-center mb-2">
                    Subscription
                  </div>
                  <div className="border-t border-pink-300 pt-2">
                    <div className="text-pink-800">- id: String</div>
                    <div className="text-pink-800">- shopId: String</div>
                    <div className="text-pink-800">- planType: String</div>
                    <div className="text-pink-800">- startDate: Date</div>
                    <div className="text-pink-800">- endDate: Date</div>
                    <div className="text-pink-800">- isActive: Boolean</div>
                    <div className="text-pink-800">- storageLimit: Integer</div>
                    <div className="text-pink-800">
                      - features: List&lt;String&gt;
                    </div>
                  </div>
                  <div className="border-t border-pink-300 pt-2 mt-2">
                    <div className="text-pink-700">+ renew(): void</div>
                    <div className="text-pink-700">+ upgrade(): void</div>
                    <div className="text-pink-700">
                      + checkLimits(): Boolean
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order & Transaction Classes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                🛒 Order & Transaction Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-cyan-900 text-center mb-2">
                    Order
                  </div>
                  <div className="border-t border-cyan-300 pt-2">
                    <div className="text-cyan-800">- id: String</div>
                    <div className="text-cyan-800">- buyerId: String</div>
                    <div className="text-cyan-800">- shopId: String</div>
                    <div className="text-cyan-800">- orderDate: Date</div>
                    <div className="text-cyan-800">- status: String</div>
                    <div className="text-cyan-800">- totalAmount: Decimal</div>
                    <div className="text-cyan-800">
                      - deliveryAddress: String
                    </div>
                    <div className="text-cyan-800">- notes: String</div>
                  </div>
                  <div className="border-t border-cyan-300 pt-2 mt-2">
                    <div className="text-cyan-700">
                      + calculateTotal(): Decimal
                    </div>
                    <div className="text-cyan-700">+ updateStatus(): void</div>
                    <div className="text-cyan-700">+ cancel(): void</div>
                  </div>
                </div>

                <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-teal-900 text-center mb-2">
                    OrderItem
                  </div>
                  <div className="border-t border-teal-300 pt-2">
                    <div className="text-teal-800">- id: String</div>
                    <div className="text-teal-800">- orderId: String</div>
                    <div className="text-teal-800">- productId: String</div>
                    <div className="text-teal-800">- quantity: Integer</div>
                    <div className="text-teal-800">- unitPrice: Decimal</div>
                    <div className="text-teal-800">- totalPrice: Decimal</div>
                  </div>
                  <div className="border-t border-teal-300 pt-2 mt-2">
                    <div className="text-teal-700">
                      + calculateSubtotal(): Decimal
                    </div>
                    <div className="text-teal-700">
                      + updateQuantity(): void
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-emerald-900 text-center mb-2">
                    Payment
                  </div>
                  <div className="border-t border-emerald-300 pt-2">
                    <div className="text-emerald-800">- id: String</div>
                    <div className="text-emerald-800">- orderId: String</div>
                    <div className="text-emerald-800">- amount: Decimal</div>
                    <div className="text-emerald-800">- method: String</div>
                    <div className="text-emerald-800">- status: String</div>
                    <div className="text-emerald-800">
                      - transactionId: String
                    </div>
                    <div className="text-emerald-800">- paymentDate: Date</div>
                  </div>
                  <div className="border-t border-emerald-300 pt-2 mt-2">
                    <div className="text-emerald-700">+ process(): Boolean</div>
                    <div className="text-emerald-700">+ refund(): void</div>
                    <div className="text-emerald-700">
                      + getStatus(): String
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System & Infrastructure Classes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-slate-600" />
                System & Infrastructure Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-gray-900 text-center mb-2">
                    Database
                  </div>
                  <div className="border-t border-gray-300 pt-2">
                    <div className="text-gray-800">
                      - connectionString: String
                    </div>
                    <div className="text-gray-800">- isOnline: Boolean</div>
                    <div className="text-gray-800">- lastSync: Date</div>
                    <div className="text-gray-800">- storageUsed: Integer</div>
                  </div>
                  <div className="border-t border-gray-300 pt-2 mt-2">
                    <div className="text-gray-700">+ connect(): Boolean</div>
                    <div className="text-gray-700">+ sync(): void</div>
                    <div className="text-gray-700">+ backup(): void</div>
                    <div className="text-gray-700">+ restore(): void</div>
                  </div>
                </div>

                <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 font-mono text-sm">
                  <div className="font-bold text-slate-900 text-center mb-2">
                    SyncManager
                  </div>
                  <div className="border-t border-slate-300 pt-2">
                    <div className="text-slate-800">
                      - queue: List&lt;SyncOperation&gt;
                    </div>
                    <div className="text-slate-800">- isOnline: Boolean</div>
                    <div className="text-slate-800">- retryCount: Integer</div>
                  </div>
                  <div className="border-t border-slate-300 pt-2 mt-2">
                    <div className="text-slate-700">+ addToQueue(): void</div>
                    <div className="text-slate-700">+ processQueue(): void</div>
                    <div className="text-slate-700">
                      + handleConflict(): void
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Class Relationships */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Link className="h-5 w-5 mr-2 text-slate-600" />
                Class Relationships & Multiplicity
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center justify-center">
                    <span className="bg-blue-100 px-3 py-1 rounded">User</span>
                    <span className="mx-4 text-slate-600">
                      ◄─── Generalization ───►
                    </span>
                    <span className="bg-green-100 px-3 py-1 rounded">
                      ShopOwner
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="bg-blue-100 px-3 py-1 rounded">User</span>
                    <span className="mx-4 text-slate-600">
                      ◄─── Generalization ───►
                    </span>
                    <span className="bg-purple-100 px-3 py-1 rounded">
                      Buyer
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="bg-orange-100 px-3 py-1 rounded">
                      Shop
                    </span>
                    <span className="mx-4 text-slate-600">1 ───► 0..*</span>
                    <span className="bg-yellow-100 px-3 py-1 rounded">
                      Product
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="bg-orange-100 px-3 py-1 rounded">
                      Shop
                    </span>
                    <span className="mx-4 text-slate-600">1 ───► 1</span>
                    <span className="bg-pink-100 px-3 py-1 rounded">
                      Subscription
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="bg-cyan-100 px-3 py-1 rounded">Order</span>
                    <span className="mx-4 text-slate-600">1 ───► 1..*</span>
                    <span className="bg-teal-100 px-3 py-1 rounded">
                      OrderItem
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="bg-cyan-100 px-3 py-1 rounded">Order</span>
                    <span className="mx-4 text-slate-600">1 ───► 1</span>
                    <span className="bg-emerald-100 px-3 py-1 rounded">
                      Payment
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Patterns Used */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <Hammer className="h-5 w-5 mr-2 text-slate-600" />
                Design Patterns Implemented
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                  <h4 className="font-semibold text-violet-900 mb-2">
                    Repository Pattern
                  </h4>
                  <p className="text-violet-800 text-sm">
                    Data access layer abstraction for Product, Order, and User
                    repositories with consistent CRUD operations.
                  </p>
                </div>
                <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                  <h4 className="font-semibold text-rose-900 mb-2">
                    Observer Pattern
                  </h4>
                  <p className="text-rose-800 text-sm">
                    Stock alerts and notifications when inventory levels change
                    or orders are placed.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-900 mb-2">
                    Factory Pattern
                  </h4>
                  <p className="text-amber-800 text-sm">
                    Subscription plan creation and payment method instantiation
                    based on user selection.
                  </p>
                </div>
                <div className="bg-lime-50 border border-lime-200 rounded-lg p-4">
                  <h4 className="font-semibold text-lime-900 mb-2">
                    Singleton Pattern
                  </h4>
                  <p className="text-lime-800 text-sm">
                    Database connection and SyncManager instances to ensure
                    single point of control.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r from-slate-100 to-slate-200 border border-slate-300 rounded-lg p-8 mt-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <ClipboardList className="h-5 w-5 mr-2 text-slate-600" />
                Class Diagram Summary
              </h3>
              <p className="text-slate-700 mb-4">
                This comprehensive class diagram represents the complete
                architecture of the Insta Mall system, incorporating
                offline-online hybrid functionality, subscription-based
                marketplace visibility, and robust inventory management
                capabilities as specified in the detailed project requirements.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">12+</div>
                  <div className="text-sm text-slate-600">Core Classes</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">4</div>
                  <div className="text-sm text-slate-600">Design Patterns</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">6</div>
                  <div className="text-sm text-slate-600">Relationships</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-slate-600">
                    Requirements Covered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
