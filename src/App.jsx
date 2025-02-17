import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Home from "./pages/Home"
import { About } from "./pages/About"
import Kanban from "./pages/Kanban"
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="kanban" element={<Kanban />} />
      </Route>
    </Routes>
  )
}
export default App
