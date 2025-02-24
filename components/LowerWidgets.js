import React from 'react'
import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/solid";
import Contact from './Contact';

const contacts = [
    { key:1, src: "/assets/images/contacts/contact1.jpg", name: "Anonymous person 1" },
    { key:2, src: "/assets/images/contacts/contact2.jpg", name: "Anonymous person 2" },
    { key:3, src: "/assets/images/contacts/contact3.jpg", name: "Anonymous person 3" },
    { key:4, src: "/assets/images/contacts/contact4.jpg", name: "Anonymous person 4" },
    { key:5, src: "/assets/images/contacts/contact5.jpg", name: "Anonymous person 5" },
    { key:6, src: "/assets/images/contacts/contact6.jpg", name: "Anonymous person 6" },
    { key:7, src: "/assets/images/contacts/contact7.jpg", name: "Anonymous person 7" },
    { key:8, src: "/assets/images/contacts/contact1.jpg", name: "Anonymous person 8" },
    { key:9, src: "/assets/images/contacts/contact2.jpg", name: "Anonymous person 9" },
];

function LowerWidgets() {
  return (
    <div className="pl-2 flex flex-col shrink-1">
        <div className="flex justify-between items-center text-gray-500">
            <h2 className="text-xl">Contacts</h2>
            <div className="flex space-x-2">
                <SearchIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-200" />
                <DotsHorizontalIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-200" />
            </div>
        </div>

        {contacts.map(contact => (
          <Contact 
            key={contact.key} 
            src={contact.src} 
            name={contact.name} 
          />
        ))}

    </div>
  )
}

export default LowerWidgets;