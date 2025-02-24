import React from 'react'
import LowerWidgets from "./LowerWidgets"
import UpperWidgets from "./UpperWidgets"
import MiddleWidgets from "./MiddleWidgets"

function Widgets() {
  return (
    <div className="flex shrink-1 justify-end w-1/4 fixed right-0 mt-3 min-w-[280px] max-w-[360px] h-[92vh] max-[900px]:hidden overflow-hidden overflow-y-auto scrollbar-width">
      <div className="flex flex-col ">
          <div><UpperWidgets /></div>
          <div><MiddleWidgets /></div>
          <div><LowerWidgets /></div>
      </div>
    </div>
  )
}

export default Widgets;