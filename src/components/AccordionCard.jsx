import task from '@assets/icons/task.svg'
import userIcon from '@assets/icons/userimg.svg'
import calenderIcon from '@assets/icons/calendericon.svg'
import { useSelector } from 'react-redux';

const AccordionCard = ({ data, onClick, isSelected }) => {
    const { showOutcome, showResponsible, showPeriod } = useSelector((state) => state.accordion);

    const { code, title, description, assignee, startDate, endDate, progress, markColor, borderColor, hasBorder, fill } = data || {}
    
    return (
        <div 
          className={`h-max gap-2 relative p-2 rounded-[6px] cursor-pointer border border-gray-200 bg-white ${
            isSelected ? 'bg-blue-100 border-blue-300' : ''
          }`}
          onClick={onClick}
        >
            <div className='flex flex-col gap-1'>
                <div className="flex items-center gap-1 text-base">
                    <div className={`size-2.5 flex-shrink-0 rounded-full `} style={{
                        backgroundColor: `${markColor}`
                    }}></div>
                    <span className='text-[#60646C] text-[10px] font-semibold'>{code}</span>
                </div>
                <h4 className='text-[14px]/5 font-bold h-[32px] mt-[-8px]'>{title}</h4>
                <div className="flex items-center gap-2">
                    <div className={`w-full h-2 overflow-hidden rounded-[2px] ${hasBorder === false ? "border-none" : "border-[2px]"} border-[#8888EA] relative`} style={{ borderColor: `${borderColor || ''}` }}>
                        <div className="absolute left-0 h-full bg-[#8888EA]"
                            style={{ width: `${progress}`, backgroundColor: `${fill || ''}` }}></div>
                    </div>
                    <span className="text-xs text-gray-500 flex-shrink-0">100%</span>
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