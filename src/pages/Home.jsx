import AccordionCard from "@/components/AccordionCard"
import LineChart from "@/components/line-chart"
import TaskAccordion from "@/components/TaskAccordion"


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
                <TaskAccordion color="#F9F9FB" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-2 gap-y-4 gap-x-2">
                    <div>
                        <div className="flex gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                            <h4 className="font-black">IDENTIFY</h4>
                            <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">4</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <small className="text-[#60646C] text-[9px]" >April</small>
                        </div>
                        <div className="flex justify-center">
                            <div className="size-4 font-semibold -ml-14 text-[10px] flex items-center justify-center border-2 rounded-full border-[#E5484D]">
                                P
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                            <h4 className="font-black">SELECT</h4>
                            <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">3</span>
                        </div>
                        <div className="flex ">
                            <small className="text-[#60646C] text-[9px]">June</small></div>
                    </div>
                    <div>
                        <div className="flex gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                            <h4 className="font-black">DEFINE</h4>
                            <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">6</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex gap-1">
                                <small className="text-[#60646C] text-[9px]">August</small>

                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="size-4 font-semibold -ml-4 text-[10px] flex items-center justify-center border-2 rounded-full border-[#60646C]">
                                M
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                            <h4 className="font-black text-[#BA5542]">EXECUTE</h4>
                            <span className="size-5 rounded-full bg-[#E5484D] text-white flex justify-center items-center">1</span>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <small className="text-[#60646C] text-[9px]">October</small>
                            <span className="text-[#BA5542] font-semibold text-[9px]">Monday, 30 Oct, 43w</span>
                        </div>
                        <div className="flex justify-center gap-1">
                            <div className="size-4 font-semibold text-[10px] flex items-center justify-center border-2 rounded-full border-[#E5484D]">
                                M
                            </div>
                            <div className="h-4 w-[21px] font-semibold  text-[10px] flex items-center justify-center border-2 rounded-[50px] border-[#86DC45]">
                                AC
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                            <h4 className="font-black">OPERATE & CLOSE</h4>
                            <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">3</span>
                        </div>
                        <div>
                            <div className="flex ">
                                <small className="text-[9px] text-[#60646C]">December</small>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="size-4 font-semibold -ml-4 text-[10px] flex items-center justify-center border-2 rounded-full border-[#60646C]">
                                M
                            </div>
                        </div>
                    </div>
                </div>
                <AccordionItem value="item-1" className="rounded-sm mt-1">
                    <AccordionTrigger className="bg-[#F9F9FB] px-2 rounded-sm"><div className="text-[16px] font-semibold flex items-center gap-2">Quality and Assurance
                        <span className="text-[14px] text-[#60646C] font-semibold"><b className="text-black">4</b> Area Milestones</span></div></AccordionTrigger>
                    <AccordionContent>
                        <h1>Test</h1>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="rounded-sm mt-2">
                    <AccordionTrigger className="bg-[#F9F9FB] px-2 rounded-sm" ><div className="text-[16px] font-bold flex items-center gap-2 ">Project Management <span className="text-[`4px] text-[#60646C] font-semibold"><b className="text-black">5</b> Area Milestones</span></div></AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-4 gap-y-4 gap-x-2">
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {PROJECT_MANAGEMENTS[0].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                                <div className="w-3 h-full rounded-[4px] bg-[#F0F0F3]"></div>
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {PROJECT_MANAGEMENTS[1].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                                <div className="w-3 h-full rounded-[4px] bg-[#F0F0F3]"></div>
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {PROJECT_MANAGEMENTS[2].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                                <div className="w-3 h-full rounded-[4px] bg-[#F0F0F3]"></div>
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {PROJECT_MANAGEMENTS[3].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                                <div className="w-3 h-full rounded-[4px] bg-[#F0F0F3]"></div>
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {PROJECT_MANAGEMENTS[4].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="rounded-sm mt-2">
                    <AccordionTrigger className="bg-[#F9F9FB] px-2 rounded-sm"><div className="text-[16px] font-bold flex items-center gap-2">Health, Safety and Environment<span className="text-[14px] text-[#60646C] font-semibold"><b className="text-black">5</b> Area Milestones</span></div></AccordionTrigger>
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