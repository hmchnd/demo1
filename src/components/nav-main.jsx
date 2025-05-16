import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom";
import star from '@assets/icons/star.svg'

export function NavMain({
  items
}) {
  const { state, } = useSidebar()
  return (
    (<SidebarGroup className="bg-[#F4F4F4]"> 
      <SidebarMenu>
        <SidebarMenuItem className="z-40">
          <SidebarMenuButton className={`flex ${state === 'collapsed' ? 'justify-center' : 'justify-end'} hover:bg-gray-200`}> 
            <SidebarTrigger />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className="flex items-center justify-center gap-2 !h-4"> 
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarMenu className="mt-2">
        {items?.map((item, i) => (
          <SidebarMenuItem key={i}>
            <SidebarMenuButton className={`${item.className} ${state === "collapsed" ? "justify-center items-center" : ''} relative hover:bg-gray-200`}> {/* व्हाइट हटाकर ग्रे कर दिया */}
              {item?.task && <div className="bg-[#E5484D] size-4 rounded-full text-[10px] flex items-center absolute right-0 top-0 justify-center text-white"> {item?.task}</div>}
              {item.icon && (
                <Link to={item?.url} className={`${state === 'expanded' ? "pl-2" : ''}`}>
                  <img style={{ height: `${item.styleConfig.h}`, width: `${item.styleConfig.w}` }} src={item.icon} />
                </Link>
              )}
              {state === "expanded" && (
                <Link to={item?.url} className="text-sm" style={{
                  color: 'var(--color-text-neutral-dim1-default, #595959)',
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
    </SidebarGroup>)
  );
}