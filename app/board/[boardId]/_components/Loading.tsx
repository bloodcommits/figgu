import { Loader } from 'lucide-react'
import React from 'react'
import { Info } from './Info'
import Participants from './Participants'

function Loading() {
  return (

    <main className='h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center'>
        <Loader className='h-6 w-6 text-muted-foreground animate-spin' />
    </main>
  )
}

export default Loading