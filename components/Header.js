"use client";

import Image from "next/image";
import NavCenterIcon from "./NavCenterIcon";
import {
    BellIcon,
    ChatIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    BeakerIcon,
    } from "@heroicons/react/solid"
import {
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
    } from "@heroicons/react/outline"
import ProfileDropDown from "./ProfileDropdown";

function Header() {

    return (
        <nav className="flex justify-between items-center fixed top-0 z-1000
            px-3 py-2 bg-white shadow-md w-full flex-grow">

            {/* Nav-left */}
            <div className="flex items-center justify-start w-1/4">
                <Image 
                    className="rounded-full"
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    alt="facebook logo"
                />
                <div className="flex items-center ml-2 rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input 
                        className="max-[1260px]:hidden ml-2 bg-transparent 
                        outline-none placeholder-gray-500 
                        flex items-center flex-shrink" 
                        type="text" 
                        placeholder="Search Facebook"/>
                </div>
            </div>


            {/* Nav-center */}
            <div className="w-1/2">
                <div className="flex justify-center space-x-3
                            max-[700px]:hidden">
                    <NavCenterIcon active Icon={HomeIcon} />
                    <NavCenterIcon Icon={PlayIcon} />
                    <NavCenterIcon Icon={ShoppingCartIcon} />
                    <NavCenterIcon Icon={UserGroupIcon} />
                    <NavCenterIcon Icon={BeakerIcon} />
                </div>
            </div>

            {/* Nav-right */}

            <div className="flex shrink-0 items-center justify-end space-x-1 w-1/4">
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ProfileDropDown />
            </div>
        </nav>
    )
}

export default Header;