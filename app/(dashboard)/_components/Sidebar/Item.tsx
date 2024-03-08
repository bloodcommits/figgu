"use client"
import Image from "next/image"
import {
    useOrganization,
    useOrganizationList
}from "@clerk/nextjs"
import {cn} from "@/lib/utils"
import { Hint } from "@/components/hints"

interface ItemProps{
    id:string;
    name:string;
    imageurl:string;
}



function Item({
    id,name,imageurl
}:ItemProps) {
    const {organization} = useOrganization();
    const {setActive} = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = ()=>{
        if(!setActive) return;

        setActive({organization:id})

    }

  return (
    <div className="aspect-square relative">
        <Hint 
        label={name}
        side="right"
        align="start"
        sideOffset={17}
        >

        <Image 
        fill
        alt={name}
        onClick={onClick}
        src={imageurl}
        className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
            )}
            />
            </Hint>
        
    </div>
  )
}

export default Item