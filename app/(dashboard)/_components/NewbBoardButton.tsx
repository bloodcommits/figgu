"use client"

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useOrganization } from "@clerk/clerk-react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewbBoardButtonProp{
orgId:string;
disabled?:boolean;
}
function NewbBoardButton({
orgId,
disabled
}:NewbBoardButtonProp) {
    const {organization }= useOrganization();
    const {mutate , pending} = useApiMutation(api.board.create)

    const onClick = ()=>{
        if(!organization) return;
      
        mutate({
          orgId:organization.id ,
          title:"Untitled"
        }).then( (id)=>{
          toast.success("Board created")
        }).catch(()=>{
          "failed to create board"
        })
      }

  return (
    <button
    disabled={disabled||pending}
    onClick={onClick}
    className={cn("col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col justify-center items-center py-6", disabled||pending&& "opacity-75 hover:bg-blue-600 cursor-not-allowed")}
    >
<div/>
<Plus className="h-12 w-12 text-white stroke-1"/>
<p className="text-sm text-white font-light">
    New board

</p>
    </button>
    )
}

export default NewbBoardButton