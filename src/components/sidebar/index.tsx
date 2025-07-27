"use client";
import Image from "next/image";
import logo from "@/assets/logo.webp";
import { useState } from "react";
import { navigationItems } from "@/utils/constants";
import Link from "next/link";
import { HelpCircle, LogOut, Menu, User } from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => { 
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();   //! usePathname is the hook to get the current pathname

  return (
    <aside
    className={`bg-zinc-900 border-r border-zinc-800 flex flex-col transition-all duration-300 h-screen ${
      isCollapsed ? "w-16" : "w-64"
    }`}
    >
      {/* Logo */}
      <div className={`p-6 border-b border-zinc-600 h-21 ${isCollapsed ? "px-4" : ""}`}>
        <div className="flex items-center justify-between">


        <div className={`bg-white rounded-full ${!isCollapsed ? "flex items-center gap-1" : ""}`}>
          <Image src={logo} alt="logo" width={45} height={45}  className="size-[30px]"/>
          {!isCollapsed && (<h1 className="text-zinc-900 md:text-lg font-bold pe-3 font-mono">Rudder</h1>)}
        </div>

        {/* Hamburger  */}
        <button className="p-2 rounded-lg  text-gray-400 hover:text-white  hover:bg-zinc-800 transition" onClick={() => setIsCollapsed(!isCollapsed)}>
          <Menu className="size-5"/>
        </button>

        </div>
      </div>

  
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item,key) => (
          <Link 
            href={item.href}
            key={key}
            className={`flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded-lg transition 
            ${pathname === item.href ? "bg-blue-600 text-white shadow-blue-600/25" : "text-gray-300 hover:text-white hover:bg-zinc-600"} ${isCollapsed ? "justify-center" : ""}`}
          >
            <item.icon className="size-5 flex-shrink-0" />
            {!isCollapsed && <span className="whitespace-nowrap">{item.label}</span>}
          </Link>
        ))}
      </nav>


      {/* Footer */}
      <div className="p-4 border-t border-zinc-800 space-y-2">

            <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition text-gray-400 hover:text-white hover:bg-zinc-800  ${isCollapsed ? "justify-center" : ""}`}>
              <HelpCircle className="size-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm">Help Center</span>}
            </button>

            <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition text-gray-400 hover:text-red-400 hover:bg-red-950/20  ${isCollapsed ? "justify-center" : ""}`}>
              <LogOut className="size-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm">Logout</span>}
            </button>

            
      </div>





    </aside>
  );
};

export default Sidebar;