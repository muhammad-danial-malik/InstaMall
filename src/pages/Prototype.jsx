import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  MonitorSmartphone,
  Smartphone,
  Laptop,
  Tablet,
  Eye,
  MousePointer,
  Layers,
  Palette,
  Code,
  Users,
  CheckCircle,
  Zap,
  Target,
  Lightbulb,
} from "lucide-react";

export default function Prototype() {
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
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <MonitorSmartphone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                System Prototype
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                Interactive mockups and design prototypes for InstaMall
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              What is a System Prototype?
            </h2>
            <p className="text-slate-600">
              A system prototype is an early sample, model, or release of a
              product built to test a concept or process. It is a term used in a
              variety of contexts, including semantics, design, electronics, and
              software programming. A prototype is generally used to evaluate a
              new design to enhance precision by system analysts and users.
            </p>
          </div>

          {/* Purpose Section */}
          <div className="bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-cyan-900 mb-3 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2" />
              Purpose of Prototyping
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-cyan-800 space-y-2">
                <li>• Test design concepts before full implementation</li>
                <li>• Gather user feedback early in development</li>
                <li>• Identify potential issues and usability problems</li>
              </ul>
              <ul className="text-cyan-800 space-y-2">
                <li>• Demonstrate functionality to stakeholders</li>
                <li>• Validate technical feasibility</li>
                <li>• Reduce development risks and costs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prototype Types Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Types of Prototypes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-slate-700 mr-3" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Low-Fidelity Prototypes
                </h3>
              </div>
              <p className="text-slate-600 mb-4">
                Simple sketches, wireframes, or paper prototypes that focus on
                basic layout and functionality without detailed design.
              </p>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>✓ Quick to create</li>
                <li>✓ Low cost</li>
                <li>✓ Easy to modify</li>
                <li>✓ Focus on structure</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-center mb-4">
                <Layers className="h-6 w-6 text-slate-700 mr-3" />
                <h3 className="text-lg font-semibold text-slate-900">
                  High-Fidelity Prototypes
                </h3>
              </div>
              <p className="text-slate-600 mb-4">
                Detailed, interactive prototypes that closely resemble the final
                product with realistic content and functionality.
              </p>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>✓ Realistic user experience</li>
                <li>✓ Detailed interactions</li>
                <li>✓ Visual design validation</li>
                <li>✓ User testing ready</li>
              </ul>
            </div>
          </div>
        </div>

        {/* InstaMall Prototype Features */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            InstaMall Prototype Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Mobile-First Design
              </h3>
              <p className="text-slate-600 text-sm">
                Responsive design optimized for mobile shopping experience
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MousePointer className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Interactive Elements
              </h3>
              <p className="text-slate-600 text-sm">
                Clickable buttons, forms, and navigation components
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Visual Design
              </h3>
              <p className="text-slate-600 text-sm">
                Modern UI with consistent branding and color scheme
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-cyan-600" />
              Key Prototype Screens
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-slate-700">
                    User Registration/Login
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-slate-700">Product Catalog Browse</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-slate-700">Product Details View</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-slate-700">Shopping Cart</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-slate-700">Checkout Process</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-slate-700">Order History</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-slate-700">Seller Dashboard</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-slate-700">Admin Panel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Prototype Development Process
          </h2>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">
                <span className="text-white font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Requirements Gathering
                </h3>
                <p className="text-slate-600 text-sm">
                  Collect and analyze user requirements, business needs, and
                  technical specifications.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">
                <span className="text-white font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Wireframing
                </h3>
                <p className="text-slate-600 text-sm">
                  Create low-fidelity wireframes to establish basic layout and
                  user flow.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">
                <span className="text-white font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Design Mockups
                </h3>
                <p className="text-slate-600 text-sm">
                  Develop high-fidelity visual designs with colors, typography,
                  and branding.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">
                <span className="text-white font-semibold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Interactive Prototype
                </h3>
                <p className="text-slate-600 text-sm">
                  Build clickable prototype for user testing and stakeholder
                  feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">
                <span className="text-white font-semibold text-sm">5</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  User Testing & Iteration
                </h3>
                <p className="text-slate-600 text-sm">
                  Test with real users, gather feedback, and refine the design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Tools & Technologies Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Code className="h-5 w-5 text-cyan-600" />
              </div>
              <span className="text-sm font-medium text-slate-900">Figma</span>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Laptop className="h-5 w-5 text-cyan-600" />
              </div>
              <span className="text-sm font-medium text-slate-900">
                Adobe XD
              </span>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Smartphone className="h-5 w-5 text-cyan-600" />
              </div>
              <span className="text-sm font-medium text-slate-900">Sketch</span>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Tablet className="h-5 w-5 text-cyan-600" />
              </div>
              <span className="text-sm font-medium text-slate-900">
                InVision
              </span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
          <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
            <Zap className="h-5 w-5 mr-2" />
            Benefits of Prototyping
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-green-800 space-y-2">
              <li>✓ Early identification of design flaws</li>
              <li>✓ Improved communication with stakeholders</li>
              <li>✓ Reduced development time and costs</li>
              <li>✓ Better user experience validation</li>
            </ul>
            <ul className="text-green-800 space-y-2">
              <li>✓ Clearer project requirements</li>
              <li>✓ Easier maintenance and updates</li>
              <li>✓ Enhanced team collaboration</li>
              <li>✓ Higher chance of project success</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
