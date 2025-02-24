import React from 'react'
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import InputIcon from "./InputIcon";
import { ChatAltIcon, ShareIcon, ThumbUpIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, XIcon } from "@heroicons/react/solid";

function Post({ name, message, email, timestamp, image, postImage }) {
    const { data: session } = useSession();
    const [isLike, setIsLike] = useState(false);
    const [showLikesPopup, setShowLikesPopup] = useState(false);

    const toggleLike = () => {
        setIsLike(!isLike);
        setShowLikesPopup(!showLikesPopup);
    }

  return (
    <div className="relative flex flex-col bg-white mt-5 rounded-2xl shadow-sm ">
        <div className="absolute right-3 top-4 text-gray-600">
            <button className="rounded-full hover:bg-gray-200 p-2">
                <DotsHorizontalIcon className="h-5 w-5"/>
            </button>
            <button className="rounded-full hover:bg-gray-200 p-2">
                <XIcon className="h-5 w-5"/>
            </button>
        </div>
        <div className="p-5">
            <div className="flex items-center space-x-2">
                <Image 
                className="rounded-full" 
                src={image} 
                width={40} 
                height={40} 
                alt="image profile of poster"/>

                <div className="">
                    <p className="font-medium">{name}</p>
                    <p className="text-xs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    }).replace(/(am|pm)/i, (match) => match.toUpperCase())}
                    </p>
                </div>
            </div>
            <p className="pt-4">{message}</p>
        </div>

        {postImage && (
            <div className="relative w-full border-1 border-gray-300">
                <Image 
                    className="object-cover w-full h-auto" 
                    src={postImage}  
                    width={800}
                    height={800}
                    alt="post image"/>
            </div>
        )}

        {/* Dropup Menu */}
        <div className={`flex items-center justify-between ${!showLikesPopup && "justify-end"}`}>
            {showLikesPopup && (
                <div className="">
                    <div className="flex items-center space-x-2 py-2 mx-3">
                    <Image 
                        className="rounded-full" 
                        src={"/assets/images/icons/like-emoji.png"} 
                        width={20} 
                        height={20} 
                        alt="" />
                    <p className="text-sm text-gray-700 hover:underline max-[524px]:hidden">{session.user.name}</p>
                    </div>
                </div>
            )}

            <div className="flex justify-end">
                <div className="flex justify-end">
                    <div className="flex items-center justify-end space-x-3 text-gray-700 py-2 mx-3 max-[524px]:hidden">
                        <p className=" text-sm text-gray-700 hover:underline">5 comments</p>
                        <p className="text-sm text-gray-700 hover:underline">3 shares</p>
                    </div>
                    <div className="flex items-center justify-end space-x-3 text-gray-700 py-2 mx-3 min-[524px]:hidden">
                        <p className="text-sm text-gray-700 hover:underline mr-1">5</p><ChatAltIcon className="h-3" />
                        <p className="text-sm text-gray-700 hover:underline mr-1">3</p><ShareIcon className="h-3"/>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Post Footer // Like Comment Share Section */}
        <div className="flex justify-between items-center rounded-b-2xl text-gray-400 py-1 mx-3 border-t border-[rgba(204,204,204,1)] ">
            <div onClick={toggleLike} className="inputIcon text-gray-700 w-1/4">
                <ThumbUpIcon className={`h-5 ${isLike ? "text-blue-500" : ""}`}  />
                <p className={`text-xs sm:text-base ${isLike ? "text-blue-500" : ""}`}>{`${isLike ? "Liked" : "Like"}`}</p>
            </div>

            <InputIcon Icon={ChatAltIcon} text={"Comment"} />
            <InputIcon Icon={PaperAirplaneIcon} text={"Send"} />
            <InputIcon Icon={ShareIcon} text={"Share"} />
        </div>
    </div>
  )
}

export default Post;
