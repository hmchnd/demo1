import { useEffect, useState } from 'react';
import AccordionCard from "@/components/AccordionCard";
import TaskAccordion from "@/components/TaskAccordion";
import TaskDetails from "@/components/TaskDetails";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from 'lucide-react';
import { useRoadmapTemplates, useFullRoadmapData } from '@/hooks/backendHooks';

const Home = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDetailsPanel, setShowDetailsPanel] = useState(false);

  const { templates, loading: templatesLoading } = useRoadmapTemplates();
  const { areas, phases, tasks, loading: templateLoading } = useFullRoadmapData(selectedTemplateId);

  useEffect(() => {
    if (!selectedTemplateId && templates.length > 0) {
      setSelectedTemplateId(templates[0].cuid);
    }
  }, [templates, selectedTemplateId]);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowDetailsPanel(true);
  };

  const handleClosePanel = () => {
    setShowDetailsPanel(false);
  };

  if (templatesLoading || (selectedTemplateId && templateLoading)) {
    return <div className="flex justify-center items-center h-[87vh]">Loading...</div>;
  }

  const getPhaseTaskNumbers = (index) => {
    switch (index) {
      case 0: return [1, 2, 3];
      case 1: return [4, 5, 6, 7, 8, 9];
      case 2: return [10, 11, 12, 13];
      case 3: return [14, 15, 16];
      case 4: return [17, 18, 19];
      default: return [];
    }
  };

  return (
    <div className="flex min-h-screen h-[87vh] overflow-hidden bg-[#F4F4F4]">
      <div className="flex-1 flex overflow-hidden">
        <div className={`transition-all duration-300 ${showDetailsPanel ? 'w-[70%]' : 'w-full'}`}>
          <div className="h-full overflow-x-auto">
            <div className="min-w-[1440px] pr-4">
              <Accordion type="multiple" collapsible defaultValue={['phases', ...phases.map(a => a.cuid)]}>
                <TaskAccordion color="#F9F9FB" />

                {/* Phase Header Grid */}
                <div className="grid grid-cols-6 gap-2 py-2 pl-6 pr-6 relative">
                  {phases.map((phase, index) => (
                    <div key={phase.cuid} className="relative">
                      {/* G icons with updated styling */}
                      {index === 0 && (
                        <div className="absolute -left-6 top-[60%] w-6 h-6 bg-gray-100 rotate-45 flex items-center justify-center z-10"
                          style={{
                            borderRadius: 'var(--size-border-radius-4px, 4px)',
                            border: '2px solid var(--color-stroke-support-green-dim1-default, #157D15)',
                            background: 'var(--color-fill-component-neutral-dim1-default, #F9F9FB)'
                          }}>
                          <span className="text-sm font-semibold -rotate-45" style={{ color: '#0D4F0D' }}>G</span>
                        </div>
                      )}
                      {index > 0 && index < 4 && (
                        <div className="absolute -left-4 top-[60%] w-6 h-6 bg-gray-100 rotate-45 flex items-center justify-center z-10"
                          style={{
                            borderRadius: 'var(--size-border-radius-4px, 4px)',
                            border: '2px solid var(--color-stroke-support-green-dim1-default, #157D15)',
                            background: 'var(--color-fill-component-neutral-dim1-default, #F9F9FB)'
                          }}>
                          <span className="text-sm font-semibold -rotate-45" style={{ color: '#0D4F0D' }}>G</span>
                        </div>
                      )}
                      {index === 4 && (
                        <div 
                          className="absolute -left-4 top-[60%] w-6 h-6 rotate-45 flex items-center justify-center z-10"
                          style={{
                            borderRadius: 'var(--size-border-radius-4px, 4px)',
                            border: '2px solid var(--color-stroke-support-yellow-default, #D4C209)',
                            background: 'var(--color-fill-component-neutral-dim1-default, #F9F9FB)'
                          }}
                        >
                          <span 
                            className="text-sm font-semibold -rotate-45"
                            style={{
                              color: 'var(--color-text-yellow-default, #5A3E00)',
                              textAlign: 'center',
                              fontFamily: 'var(--text-font-primary, Inter)',
                              fontSize: 'var(--text-size-small, 12px)',
                              fontStyle: 'normal',
                              fontWeight: 'var(--text-weight-semibold, 600)',
                              lineHeight: 'normal'
                            }}
                          >
                            G
                          </span>
                        </div>
                      )}
                      {index === 5 && (
                        <div 
                          className="absolute -left-4 top-[60%] w-6 h-6 rotate-45 flex items-center justify-center z-10"
                          style={{
                            borderRadius: 'var(--size-border-radius-4px, 4px)',
                            border: '2px solid #808080',
                            background: 'var(--color-fill-component-neutral-dim1-default, #F9F9FB)'
                          }}
                        >
                          <span 
                            className="text-sm font-semibold -rotate-45"
                            style={{
                              color: '#808080',
                              textAlign: 'center',
                              fontFamily: 'var(--text-font-primary, Inter)',
                              fontSize: 'var(--text-size-small, 12px)',
                              fontStyle: 'normal',
                              fontWeight: 'var(--text-weight-semibold, 600)',
                              lineHeight: 'normal'
                            }}
                          >
                            G
                          </span>
                        </div>
                      )}
                      {index === phases.length - 1 && (
                        <div 
                          className="absolute -right-6 top-[60%] w-6 h-6 rotate-45 flex items-center justify-center z-10"
                          style={{
                            borderRadius: 'var(--size-border-radius-4px, 4px)',
                            border: '2px solid #808080',
                            background: 'var(--color-fill-component-neutral-dim1-default, #F9F9FB)'
                          }}
                        >
                          <span 
                            className="text-sm font-semibold -rotate-45"
                            style={{
                              color: '#808080',
                              textAlign: 'center',
                              fontFamily: 'var(--text-font-primary, Inter)',
                              fontSize: 'var(--text-size-small, 12px)',
                              fontStyle: 'normal',
                              fontWeight: 'var(--text-weight-semibold, 600)',
                              lineHeight: 'normal'
                            }}
                          >
                            G
                          </span>
                        </div>
                      )}
                      <PhaseColumn
                        phase={phase.name}
                        taskNumbers={getPhaseTaskNumbers(index)}
                        isActive={index === 3}
                      />
                    </div>
                  ))}
                </div>

                {/* Task Cards by Area and Phase */}
                {areas.map((area) => (
                  <AccordionItem key={area.cuid} value={area.cuid} className="rounded-sm mt-2">
                    <AccordionTrigger className="bg-[#F9F9FB] px-2 rounded-sm [&>svg]:ml-0 [&>svg]:mr-auto [&>svg]:order-2 flex flex-row">
                      <div className="text-[18px] font-bold flex items-center gap-2 order-1">
                        {area.name}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-6 pr-6 relative">
                        <div className="grid grid-cols-6 gap-2 py-4 relative">
                          {phases.map((phase) => {
                            const phaseTasks = tasks.filter(
                              task => task.area_id === area.cuid && task.phase_id === phase.cuid
                            );

                            return (
                              <div key={`${area.cuid}-${phase.cuid}`} className="flex flex-col gap-3 relative z-10">
                                {phaseTasks.map((task) => (
                                  <AccordionCard
                                    key={task.cuid}
                                    data={{
                                      code: task.code || "1A-1",
                                      markColor: task.color || "#E5484D",
                                      id: task.cuid,
                                      title: task.name,
                                      description: task.description || "Developing a master project schedule involves organising and structuring all aspects of the project into a cohesive timeline",
                                      status: task.status,
                                      assignee: task.assignee || "Amit Tyagi",
                                      startDate: task.planned_start || "2024-01-01",
                                      endDate: task.planned_finish || "2025-10-19",
                                      progress: task.pct_complete || "50%",
                                    }}
                                    onClick={() => handleTaskClick(task)}
                                    isSelected={selectedTask?.cuid === task.cuid}
                                  />
                                ))}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Task Details Panel */}
        <div className={`h-full border-l border-gray-200 bg-white flex flex-col transition-all duration-300 ${
          showDetailsPanel ? 'w-[30%] min-w-[350px]' : 'w-0 overflow-hidden'
        }`} style={{ position: 'relative', zIndex: 10 }}>
          {showDetailsPanel && (
            <>
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <button
                  onClick={handleClosePanel}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
                <div className="flex-1"></div>
              </div>
              <div className="flex-1 overflow-y-auto">
                <TaskDetails task={selectedTask} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const PhaseColumn = ({ phase, taskNumbers = [], isActive = false }) => {
  return (
    <div className="w-full flex flex-col items-center border border-gray-300 rounded-sm py-2 px-1 bg-white">
      <div className="w-full flex flex-col items-center">
        <h4 className={`text-center mb-3 ${isActive ? 'text-[#E5484D]' : ''}`} style={{
          overflow: 'hidden',
          color: phase === 'Execute' ? 'var(--color-text-brand-default, #AE4F3E)' : 'var(--color-text-neutral-dim1-default, #595959)',
          leadingTrim: 'both',
          textEdge: 'cap',
          textOverflow: 'ellipsis',
          fontFamily: 'var(--text-font-primary, Inter)',
          fontSize: 'var(--text-size-body, 14px)',
          fontStyle: 'normal',
          fontWeight: phase === 'Execute' ? 'var(--text-weight-semibold, 600)' : '500',
          lineHeight: 'normal',
          textTransform: 'capitalize'
        }}>
          {phase}
        </h4>
      </div>
      <div className="w-full min-h-[32px] flex flex-wrap justify-center gap-1 mb-1">
        {taskNumbers.map((num) => {
          const getColor = () => {
            // Keep special colors for 14, 15, 16 but make them circular
            if (num === 14) return 'bg-yellow-500 text-white rounded-full';
            if (num === 16) return 'bg-yellow-500 text-white rounded-full';
            if (num === 15) return 'bg-green-600 text-white rounded-full';
            // Apply new styling for numbers 1-13 (keeping them circular)
            if (num >= 1 && num <= 13) return 'rounded-full';
            // Default styling for other numbers
            return 'bg-white text-[#101010] border border-gray-400 rounded-full';
          };

          return (
            <span
              key={num}
              className={`w-6 h-6 text-xs font-semibold flex justify-center items-center ${getColor()}`}
              style={
                num >= 1 && num <= 13 ? {
                  border: '1px solid var(--color-stroke-support-green-dim1-default, #157D15)',
                  background: 'var(--color-fill-component-neutral-dim1-default, #F9F9FB)',
                  color: '#0D4F0D'
                } : {}
              }
            >
              {num}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Home;