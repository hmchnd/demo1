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
          <Avatar className={`size-[26px] rounded-lg ${state === 'expanded' ? "pl-2 w-[36px] h-[26px]" : ''} `}>
            <AvatarImage src={setting.avatar} alt={setting.name} className="object-contain" />
          </Avatar>
          {
            state === 'expanded' && <div className="grid flex-1 text-left text-sm leading-tight">
              <span className=" font-semibold ">{setting?.name}</span>
            </div>
          }
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className={`data-[state=open]:bg-sidebar-accent bg-[#F0F0F3]  data-[state=open]:text-sidebar-accent-foreground ${state === 'collapsed' ? 'justify-center' : ''}`}>
          <Avatar className={`size-[24px] rounded-lg ${state === 'expanded' ? "pl-2 w-[36px] h-[26px]" : ''} `}>
            <AvatarImage src={user?.avatar} alt={user?.name} />
          </Avatar>
          {
            state === 'expanded' && <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold ">{user?.name}</span>
            </div>
          }
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>)
  );
}
