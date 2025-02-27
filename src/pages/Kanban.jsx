import TaskCard from '@/components/TaskCard'
import TasksSidebar from '@/components/TasksSidebar'
import { completedTasks, kanbanSidebarConfig, pendingTasks, progressTasks } from '@/utils/constant'
import menuDots from '@assets/icons/menu-dots.svg'

import {
    Accordion
} from "@/components/ui/accordion"
import TaskAccordion from '@/components/TaskAccordion'

const Kanban = () => {
    return (
        <div className="h-full flex flex-col  max-h-[85vh] overflow-y-auto
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:bg-white
        [&::-webkit-scrollbar-thumb]:bg-[#E0E1E6]
        [&::-webkit-scrollbar-thumb]:rounded-[4px]">
            <div>
                <Accordion type="single" collapsible className="w-full" defaultValue='item-1'>
                    <TaskAccordion />
                </Accordion>
            </div>
            <div className='p-1 bg-[#F0F0F3] mt-2 rounded-[7px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)] flex-grow'>
                <div className="grid grid-cols-auto gap-2">
                    <div className="grid grid-cols-3 gap-4">
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
                </div>
            </div>
        </div>
    )
}

export default Kanban