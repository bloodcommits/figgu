"use client"

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Id } from "@/convex/_generated/dataModel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Hint } from "@/components/hints"
import { useRenameModal } from "@/store/Usenamemodal"
import Action from "@/components/Action"
import { MenuIcon } from "lucide-react"


interface BoardProp{
  boardId:string
}
const font = Poppins({
  subsets:["latin"],
  weight:["600"]
});

const Tabsepe=()=>{
  return(
    <div className="text-neutral-300 px-1.5">
      |
    </div>
  )
}

export const Info=({boardId}:BoardProp)=> {

  const {onOpen} = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;
  


  return (
    <div className='absolute top-2 left-2 bg-white rounded-md p-1.5 h-22 flex items-center shadow-md'
    >
      <Hint label="Go to Board" side="bottom" sideOffset={10}>

       <Button asChild className="px-2" variant="board">
     <Link href="/" >
        <Image 
        src = "/logo.svg"
        alt="OP Board"
        height={60}
        width={60}
        />
        <span className={cn("font-semibold text-xl ml-2 text-black")}>
          Board
        </span>
        </Link>
       </Button>
        
        </Hint>
        <Tabsepe></Tabsepe>
        <Hint label="Edit Title" side="bottom" sideOffset={10}>

        <Button variant="board" className="text-base font-normal px-2"
        onClick={()=>onOpen(data._id , data.title)}
        >
          {data.title}

        </Button>
          </Hint>
          <Tabsepe></Tabsepe>
          <Action id={data._id} title={data.title} side="bottom" sideOffset={10}>
<div>
  <Hint label="Main Menu" side = "bottom" sideOffset={10}>
<Button size="icon" variant="board">
  <MenuIcon/>
</Button>
  </Hint>
</div>
          </Action>
        </div>
  )
}

export const InfoSkeleton = () => {
  return (
    <div 
      className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]"
    />
  );
};