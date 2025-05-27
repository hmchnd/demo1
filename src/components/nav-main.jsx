import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom";
import sidebarcollapse from '@assets/icons/sidebarcollapse.svg'

export function NavMain({
  items
}) {
  const { state, toggleSidebar } = useSidebar();
  return (
    <SidebarGroup 
      className={"bg-[#F4F4F4]"}
      style={state === 'collapsed' ? {
        display: 'inline-flex',
        height: '920px',
        padding: 'var(--size-12, 12px) var(--size-12, 12px) var(--size-8, 8px) var(--size-12, 12px)',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0
      } : {}}
    > 
      {/* sidebarcollapse icon section with right alignment */}
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton 
            onClick={toggleSidebar}
            className="flex items-center justify-end gap-2 !h-8 pr-6 cursor-pointer"> 
            <img 
              src={sidebarcollapse} 
              style={{
                width: '6.869px',
                height: 'var(--size-12, 12px)',
                aspectRatio: '6.87/12.00',
                fill: 'var(--color-icon-neutral-dim2-default, #ABABAB)'
              }}
              alt="close icon"
            />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      
      <SidebarMenu className="mt-2">
        {items?.map((item, i) => (
          <SidebarMenuItem key={i}>
            <SidebarMenuButton className={`${item.className} ${state === "collapsed" ? "justify-center items-center" : ''} relative hover:bg-gray-200 flex items-center !h-8`}>
              {item?.task && <div className="bg-[#E5484D] size-4 rounded-full text-[10px] flex items-center absolute right-0 top-0 justify-center text-white"> {item?.task}</div>}
              {item.icon && (
                <Link to={item?.url} className={`${state === 'expanded' ? "pl-2" : ''} flex-shrink-0 py-2`}>
                  <img style={{ height: '20px', width: '20px' }} src={item.icon} />
                </Link>
              )}
              {state === "expanded" && (
                <Link to={item?.url} className="text-sm pl-3" style={{
                  color: item.title === 'Roadmap' ? '#AE4F3E' : 'var(--color-text-neutral-dim1-default, #595959)',
                  fontFamily: 'var(--text-font-primary, Inter)',
                  fontSize: 'var(--text-size-body, 14px)',
                  fontStyle: 'normal',
                  fontWeight: 'var(--text-weight-medium, 500)',
                  lineHeight: 'normal'
                }}> 
                  {item.title}
                </Link>
              )}
            </SidebarMenuButton>
            <SidebarMenuSub>
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild className="hover:bg-gray-200"> 
                    <Link to={subItem.url}>
                      <span className="text-black">{subItem.title}</span> 
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}