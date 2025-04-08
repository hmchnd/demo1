import { useState } from 'react';
import AccordionCard from "@/components/AccordionCard";
import TaskAccordion from "@/components/TaskAccordion";
import {
  Accordion, AccordionContent, AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Divider from "@/components/ui/Divider";
import { useRoadmapTemplates, useFullRoadmapData } from '@/hooks/backendHooks';

const Home = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  
  // Load all available templates
  const { templates, loading: templatesLoading } = useRoadmapTemplates();
  
  // Load full template data when one is selected
  const { 
    areas, 
    phases, 
    tasks, 
    loading: templateLoading 
  } = useFullRoadmapData(selectedTemplateId);

  // Count tasks per phase
  const getTaskCountForPhase = (phaseid) => {
    return tasks.filter(task => task.phase_id === phaseid).length;
  };

  // Group tasks by area
  const getTasksByArea = (areaId) => {
    return tasks.filter(task => task.area_id === areaId);
  };

  if (templatesLoading) {
    return <div className="flex justify-center items-center h-[87vh]">Loading templates...</div>;
  }

  if (!selectedTemplateId && templates.length > 0) {
    // Auto-select the first template if none is selected
    setSelectedTemplateId(templates[0].cuid);
    return <div className="flex justify-center items-center h-[87vh]">Loading roadmap data...</div>;
  }

  return (
    <div className="mt-0 pr-1 max-h-[87vh] overflow-y-auto
      [&::-webkit-scrollbar]:w-1
      [&::-webkit-scrollbar-track]:bg-[none]
      [&::-webkit-scrollbar-thumb]:bg-[#E0E1E6]
      [&::-webkit-scrollbar-thumb]:rounded-[4px]">
      
      <Accordion type="multiple" collapsible defaultValue={['phases', ...phases.map(a => a.cuid)]}>
        {/* Phases Section */}
        <TaskAccordion color="#F9F9FB" />
        
        {/* Updated Phases Grid - now using 6 columns */}
        <div className="grid grid-cols-6 gap-2 py-2 min-w-[1440px] overflow-x-auto">
          {phases.map((phase, index) => (
            <PhaseColumn 
              key={phase.cuid}
              phase={phase.name}
              taskCount={getTaskCountForPhase(phase.cuid)}
              isActive={index === 3} // Example: Execute phase is active
            />
          ))}
        </div>

        {/* Areas Sections */}
        {areas.map((area) => (
          <AccordionItem key={area.cuid} value={area.cuid} className="rounded-sm mt-2">
            <AccordionTrigger className="bg-[#F9F9FB] px-2 rounded-sm">
              <div className="text-[16px] font-bold flex items-center gap-2">
                {area.name}
                <span className="text-[14px] text-[#60646C] font-semibold">
                  <b className="text-black">{getTasksByArea(area.cuid).length}</b> Tasks
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {/* Updated Tasks Grid - matches phases layout */}
              <div className="grid grid-cols-6 gap-2 py-4 min-w-[1440px]">
                {phases.map((phase) => {
                  const phaseTasks = getTasksByArea(area.cuid).filter(
                    task => task.phase_id === phase.cuid
                  );
                  
                  return (
                    <div key={`${area.cuid}-${phase.cuid}`} className="flex flex-col gap-3">
                      {phaseTasks.map((task) => (
                        <AccordionCard 
                          key={task.cuid} 
                          data={{
                            id: task.cuid,
                            title: task.name,
                            description: task.description,
                            status: task.status,
                          }} 
                        />
                      ))}
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

// Phase Column Component
const PhaseColumn = ({ phase, taskCount, isActive = false }) => {
  return (
    <div className="min-w-[200px]"> {/* Adjusted width for 6 columns */}
      <div className="flex gap-1 h-7">
        <div className="flex flex-1 gap-2 font-bold items-center justify-center bg-[#F0F0F3] rounded-sm py-1">
          <h4 className={`font-bold ${isActive ? 'text-base' : ''}`} style={{ color: '#101010' }}>
            {phase}
          </h4>
          <span className={`size-6 rounded-full ${isActive ? 'bg-[#E5484D] text-white' : 'bg-[#E8E8EC]'} flex justify-center items-center`}>
            {taskCount}
          </span>
        </div>
        <button className="font-semibold text-[12px] bg-[#E8E8EC] h-full w-4 broder-2 rounded-sm mr-1">G</button>
      </div>
      <div className="grid grid-cols-[16px_auto] gap-1">
        <span></span>
        <small className="text-[#60646C] text-[9px]">
          JANUARY 2025 {/* Placeholder - replace with actual date logic */}
        </small>
      </div>
    </div>
  );
};

export default Home;