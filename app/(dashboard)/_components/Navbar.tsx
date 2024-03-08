"use client"

import { UserButton } from "@clerk/nextjs"
import Searchinput from "./Searchinput"

function Navbar() {
  return (
    <div className="flex items-center gap-x-4 p-5">

        <div className="hidden lg:flex lg:flex-1 ">
<Searchinput/>
        </div>
        <UserButton/>
        
        </div>
  )
}

export default Navbar