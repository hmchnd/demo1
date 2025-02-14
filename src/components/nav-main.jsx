
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
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
    (<SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem className="z-40">
          <SidebarMenuButton className={`flex ${state === 'collapsed' ? 'justify-center' : ''} justify-end`}>
            <SidebarTrigger />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className="flex items-center justify-center gap-2">
            <img src={star} alt="Favorites Icon" />
            {state !== 'collapsed' && <span>Favorites</span>}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarMenu className="mt-2">
        {items?.map((item) => (
          <Collapsible Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible" >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title} className={`${item.className} relative`}>
                  {item?.task && <div className="bg-[#E5484D] size-4 rounded-full text-[10px] flex items-center absolute right-0 top-0 justify-center text-white"> {item?.task}</div>}
                  {item.icon && <img src={item.icon} />}
                  <Link to={item?.url}>{item.title}</Link>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>

    </SidebarGroup >)
  );
}
