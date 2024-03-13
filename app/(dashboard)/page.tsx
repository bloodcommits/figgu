"use client"
import { BoardList } from "./_components/BoardList";
import Emptyorg from "./_components/Emptyorg"
import { useOrganization } from "@clerk/nextjs"
interface DashboardProp{
    searchParams:{
        search?:string;
        favorites?:string;
    }
}

const DashboardPage = ({searchParams}:DashboardProp) => {
  const {organization} = useOrganization();
    return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
 {!organization? (
 <Emptyorg/>
 ):(
<p>
<BoardList orgId={organization.id} query={searchParams} /> 
</p>
 )}
    </div>
  )
}

export default DashboardPage