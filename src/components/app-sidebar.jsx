import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import setting from '@assets/icons/setting.svg'
import user from '@assets/icons/user.svg'
import framsys from '@assets/icons/framsys.svg'
import gantt from '@assets/icons/gantt.svg'
import construction from '@assets/icons/construction.svg'
import kanban from '@assets/icons/kanban.svg'
import roadmap from '@assets/icons/roadmap.svg'
import sap from '@assets/icons/sap.svg'
import reports from '@assets/icons/reports.svg'
import portfolio from '@assets/icons/portfolio.svg'
import recents from '@assets/icons/recents.svg'
import team from '@assets/icons/team.svg'


const data = {
  user: {
    name: "Mikhail",
    avatar: user,
  },
  setting: {
    name: 'Setting',
    avatar: setting
  },
  navMain: [
    {
      title: "Framsys Methodology",
      url: "about",
      icon: framsys,
      className: 'active-btn',
      task: 5
    },
    {
      title: "Construction NW",
      url: "about",
      icon: construction,
      className: 'active-btn'
    },
    {
      title: "SAP Onboarding",
      url: "about",
      icon: sap,
      className: 'active-btn',
      task: 2
    },
    {
      title: "Recents",
      url: "about",
      icon: recents,
    },
    {
      title: "Portfolio",
      url: "about",
      icon: portfolio,
    },
    {
      title: "Roadmap",
      url: "about",
      icon: roadmap,
    },
    {
      title: "Kanban",
      url: "about",
      icon: kanban,
    },
    {
      title: "Gantt",
      url: "about",
      icon: gantt,
    },
    {
      title: "Team",
      url: "about",
      icon: team,
    },
    {
      title: "Reports",
      url: "about",
      icon: reports,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} setting={data.setting} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
