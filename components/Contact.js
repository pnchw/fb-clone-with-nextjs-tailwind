import React from 'react'
import Image from 'next/image';

function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
        <Image 
            className="rounded-full object-cover"
            src={src}
            width={50}
            height={50}
            alt="profile-contact"
        />

        <p>{name}</p>

        <div className="absolute bg-green-400 h-3 w-3 rounded-full bottom-2.5 left-11"></div>
    </div>
  )
}

export default Contact;