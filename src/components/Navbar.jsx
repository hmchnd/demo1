import { useState } from "react"
import { Plus } from "lucide-react"
import { useSelector } from "react-redux"
import filterIcon from '@assets/icons/filtericon.svg'
import responsibleicon from '@assets/icons/responsibleicon.svg'
import updown from '@assets/icons/updown.svg'
import camIcon from '@assets/icons/camicon.svg'
import share from '@assets/icons/share.svg'
import LeftArrow from '@assets/icons/LeftArrow.svg'

const Navbar = ({ showDetailsPanel = false }) => {
    return (
        <div className="flex gap-2 px-2 h-7 justify-between items-center self-stretch">
            <div className="flex items-center gap-2 h-6">
                    <button >
                        <img src={LeftArrow} alt="" className="w-6 h-6" style={{ height: '13.704px', flexShrink: 0, alignSelf: 'stretch', aspectRatio: '16.00/13.70' }} />
                    </button>
                <div className="h-full flex items-center">
                    <button className="h-6 px-2 py-0 flex justify-center items-center gap-2 text-sm bg-[#EBEBEB] rounded-[6px] text-[#60646C] font-medium self-stretch">
                        <Plus size={21} color="#60646C" strokeWidth={3} />
                        <span className="text-[#595959] text-sm font-medium" style={{ fontFamily: 'var(--text-font-primary, Inter)' }}>Task</span>
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex items-center">
                    <button className="text-white font-medium text-sm bg-[#AE4F3E] h-8 px-3 rounded-l-[6px] border border-gray-200">All Phases</button>
                    <button className="text-[#101010] font-medium text-sm bg-[#EBEBEB] h-8 px-3 border-t border-b border-gray-200">3 Phases</button>
                    <button className="text-[#101010] font-medium text-sm bg-[#EBEBEB] h-8 px-3 rounded-r-[6px] border border-gray-200">1 Phase</button>
                </div>
                <div className="flex items-center gap-2">
                    <button className="border border-[#E0E1E6] gap-2 h-8 rounded-[6px] px-3 py-1 flex items-center text-sm bg-[#EBEBEB]">
                        <img src={filterIcon} alt="" className="w-4 h-4" />
                        <span className="text-[#101010] font-medium">Filter</span>
                    </button>
                    <button className="border border-[#E0E1E6] gap-2 h-8 rounded-[6px] px-2 py-1 flex items-center text-sm bg-[#EBEBEB]">
                        <img src={responsibleicon} alt="" className="w-4 h-4" />
                        <span className="text-[#101010] font-medium">View</span>
                    </button>
                </div>
                <div className="flex items-center gap-2 h-8">
                    <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-[6px]">
                        <img src={updown} alt="" className="w-5 h-5" />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-[6px]">
                        <img src={camIcon} alt="" className="w-5 h-5" />
                    </button>
                    <button className="border border-[#E0E1E6] gap-2 h-8 rounded-[6px] px-3 py-1 flex items-center text-sm bg-[#EBEBEB]">
                        <img src={share} alt="" className="w-5 h-5" />
                        <span className="text-[#101010] font-medium">Share</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar