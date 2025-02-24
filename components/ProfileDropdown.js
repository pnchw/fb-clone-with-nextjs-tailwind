"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { ArrowCircleDownIcon } from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"

function ProfileDropDown() {

  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div>
      {/* Profile Picture Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative rounded-full">
        {session?.user && ( // Check if session and user exist
          <Image
            className="object-contain rounded-full cursor-pointer flex shrink-0"
            src={session.user.image}
            width={40}
            height={40}
            alt="profile-picture"
          />
        )}
        <div>
          <ChevronDownIcon className="icon border-white border-2 w-4 h-4 p-0 m-0 absolute right-0 top-7" />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="flex items-center absolute right-3 mt-2 w-35 bg-gray-50 rounded-xl custom-shadow">
          <div 
            onClick={() => signOut()}
            className="flex justify-center m-2 py-2 px-2 w-full rounded-xl hover:bg-gray-300 cursor-pointer">
              <button className="flex items-center text-gray-700 text-md font-bold cursor-pointer">
              <ArrowCircleDownIcon className="icon mr-2" />
              Log out
              </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProfileDropDown;