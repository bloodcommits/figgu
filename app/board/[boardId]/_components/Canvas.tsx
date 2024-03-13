
import React from 'react'
import Participants from './Participants'
import Info from './Info'
import Tooblbar from './Tooblbar'

function Canvas() {
  return (
    <main
    className="h-full w-full relative bg-neutral-100 touch-none"
  >
<Info/>
<Participants/>
<Tooblbar/>
    </main>
  )
}

export default Canvas