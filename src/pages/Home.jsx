import AccordionCard from "@/components/AccordionCard"
import LineChart from "@/components/line-chart"

import Sidebar from "@/components/Sidebar"
import {
    Accordion, AccordionContent, AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { health_safety_environment, meetings, metrics, PROJECT_MANAGEMENTS, users } from "@/utils/constant"
import userIcon from '@assets/icons/userorange.svg'

const Home = () => {
    return (
        <div className="mt-2">
            <Accordion type="multiple" collapsible defaultValue="item-2">
                <AccordionItem value="item-0" className="bg-[#F0F0F3] rounded-sm px-2">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-2 gap-y-4 gap-x-5">
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="font-bold">KPIs</h4>
                                    <span className="text-[#E5484D]"><b>1</b>
                                    </span>
                                </div>
                                <ul className="list-none mt-2">
                                    {metrics.map((metric, index) => (
                                        <li key={index} className="flex justify-between mb-[2px]">
                                            <span className="text-[12px]">{metric.label}</span>
                                            <span className={`font-bold ${metric.color} text-[12px]`}>{metric.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="font-bold">Follow-up</h4>
                                </div>
                                <ul>
                                    {users.map((user, index) => (
                                        <li key={index} className="flex items-center justify-between mb-[2px]">
                                            <div className="flex items-center space-x-2">
                                                <img src={userIcon} alt="user-icon" />
                                                <span>{user.name}</span>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-2 gap-y-4 gap-x-2">
                    <div>
                        <div className="flex gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                            <h4 className="font-black">IDENTIFY</h4>
                            <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">4</span>
                        </div>
                        <div className="flex justify-between items-start mt-1">
                            <small className="text-[#60646C] text-[12px]" >April</small>
                            <div className="size-4 rounded-sm bg-[#30A46C] rotate-45 mt-3"></div>
                            <small className="mr-2 text-[#60646C] text-[12px]">June</small>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                            <h4 className="font-black">SELECT</h4>
                            <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">3</span>
                        </div>
                        <div className="flex justify-center mt-1">
                            <small className="text-[#60646C] text-[12px] ml-4">August</small></div>
                    </div>
                    <div>
                        <div className="flex gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                            <h4 className="font-black">DEFINE</h4>
                            <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">6</span>
                        </div>
                        <div className="flex justify-between items-start mt-1">
                            <div className="size-4 rounded-sm bg-[#BA5542] rotate-45 mt-3"></div>
                            <div>
                                <small className="mr-2 text-[#60646C] text-[12px]">October</small>
                                <span className="text-[#BA5542] font-semibold text-[12px]">Monday, 30 Oct, 43w</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                            <h4 className="font-black text-[#BA5542]">EXECUTE</h4>
                            <span className="size-5 rounded-full bg-[#E5484D] text-white flex justify-center items-center">1</span>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-1">
                            <small className="text-[#60646C]">December</small>
                            <div className="flex items-center gap-2">
                                <div className="size-4 rounded-sm bg-[#60646C] "></div>
                                <div className="size-4 rounded-sm bg-[#BA5542] "></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                            <h4 className="font-black">OPERATE & CLOSE</h4>
                            <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">3</span>
                        </div>
                        <div className="mt-1">
                            <div className="flex justify-center">
                                <small className="text-[12px] text-[#60646C]">February</small>
                            </div>
                            <div className="flex justify-end ">
                                <div className="size-4 rounded-full bg-[#30A46C] mr-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <AccordionItem value="item-1" className="bg-[#F0F0F3] rounded-sm px-2 mt-1">
                    <AccordionTrigger><div className="text-[16px] font-semibold flex items-center gap-2">Quality and Assurance
                        <span className="text-[14px] text-[#60646C] font-semibold"><b className="text-black">4</b> Area Milestones</span></div></AccordionTrigger>
                    <AccordionContent>
                        <h1>Test</h1>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-[#F0F0F3] rounded-sm px-2 mt-2">
                    <AccordionTrigger><div className="text-[16px] font-bold flex items-center gap-2">Project Management <span className="text-[`4px] text-[#60646C] font-semibold"><b className="text-black">5</b> Area Milestones</span></div></AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-4 gap-y-4 gap-x-2">
                            {PROJECT_MANAGEMENTS?.map((projectItem) => (
                                <AccordionCard key={projectItem.id} data={projectItem} />
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-[#F0F0F3] rounded-sm px-2 mt-2">
                    <AccordionTrigger><div className="text-[16px] font-bold flex items-center gap-2">Health, Safety and Environment<span className="text-[14px] text-[#60646C] font-semibold"><b className="text-black">5</b> Area Milestones</span></div></AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-4 gap-y-4 gap-x-2">
                            {health_safety_environment?.map((projectItem) => (
                                <AccordionCard key={projectItem.id} data={projectItem} />
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div >
    )
}

export default Home