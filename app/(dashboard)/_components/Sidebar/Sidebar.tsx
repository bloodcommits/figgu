import List from "./List"
import Newbutton from "./Newbutton"


const Sidebar = () => {
  return (
    <div className="fixed z-[1] left-0 bg-blue-950 h-full
    w-[60px] flex flex-col p-3 text-white gap-y-4">
        <List/>
        <Newbutton/>
        </div>
  )
}

export default Sidebar