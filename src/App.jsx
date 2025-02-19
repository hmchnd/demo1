import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Home from "./pages/Home"
import Kanban from "./pages/Kanban"
import Gantt from "./pages/Gantt"
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} >
        <Route index element={<Home />} />
        <Route path="kanban" element={<Kanban />} />
        <Route path="gantt" element={<Gantt />} />
      </Route>
    </Routes>
  )
}
export default App
