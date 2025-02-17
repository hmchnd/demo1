import { useLocation } from "react-router-dom"

const Sidebar = () => {
    const location = useLocation()
    function sidebarContent() {
        if (location.pathname === '/') return <h1>Home</h1>
        if (location.pathname === '/about') return <h1>About Page</h1>
    }
    return (
        <>
            <p>{sidebarContent()}</p>
        </>
    )
}

export default Sidebar