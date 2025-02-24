import React from "react";

function InputIcon({ Icon, text }) {
  return (
    <div className="inputIcon text-gray-700 w-1/4">
        <Icon className="h-5" />
        <p className="text-xs sm:text-base">{text}</p>
    </div>
  );
}

export default InputIcon;