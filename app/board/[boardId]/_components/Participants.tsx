// import { Skeleton } from "@/components/ui/skeleton"
"use client"
import { UserAvatar } from "./UserAvatar"

import { useOthers , useSelf } from "@/liveblocks.config"
const max_shownuser = 2;


function Participants() {

const user = useOthers();
const currentuser = useSelf();
const hasmoreuser = user.length > max_shownuser

  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md'>
        <div className="flex gap-x-2">
          {user.slice(0 , max_shownuser).map(({connectionId , info})=>{
            return(
              <UserAvatar 
              key = {connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0]|| "T"}
              />
            )
          })}
          {
            currentuser&&(
              <UserAvatar
              src={currentuser.info?.picture}
              name = {`${currentuser.info?.name}`}
              fallback={currentuser.info?.name?.[0]}
              />
            )
          }{
            hasmoreuser && (
              <UserAvatar 
              name={`${user.length-max_shownuser} more`}
              fallback={`+${
                user.length-max_shownuser
              }`}
              />
            )
          }

        </div>
        
        </div>
  )
}

export function Participantskeleton() 
{return(
    <div className='absolute w-[100px] h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md'>

    
    </div>
  )
}


export default Participants

