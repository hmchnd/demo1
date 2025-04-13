import React from "react";

const TaskDetails = ({ task, onEditClick }) => {
  return (
    <div className="rounded-lg bg-[#F1F2F4] p-4">
      {/* Tabs */}
      <div className="mb-4 flex border-b border-gray-200">
        <button className="border-b-2 border-[#101010] px-4 pb-2 font-semibold text-[#101010]">
          Details
        </button>
        <button className="px-4 pb-2 font-semibold text-[#60646C]">
          Activity
        </button>
      </div>

      {/* Task Code & Label */}
      <div className="mb-4 flex items-center gap-2">
      <button className="bg-transparent px-4 py-1 rounded shadow flex gap-2 text-base border border-black">
  {task?.code || "1A-A"}
</button>

        <button className="bg-transparent px-4 py-1 rounded shadow flex gap-2 text-base border border-black">
          {task?.label || "Label"}
        </button>
      </div>

      {/* Task Name */}
      <div className="mb-3">
        <h3 className="text-s mb-1 font-semibold tracking-wider text-[#60646C]">
          Task name
        </h3>
        <h2 className="text-lg font-bold text-[#101010]">
          {task?.name || "Sample Task Name"}
        </h2>
      </div>

      {/* Description */}
      <div className="mb-4">
        <h3 className="text-s mb-1 font-semibold tracking-wider text-[#60646C]">
          Task description
        </h3>
        <p className="text-s mb-1 font-semibold text-gray-600">
          {task?.description ||
            "Developing a master project schedule involves organising and structuring all aspects of the project into a cohesive timeline..."}
        </p>
      </div>

      {/* Status and State */}
      <div className="flex flex-col gap-y-2 rounded-md bg-[#F2F3F4] p-4">
        {[
          {
            label: "Status",
            value: task?.status || "In Progress",
            bg: "bg-white",
            text: "text-[#101010]",
          },
          {
            label: "State",
            value: task?.state || "Behind Schedule",
            bg: "bg-[#E5484D]",
            text: "text-white",
          },
          {
            label: "Project",
            value: task?.project || "Field Development Project",
            text: "#60646C",
          },
          { label: "Phase", value: task?.phase || "Define", text: "#60646C" },
          {
            label: "Project Area",
            value: task?.area || "Operations Management",
          },
        ].map(({ label, value, bg, text }) => {
          const isSpecialLabel = ["Project", "Phase", "Project Area"].includes(
            label,
          );
          const valueClass = isSpecialLabel
            ? "text-sm font-semibold text-[#101010]"
            : `text-s font-medium ${text || "text-[#101010]"}`;

          return (
            <div
              key={label}
              className="grid grid-cols-[160px_1fr] items-center gap-x-5"
            >
              <span className="text-s font-semibold tracking-wider text-[#60646C]">
                {label}
              </span>
              <div>
                <span
                  className={`${valueClass} ${bg || ""} inline-block w-auto rounded-s px-2 py-[2px]`}
                >
                  {value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dates Section */}
      <div className="mb-4 mt-4 space-y-4">
        {["Planned", "Forecast", "Actual"].map((type) => (
          <div key={type}>
            <h3 className="text-s mb-1 font-semibold text-[#101010]">
              {type} Dates
            </h3>
            <div className="grid grid-cols-2 gap-1">
              {["Start", "Finish"].map((label) => (
                <div
                  key={label}
                  className="grid grid-cols-2 items-center gap-1"
                >
                  <span className="text-s pl-1 font-semibold tracking-wider text-[#60646C]">
                    {label}
                  </span>
                  <h3 className="text-s mb-1 rounded-s bg-white p-1 px-2 font-semibold text-[#101010]">
                    {task?.[`${type.toLowerCase()}${label}`] ||
                      (label === "Start"
                        ? "1 January 2024"
                        : "19 October 2025")}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Outcome, Responsible etc. */}
      <div className="mb-4 space-y-2">
        {[
          { label: "Outcome", value: task?.outcome || "Sample Outcome Name" },
          {
            label: "Outcome description",
            value:
              task?.outcomeDescription ||
              "Framsys methodology is designed to streamline project delivery...",
          },
          {
            label: "Responsible",
            value: task?.responsible || "John Doe the Second",
          },
          {
            label: "Precedent Task",
            value: task?.precedentTask || "Sample Task Name 1",
          },
        ].map(({ label, value }) => (
          <div key={label} className="grid grid-cols-[180px_1fr] gap-4">
            <span className="text-s pl-1 font-semibold tracking-wider text-[#60646C]">
              {label}
            </span>
            <h3 className="text-s font-semibold text-[#101010]">{value}</h3>
          </div>
        ))}
      </div>

      {/* Edit + Insights Button */}
      <div className="flex justify-center">
        <div className="rounded-s bg-[#E5484D] p-2 text-center">
          <button className="text-s w-40 font-semibold text-white">
            Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
