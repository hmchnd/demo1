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


const Navbar = () => {
    const location = useLocation()
    const currentPath = location.pathname

    const [responsible, setResponsible] = useState(false)
    const [period, setPeriod] = useState(false)


    const handleCheckboxClick = (e, setter) => {
        e.preventDefault()
        e.stopPropagation()
        setter((prev) => !prev)
    }



    return (
        <div className="flex gap-2 px-3 justify-between">
            <div className="flex items-center gap-2">
                <div className="border-2 rounded-full border-[#CDCED6] flex items-center overflow-hidden max-w-max">
                    <Link to="/" className={`w-[80px] ${currentPath === '/' ? 'bg-[#BA5542] text-white' : ''} h-[32px] flex justify-center items-center px-2 text-[14px] font-medium`}>Roadmap</Link>
                    <Link to="/kanban" className={`w-[68px] h-[32px] ${currentPath === '/kanban' ? 'bg-[#BA5542] text-white' : ''}  flex justify-center items-center  text-[14px] font-medium`}>Kanban</Link>
                    <Link to="/" className={`w-[54px] h-[32px] flex ${currentPath === '/gantt' ? 'bg-[#BA5542] text-white' : ''} justify-center items-center text-[14px] font-medium`}>Gantt</Link>
                </div>
                <div>
                    <button className="w-[91px] h-[32px] px-2 flex gap-2 text-sm items-center bg-[#F0F0F3] rounded-[6px] text-[#60646C] font-medium">
                        <Plus size={currentPath === '/' ? 21 : 35} color="#60646C" strokeWidth={3} />{currentPath === '/' ? 'Task' : 'Activity'}</button>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                    <button><img src={filterIcon} alt="" /></button>
                    <button className="border-2 gap-1 rounded-[50px] px-2 py-1 border-[#E0E1E6] flex items-center text-sm"><img src={calicon} alt="" />Due</button>
                    <button className="border-2 gap-1 rounded-[50px] px-2 py-1 border-[#E0E1E6] flex items-center text-sm"><img src={responsibleicon} alt="" /> Responsible</button>
                    <button className="border-2 gap-1 rounded-[50px] px-2 py-1 border-[#E0E1E6] flex items-center text-sm"><img src={statusIcon} alt="" /> Status</button>
                </div>
                <div className="flex items-center gap-2">
                    <button><img src={camIcon} alt="" /></button>
                    <button><img src={updown} alt="" /></button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="bg-[#F0F0F3] border-none text-sm flex gap-3 focus-visible:ring-transparent">Detail level <img src={dropdownIcon} alt="" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[143px] bg-[#E8E8EC]">
                            <DropdownMenuLabel>Activity view</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <label
                                        htmlFor="Responsible"
                                        className="text-sm font-medium leading-none "
                                        onClick={(e) => handleCheckboxClick(e, setResponsible)}
                                    >
                                        Responsible
                                    </label>
                                    <Checkbox id="Responsible" onCheckedChange={() => setResponsible((prev) => !prev)}
                                        onClick={(e) => e.stopPropagation()} />

                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <label
                                        htmlFor="Period"
                                        className="text-sm font-medium leading-none" onClick={(e) => handleCheckboxClick(e, setPeriod)}
                                    >
                                        Period
                                    </label>
                                    <Checkbox id="Period" onCheckedChange={() => setPeriod((prev) => !prev)}
                                        onClick={(e) => e.stopPropagation()} />

                                </DropdownMenuItem>
                            </DropdownMenuGroup>

                        </DropdownMenuContent>
                    </DropdownMenu>
                    <button className="size-8"><img src={share} alt="" /></button>
                </div></div>

        </div>
    )
}

export default Navbar