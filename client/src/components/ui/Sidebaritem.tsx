import { ReactElement } from "react"

interface sidebarProps{
    icon: ReactElement,
    title: string
}

const Sidebaritem = (props:sidebarProps) => {
  return (
    <div className="flex items-center h-12 hover:bg-gray-200 rounded-md transition-all duration-150">
       <div className="pr-5 pl-3">{props.icon}</div>
       <div>{props.title}</div>
    </div>
  )
}

export default Sidebaritem
