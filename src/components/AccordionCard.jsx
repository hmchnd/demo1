import task from '@assets/icons/task.svg'
import userIcon from '@assets/icons/userimg.svg'
import calenderIcon from '@assets/icons/calendericon.svg'

const AccordionCard = ({ data }) => {
    const { id, code, title, description, assignee, startDate, endDate, progress, statusColor, markColor } = data || {}
    return (
        <div className="flex gap-2 relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[3px] after:w-[90%] after:bg-[#E0E1E6] after:-translate-x-1/2 after:rounded-full">
            <div className="h-full w-3 overflow-hidden rounded-md border-[3px] border-[#4F85D9] relative">
                <div className="absolute bottom-0 h-[50%] w-full bg-[#4F85D9]"></div>
            </div>
            <div>
                <div className="flex items-center gap-1 text-base">
                    <div className={`size-3 flex-shrink-0 rounded-full bg-[#8ECEAA]`}></div>
                    <span className='text-[#60646C] text-[14px] font-semibold'>{code}</span>
                </div>
                <h4 className='text-[17px]/5 font-bold mb-2'>{title}</h4>
                <div className='flex items-center gap-2 text-[17px] mt-1'>
                    <img src={task} alt="" className='size-4' />
                    <span className='text-[#60646C] text-[14px]'>
                        <span>{description}</span></span>
                </div>
                <div className='flex items-center gap-2 mt-1 '>
                    <img src={userIcon} alt="" className='flex-shrink-0 size-4' />
                    <span className='text-[#60646C]'>{assignee}</span>
                </div>
                <div className='flex items-center gap-2 mt-1'>
                    <img src={calenderIcon} alt="" className='font-bold size-4' />
                    <span className='text-[#60646C] text-[14px]'>{startDate} - {endDate}</span>
                </div>
            </div>

        </div>
    )
}

export default AccordionCard