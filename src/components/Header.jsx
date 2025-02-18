import { Input } from "@/components/ui/input"
import { Menu, Search } from "lucide-react"
// Icons 
import statusIcon from "@assets/icons/statuslight.svg"
import downIcon from "@assets/icons/downiconsmall.svg"
import bell from '@assets/icons/bell.svg'
import Navbar from "./Navbar"
import { useDispatch } from "react-redux"
import { toggleSidebar } from "@/store/slices/slidebarSlice"

const Header = () => {
    const dispatch = useDispatch()
    return (
        <>
            <header className="p-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-black text-[20px] font-bold flex items-center gap-3">Field Development Project <button><img src={downIcon} alt="" /></button></h2>
                    <div className="flex items-center gap-2">
                        <div className="cursor-pointer">
                            <img src={statusIcon} alt="" />
                        </div>
                        <div className="relative">
                            <Input type="email" className="rounded-xl bg-[##F0F0F3] pr-8 max-w-[160px] h-6" />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2">
                                <Search className="text-[gray] size-4" />
                            </span>
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