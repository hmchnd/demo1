import LineChart from "@/components/line-chart";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { meetings, metrics, users } from "@/utils/constant";
import userIcon from "@assets/icons/userorange.svg";
import tasktime from "@assets/icons/tasktime.svg";
import Navbar from "./Navbar";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import statusIcon from "@assets/icons/statuslight.svg";
import downIcon from "@assets/icons/downiconsmall.svg";
import fielddevelopmenticon from "@assets/icons/fielddevelopmenticon.svg";
import bell from '@assets/icons/bell.svg';
import ai from '@assets/icons/ai.svg';
import searchIcon from '@assets/icons/searchicon.svg';
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/store/slices/slidebarSlice";

const TaskAccordion = ({ color, showDetailsPanel }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col">
        <header className="h-10 flex items-center w-full">
          <div className="flex justify-between items-center flex-1">
            <h4 className="text-black text-xl font-bold flex items-center gap-3">
              Field Development Project <button><img src={downIcon} alt="" /></button> <button><img src={fielddevelopmenticon} alt="" /></button>
            </h4>
            <div className="flex items-center gap-2">
             
              <div className="relative flex h-7 py-1 px-2 justify-end items-center gap-2.5">
                
                <Input type="email" placeholder="Search..." className="rounded-xl bg-[##F0F0F3] pl-2 pr-8 max-w-[160px] h-6 w-full" />
                <span className="absolute right-2 top-1/2 -translate-y-1/2">
                  <img src={searchIcon} alt="" />
                </span>
              </div>
              <div className="cursor-pointer">
                <img src={statusIcon} alt="" />
              </div>
              
              <div className="cursor-pointer">
                <img src={bell} alt="" />
              </div>
              <div className="cursor-pointer">
                <img src={ai} alt="" />
              </div>
              {/* <button className="cursor-pointer">
                <Menu className="text-black" size={28} onClick={() => dispatch(toggleSidebar())} />
              </button> */}
            </div>
          </div>
        </header>
        <Navbar showDetailsPanel={showDetailsPanel} />
      </div>
      <AccordionItem
        value="item-0"
        className={`rounded-sm bg-[${color || "bg-transparent"}]`}
      >
        {/* <AccordionTrigger className="rounded-[6px] border-[2px] border-[#E8E8EC] px-2">
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
        </AccordionTrigger> */}
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