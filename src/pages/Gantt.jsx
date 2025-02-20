import TaskAccordion from "@/components/TaskAccordion"
import { Accordion } from "@/components/ui/accordion"

const Gantt = () => {
  return (
    <>
      <Accordion type="single" defaultValue="item-0" collapsible className="w-full" >
        <TaskAccordion />
      </Accordion>
    </>
  )
}

export default Gantt