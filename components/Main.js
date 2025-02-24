import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function Main() {
  return (
    <div className="flex justify-between pt-15
                max-[1100px]:mr-10
                max-[900px]:mr-0">
        <Sidebar />
        <Feed />
        <Widgets />
    </div>
  )
}

export default Main;
