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
          className={`flex items-center justify-start ${state === 'collapsed' ? 'pl-[8px]' : 'pl-2'} data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground !h-9`}>
          <Avatar className={`${state === 'expanded' ? "" : ''} flex-shrink-0 py-2`}>
            <AvatarImage src={setting.avatar} alt={setting.name} className="object-contain size-[20px]" />
          </Avatar>
          {
            state === 'expanded' && <div className="grid flex-1 text-left text-sm leading-tight pl-3">
              <span className=" font-semibold text-sm" style={{
                color: '#595959',
                fontFamily: 'var(--text-font-primary, Inter)',
                fontSize: 'var(--text-size-body, 14px)',
                fontStyle: 'normal',
                fontWeight: 'var(--text-weight-medium, 500)',
                lineHeight: 'normal'
              }}>{setting?.name}</span>
            </div>
          }
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton
          className={`flex items-center justify-start ${state === 'collapsed' ? 'pl-[8px]' : 'pl-2'} data-[state=open]:bg-sidebar-accent bg-[#F0F0F3] data-[state=open]:text-sidebar-accent-foreground !h-9`}>
          <Avatar className={`${state === 'expanded' ? "" : ''} flex-shrink-0 py-2`}>
            <AvatarImage src={user?.avatar} alt={user?.name} className="size-[20px]" />
          </Avatar>
          {
            state === 'expanded' && <div className="grid flex-1 text-left text-sm leading-tight pl-3">
              <span className="truncate font-semibold text-sm" style={{
                color: '#595959',
                fontFamily: 'var(--text-font-primary, Inter)',
                fontSize: 'var(--text-size-body, 14px)',
                fontStyle: 'normal',
                fontWeight: 'var(--text-weight-medium, 500)',
                lineHeight: 'normal'
              }}>{user?.name}</span>
            </div>
          }
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>)
  );
}
