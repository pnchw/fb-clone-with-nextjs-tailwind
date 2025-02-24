"use client";

import React from 'react'
import { useRef } from "react";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { ArrowRightIcon } from "@heroicons/react/solid";
import StoryCard from './StoryCard';
import MyStoryCard from "./MyStoryCard";

const stories = [ //will create story card component and map through it
    {
        key: 0,
        name: "Frendi Tooka",
        src: "/assets/images/stories/mystory.jpg",
        profile: "/assets/images/profiles/fd_profile.jpg",
    },
    {
        key: 1,
        name: "Pancheewa Thapom",
        src: "/assets/images/stories/story1.jpg",
        profile: "/assets/images/profiles/bf_profile.jpg",
    },
    {
        key: 2,
        name: "Kiattiphong Srangsut",
        src: "/assets/images/stories/story2.jpg",
        profile: "/assets/images/profiles/profile2.jpg",
    },
    {
        key: 3,
        name: "Jaruwan Kamjidpai",
        src: "/assets/images/stories/story3.jpg",
        profile: "/assets/images/profiles/profile3.jpg",
    },
    {
        key: 4,
        name: "Ploy",
        src: "/assets/images/stories/story4.jpg",
        profile: "/assets/images/profiles/profile4.jpg",
    },
    {
        key: 5,
        name: "Profile 5",
        src: "/assets/images/stories/story5.jpg",
        profile: "/assets/images/profiles/profile5.jpg",
    },
    {
        key: 6,
        name: "Profile 2",
        src: "/assets/images/stories/story2.jpg",
        profile: "/assets/images/profiles/profile2.jpg",
    },
    {
        key: 7,
        name: "Profile 2",
        src: "/assets/images/stories/story2.jpg",
        profile: "/assets/images/profiles/profile2.jpg",
    },
    {
        key: 8,
        name: "Profile 2",
        src: "/assets/images/stories/story2.jpg",
        profile: "/assets/images/profiles/profile2.jpg",
    },
    {
        key: 9,
        name: "Profile 2",
        src: "/assets/images/stories/story2.jpg",
        profile: "/assets/images/profiles/profile2.jpg",
    },
    {
        key: 10,
        name: "Profile 2",
        src: "/assets/images/stories/story2.jpg",
        profile: "/assets/images/profiles/profile2.jpg",
    },
    {
        key: 11,
        name: "Profile 2",
        src: "/assets/images/stories/story2.jpg",
        profile: "/assets/images/profiles/profile2.jpg",
    },
    {
        key: 12,
        name: "Profile 2",
        src: "/assets/images/stories/story2.jpg",
        profile: "/assets/images/profiles/profile2.jpg",
    },
];

function Stories() {

    const storyContainerRef = useRef(null);

    const scrollLeft = () => {
        if (storyContainerRef.current) {
            storyContainerRef.current.scrollLeft -= 500;
        }
    };

    const scrollRight = () => {
        if (storyContainerRef.current) {
            storyContainerRef.current.scrollLeft += 500;
        }
    };

    return (
        <div className="relative flex justify-center items-center w-full">
            {/* Left Arrow Button */}
            <button
                onClick={scrollLeft} 
                className="absolute left-1 z-100 w-9 h-9 bg-white rounded-full p-2 text-gray-700 hover:bg-gray-300 cursor-pointer">
                <ArrowLeftIcon />
            </button>

            {/* Story Cards */}
            <div
                ref={storyContainerRef} 
                className="relative flex justify-start w-full space-x-4 overflow-hidden overflow-x-scroll no-scrollbar scroll-smooth">
                <MyStoryCard />
                {stories.map( story => (
                    <StoryCard 
                        key={story.key} 
                        name={story.name} 
                        src={story.src} 
                        profile={story.profile} />
                ))}
            </div>

            <button 
                onClick={scrollRight}
                className="absolute right-1 z-100 w-9 h-9 bg-white rounded-full p-2 text-gray-700 hover:bg-gray-300 cursor-pointer">
                <ArrowRightIcon />
            </button>
        </div>
      )
    }

export default Stories;

