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
import dropdownIcon from '@assets/icons/dropdownicon.svg'
import { useSelector, useDispatch } from "react-redux";
import { toggleOutcome, toggleResponsible, togglePeriod } from "@/store/slices/accordionSlice";
import useCurrentPath from "@/hooks/useCurrentPath"


const Dropdown = () => {
    const currentPath = useCurrentPath()

    const dispatch = useDispatch();
    const { showOutcome, showResponsible, showPeriod } = useSelector((state) => state.accordion);

    const handleCheckboxClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-[#F0F0F3] border-none text-sm flex gap-3 focus-visible:ring-transparent">
                    Detail level <img src={dropdownIcon} alt="" />
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
                                <Checkbox checked={showOutcome} onCheckedChange={() => dispatch(toggleOutcome())} />
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </>
                    }
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <label className="text-sm font-medium leading-none" onClick={handleCheckboxClick}>
                            Responsible
                        </label>
                        <Checkbox checked={showResponsible} onCheckedChange={() => dispatch(toggleResponsible())} />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <label className="text-sm font-medium leading-none" onClick={handleCheckboxClick}>
                            Period
                        </label>
                        <Checkbox checked={showPeriod} onCheckedChange={() => dispatch(togglePeriod())} />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Dropdown;
