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
    (<SidebarMenu className="p-0">
      <SidebarMenuItem className="p-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="p-0 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <div
                className="flex items-center justify-start pl-3 py-3 text-sidebar-primary-foreground">
                <img 
                  src={framsys} 
                  alt="framsys-logo" 
                  style={{
                    width: '20px',
                    height: '20px',
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
