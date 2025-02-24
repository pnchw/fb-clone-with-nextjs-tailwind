"use client";

import { useSession } from "next-auth/react";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow.js";
import Groups from "./Groups.js";

function Sidebar() {
    const {data: session, loading} = useSession();

  return (
    <div className="flex-1 w-1/4 h-screen fixed 
                max-[1100px]:hidden">
        <div className="flex flex-col shrink-1 justify-start pl-2 mt-3 min-w-[280px] max-w-[360px] h-[92vh] overflow-hidden overflow-y-auto scrollbar-width">
            {session?.user && (
                <SidebarRow src={session.user.image} title={session.user.name} />
            )}
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Momories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />

            <hr className="text-gray-300 my-2" />

            <div className="flex items-center justify- z-50">
                <h2 className="text-xl text-gray-500 p-2">Your Shortcuts</h2>
                <p className="text-sm relative text-blue-400 opacity-0 hover:opacity-100 px-2 py-1 rounded-md hover:bg-gray-200">Edit</p>
            </div>
            <Groups />
        </div>
    </div>

  )
}

export default Sidebar;