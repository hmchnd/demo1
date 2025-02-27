import shareIcon from '@assets/icons/sidebar-share.svg'
import ai from '@assets/icons/ai.svg'

const TasksSidebar = ({ data }) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className="flex gap-3 ">
                {data?.labels?.map((label, i) => (
                    <button key={i} className='flex  gap-1 h-[26px] text-[#60646C] font-medium items-center rounded-[6px] border text-sm border-#CDCED6 px-2'> {label} <img src={shareIcon} alt="" /> </button>
                ))}
            </div>
            <div className='border-b-2 border-[#BA5542] flex gap-3'>
                <button className='text-[#BA5542] font-semibold text-sm h-8'>Details</button>
                <button className='font-semibold text-sm text-[#60646C] h-8'>Activity</button>
            </div>
            <div className='flex gap-3'>
                {data?.miniLabels?.map((btnLabel, i) => {
                    return <button key={i} className='h-5 flex items-center font-medium rounded-[6px] p-1 border border-[#D9D9E0] text[#60646C] text-[12px]'>{btnLabel}</button>
                })}
            </div>
            <div className='flex flex-col gap-[2px]'>
                <span className='text[#60646C] text-sm/[16px]'>{data?.subTitle}</span>
                <h6 className='text[#101010] font-semibold  text-[17px]/[20px]'>{data?.projectName}</h6>
            </div>

            <div className='flex flex-col gap-3 max-h-[70vh] overflow-y-auto
  [&::-webkit-scrollbar]:w-[0px]
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-100'>
                <div>
                    <span className='text[#60646C] text-sm'>{data?.projectDescriptionTitle}</span>
                    <p className='font-medium text-sm/[17px] text[#101010]'>{data?.description}</p>
                </div>
                <div className='flex items-center'>
                    <span className='max-w-[100px] w-full text-sm font-medium text-[#60646C]'>Status</span>
                    <button className='bg-[#F0F0F3] rounded-[6px] h-[19px] flex items-center px-1 py-[2px] text-[12px] border border-[#CDCED6]'>{data?.projectStatus} </button>
                </div>
                <div className='flex items-center'>
                    <span className='max-w-[100px] w-full text-sm font-medium text-[#60646C]'>State</span>
                    <button className='bg-[#F4A9AA] rounded-[6px] h-[19px] text-[#FFF7F7] flex items-center px-1 py-[2px] text-[12px]'>{data?.projectState}</button>
                </div>

                <div className='flex justify-center'>
                    <div className='bg-[#F0F0F3] max-w-[336px] w-full  rounded-[25px] h-1'></div>
                </div>
                {data?.projectDates?.map((projectDate, i) => {
                    return <div className='flex flex-col gap-2' key={i}>
                        <p className='text-sm font-medium text-[#101010]'>{projectDate.title}</p>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex justify-between'>
                                <span className='text-[#60646C] text-sm font-medium'>Start</span>
                                <button className='bg-[#F0F0F3] flex items-center text-[#101010] text-[12px] px-[6px] py-1 h-[23px] rounded-[4px]'>{projectDate.startDate}</button>
                            </div>
                            <div className='flex justify-between'>
                                <span className='text-[#60646C] text-sm font-medium'>Finish</span>
                                <button className='bg-[#F0F0F3] flex items-center text-[#101010] text-[12px] px-[6px] py-1 h-[23px] rounded-[4px]'>{projectDate.finishDate}</button>
                            </div>
                        </div>
                    </div>
                })}
                <div className='flex justify-center'>
                    <div className='bg-[#F0F0F3] max-w-[336px] w-full  rounded-[25px] h-1'></div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='grid grid-cols-[100px_auto] gap-[10px]'>
                        <span className='text-[#60646C] font-medium text-sm'>{data?.Outcome ? "Outcome" : ''}</span>
                        <p className='text-sm text[#101010] font-medium'>Project Outcome</p>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-[10px]'>
                        <span className='text-[#60646C] font-medium text-sm'>{data?.Outcome_description ? "Outcome description" : ''}</span>
                        <p className='text-sm text[#101010] font-medium'>{data?.Outcome_description}</p>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-[10px]'>
                        <span className='text-[#60646C] font-medium text-sm'>{data?.Responsible ? "Responsible" : ''}</span>
                        <p className='text-sm text[#101010] font-medium'>{data?.Responsible}</p>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-[10px]'>
                        <span className='text-[#60646C] font-medium text-sm'>{data?.Phases ? "Phases" : ''}</span>
                        <div className='flex flex-wrap gap-1 '>
                            {
                                data?.Phases.map((phaseItem, i) => {
                                    return <span key={i} className='bg-[#F0F0F3] text-[12px] px-1 py-[2px] font-medium text-sm rounded-[4px] min-h-[23px] flex items-center'>{phaseItem}</span>
                                })
                            }
                        </div>

                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-[10px]'>
                        <span className='text-[#60646C] font-medium text-sm'>{data?.Project_Areas ? "Project Areas" : ''}</span>
                        <div className='flex flex-wrap gap-1 '>
                            {
                                data?.Project_Areas?.map((areaItem, i) => {
                                    return <span key={i} className='bg-[#F0F0F3] text-[12px] px-1 py-[2px] font-medium text-sm rounded-[4px] min-h-[23px] flex items-center'>{areaItem}</span>
                                })
                            }
                        </div>

                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-[#BA5542] gap-1 flex text-white text-sm font-medium items-center max-w-[288px] w-full rounded-[4px] h-8 justify-center'> <img src={ai} className='size-5' alt="" /> Insights</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TasksSidebar