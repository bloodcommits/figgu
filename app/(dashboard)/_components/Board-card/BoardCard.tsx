
import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import Footer from "./Footer";
import { Skeleton } from "@/components/ui/skeleton";
import Action from "@/components/Action";
import { MoreHorizontal } from "lucide-react";


interface BoardCradProp{
    id:string;
    title:string;
    authorname:string;
    authorId:string;
    createdAt:number;
    imageUrl:string;
    orgId:string;
    isFavorite:boolean
}

export function BoardCard({
id,
title,authorname,
authorId,
createdAt,
imageUrl,
orgId,
isFavorite
}:BoardCradProp) {
const {userId} = useAuth();
  const authorlable = userId===authorId ? "You" :authorname

  const createdAtlabel = formatDistanceToNow(createdAt , {addSuffix:true})
  return (
    <Link href={`/board/${id}`}>
    <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
            <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-fit"
            />
            <Overlay/>
            <Action id={id} title={title} side="right"  >
<button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
  <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
</button>
            </Action>
        </div>
        <Footer
        isFavorite={false}
        title={title}
        authorlable={authorlable}
        createdAtlabel={createdAtlabel}
        onClick={()=>{}}
        disabled ={false}
        />

    </div>
    </Link>
  )
}

BoardCard.Skeleton = function BoardCardSkeleton(){
  return(
    <div className="aspect-[100/127] rounded-lg justify-between overflow-hidden">
      <Skeleton className="h-full w-full"/>

    </div>
  )
}