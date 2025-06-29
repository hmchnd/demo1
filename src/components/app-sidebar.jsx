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
import Work from '@assets/icons/Work.svg'
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
    name: "Profile",
    avatar: user,
  },
  setting: {
    name: 'Settings',
    avatar: setting
  },
  navMain: [
    {
      title: "Work",
      url: "about",
      icon: Work,
      className: 'active-btn',
      styleConfig: {
        w: '20px',
        h: '20px',
        fillColor: '#BA5643',
        textColor: '#BA5643'
      }
    },
    //{
    //  title: "Portfolio",
    //  url: "about",
    //  icon: construction,
    //  className: 'active-btn',
    //  styleConfig: {
    //    w: '22.16px',
    //    h: "26px"
    //  }
    //},
    //{
    //  title: "SAP Onboarding",
    //  url: "about",
    //  icon: sap,
    //  className: 'active-btn',
    //  task: 2,
    //  styleConfig: {
    //    w: '22px',
    //    h: "26px"
    //  }
    //},
    // {
    //   title: "Recents",
    //   url: "about",
    //   icon: recents,
    //   styleConfig: {
    //    w: '22px',
    //    h: "20px"
    //  }
    //},
    {
      title: "Portfolio",
      url: "about",
      icon: portfolio,
      styleConfig: {
        w: '20px',
        h: '20px'
      }
    },
    {
      title: "Roadmap",
      url: "/",
      icon: roadmap,
      styleConfig: {
        w: '20px',
        h: '20px'
        
      }
    },
    {
      title: "Activities",
      url: "kanban",
      icon: kanban,
      styleConfig: {
        w: '20px',
        h: '20px'
      }
    },
    {
      title: "Gantt",
      url: "gantt",
      icon: gantt,
      styleConfig: {
        w: '20px',
        h: '20px'
      }
    },
    //{
    //  title: "Team",
    //  url: "about",
    //  icon: team,
    //  styleConfig: {
    //    w: '22px',
    //    h: "22px"
    //  }
    //},
    {
      title: "Analytics",
      url: "about",
      icon: reports,
      styleConfig: {
        w: '20px',
        h: '20px'
      }
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" className="fixed left-0 top-0 h-screen bg-[#F4F4F4] border-t border-l border-gray-300 shadow-[2px_2px_4px_rgba(0,0,0,0.1)] rounded-tr-lg" style={{ zIndex: 100 }} {...props}>
      <SidebarHeader className="bg-[#F4F4F4]">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="bg-[#F4F4F4]">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-[#F4F4F4]"> 
        <NavUser user={data.user} setting={data.setting} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}