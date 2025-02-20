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
      task: 5,
      styleConfig: {
        w: '22px',
        h: "22px"
      }
    },
    {
      title: "Construction NW",
      url: "about",
      icon: construction,
      className: 'active-btn',
      styleConfig: {
        w: '22.16px',
        h: "26px"
      }
    },
    {
      title: "SAP Onboarding",
      url: "about",
      icon: sap,
      className: 'active-btn',
      task: 2,
      styleConfig: {
        w: '22px',
        h: "26px"
      }
    },
    {
      title: "Recents",
      url: "about",
      icon: recents,
      styleConfig: {
        w: '22px',
        h: "20px"
      }
    },
    {
      title: "Portfolio",
      url: "about",
      icon: portfolio,
      styleConfig: {
        w: '22px',
        h: "21.87px"
      }
    },
    {
      title: "Roadmap",
      url: "/",
      icon: roadmap,
      styleConfig: {
        w: '22px',
        h: "24px"
      }
    },
    {
      title: "Kanban",
      url: "kanban",
      icon: kanban,
      styleConfig: {
        w: '22px',
        h: "22px"
      }
    },
    {
      title: "Gantt",
      url: "gantt",
      icon: gantt,
      styleConfig: {
        w: '22px',
        h: "24px"
      }
    },
    {
      title: "Team",
      url: "about",
      icon: team,
      styleConfig: {
        w: '22px',
        h: "22px"
      }
    },
    {
      title: "Reports",
      url: "about",
      icon: reports,
      styleConfig: {
        w: '22px',
        h: "22px"
      }
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
