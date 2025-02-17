import TaskCard from '@/components/TaskCard'
import TasksSidebar from '@/components/TasksSidebar'
import { completedTasks, pendingTasks, progressTasks } from '@/utils/constant'
import menuDots from '@assets/icons/menu-dots.svg'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Kanban = () => {
    return (
        <div className="p-1 rounded-[7px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
            <Accordion type="single" collapsible className="w-full" defaultValue='item-1'>
                <AccordionItem value="item-1" className="rounded-sm px-2">
                    <AccordionTrigger>
                        <div className="flex flex-wrap gap-3">
                            <div className="text-base flex gap-2"> <b className="text-black font-bold">  56% </b><span className="text-[#60646C] font-bold text-[14px]">Completed</span></div>
                            <div className="text-base flex gap-2"> <b className="text-black font-bold"> 23 </b><span className="text-[#60646C] font-bold text-[14px]">Sub-projects</span></div>
                            <div className="text-base flex gap-2"> <b className="rounded-sm px-1 font-bold bg-[#E5484D] text-white"> 2 </b><span className="text-[#60646C] font-bold text-[14px]">Task Due</span></div>
                            <div className="text-base flex gap-2"> <b className="text-black font-bold">  5w </b><span className="text-[#60646C] font-bold text-[14px]">Until next milestone</span></div>
                            <div className="text-base flex gap-2"> <b className="text-black font-bold">  1 </b><span className="text-[#60646C] font-bold text-[14px]">Pending Approval</span></div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div>
                            <div className="grid grid-cols-[auto_340px] gap-2">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className='flex flex-col gap-2'>
                                        <div className="flex items-center justify-between pr-1">
                                            <div className="flex items-center gap-2">
                                                <button className="flex items-center bg-[#B9BBC6] text-[13px] rounded-[5px] font-bold w-[69px] h-[32px] p-2">Pending</button>
                                                <span className="text-[13px] font-bold">1</span>
                                            </div>
                                            <button><img src={menuDots} alt="" className='w-4 h-1' /></button>
                                        </div>
                                        {
                                            pendingTasks.map((task, index) => {
                                                return <TaskCard data={task} key={index} />
                                            })
                                        }
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className="flex items-center justify-between pr-1">
                                            <div className="flex items-center gap-2">
                                                <button className="flex items-center bg-[#FFE770] text-[13px] rounded-[5px] font-bold w-[88px] h-[32px] p-2">In Progress</button><span className="text-[13px] font-bold">3</span>
                                            </div>
                                            <button><img src={menuDots} alt="" className='w-4 h-1' /></button>
                                        </div>
                                        {
                                            progressTasks.map((task, index) => {
                                                return <TaskCard data={task} key={index} />
                                            })
                                        }
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className="flex items-center justify-between pr-1">
                                            <div className="flex items-center gap-2">
                                                <button className="flex items-center  bg-[#C4E8D1] text-[13px] rounded-[5px] font-bold w-[87px] h-[32px] p-2">Completed</button><span className="text-[13px] font-bold">1</span>
                                            </div>
                                            <button><img src={menuDots} alt="" className='w-4 h-1' /></button>
                                        </div>
                                        {
                                            completedTasks.map((task, index) => {
                                                return <TaskCard data={task} key={index} />
                                            })
                                        }
                                    </div>
                                </div>
                                <TasksSidebar />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Kanban