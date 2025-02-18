import { Input } from "@/components/ui/input"
import { Menu, Search } from "lucide-react"
// Icons 
import calender from "@assets/icons/calender.svg"
import bell from '@assets/icons/bell.svg'
import Navbar from "./Navbar"

const Header = () => {
    return (
        <>
            <header className="p-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-black text-[20px] font-bold">Field Development Project</h2>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Input type="email" className="rounded-xl bg-[##F0F0F3] pr-8 max-w-[160px] h-6" />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2">
                                <Search className="text-[gray] size-4" />
                            </span>
                        </div>
                        <div className="cursor-pointer">
                            <img src={bell} alt="" />
                        </div>
                        <div className="cursor-pointer">
                            <img src={calender} alt="calender-icon" className="w-6 h-6" />
                        </div>
                        <button className="cursor-pointer" >
                            <Menu className="text-black" size={28} />
                        </button>
                    </div>
                </div>
            </header>
            <Navbar />
        </>
    )
}

export default Header