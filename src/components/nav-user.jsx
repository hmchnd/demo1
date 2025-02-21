import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavUser({
  user, setting
}) {
  const { state, isMobile } = useSidebar()
  return (
    (<SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className={`data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground ${state === 'collapsed' ? 'justify-center' : ''}`}>
          <Avatar className={`rounded-lg ${state === 'expanded' ? "pl-2 " : ''} `}>
            <AvatarImage src={setting.avatar} alt={setting.name} className="object-contain size-[22px]" />
          </Avatar>
          {
            state === 'expanded' && <div className="grid flex-1 text-left text-sm leading-tight">
              <span className=" font-semibold text-sm">{setting?.name}</span>
            </div>
          }
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className={`data-[state=open]:bg-sidebar-accent bg-[#F0F0F3]  data-[state=open]:text-sidebar-accent-foreground ${state === 'collapsed' ? 'justify-center' : ''}`}>
          <Avatar className={` rounded-lg ${state === 'expanded' ? "pl-2" : ''} `}>
            <AvatarImage src={user?.avatar} alt={user?.name} className="size-[22px]" />
          </Avatar>
          {
            state === 'expanded' && <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-sm">{user?.name}</span>
            </div>
          }
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>)
  );
}
