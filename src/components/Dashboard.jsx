import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
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
  ShoppingCart,
  ClipboardList
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const diagramCards = [
  {
    title: "Full Project Documentation",
    description:
      "Comprehensive system overview and development guide with detailed specifications and implementation details",
    icon: FileText,
    color: "text-white",
    bgColor: "bg-linear-to-br from-blue-500 to-blue-600",
    shadowColor: "shadow-blue-500/20",
    route: "/full-project-documentation",
  },
  {
    title: "Requirement Engineering",
    description:
      "Detailed process of gathering, analyzing, documenting, and managing system requirements for successful project delivery",
    icon: ClipboardList,
    color: "text-white",
    bgColor: "bg-linear-to-br from-green-500 to-green-600",
    shadowColor: "shadow-green-500/20",
    route: "/requirement-engineering",
  },
  {
    title: "Use Case Diagram",
    description:
      "Visual representation of system functionality and user interactions with external systems",
    icon: Users,
    color: "text-white",
    bgColor: "bg-linear-to-br from-emerald-500 to-emerald-600",
    shadowColor: "shadow-emerald-500/20",
    route: "/use-case-diagram",
  },
  {
    title: "Class Diagram",
    description:
      "Object-oriented design showing classes, their attributes, methods, and relationships",
    icon: GitBranch,
    color: "text-white",
    bgColor: "bg-linear-to-br from-violet-500 to-violet-600",
    shadowColor: "shadow-violet-500/20",
    route: "/class-diagram",
  },
  {
    title: "Sequence Diagram",
    description:
      "Time-ordered interactions between system components, objects, and actors",
    icon: ArrowRight,
    color: "text-white",
    bgColor: "bg-linear-to-br from-amber-500 to-amber-600",
    shadowColor: "shadow-amber-500/20",
    route: "/sequence-diagram",
  },
  {
    title: "Activity Diagram",
    description:
      "Workflow visualization showing business processes, activities, and decision points",
    icon: Activity,
    color: "text-white",
    bgColor: "bg-linear-to-br from-rose-500 to-rose-600",
    shadowColor: "shadow-rose-500/20",
    route: "/activity-diagram",
  },
  {
    title: "Data Flow Diagram (DFD)",
    description:
      "Data movement and transformation processes within the system architecture",
    icon: Database,
    color: "text-white",
    bgColor: "bg-linear-to-br from-indigo-500 to-indigo-600",
    shadowColor: "shadow-indigo-500/20",
    route: "/data-flow-diagram",
  },
  {
    title: "Entity-Relation Diagram",
    description:
      "Database schema design showing entities, their attributes, and relationships",
    icon: Link,
    color: "text-white",
    bgColor: "bg-linear-to-br from-teal-500 to-teal-600",
    shadowColor: "shadow-teal-500/20",
    route: "/entity-relationship-diagram",
  },
  {
    title: "Component Diagram",
    description:
      "System architecture showing software components and their dependencies",
    icon: Settings,
    color: "text-white",
    bgColor: "bg-linear-to-br from-pink-500 to-pink-600",
    shadowColor: "shadow-pink-500/20",
    route: "/component-diagram",
  },
  {
    title: "Deployment Diagram",
    description:
      "Physical system architecture showing hardware nodes and software deployment",
    icon: Server,
    color: "text-white",
    bgColor: "bg-linear-to-br from-slate-500 to-slate-600",
    shadowColor: "shadow-slate-500/20",
    route: "/deployment-diagram",
  },
];


  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <ShoppingCart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-linear-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
            InstaMall
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
                className={`group relative overflow-hidden border-0 ${card.shadowColor} shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-[1.02] cursor-pointer hover:-translate-y-1 min-h-[280px] flex flex-col`}
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
                <CardContent className="pt-0 relative z-10 flex-1 flex flex-col justify-between">
                  <CardDescription className="text-slate-600 mb-6 leading-relaxed text-sm flex-1">
                    {card.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 font-medium"
                    onClick={() => navigate(card.route)}
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

export default Dashboard;
