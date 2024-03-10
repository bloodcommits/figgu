import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useOrganization } from "@clerk/nextjs"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { toast } from "sonner"
function EmptyBoard() {
  const {mutate , pending} = useApiMutation(api.board.create)
  const {organization }= useOrganization();

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
<div className="h-full flex flex-col items-center justify-center bg-red-500">

<Image src="/note.svg" 
height={110}
width={110}
alt="empty" />

<h2 className="text-2xl font-semibold mt-6">
Create your first board
</h2>
<p className="text-muted-foreground text-sm mt-2">
   Strat by creating a board for your organization
</p>
<div className="mt-6">
    <Button disabled={pending} onClick={onClick} size="lg">
        Create Board
    </Button>
</div>
</div>

  )
}

export default EmptyBoard