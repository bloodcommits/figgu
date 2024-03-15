import React from 'react'
import Canvas from './_components/Canvas'
import { Room } from '@/components/Room';
import Loading from './_components/Loading';


interface BoardIdProps{
  params:{
    boardId:string;
  }
}

function BoardIdPage({params}:BoardIdProps) {
  return (
    <div>
      <Room roomId={params.boardId} fallback={<Loading/>}>

        <Canvas boardId={params.boardId}/>
      </Room>
       
    </div>
  )
}

export default BoardIdPage