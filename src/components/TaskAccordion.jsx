import LineChart from "@/components/line-chart"
import {
    AccordionContent, AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { meetings, metrics, users } from "@/utils/constant"
import userIcon from '@assets/icons/userorange.svg'


const TaskAccordion = ({ color }) => {

    return (
        <>
            <AccordionItem value="item-0" className={`rounded-sm px-2 bg-[${color || 'bg-transparent'}]`} >
                <AccordionTrigger>
                    <div className="flex flex-wrap gap-4">
                        <div className="text-base flex gap-2"> <h6 className="text-[#101010] font-bold  text-[17px]">  56% </h6><span className="text-[#60646C] font-semibold text-[14px]">Completed</span></div>
                        <div className="text-base flex gap-2"> <h6 className="text-[#101010] font-bold  text-[17px]"> 23 </h6><span className="text-[#60646C] font-semibold text-[14px]">Sub-projects</span></div>
                        <div className="text-base flex gap-2"> <h6 className="rounded-full size-6 flex justify-center px-1 font-bold bg-[#E5484D] text-white"> 2 </h6><span className="text-[#60646C] font-semibold text-[14px]">Task Due</span></div>
                        <div className="text-base flex gap-2"> <h6 className="text-[#101010] font-bold  text-[17px]">  5w </h6><span className="text-[#60646C] font-semibold text-[14px]">Until next milestone</span></div>
                        <div className="text-base flex gap-2"> <h6 className="text-[#101010] text-[17px] font-bold">  1 </h6><span className="text-[#60646C] font-semibold text-[14px]">Pending Approval</span></div>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-2 gap-y-4 gap-x-5">
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold">KPIs</h4>
                                <span className="text-[#E5484D]"><b>1</b>
                                </span>
                            </div>
                            <ul className="list-none mt-2 flex flex-col gap-2">
                                {metrics.map((metric, index) => (
                                    <li key={index} className="flex justify-between ">
                                        <span className="text-[14px]">{metric.label}</span>
                                        <span className={`font-bold ${metric.color} text-[14px]`}>{metric.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold">Follow-up</h4>
                            </div>
                            <ul className="flex flex-col gap-1">
                                {users.map((user, index) => (
                                    <li key={index} className="flex items-center justify-between mb-[2px]">
                                        <div className="flex items-center space-x-2">
                                            <img src={userIcon} alt="user-icon" />
                                            <span className="text-sm">{user.name}</span>
                                        </div>
                                        <span className="font-bold">{user.score}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold">Task Completion Trends</h4>
                            </div>
                            <div>
                                <LineChart />
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-[#876500]"></div><span>PMS</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-[#8A3A23]"></div><span>IT</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-[#659F4A]"></div><span>INT</span></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold">Today</h4>
                            </div>
                            <ul className="list-none mt-2">
                                {meetings.map((meeting, index) => (
                                    <li key={index} className="flex justify-between mb-[2px]">
                                        <span className="text-[12px]">{meeting.title}</span>
                                        <span className="font-bold text-[12px]">{meeting.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </>
    )
}

export default TaskAccordion