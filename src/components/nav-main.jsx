
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
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom";
import star from '@assets/icons/star.svg'

export function NavMain({
  items
}) {
  return (
    (<SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem className="z-40">
          <SidebarMenuButton className="flex justify-end">
          <SidebarTrigger /> 
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarGroupLabel className="text-center text-sm text-[#8B8D98] flex justify-center gap-2"><img src={star} alt="" /> Favorites</SidebarGroupLabel>
      <SidebarMenu className="mt-2">
        {items?.map((item) => (
          <Collapsible Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible" >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title} className={`${item.className} text-md`}>
                  {item.icon && <img src={item.icon} />}
                  <Link className="font-semibold" to={item?.url}>{item.title}</Link>
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
