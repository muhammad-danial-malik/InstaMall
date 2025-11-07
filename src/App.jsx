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
      description:
        "Comprehensive system overview and development guide with detailed specifications and implementation details",
      icon: FileText,
      color: "text-white",
      bgColor: "bg-linear-to-br from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/20",
    },
    {
      title: "Use Case Diagram",
      description:
        "Visual representation of system interactions with users and external systems",
      icon: Users,
      color: "text-white",
      bgColor: "bg-linear-to-br from-emerald-500 to-emerald-600",
      shadowColor: "shadow-emerald-500/20",
    },
    {
      title: "Class Diagram",
      description:
        "Object-oriented design showing classes, their attributes, and relationships",
      icon: GitBranch,
      color: "text-white",
      bgColor: "bg-linear-to-br from-violet-500 to-violet-600",
      shadowColor: "shadow-violet-500/20",
    },
    {
      title: "Sequence Diagram",
      description:
        "Time-ordered interactions between system components and actors",
      icon: ArrowRight,
      color: "text-white",
      bgColor: "bg-linear-to-br from-amber-500 to-amber-600",
      shadowColor: "shadow-amber-500/20",
    },
    {
      title: "Activity Diagram",
      description:
        "Workflow visualization showing business processes and decision points",
      icon: Activity,
      color: "text-white",
      bgColor: "bg-linear-to-br from-rose-500 to-rose-600",
      shadowColor: "shadow-rose-500/20",
    },
    {
      title: "Data Flow Diagram (DFD)",
      description:
        "Data movement and transformation processes within the system",
      icon: Database,
      color: "text-white",
      bgColor: "bg-linear-to-br from-indigo-500 to-indigo-600",
      shadowColor: "shadow-indigo-500/20",
    },
    {
      title: "Entity-Relationship Diagram (ERD)",
      description:
        "Database schema design showing entities and their relationships",
      icon: Link,
      color: "text-white",
      bgColor: "bg-linear-to-br from-teal-500 to-teal-600",
      shadowColor: "shadow-teal-500/20",
    },
    {
      title: "Component Diagram",
      description:
        "System architecture showing components and their dependencies",
      icon: Settings,
      color: "text-white",
      bgColor: "bg-linear-to-br from-pink-500 to-pink-600",
      shadowColor: "shadow-pink-500/20",
    },
    {
      title: "State Machine Diagram",
      description: "State transitions for orders, inventory, and system states",
      icon: Zap,
      color: "text-white",
      bgColor: "bg-linear-to-br from-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/20",
    },
    {
      title: "Deployment Diagram",
      description:
        "Physical system architecture and hardware/software deployment",
      icon: Server,
      color: "text-white",
      bgColor: "bg-linear-to-br from-slate-500 to-slate-600",
      shadowColor: "shadow-slate-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-linear-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
            Project Documentation
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive system documentation with detailed architectural
            diagrams, design specifications, and implementation guides for the
            InstaMall platform
          </p>
        </div>

        {/* Diagram Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {diagramCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 ${card.shadowColor} shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-[1.02] cursor-pointer hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="pb-4 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl ${card.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  >
                    <IconComponent className={`h-7 w-7 ${card.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-slate-800 transition-colors duration-300 leading-tight">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <CardDescription className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {card.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 font-medium"
                  >
                    View Diagram
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm font-medium">
            © 2025 InstaMall Project Documentation • Built with React & Tailwind
            CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
