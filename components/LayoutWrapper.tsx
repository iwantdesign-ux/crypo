'use client';

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
      
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out lg:static`}>
        <Sidebar />
      </div>
      
      <main className="flex-1 p-4 lg:p-8 bg-background min-h-screen w-full">
         {/* We inject toggleSidebar into the page components via cloning if we really wanted,
             but since we are using the App Router, a simple solution is to pass it as a child prop 
             or use React.Children.map. 
             Actually, let's just make it simple: 
             The header is in `page.tsx`, so we really do need to pass the prop. 
             We can use React.Children.map.
         */}
         {/* However, standard Next.js layouts don't easily allow passing props to children. 
             Let's just use React.Children.map(children, child => React.cloneElement(child as React.ReactElement, { toggleSidebar }))
         */}
         {/* Wait, standard React.Children.map works fine here. */}
         {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { toggleSidebar } as any);
            }
            return child;
         })}
      </main>
    </div>
  );
}
