import { useLocation } from "react-router-dom"

const Sidebar = () => {
    const location = useLocation()
    function sidebarContent() {
        if (location.pathname === '/') return <h1>Home</h1>
        if (location.pathname === '/about') return <h1>About Page</h1>
    }
    return (
        <div className="fixed right-0 top-0 h-svh z-50 p-5 bg-white shadow-md min-w-96">Sidebar
            <p>{sidebarContent()}</p>
        </div>
    )
}

export default Sidebar