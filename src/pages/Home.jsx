import AccordionCard from "@/components/AccordionCard"
import {
    Accordion, AccordionContent, AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { health_safety_environment, project_managements } from "@/utils/constant"

const Home = () => {
    return (
        <div className="mt-2">
            <Accordion type="single" collapsible defaultValue="item-2">
                <AccordionItem value="item-1" className="bg-[#F0F0F3] rounded-sm px-2">
                    <AccordionTrigger><div className="text-[16px] font-semibold flex items-center gap-2">Quality and Assurance
                        <span className="text-base text-[#60646C] font-semibold"><b className="text-black">4</b> Area Milestones</span></div></AccordionTrigger>
                    <AccordionContent>
                        <h1>Test</h1>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-[#F0F0F3] rounded-sm px-2 mt-2">
                    <AccordionTrigger><div className="text-[16px] font-bold flex items-center gap-2">Project Management <span className="text-base text-[#60646C] font-semibold"><b className="text-black">5</b> Area Milestones</span></div></AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-4 gap-y-4 gap-x-2">
                            {project_managements?.map((projectItem) => (
                                <AccordionCard key={projectItem.id} data={projectItem} />
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-[#F0F0F3] rounded-sm px-2 mt-2">
                    <AccordionTrigger><div className="text-[16px] font-bold flex items-center gap-2">Health, Safety and Environment<span className="text-base text-[#60646C] font-semibold"><b className="text-black">5</b> Area Milestones</span></div></AccordionTrigger>
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