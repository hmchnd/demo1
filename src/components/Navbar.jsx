import { useState } from "react"

import { Plus, } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




import { Link, useLocation } from "react-router-dom"

// Icons 

import filterIcon from '@assets/icons/filtericon.svg'
import calicon from '@assets/icons/calicon.svg'
import responsibleicon from '@assets/icons/responsibleicon.svg'
import statusIcon from '@assets/icons/statusicon.svg'
import camIcon from '@assets/icons/camicon.svg'
import updown from '@assets/icons/updown.svg'
import share from '@assets/icons/share.svg'

import dropdownIcon from '@assets/icons/dropdownicon.svg'
import Dropdown from "./Dropdown"


const Navbar = () => {
    const location = useLocation()
    const currentPath = location.pathname

    const [responsible, setResponsible] = useState(false)
    const [period, setPeriod] = useState(false)
    const [outCome, setOutCome] = useState(false)

    const handleCheckboxClick = (e, setter) => {
        e.preventDefault()
        e.stopPropagation()
        setter((prev) => !prev)
    }
    return (
        <div className="flex gap-2 px-1 justify-between mb-2">
                {/* <div className="border-2 rounded-full h-full border-[#CDCED6] flex items-center overflow-hidden max-w-max">
                    <Link to="/" className={`w-[80px] ${currentPath === '/' ? 'bg-[#BA5542] text-white' : ''} h-[32px] flex justify-center items-center px-2 text-[14px] font-medium`}>Roadmap</Link>
                    <Link to="/kanban" className={`w-[68px] h-[32px] ${currentPath === '/kanban' ? 'bg-[#BA5542] text-white' : ''}  flex justify-center items-center  text-[14px] font-medium`}>Kanban</Link>
                    <Link to="/gantt" className={`w-[54px] h-[32px] flex ${currentPath === '/gantt' ? 'bg-[#BA5542] text-white' : ''} justify-center items-center text-[14px] font-medium`}>Gantt</Link>
                </div> */}
            <div className="flex items-center gap-2 h-8">
                <div className="h-full">
                    <button className="w-[72px] h-full px-2 flex gap-2 text-sm items-center bg-[#F0F0F3] rounded-[6px] text-[#60646C] font-medium">
                        <Plus size={currentPath === '/' ? 21 : 35} color="#60646C" strokeWidth={3} /> <span className="text-[#1C2024] text-sm font-medium">{currentPath === '/' ? 'Task' : 'Activity'}</span> </button>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                    {currentPath === '/' && <button className="text-[#101010] font-medium text-sm bg-[#F0F0F3] h-full px-3 rounded-[6px]">All Phases</button>}
                    {currentPath === '/' && <button className="text-[#101010] font-medium text-sm bg-[#F0F0F3] h-full px-3 rounded-[6px]">3 Phases</button>}
                    {currentPath === '/' && <button className="text-[#101010] font-medium text-sm bg-[#F0F0F3] h-full px-3 rounded-[6px]">1 Phase</button>}
                    <button className="border-2 gap-1 h-[25px] rounded-[50px] px-2 py-1 border-[#E0E1E6] flex items-center text-sm"><img src={filterIcon} alt=""  />Filter</button>
                    {/* <button className="border-2 gap-1 h-[25px] rounded-[50px] px-2 py-1 border-[#E0E1E6] flex items-center text-sm"><img src={calicon} alt="" />Due</button> */}
                    <button className="border-2 gap-1 h-[25px] rounded-[50px] px-2 py-1 border-[#E0E1E6] flex items-center text-sm"><img src={responsibleicon} alt="" /> View</button>
                    {/* <button className="border-2 gap-1 h-[25px] rounded-[50px] px-2 py-1 border-[#E0E1E6] flex items-center text-sm"><img src={statusIcon} alt="" /> Status</button> */}
                </div>
                <div className="flex items-center gap-2 h-8">
                    <button className="h-full"><img src={updown} alt="" /></button>
                    <button className="h-full"><img src={camIcon} alt="" /></button>
                    {/* <Dropdown className="h-full" /> */}
                    <button className="size-8 h-full flex-1"><img src={share} alt="" /></button>
                </div></div>

        </div>
    )
}

export default Navbar