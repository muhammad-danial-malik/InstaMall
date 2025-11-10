import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  Share2,
  Smartphone,
  ArrowRight,
  Home,
  User,
  ShoppingCart,
  CreditCard,
  Package,
  Settings,
  Search,
  Heart,
  Star,
  MessageSquare,
  BarChart3,
  Users,
  Store,
  Truck,
  CheckCircle,
} from "lucide-react";

export default function UserInterfaceFlow() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
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

          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <Share2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                User Interface Flow
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                Navigation paths and screen-to-screen user journey for InstaMall
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              What is User Interface Flow?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              User Interface Flow diagrams illustrate the path users take
              through an application, showing how different screens connect and
              the logical progression of user interactions. These diagrams help
              designers and developers understand user journeys, identify
              potential bottlenecks, and ensure intuitive navigation patterns.
            </p>
          </div>

          <div className="bg-linear-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-sky-900 mb-4 flex items-center">
              <Share2 className="h-5 w-5 mr-2" />
              Importance of UI Flow Diagrams
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-sky-800 space-y-2">
                <li>• Visualize complete user journeys from start to finish</li>
                <li>• Identify navigation bottlenecks and dead ends</li>
                <li>• Ensure logical flow between screens and features</li>
              </ul>
              <ul className="text-sky-800 space-y-2">
                <li>• Communicate design decisions to stakeholders</li>
                <li>• Guide development priorities and user testing</li>
                <li>• Optimize conversion funnels and user experience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main User Flows */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Primary User Flows
          </h2>

          {/* Customer Journey */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2 text-green-600" />
              Customer Shopping Journey
            </h3>
            <div className="bg-slate-50 rounded-lg p-6 overflow-x-auto">
              <div className="flex items-center justify-start min-w-max space-x-4">
                {/* Home */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Home className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Home
                    <br />
                    Screen
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Search/Browse */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Search className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Search/
                    <br />
                    Browse
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Product List */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Package className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Product
                    <br />
                    List
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Product Details */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Product
                    <br />
                    Details
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Add to Cart */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <ShoppingCart className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Add to
                    <br />
                    Cart
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Cart Review */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <ShoppingCart className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Cart
                    <br />
                    Review
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Checkout */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <CreditCard className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Checkout
                    <br />
                    Process
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Order Confirmation */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Order
                    <br />
                    Confirmation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Seller Journey */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <Store className="h-5 w-5 mr-2 text-blue-600" />
              Seller Management Journey
            </h3>
            <div className="bg-slate-50 rounded-lg p-6 overflow-x-auto">
              <div className="flex items-center justify-start min-w-max space-x-4">
                {/* Seller Login */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <User className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Seller
                    <br />
                    Login
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Dashboard */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Seller
                    <br />
                    Dashboard
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Product Management */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Package className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Product
                    <br />
                    Management
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Order Management */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Truck className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Order
                    <br />
                    Management
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Analytics */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Sales
                    <br />
                    Analytics
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Journey */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-purple-600" />
              Admin Management Journey
            </h3>
            <div className="bg-slate-50 rounded-lg p-6 overflow-x-auto">
              <div className="flex items-center justify-start min-w-max space-x-4">
                {/* Admin Login */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <User className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Admin
                    <br />
                    Login
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Admin Dashboard */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    Admin
                    <br />
                    Dashboard
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* User Management */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    User
                    <br />
                    Management
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* System Settings */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <Settings className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    System
                    <br />
                    Settings
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

                {/* Reports */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    System
                    <br />
                    Reports
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Screens and Components */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Key Screens and Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Smartphone className="h-6 w-6 text-slate-700 mr-3" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Authentication
                </h3>
              </div>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Login screen</li>
                <li>• Registration form</li>
                <li>• Password reset</li>
                <li>• Social login options</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Search className="h-6 w-6 text-slate-700 mr-3" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Discovery
                </h3>
              </div>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Product search</li>
                <li>• Category browsing</li>
                <li>• Featured products</li>
                <li>• Recommendations</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Package className="h-6 w-6 text-slate-700 mr-3" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Product Details
                </h3>
              </div>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Product images</li>
                <li>• Specifications</li>
                <li>• Reviews & ratings</li>
                <li>• Add to cart/wishlist</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <ShoppingCart className="h-6 w-6 text-slate-700 mr-3" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Shopping Cart
                </h3>
              </div>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Cart items list</li>
                <li>• Quantity controls</li>
                <li>• Price calculations</li>
                <li>• Remove items</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-slate-700 mr-3" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Checkout
                </h3>
              </div>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Shipping address</li>
                <li>• Payment methods</li>
                <li>• Order summary</li>
                <li>• Place order</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 text-slate-700 mr-3" />
                <h3 className="text-lg font-semibold text-slate-900">
                  User Profile
                </h3>
              </div>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Profile settings</li>
                <li>• Order history</li>
                <li>• Wishlist</li>
                <li>• Account preferences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Patterns */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Navigation Patterns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Bottom Navigation (Mobile)
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                  <div className="flex items-center">
                    <Home className="h-4 w-4 text-slate-600 mr-2" />
                    <span className="text-sm text-slate-700">Home</span>
                  </div>
                  <span className="text-xs text-slate-500">Primary</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                  <div className="flex items-center">
                    <Search className="h-4 w-4 text-slate-600 mr-2" />
                    <span className="text-sm text-slate-700">Search</span>
                  </div>
                  <span className="text-xs text-slate-500">Primary</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                  <div className="flex items-center">
                    <ShoppingCart className="h-4 w-4 text-slate-600 mr-2" />
                    <span className="text-sm text-slate-700">Cart</span>
                  </div>
                  <span className="text-xs text-slate-500">Primary</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-slate-600 mr-2" />
                    <span className="text-sm text-slate-700">Profile</span>
                  </div>
                  <span className="text-xs text-slate-500">Primary</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Side Navigation (Desktop)
              </h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-white rounded border border-slate-200">
                  <BarChart3 className="h-4 w-4 text-slate-600 mr-3" />
                  <span className="text-sm text-slate-700">Dashboard</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded border border-slate-200">
                  <Package className="h-4 w-4 text-slate-600 mr-3" />
                  <span className="text-sm text-slate-700">Products</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded border border-slate-200">
                  <Users className="h-4 w-4 text-slate-600 mr-3" />
                  <span className="text-sm text-slate-700">Customers</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded border border-slate-200">
                  <Settings className="h-4 w-4 text-slate-600 mr-3" />
                  <span className="text-sm text-slate-700">Settings</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Flow Optimization */}
        <div className="bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
          <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            UI Flow Optimization Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-green-800 space-y-2">
              <li>• Minimize steps to complete key actions</li>
              <li>• Provide clear visual hierarchy</li>
              <li>• Use consistent navigation patterns</li>
              <li>• Include progress indicators for multi-step processes</li>
            </ul>
            <ul className="text-green-800 space-y-2">
              <li>• Offer multiple paths to the same destination</li>
              <li>• Use breadcrumbs for complex navigation</li>
              <li>• Provide clear error states and recovery paths</li>
              <li>• Test flows with real users regularly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
