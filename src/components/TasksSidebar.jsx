const TasksSidebar = ({ data }) => {
    console.log(data)

    return (
        <>
            <h1>Hello</h1>
            {/* <div className={`bg-[${data?.styleConfig?.backgroundColor || 'bg-transparent'}] rounded-[5px] p-[10px] flex flex-col gap-[10px]`}>
                <div className='flex gap-3'>
                    <div className='size-[32px] rounded-[5px] bg-[#F0F0F3]'></div>
                    <div className='size-[32px] rounded-[5px] bg-[#F0F0F3]'></div>
                    <div className='size-[32px] rounded-[5px] bg-[#F0F0F3]'></div>
                    <div className='flex-grow rounded-[5px] bg-[#F0F0F3]'></div>
                </div>
                <div className="flex items-center gap-3" >
                    <div className="bg-[#F4A9AA] w-[31px] h-[19px] px-1 py-[2px] text-[12px] text-[#FFF7F7] rounded-full flex items-center">Red</div>
                    <div className="border-[1px] border-[#D9D9E0] w-[27px] h-4 text-[9px] flex items-center rounded-[5px] justify-center">1A-1</div>
                </div>
                <div className="flex flex-col gap-[2px]">
                    <span className="text-[13px] text-[#60646C]">{data?.task?.title}</span>
                    <h4 className="font-bold text-base text-[#1C2024]">{data?.task?.heading}</h4>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#60646C] font-medium text-[13px]">{data?.task?.description_title}</span>
                    <p className="text-[#60646C] font-medium text-[13px]">{data?.task.description}</p>
                </div>
                <div className="flex justify-center">
                    <div className="bg-[#F0F0F3] h-[2px]    max-w-[289px] w-full"></div>
                </div>
                <div className="flex flex-col gap-3">
                    {data?.projectDetails?.map((detail, index) => {
                        return <div className="grid grid-cols-[1.1fr_2fr] gap-[10px] " key={index}>
                            <span className="text-[#60646C] text-[11px] text-end">{detail?.label}</span>
                            <h5 className="text-[#101010] font-medium text-[11px] ">{detail?.value}</h5>
                        </div>
                    })}
                </div>
            </div> */}
        </>
    )
}

export default TasksSidebar