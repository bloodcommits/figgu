"use client"
import  {
    useOrganizationList
} from "@clerk/nextjs"
import Item from "./Item";

function List() {
    const {userMemberships} = useOrganizationList({
        userMemberships:{
            infinite:true
        }
    })
    if(!userMemberships.data?.length) return null;
  return (
    <ul className="space-y-4">
       {userMemberships.data?.map((mem)=>(
        <Item
        name={mem.organization.name}
        key={mem.organization.id}
        imageurl={mem.organization.imageUrl}
        id={mem.organization.id}
        />
       ))}

    </ul>
  )
}

export default List