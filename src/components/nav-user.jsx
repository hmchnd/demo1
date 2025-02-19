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
  console.log(state)

  return (
    (<SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className={`data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground ${state === 'collapsed' ? 'justify-center' : ''}`}>
          <Avatar className="size-[26px] rounded-lg">
            <AvatarImage src={setting.avatar} alt={setting.name} />
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
          className={`data-[state=open]:bg-sidebar-accent  data-[state=open]:text-sidebar-accent-foreground ${state === 'collapsed' ? 'justify-center' : '' }`}>
          <Avatar className="size-[24px] rounded-lg">
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
