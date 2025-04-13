import LineChart from "@/components/line-chart";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { meetings, metrics, users } from "@/utils/constant";
import userIcon from "@assets/icons/userorange.svg";

import tasktime from "@assets/icons/tasktime.svg";

const TaskAccordion = ({ color }) => {
  return (
    <>
      <AccordionItem
        value="item-0"
        className={`rounded-sm bg-[${color || "bg-transparent"}]`}
      >
        <AccordionTrigger className="rounded-[6px] border-[2px] border-[#E8E8EC] px-2">
          <div className="flex flex-wrap gap-3">
            <button>
              <img src={tasktime} alt="task-btn" className="h-5 w-[26]" />
            </button>
            <div className="bg-white px-4 py-1 rounded shadow flex gap-2 text-base">
  <span className="text-[14px] font-semibold text-[#60646C]">
    Completed
  </span>
  <h6 className="text-[17px] font-bold text-[#101010]">56%</h6>
</div>

            {/* <div className="text-base flex gap-2"> <h6 className="text-[#101010] font-bold  text-[17px]"> 23 </h6><span className="text-[#60646C] font-semibold text-[14px]">Sub-projects</span></div> */}
            <div className="bg-white px-4 py-1 rounded shadow flex gap-2 text-base">
              <span className="text-[14px] font-semibold text-[#60646C]">
                Task Overdue
              </span>{" "}
              <h6 className="font-bold text-red-500"> 2 </h6>
            </div>
            <div className="bg-white px-4 py-1 rounded shadow flex gap-2 text-base">
              {" "}
              <span className="text-[14px] font-semibold text-[#60646C]">
                Until next milestone
              </span>
              <h6 className="text-[17px] font-bold text-[#101010]"> 5w </h6>
            </div>
            <div className="bg-white px-4 py-1 rounded shadow flex gap-2 text-base">
              <span className="text-[14px] font-semibold text-[#60646C]">
                Pending Approval
              </span>{" "}
              <h6 className="text-[17px] font-bold text-[#101010]"> 1 </h6>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-x-5 gap-y-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <h4 className="font-bold">KPIs</h4>
                <span className="text-[#E5484D]">
                  <b>1</b>
                </span>
              </div>
              <ul className="mt-2 flex list-none flex-col gap-2">
                {metrics.map((metric, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-[14px]">{metric.label}</span>
                    <span className={`font-bold ${metric.color} text-[14px]`}>
                      {metric.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <h4 className="font-bold">Follow-up</h4>
              </div>
              <ul className="flex flex-col gap-1">
                {users.map((user, index) => (
                  <li
                    key={index}
                    className="mb-[2px] flex items-center justify-between"
                  >
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
              <div className="mb-1 flex items-center justify-between">
                <h4 className="font-bold">Task Completion Trends</h4>
              </div>
              <div>
                <LineChart />
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-[#876500]"></div>
                    <span>PMS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-[#8A3A23]"></div>
                    <span>IT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-[#659F4A]"></div>
                    <span>INT</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <h4 className="font-bold">Today</h4>
              </div>
              <ul className="mt-2 list-none">
                {meetings.map((meeting, index) => (
                  <li key={index} className="mb-[2px] flex justify-between">
                    <span className="text-[12px]">{meeting.title}</span>
                    <span className="text-[12px] font-bold">
                      {meeting.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default TaskAccordion;
