import { Plus } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

// Icons 

import filterIcon from '@assets/icons/filtericon.svg'
import calicon from '@assets/icons/calicon.svg'
import responsibleicon from '@assets/icons/responsibleicon.svg'
import statusIcon from '@assets/icons/statusIcon.svg'

const Navbar = () => {
    const location = useLocation()
    const currentPath = location.pathname
    return (
        <div className="flex gap-2 px-3">
            <div className="border rounded-full border-[#CDCED6] flex items-center overflow-hidden max-w-max">
                <Link to="/" className={`w-[80px] ${currentPath === '/' ? 'bg-[#BA5542] text-white' : ''} h-[32px] flex justify-center items-center px-2 text-[14px] font-medium`}>Roadmap</Link>
                <Link to="/kanban" className={`w-[68px] h-[32px] ${currentPath === '/kanban' ? 'bg-[#BA5542] text-white' : ''}  flex justify-center items-center  text-[14px] font-medium`}>Kanban</Link>
                <Link to="/" className={`w-[54px] h-[32px] flex ${currentPath === '/gantt' ? 'bg-[#BA5542] text-white' : ''} justify-center items-center text-[14px] font-medium`}>Gantt</Link>
            </div>
            <div>
                <button className="w-[91px] h-[32px] px-2 flex gap-2 text-sm items-center bg-[#F0F0F3] rounded-[6px] text-[#60646C] font-medium">
                    <Plus size={40} color="#60646C" strokeWidth={3} />Activity</button>
            </div>
            <div>

            </div>

        </div>
    )
}

export default Navbar