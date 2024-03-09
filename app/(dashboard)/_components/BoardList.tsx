"use client"
import { useQuery } from "convex/react";
import {api} from "@/convex/_generated/api"
import EmptyBoard from "./EmptyBoard";
import { EmptyFav } from "./EmptyFav";
import Emptysearch from "./Emptysearch";

interface Boardlistprop{
    orgId:string;
    query:{
        Search?:string;
        fav?:string;
    }
}

export const BoardList =({
    orgId , query
}:Boardlistprop)=>{

    const data = useQuery(api.boards.get ,{orgId})

    if(data===undefined){
        return(
            <div>
                Loading...
            </div>
        )
    }

    if(!data?.length && query.Search){
        return(
            <div>
               <Emptysearch/>
            </div>
        )
    }
    if(!data?.length && query.fav){
        return(
            <div>
               <EmptyFav/>
            </div>
        )
    }
    if(!data?.length ){
        return(
            <div>
                <EmptyBoard/>
            </div>
        )
    }
    return(
        <div>
            {/* {JSON.stringify(data)} */}
            <h2 className="text-3xl">
                {query.fav?"Favourite Boards":"Team Boards"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-col-2 md:grid-col-4 lg:grid-col-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">

            </div>
        </div>
    )

}