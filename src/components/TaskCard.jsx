import userIcon from '@assets/icons/userimg.svg'
import calenderIcon from '@assets/icons/calendericon.svg'

const TaskCard = ({ data }) => {
    const { assignedTo, completeProgress, endDate, markColor, progress, startDate, taskId, title } = data || {}
    return (
        <div className="bg-[#F0F0F3] flex gap-2 rounded-[7px] p-2 ">
            <div className="w-[8px] overflow-hidden rounded-[25px] border-[2px] border-[#90B2E7] relative">
                <div className="absolute bottom-0 w-full bg-[#90B2E7]"
                    style={{ height: `${completeProgress}` }}></div>
            </div>
            <div className='max-w-[83%]'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-1'>
                        <div className="size-[10px] rounded-full" style={{
                            backgroundColor: `${markColor}`
                        }}></div>
                        <span className='text-[12px] text-[#60646C] font-medium'>{taskId}</span>
                    </div>
                    <span className='text-[#60646C] text-[12px] font-bold'>{progress}</span>
                </div>
                <h4 className='font-bold text-sm text-[#101010]'>{title}</h4>
                <div className='flex items-center gap-2 '>
                    <img src={userIcon} alt="" className='flex-shrink-0  w-[10px] h-[12px]' />
                    <span className='text-[#4e5053] text-[12px] font-medium'>{assignedTo}</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <img src={calenderIcon} alt="" className='font-bold  w-[10px] h-[12px] size-4' />
                    <span className='text-[#4e5053] text-[12px] font-medium'>{startDate} - {endDate}</span>
                </div>
            </div>

        </div>
    )
}

export default TaskCard