import task from '@assets/icons/task.svg'
import userIcon from '@assets/icons/userimg.svg'
import calenderIcon from '@assets/icons/calendericon.svg'
import { useSelector } from 'react-redux';

const AccordionCard = ({ data }) => {
    const { showOutcome, showResponsible, showPeriod } = useSelector((state) => state.accordion);

    const { code, title, description, assignee, startDate, endDate, progress, markColor } = data || {}
    return (
        <div className=" h-max bg-[#F0F0F3] gap-2 relative p-2 rounded-[6px]">
            <div className='flex flex-col gap-1'>
                <div className="flex items-center gap-1 text-base">
                    <div className={`size-3 flex-shrink-0 rounded-full `} style={{
                        backgroundColor: `${markColor}`
                    }}></div>
                    <span className='text-[#60646C] text-[14px] font-semibold'>{code}</span>
                </div>
                <h4 className='text-[14px]/5 font-bold'>{title}</h4>
                <div className="w-full h-2 overflow-hidden rounded-[25px] border-[2px] border-[#92BCFE] relative">
                    <div className="absolute left-0 h-full bg-[#92BCFE]"
                        style={{ width: `${progress}` }}></div>
                </div>
                {showOutcome && <div className='flex items-center gap-2'>
                    <img src={task} alt="" className='size-3' />
                    <span className='text-[#60646C] text-[12px]/[16px]'>
                        <span>{description}</span></span>
                </div>}
                {showResponsible && <div className='flex items-center gap-2'>
                    <img src={userIcon} alt="" className='flex-shrink-0 size-3' />
                    <span className='text-[#60646C] text-[12px]/[16px]'>{assignee}</span>
                </div>}
                {
                    showPeriod && <div className='flex items-center gap-2'>
                        <img src={calenderIcon} alt="" className='font-bold size-3' />
                        <span className='text-[#60646C] text-[12px]/[16px]'>{startDate} - {endDate}</span>
                    </div>
                }
            </div>

        </div>
    )
}

export default AccordionCard