import React from "react";
import Image from "next/image";

function MiddleWidgets() {
  return (
    <div className="flex flex-col shrink-1">
        <h2 className="text-xl text-gray-500 p-2">Birthdays</h2>
        <div className="flex items-center space-x-2">
            <Image
                className="ml-2"
                src={"/assets/images/icons/gift-icon.png"}
                width={50}
                height={50}
                alt="" 
            />
            <p><span className="font-bold">Anonymous person 1 </span>and<span className="font-bold"> 2 others </span>have birthdays today</p>
        </div>
        <hr className="text-gray-300 my-2" />
    </div>
  )
}

export default MiddleWidgets;

