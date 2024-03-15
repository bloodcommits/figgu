
import React from 'react'
import Participants from './Participants'
import {Info} from './Info'
import Tooblbar from './Tooblbar'
// import { useSelf } from '@/liveblocks.config'

interface CanvasProps{
  boardId:string;
}


function Canvas({boardId}:CanvasProps) {
  // const info = useSelf((me)=>me.info)
  // console.log(info)
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none"  >
<Info boardId={boardId}/>
<Participants/>
<Tooblbar/>
    </main>
  )
}

export default Canvas