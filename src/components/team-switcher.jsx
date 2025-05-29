import * as React from "react"
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
import framsys from '@assets/icons/framsys.svg'

export function TeamSwitcher() {
  const { isMobile } = useSidebar()
  return (
    (<SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-10">
              <div
                className="flex aspect-square size-10 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                <img 
                  src={framsys} 
                  alt="framsys-logo" 
                  style={{
                    width: '20.842px',
                    height: 'var(--size-24, 24px)',
                    aspectRatio: '20.84/24.00'
                  }}
                />
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>)
  );
}
