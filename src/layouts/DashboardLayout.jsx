import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Bell, Menu, Search } from "lucide-react"
import { Outlet } from "react-router-dom"
import calender from "@assets/icons/calender.svg"

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="p-3">
          <div className="flex justify-between items-center">
            <h2 className="text-black text-2xl font-bold">Your Next Project</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Input type="email" className="rounded-xl bg-[##F0F0F3] pr-8" />
                <span className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Search className="text-[gray]" />
                </span>
              </div>
              <div className="cursor-pointer">
                <Bell className="text-black font-bold" size={25} />
              </div>
              <div className="cursor-pointer">
                <img src={calender} alt="calender-icon" className="w-6 h-6" />
              </div>
              <div className="cursor-pointer">
                <Menu className="text-black" size={28} />
              </div>
            </div>
          </div>
        </header>
        <div className="px-3">
          <button className="bg-[#BA5542] text-white px-2 py-1 rounded-md">Kanban</button>
        </div>
        {/* <header className="flex flex-1 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-100">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb className="flex flex-grow">
              <BreadcrumbList className="flex flex-grow">
                <div className="flex justify-between flex-grow">
                  <BreadcrumbItem className="hidden md:block">
                    <h2 className="text-black text-2xl font-bold">Your Next Project</h2>
                  </BreadcrumbItem>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Input type="email" className="rounded-xl bg-[#8b8d982b] pr-8" />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2">
                        <Search />
                      </span>
                    </div>
                    <div className="cursor-pointer">
                      <Bell className="text-black font-bold" size={25} />
                    </div>
                    <div className="cursor-pointer">
                      <img src={calender} alt="calender-icon" />
                    </div>
                    <div className="cursor-pointer">
                      <Menu className="text-black" size={25} />
                    </div>
                  </div>
                </div>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>  */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
