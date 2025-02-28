import { Input } from "@/components/ui/input"
import { Menu, Search } from "lucide-react"
// Icons 
import statusIcon from "@assets/icons/statuslight.svg"
import downIcon from "@assets/icons/downiconsmall.svg"
import bell from '@assets/icons/bell.svg'
import ai from '@assets/icons/ai.svg'

import searchIcon from '@assets/icons/searchicon.svg'

import Navbar from "./Navbar"
import { useDispatch } from "react-redux"
import { toggleSidebar } from "@/store/slices/slidebarSlice"

const Header = () => {
    const dispatch = useDispatch()
    return (
        <>
            <header className="h-10 flex items-center w-full px-1">
                <div className="flex justify-between items-center flex-1 ">
                    <h4 className="text-black text-2xl font-bold flex items-center gap-3">Field Development Project <button><img src={downIcon} alt="" /></button></h4>
                    <div className="flex items-center gap-2">
                        <div className="cursor-pointer">
                            <img src={statusIcon} alt="" />
                        </div>
                        <div className="relative">
                            <Input type="email" className="rounded-xl bg-[##F0F0F3] pr-8 max-w-[160px] h-6" />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2">
                                <img src={searchIcon} alt="" />
                            </span>
                        </div>
                        <div className="cursor-pointer">
                            <img src={ai} alt="" />
                        </div>
                        <div className="cursor-pointer">
                            <img src={bell} alt="" />
                        </div>
                        <button className="cursor-pointer" >
                            <Menu className="text-black" size={28} onClick={() => dispatch(toggleSidebar())} />
                        </button>
                    </div>
                </div>
            </header>
            <Navbar />
        </>
    )
}

export default Header