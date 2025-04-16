import React from "react";

const TaskDetails = ({ task, onEditClick }) => {
  return (
    <div className="h-full flex flex-col bg-[#F1F2F4] min-w-[350px]">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button className="flex items-center gap-2 text-[#60646C] text-sm font-medium bg-white px-3 py-1.5 rounded-md border border-gray-200">
          <span>View Reports</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-4">
            <button className="border-b-2 border-[#101010] px-4 pb-2 text-sm font-semibold text-[#101010]">
              Details
            </button>
            <button className="px-4 pb-2 text-sm font-semibold text-[#60646C]">
              Activity
            </button>
          </div>

          {/* Task Code & Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium text-gray-700">
              {task?.code || "1A-1"}
            </span>
            <span className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium text-gray-700">
              Label
            </span>
          </div>

          {/* Task Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-medium text-[#60646C] mb-1">Task name</h3>
              <p className="text-base font-semibold text-[#101010]">{task?.name || "Develop a Master project schedule"}</p>
            </div>

            <div>
              <h3 className="text-xs font-medium text-[#60646C] mb-1">Task description</h3>
              <p className="text-sm text-[#101010]">
                {task?.description || "Developing a master project schedule involves organising and structuring all aspects of the project into a cohesive timeline. It begins with defining the project's goals and boundaries, ensuring clarity on what needs to achieve..."}
              </p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-[120px_1fr] items-center">
                <h3 className="text-xs font-medium text-[#60646C]">Status</h3>
                <span className="inline-flex w-fit items-center rounded-[4px] border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-[#101010]">
                  In Progress
                </span>
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center">
                <h3 className="text-xs font-medium text-[#60646C]">State</h3>
                <span className="inline-flex w-fit items-center rounded-[4px] bg-red-500 px-3 py-1 text-sm font-medium text-white">
                  Behind Schedule
                </span>
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center">
                <h3 className="text-xs font-medium text-[#60646C]">Project</h3>
                <p className="text-sm font-medium text-[#101010]">Field Development Project</p>
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center">
                <h3 className="text-xs font-medium text-[#60646C]">Phase</h3>
                <p className="text-sm font-medium text-[#101010]">Define</p>
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center">
                <h3 className="text-xs font-medium text-[#60646C]">Project Area</h3>
                <p className="text-sm font-medium text-[#101010]">Operations Management</p>
              </div>
            </div>

            {/* Divider before Dates */}
            <div className="border-t border-[#D1D1D6] pt-5"></div>

            {/* Dates Section */}
            <div className="space-y-4">
              {["Planned Dates", "Forecast Dates", "Actual Dates"].map((dateType, index) => (
                <div key={dateType} className="space-y-2">
                  <h3 className="text-sm font-bold text-[#60646C]">{dateType}</h3>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="grid grid-cols-[60px_1fr] items-center">
                      <h4 className="text-xs font-medium text-[#60646C]">Start</h4>
                      <p className="w-fit rounded-[4px] bg-white px-3 py-1 text-sm font-medium text-[#101010]">1 January 2024</p>
                    </div>
                    <div className="grid grid-cols-[60px_1fr] items-center">
                      <h4 className="text-xs font-medium text-[#60646C]">Finish</h4>
                      <p className="w-fit rounded-[4px] bg-white px-3 py-1 text-sm font-medium text-[#101010]">19 October 2025</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider after Dates */}
            <div className="border-t border-[#D1D1D6] pt-4"></div>

            <div className="space-y-3">
              <div className="grid grid-cols-[120px_1fr] items-center">
                <h3 className="text-xs font-medium text-[#60646C]">Outcome</h3>
                <p className="text-sm font-medium text-[#101010]">Sample Outcome Name</p>
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center">
                <h3 className="text-xs font-medium text-[#60646C]">Outcome description</h3>
                <p className="text-sm text-[#101010]">
                  Framsys methodology is designed to streamline project delivery by integrating advanced frameworks that align with organisational goals.
                </p>
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center">
                <h3 className="text-xs font-medium text-[#60646C]">Responsible</h3>
                <p className="text-sm font-medium text-[#101010]">John Doe the Second</p>
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center">
                <h3 className="text-xs font-medium text-[#60646C]">Precedent Task</h3>
                <p className="text-sm font-medium text-[#101010]">Sample Task Name 1</p>
              </div>
            </div>
          </div>

          {/* Insights Button */}
          <div className="mt-6 flex justify-center">
            <button className="bg-[#E5484D] text-white py-2 px-8 rounded text-sm font-medium">
              Insights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;