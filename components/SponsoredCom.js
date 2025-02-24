import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { DotsHorizontalIcon } from "@heroicons/react/solid";

function SponsoredCom({ href, src, name, detail }) {
  return (
    <div className="relative p-2 m-2 rounded-xl hover:bg-gray-200">
        <Link legacyBehavior href={href}>
        <a target="_blank">
            <div className="flex items-center space-x-2">
                <Image 
                    className="rounded-xl"
                    src={src}
                    width={120}
                    height={120}
                    alt=""
                />
                <div>
                    <p>{name}</p>
                    <small>{detail}</small>
                </div>
            </div>
        </a></Link>

        <div className="w-10 h-10 hover:bg-gray-100 rounded-full absolute top-2 right-2">
            <DotsHorizontalIcon className="h-6 text-gray-500 absolute left-2 top-2"/>
        </div>
    </div>
  )
}

export default SponsoredCom;