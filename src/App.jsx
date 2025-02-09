import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Home from "./pages/Home"
import { About } from "./pages/About"
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
