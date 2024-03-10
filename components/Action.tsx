import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

interface ActionProps{
children:React.ReactNode;
side?:DropdownMenuContentProps["side"];
sideOffset?:DropdownMenuContentProps["sideOffset"];
id:string;
title:string
}


function Action({children , side , sideOffset , id , title }:ActionProps) {
  return (
    <div className="absolute">
        Action
    </div>
  )
}

export default Action