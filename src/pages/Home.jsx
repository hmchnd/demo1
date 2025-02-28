import AccordionCard from "@/components/AccordionCard"
import TaskAccordion from "@/components/TaskAccordion"
import {
    Accordion, AccordionContent, AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Divider from "@/components/ui/Divider"
import { health_safety_environment, PROJECT_MANAGEMENTS,  } from "@/utils/constant"

const Home = () => {
    return (
        <div className="mt-0 pr-1  max-h-[87vh] overflow-y-auto
  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-[none]
  [&::-webkit-scrollbar-thumb]:bg-[#E0E1E6]
   [&::-webkit-scrollbar-thumb]:rounded-[4px]">
            <Accordion type="multiple" collapsible defaultValue="item-2">
                <TaskAccordion color="#F9F9FB" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-2 gap-y-4">
                    <div>
                        <div className="flex gap-1 h-7">
                            <button className="font-semibold text-[12px] bg-[#E8E8EC] h-full w-4 broder-2 rounded-sm">G</button>
                            <div className="flex flex-1 gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                                <h4 className="font-bold text-[#101010]">IDENTIFY</h4>
                                <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">4</span>
                            </div>
                            <button className="font-semibold text-[12px] bg-[#E8E8EC] h-full w-4 broder-2 rounded-sm mr-1">G</button>
                        </div>
                        <div className="grid grid-cols-[16px_auto] gap-1">
                            <span></span>
                            <small className="text-[#60646C] text-[9px]" >April</small>
                        </div>
                        <div className="h-6 flex items-center justify-center">
                            <div className="size-4 font-semibold -ml-14 text-[10px] flex items-center justify-center border-2 rounded-full border-[#E5484D]">
                                P
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="flex-1">
                            <div className="flex gap-1 h-7">
                                <div className="flex flex-1 gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                                    <h4 className="font-bold text-[#101010]">SELECT</h4>
                                    <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">3</span>
                                </div>
                                <button className="font-semibold text-[12px] bg-[#E8E8EC] h-full w-4 broder-2 rounded-sm mr-1">G</button></div>
                            <div className="flex ">
                                <small className="text-[#60646C] text-[9px]">June</small></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex h-7 gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                            <h4 className="font-bold text-[#101010]">DEFINE</h4>
                            <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">6</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex gap-1">
                                <small className="text-[#60646C] text-[9px]">August</small>

                            </div>
                        </div>
                        <div className="h-6 flex items-center justify-center">
                            <div className="size-4 font-semibold -ml-4 text-[10px] flex items-center justify-center border-2 rounded-full border-[#60646C]">
                                M
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="flex gap-1 h-7">
                                <button className="font-semibold text-[12px] bg-[#E8E8EC] h-full w-4 broder-2 rounded-sm ml-1">G</button>

                                <div className="flex flex-1 gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                                    <h4 className="font-bold text-[#BA5542] text-base">EXECUTE</h4>
                                    <span className="size-5 rounded-full bg-[#E5484D] text-white flex justify-center items-center">1</span>
                                </div>
                            </div>
                            <div className="grid gap-1 grid-cols-[16px_auto]">
                                <span></span>
                                <div className="flex gap-[10px] items-center pl-1">
                                    <small className="text-[#60646C] text-[9px]">October</small>
                                    <span className="text-[#BA5542] font-semibold text-[9px]">Monday, 30 Oct, 43w</span>
                                </div></div>
                            <div className="h-6 flex items-center justify-center">
                                <div className="flex justify-center gap-1">
                                    <div className="size-4 font-semibold text-[10px] flex items-center justify-center border-2 rounded-full border-[#E5484D]">
                                        M
                                    </div>
                                    <div className="h-4 w-[21px] font-semibold  text-[10px] flex items-center justify-center border-2 rounded-[50px] border-[#86DC45]">
                                        AC
                                    </div>
                                </div></div>
                        </div>

                    </div>
                    <div>
                        <div className="flex gap-1 h-7">
                            <button className="font-semibold text-[12px] bg-[#E8E8EC] h-full w-4 broder-2 rounded-sm ml-1">G</button>
                            <div className="flex flex-1 gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
                                <h4 className="font-bold text-base text-[#101010]">OPERATE & CLOSE</h4>
                                <span className="size-6 rounded-full bg-[#E8E8EC] flex justify-center items-center">3</span>
                            </div>
                            <button className="font-semibold text-[12px] bg-[#E8E8EC] h-full w-4 broder-2 rounded-sm">G</button>
                        </div>
                        <div className="grid grid-cols-[16px_auto] gap-1">
                            <span></span>
                            <small className="text-[#60646C] text-[9px] pl-1" >December</small>
                        </div>
                        <div className="h-6 flex items-center justify-center">
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
                            <div className="flex gap-2">
                                <Divider />
                                <div className="flex-1 flex flex-col gap-3">
                                    {PROJECT_MANAGEMENTS[0].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                                <Divider />
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {PROJECT_MANAGEMENTS[1].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                                <Divider />
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {PROJECT_MANAGEMENTS[2].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                                <Divider />
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {PROJECT_MANAGEMENTS[3].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                                <Divider />
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {PROJECT_MANAGEMENTS[4].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                                <Divider />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="rounded-sm mt-2">
                    <AccordionTrigger className="bg-[#F9F9FB] px-2 rounded-sm"><div className="text-[16px] font-bold flex items-center gap-2">Health, Safety and Environment<span className="text-[14px] text-[#60646C] font-semibold"><b className="text-black">5</b> Area Milestones</span></div></AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-4 gap-y-4 gap-x-2">
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {health_safety_environment[0].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {health_safety_environment[1].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {health_safety_environment[2].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {health_safety_environment[3].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                            <div className="flex  gap-2">
                                <div className="flex-1 flex flex-col gap-3">
                                    {health_safety_environment[4].map((item) => (
                                        <AccordionCard data={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div >
    )
}

export default Home