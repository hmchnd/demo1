import task from '@assets/icons/task.svg'
import userIcon from '@assets/icons/userimg.svg'
import calenderIcon from '@assets/icons/calendericon.svg'
import { useSelector } from 'react-redux';

const AccordionCard = ({ data }) => {
    const { showOutcome, showResponsible, showPeriod } = useSelector((state) => state.accordion);

    const { code, title, description, assignee, startDate, endDate, progress, markColor } = data || {}
    return (
        <div className="flex h-max gap-2 relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[3px] after:w-[90%] after:bg-[#E0E1E6] after:-translate-x-1/2 after:rounded-full">
            <div className="w-[8px] overflow-hidden rounded-[25px] border-[2px] border-[#90B2E7] relative">
                <div className="absolute bottom-0 w-full bg-[#4f84d9d3]"
                    style={{ height: `${progress}` }}></div>
            </div>
            <div>
                <div className="flex items-center gap-1 text-base">
                    <div className={`size-3 flex-shrink-0 rounded-full `} style={{
                        backgroundColor: `${markColor}`
                    }}></div>
                    <span className='text-[#60646C] text-[14px] font-semibold'>{code}</span>
                </div>
                <h4 className='text-[14px]/5 font-bold mb-1'>{title}</h4>
                {showOutcome && <div className='flex items-start gap-2 text-[15px]'>
                    <img src={task} alt="" className='size-4' />
                    <span className='text-[#60646C] text-[12px]'>
                        <span>{description}</span></span>
                </div>}
                {showResponsible && <div className='flex items-center gap-2'>
                    <img src={userIcon} alt="" className='flex-shrink-0 size-4' />
                    <span className='text-[#60646C] text-[12px]'>{assignee}</span>
                </div>}
                {
                    showPeriod && <div className='flex items-center gap-2'>
                        <img src={calenderIcon} alt="" className='font-bold size-4' />
                        <span className='text-[#60646C] text-[12px]'>{startDate} - {endDate}</span>
                    </div>
                }
            </div>

        </div>
    )
}

export default AccordionCard