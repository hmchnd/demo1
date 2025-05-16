import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Home from "./pages/Home"
import Kanban from "./pages/Kanban"
import Gantt from "./pages/Gantt"

function App() {
  return (
    <div style={{ backgroundColor: '#2C2C2C', minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<DashboardLayout />} >
          <Route index element={<Home />} />
          <Route path="kanban" element={<Kanban />} />
          <Route path="gantt" element={<Gantt />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App