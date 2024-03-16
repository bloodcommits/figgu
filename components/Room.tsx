"use client"
import { ReactNode } from "react"
import { ClientSideSuspense } from "@liveblocks/react"
import { RoomProvider } from "@/liveblocks.config"

interface roomProps{
    children: ReactNode
    roomId: string
    fallback: NonNullable<ReactNode> | null
}

export const Room = ({children , roomId , fallback}:roomProps)=> {
    return (
        <RoomProvider 
        id={roomId} 
        initialPresence={{cursor:null}}>

        <ClientSideSuspense fallback={fallback}>
      
          {() => children}
      
        </ClientSideSuspense>
      
      </RoomProvider>
    );
  };

