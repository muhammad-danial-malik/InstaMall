import { Routes, Route } from "react-router-dom";

import FullProjectDocumentation from "./pages/FullProjectDocumentation";
import UseCaseDiagram from "./pages/UseCaseDiagram";
import ClassDiagram from "./pages/ClassDiagram";
import SequenceDiagram from "./pages/SequenceDiagram";
import ActivityDiagram from "./pages/ActivityDiagram";
import DataFlowDiagram from "./pages/DataFlowDiagram";
import EntityRelationshipDiagram from "./pages/EntityRelationshipDiagram";
import ComponentDiagram from "./pages/ComponentDiagram";
import RequirementEngineering from "./pages/RequirementEngineering";
import DeploymentDiagram from "./pages/DeploymentDiagram";
import Prototype from "./pages/Prototype";
import UserInterfaceFlow from "./pages/UserInterfaceFlow";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/full-project-documentation"
        element={<FullProjectDocumentation />}
      />
      <Route path="/use-case-diagram" element={<UseCaseDiagram />} />
      <Route path="/class-diagram" element={<ClassDiagram />} />
      <Route path="/sequence-diagram" element={<SequenceDiagram />} />
      <Route path="/activity-diagram" element={<ActivityDiagram />} />
      <Route path="/data-flow-diagram" element={<DataFlowDiagram />} />
      <Route
        path="/entity-relationship-diagram"
        element={<EntityRelationshipDiagram />}
      />
      <Route path="/component-diagram" element={<ComponentDiagram />} />
      <Route
        path="/requirement-engineering"
        element={<RequirementEngineering />}
      />
      <Route path="/deployment-diagram" element={<DeploymentDiagram />} />
      <Route path="/prototype" element={<Prototype />} />
      <Route path="/ui-flow" element={<UserInterfaceFlow />} />
    </Routes>
  );
}

export default App;
