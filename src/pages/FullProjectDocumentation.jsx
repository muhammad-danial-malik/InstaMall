import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  FileText,
  ShoppingCart,
  Store,
  Settings,
  Shield,
  ShieldCheck,
  Zap,
  RefreshCw,
  Rocket,
  CheckCircle,
  Smartphone,
  TrendingUp,
  Wrench
} from "lucide-react";

export default function FullProjectDocumentation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
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
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Full Project Documentation
              </h1>
              <p className="text-lg md:text-xl text-slate-600">
                Everything you need to know about InstaMall
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="prose prose-slate max-w-none">
            {/* Executive Summary */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                What is InstaMall?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                InstaMall is your one-stop online shopping destination that
                makes buying and selling easier than ever. Imagine a digital
                marketplace where customers can discover amazing products from
                multiple sellers, and vendors can grow their businesses with
                powerful tools - all in one beautiful, easy-to-use platform.
              </p>
              <div className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Our Mission
                </h3>
                <ul className="text-blue-800 space-y-2">
                  <li>
                    • Create a shopping experience that's as smooth as browsing
                    your favorite social media
                  </li>
                  <li>
                    • Help sellers succeed with easy-to-use business tools
                  </li>
                  <li>
                    • Provide clear insights so everyone can make better
                    decisions
                  </li>
                  <li>• Keep everything running smoothly and securely</li>
                  <li>
                    • Grow with our customers, wherever they are in the world
                  </li>
                </ul>
              </div>
            </div>

            {/* System Architecture */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                How It All Works Together
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    What You See (Customer Experience)
                  </h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Beautiful, easy-to-browse product pages</li>
                    <li>• Fast search and smart recommendations</li>
                    <li>• Smooth checkout process</li>
                    <li>• Mobile-friendly design that works everywhere</li>
                    <li>• Clear navigation between different sections</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Behind the Scenes (Business Logic)
                  </h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Secure user accounts and data protection</li>
                    <li>• Smart product organization and search</li>
                    <li>• Reliable order processing and tracking</li>
                    <li>• Fast data storage and retrieval</li>
                    <li>• Automated business workflows</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                  Built to Grow
                </h3>
                <p className="text-yellow-800">
                  Our system is designed like building blocks - we can easily
                  add new features, support more users, and expand to new
                  markets without disrupting the smooth experience everyone
                  enjoys.
                </p>
              </div>
            </div>

            {/* Database Design */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                Smart Data Organization
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Customer & Business Information
                  </h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>
                      <strong>People:</strong> Customer profiles, preferences,
                      and account details
                    </li>
                    <li>
                      <strong>Products:</strong> Complete catalog with prices,
                      descriptions, and options
                    </li>
                    <li>
                      <strong>Orders:</strong> Purchase history and delivery
                      tracking
                    </li>
                    <li>
                      <strong>Sellers:</strong> Business profiles and store
                      information
                    </li>
                    <li>
                      <strong>Categories:</strong> Organized product groups for
                      easy browsing
                    </li>
                    <li>
                      <strong>Reviews:</strong> Customer feedback and ratings
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Speed & Intelligence Features
                  </h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>
                      <strong>Quick Access:</strong> Fast-loading user sessions
                      and temporary data
                    </li>
                    <li>
                      <strong>Smart Search:</strong> Powerful product discovery
                      with filters
                    </li>
                    <li>
                      <strong>Business Insights:</strong> Sales reports and
                      performance metrics
                    </li>
                    <li>
                      <strong>Fair Usage:</strong> Balanced access to prevent
                      system overload
                    </li>
                    <li>
                      <strong>Flexible Updates:</strong> Easy feature changes
                      without downtime
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Connected & Reliable
                </h3>
                <p className="text-green-800">
                  Everything in our system is thoughtfully connected - customer
                  orders link to products and sellers, reviews connect to
                  purchases, and business data flows seamlessly. This creates a
                  reliable foundation where information stays accurate and
                  useful.
                </p>
              </div>
            </div>

            {/* User Roles and Permissions */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                Who Uses InstaMall & What They Can Do
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <ShoppingCart className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-blue-900">
                      Shoppers (Customers)
                    </h3>
                  </div>
                  <ul className="text-blue-800 space-y-2 text-sm">
                    <li>• Discover amazing products from different sellers</li>
                    <li>• Add favorites to cart and complete purchases</li>
                    <li>• Follow delivery progress in real-time</li>
                    <li>• Share experiences through reviews</li>
                    <li>• Customize account preferences</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Store className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-green-900">
                      Sellers (Vendors)
                    </h3>
                  </div>
                  <ul className="text-green-800 space-y-2 text-sm">
                    <li>• Showcase products with beautiful listings</li>
                    <li>• Manage orders and shipping logistics</li>
                    <li>• Track business performance and growth</li>
                    <li>• Keep inventory accurate and up-to-date</li>
                    <li>• Connect directly with happy customers</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Settings className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-purple-900">
                      Platform Managers (Admins)
                    </h3>
                  </div>
                  <ul className="text-purple-800 space-y-2 text-sm">
                    <li>• Oversee the entire marketplace ecosystem</li>
                    <li>• Support sellers and resolve issues</li>
                    <li>• Monitor platform health and performance</li>
                    <li>• Ensure quality content and fair practices</li>
                    <li>• Plan and implement platform improvements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Considerations */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                Your Trust & Safety Come First
              </h2>
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-red-600 mr-3" />
                    <h3 className="text-lg font-semibold text-red-900">
                      Protecting Your Information
                    </h3>
                  </div>
                  <ul className="text-red-800 space-y-2">
                    <li>
                      • Bank-level encryption keeps your personal and payment
                      data completely secure
                    </li>
                    <li>
                      • We follow the strictest global privacy laws to protect
                      your rights
                    </li>
                    <li>
                      • Regular expert security reviews ensure everything stays
                      safe
                    </li>
                    <li>
                      • Your data is anonymized for analysis so your privacy is
                      always protected
                    </li>
                    <li>
                      • Multiple layers of protection guard against unauthorized
                      access
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-orange-600 mr-3" />
                    <h3 className="text-lg font-semibold text-orange-900">
                      System Reliability & Monitoring
                    </h3>
                  </div>
                  <ul className="text-orange-800 space-y-2">
                    <li>
                      • Extra verification steps protect admin accounts from
                      unauthorized access
                    </li>
                    <li>• Smart network design prevents security breaches</li>
                    <li>
                      • Constant updates keep our defenses current against new
                      threats
                    </li>
                    <li>
                      • 24/7 monitoring detects and responds to potential issues
                    </li>
                    <li>
                      • Secure backups ensure your data is always recoverable
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Deployment and Infrastructure */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                Reliable Performance You Can Count On
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-6 w-6 text-slate-600 mr-3" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      Lightning-Fast Global Network
                    </h3>
                  </div>
                  <ul className="text-slate-600 space-y-2">
                    <li>
                      • Worldwide content delivery ensures fast loading
                      everywhere
                    </li>
                    <li>
                      • Smart caching keeps frequently used data instantly
                      available
                    </li>
                    <li>
                      • Reliable database systems store all your important
                      information
                    </li>
                    <li>
                      • Secure file storage for images, documents, and more
                    </li>
                    <li>
                      • Intelligent load balancing distributes traffic
                      efficiently
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <RefreshCw className="h-6 w-6 text-slate-600 mr-3" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      Continuous Improvement Process
                    </h3>
                  </div>
                  <ul className="text-slate-600 space-y-2">
                    <li>
                      • Automated updates ensure you always get the latest
                      features
                    </li>
                    <li>
                      • Container technology keeps everything consistent and
                      reliable
                    </li>
                    <li>
                      • Smart infrastructure management adapts to your needs
                    </li>
                    <li>
                      • Real-time monitoring catches issues before they affect
                      you
                    </li>
                    <li>• Rigorous testing ensures quality in every update</li>
                  </ul>
                </div>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Rocket className="h-6 w-6 text-indigo-600 mr-3" />
                  <h3 className="text-lg font-semibold text-indigo-900">
                    Built for Massive Growth
                  </h3>
                </div>
                <p className="text-indigo-800">
                  Our system automatically grows with your success. Whether
                  serving thousands or millions of customers, InstaMall
                  maintains lightning-fast performance and rock-solid
                  reliability, so you can focus on growing your business.
                </p>
              </div>
            </div>

            {/* Development Guidelines */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                Quality Assurance & Continuous Improvement
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Wrench className="h-6 w-6 text-slate-600 mr-3" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      Building with Excellence
                    </h3>
                  </div>
                  <ul className="text-slate-600 space-y-2">
                    <li>
                      • Consistent code standards ensure everything works
                      together perfectly
                    </li>
                    <li>
                      • Strong type checking prevents errors before they happen
                    </li>
                    <li>
                      • Modular design makes updates and improvements easy
                    </li>
                    <li>
                      • Smart error handling keeps things running smoothly
                    </li>
                    <li>
                      • Comprehensive logging helps us quickly solve any issues
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-slate-600 mr-3" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      Rigorous Quality Testing
                    </h3>
                  </div>
                  <ul className="text-slate-600 space-y-2">
                    <li>
                      • Multiple testing layers catch issues at every level
                    </li>
                    <li>
                      • Automated checks ensure new features don't break
                      existing ones
                    </li>
                    <li>
                      • Real-user scenario testing validates the complete
                      experience
                    </li>
                    <li>
                      • Performance monitoring keeps everything running fast
                    </li>
                    <li>
                      • Accessibility checks ensure everyone can use our
                      platform
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Future Enhancements */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                Future Enhancements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-linear-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Smartphone className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-purple-900">
                      Next 6 Months - Mobile & AI
                    </h3>
                  </div>
                  <ul className="text-purple-800 space-y-2 text-sm">
                    <li>• Mobile app development (React Native)</li>
                    <li>• Advanced AI-powered product recommendations</li>
                    <li>• Multi-language support and internationalization</li>
                    <li>• Advanced analytics dashboard</li>
                  </ul>
                </div>
                <div className="bg-linear-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Rocket className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-green-900">
                      Beyond - Cutting-Edge Innovation
                    </h3>
                  </div>
                  <ul className="text-green-800 space-y-2 text-sm">
                    <li>
                      • Blockchain technology for transparent supply chains
                    </li>
                    <li>• Try-before-you-buy with AR/VR technology</li>
                    <li>• Advanced protection against fraudulent activities</li>
                    <li>
                      • Open platform for third-party business integrations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r from-slate-100 to-slate-200 border border-slate-300 rounded-lg p-6 md:p-8 mt-8 md:mt-12">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  About This Documentation
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                This guide gives you a complete picture of InstaMall - from how
                we keep your experience smooth and secure, to the exciting
                features we're building for the future. Whether you're a
                customer, seller, or business partner, we want you to understand
                and trust our platform.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-4">
                  <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">User-Friendly</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Secure</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Fast</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Growing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
