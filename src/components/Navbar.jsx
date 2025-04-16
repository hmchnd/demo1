import { useState } from "react"
import { Plus } from "lucide-react"
import { useSelector } from "react-redux"
import filterIcon from '@assets/icons/filtericon.svg'
import responsibleicon from '@assets/icons/responsibleicon.svg'
import updown from '@assets/icons/updown.svg'
import camIcon from '@assets/icons/camicon.svg'
import share from '@assets/icons/share.svg'

const Navbar = ({ showDetailsPanel = false }) => {
    return (
        <div className="flex gap-2 px-4 py-2 justify-between items-center border-b border-gray-200">
            <div className="flex items-center gap-2 h-8">
                <div className="h-full">
                    <button className="w-[72px] h-full px-2 flex gap-2 text-sm items-center bg-[#F0F0F3] rounded-[6px] text-[#60646C] font-medium">
                        <Plus size={21} color="#60646C" strokeWidth={3} /> 
                        <span className="text-[#1C2024] text-sm font-medium">Task</span>
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <button className="text-[#101010] font-medium text-sm bg-[#F0F0F3] h-8 px-3 rounded-[6px]">All Phases</button>
                    <button className="text-[#101010] font-medium text-sm bg-[#F0F0F3] h-8 px-3 rounded-[6px]">3 Phases</button>
                    <button className="text-[#101010] font-medium text-sm bg-[#F0F0F3] h-8 px-3 rounded-[6px]">1 Phase</button>
                    <button className="border border-[#E0E1E6] gap-2 h-8 rounded-[6px] px-3 py-1 flex items-center text-sm bg-white">
                        <img src={filterIcon} alt="" className="w-4 h-4" />
                        <span className="text-[#101010] font-medium">Filter</span>
                    </button>
                    <button className="border border-[#E0E1E6] gap-2 h-8 rounded-[6px] px-3 py-1 flex items-center text-sm bg-white">
                        <img src={responsibleicon} alt="" className="w-4 h-4" />
                        <span className="text-[#101010] font-medium">View</span>
                    </button>
                </div>
                <div className="flex items-center gap-2 h-8 border-l border-gray-200 pl-4">
                    <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-[6px]">
                        <img src={updown} alt="" className="w-5 h-5" />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-[6px]">
                        <img src={camIcon} alt="" className="w-5 h-5" />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-[6px]">
                        <img src={share} alt="" className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar