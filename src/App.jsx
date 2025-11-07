import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import {
  FileText,
  Users,
  GitBranch,
  ArrowRight,
  Activity,
  Database,
  Link,
  Settings,
  Zap,
  Server,
} from "lucide-react";

function App() {
  const diagramCards = [
    {
      title: "Full Project Documentation",
      description: "Comprehensive system overview and development guide",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Use Case Diagram",
      description: "System interactions with users and external systems",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Class Diagram",
      description: "Structure of classes and their relationships",
      icon: GitBranch,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Sequence Diagram",
      description: "Order of interactions between system modules",
      icon: ArrowRight,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Activity Diagram",
      description: "Workflow and process logic visualization",
      icon: Activity,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Data Flow Diagram (DFD)",
      description: "Data movement through the system",
      icon: Database,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Entity-Relationship Diagram (ERD)",
      description: "Database structure and relationships",
      icon: Link,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      title: "Component Diagram",
      description: "Modular architecture and dependencies",
      icon: Settings,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      title: "State Machine Diagram",
      description: "State transitions for orders and inventory",
      icon: Zap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Deployment Diagram",
      description: "System hardware and software environment",
      icon: Server,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Project Documentation Dashboard
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive system documentation with detailed diagrams and
            architectural overviews
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Total Diagrams
                  </p>
                  <p className="text-3xl font-bold text-slate-900">10</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    System Modules
                  </p>
                  <p className="text-3xl font-bold text-slate-900">8</p>
                </div>
                <Settings className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Documentation Pages
                  </p>
                  <p className="text-3xl font-bold text-slate-900">25+</p>
                </div>
                <Database className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Diagram Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {diagramCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div
                    className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`h-6 w-6 ${card.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-slate-600 mb-4 leading-relaxed">
                    {card.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300"
                  >
                    View Diagram
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-slate-500 text-sm">
            © 2025 InstaMall Project Documentation. Built with React & Tailwind
            CSS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
