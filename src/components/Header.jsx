import { Input } from "@/components/ui/input"
import { Bell, ChevronDown, Menu, Plus, Search } from "lucide-react"

// Icons 
import calender from "@assets/icons/calender.svg"
import dropdown from '@assets/icons/dropdown.svg'
import dropdownTwo from '@assets/icons/dropdown2.svg'
import upload from "@assets/icons/upload.svg"
import minscreen from '@assets/icons/minscreen.svg'
import fullscreen from '@assets/icons/fullscreen.svg'
import lang from '@assets/icons/lang.svg'
import filter from '@assets/icons/filter.svg'
import { Slider } from "@/components/ui/slider"
import Sidebar from "./Sidebar"

const Header = () => {
    return (
        <>
            <Sidebar />
            <header className="p-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-black text-[20px] font-bold">Your Next Project</h2>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Input type="email" className="rounded-xl bg-[##F0F0F3] pr-8" />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2">
                                <Search className="text-[gray]" />
                            </span>
                        </div>
                        <div className="cursor-pointer">
                            <Bell className="text-black font-bold" size={25} />
                        </div>
                        <div className="cursor-pointer">
                            <img src={calender} alt="calender-icon" className="w-6 h-6" />
                        </div>
                        <div className="cursor-pointer">
                            <Menu className="text-black" size={28} />
                        </div>
                    </div>
                </div>
            </header>
            <div className="px-3 flex gap-4 items-center justify-between">
                <button className="bg-[#BA5542] text-white px-2 py-1 rounded-md">Kanban</button>
                <div>
                    <button>
                        <Plus strokeWidth={3} />
                    </button>
                </div>
                <div>
                    <button className="h-8 w-12 px-2 rounded-sm bg-[#F0F0F3] "><img src={dropdown} className="w-20" alt="dropdown-icon" /></button>
                </div>
                <div>
                    <button><img src={dropdownTwo} alt="dropdown-icon" /></button>
                </div>
                <div className="size-8 rounded-sm bg-[#F0F0F3]">  </div>
                <div className="size-8 rounded-sm bg-[#F0F0F3]">  </div>
                <div className="size-8 rounded-sm bg-[#F0F0F3]">  </div>
                <div className="max-w-sm sm:max-w-[20rem] w-full rounded-sm bg-[#F0F0F3] h-8"></div>
                <div className="flex-shrink-0">
                    <button><img src={upload} alt="upload-icon" /></button>
                </div>
                <div className="flex gap-3 items-center max-w-sm flex-1  bg-[#F0F0F3] px-2 rounded-sm py-2" >
                    <div className="flex-shrink-0">
                        <button><img src={filter} alt="filter-icon" /></button>
                    </div>
                    <div className="flex-shrink-0">
                        <button><img src={lang} alt="lang-icon" /></button>
                    </div>
                    <div className=" max-w-sm w-full h-full flex items-center">
                        <Slider defaultValue={[33]} max={100} step={1} className="bg-[#f0f0f363]" />
                    </div>
                    <div className="flex-shrink-0">
                        <button> <img src={fullscreen} alt="" /></button>
                    </div>
                    <div className="flex-shrink-0">
                        <button> <img src={minscreen} alt="" /></button>
                    </div>
                </div>
                <div className="bg-[#F0F0F3]  py-2 rounded-sm flex justify-center px-5">
                    <button className="flex text-sm items-center font-bold">Task View <ChevronDown /></button>
                </div>
            </div></>
    )
}

export default Header