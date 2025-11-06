import { List, LayoutDashboard, PencilLine , Plus} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Add Blog",
    url: "/addBlog",
    icon: Plus,
  },
  {
    title: "All Blogs",
    url: "/listBlog",
    icon: List,
  },
  {
    title: "Update Blog",
    url: "/updateBlog",
    icon: PencilLine,
  },
  {
    title: "Add Quiz",
    url: "/addQuiz",
    icon: Plus,
  },
  {
    title: "All Quiz",
    url: "/listQuiz",
    icon: List,
  },
  {
    title: "Update Quiz",
    url: "/updateQuiz",
    icon: PencilLine,
  },
]

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={'/admin' + item.url} className="text-2xl my-2 font-bold font-mono">
                      <item.icon />
                      <span className="text-2xl font-bold font-mono">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}