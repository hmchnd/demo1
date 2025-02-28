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
import dropdownIcon from '@assets/icons/dropdownicon.svg'
import arrowUp from '@assets/icons/arrowup.svg'

import unchecked from '@assets/icons/uncheck.svg'
import checked from '@assets/icons/check.svg'
import { useSelector, useDispatch } from "react-redux";
import { toggleOutcome, toggleResponsible, togglePeriod } from "@/store/slices/accordionSlice";
import useCurrentPath from "@/hooks/useCurrentPath"
import { useState } from "react"


const Dropdown = () => {
    const currentPath = useCurrentPath()
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const { showOutcome, showResponsible, showPeriod } = useSelector((state) => state.accordion);
    const handleCheckboxClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    return (
        <DropdownMenu onOpenChange={setOpen} >
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-[#F0F0F3] border-none h-full text-sm flex gap-3 focus-visible:ring-transparent">
                    Detail level <img src={open ? arrowUp : dropdownIcon} alt="" className="size-[16px]" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[143px] bg-[#E8E8EC]">
                <DropdownMenuLabel>Activity view</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {
                        currentPath === '/' && <>
                            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <label className="text-sm font-medium leading-none" onClick={handleCheckboxClick}>
                                    Outcome
                                </label>
                                <button className="size-4" onClick={() => dispatch(toggleOutcome())} >
                                    <img src={showOutcome ? checked : unchecked} alt="check-icon" />
                                </button>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </>
                    }
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <label className="text-sm font-medium leading-none" onClick={handleCheckboxClick}>
                            Responsible
                        </label>
                        <button className="size-4" onClick={() => dispatch(toggleResponsible())} >
                            <img src={showResponsible ? checked : unchecked} alt="check-icon" />
                        </button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <label className="text-sm font-medium leading-none" onClick={handleCheckboxClick}>
                            Period
                        </label>
                        <button className="size-4" onClick={() => dispatch(togglePeriod())} >
                            <img src={showPeriod ? checked : unchecked} alt="check-icon" />
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Dropdown;
