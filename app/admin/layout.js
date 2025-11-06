'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/Component/Sidebar"
import { ModeToggle } from "@/Component/ModeToggler"

export default function Layout({ children }) {
    return (
        <>
            <style jsx global>{`
            .client-side {
              visibility: hidden;
              height : 0px;
              width: 0px;
            }
    `}</style>
            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger /> <ModeToggle/>
                <main className="w-full">
                    {children}
                </main>
            </SidebarProvider>
        </>
    )
}