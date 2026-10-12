import Header from "../header";
import WorkItem from "../work-item";
import type { dProps, ItemProps } from "../work-item";
export default function WorkItemPage(item:ItemProps, d:dProps){
    return(
       <div>
            <h1 className="text-black p-15 text-center bg-sky-200">{item.name}</h1>
            <div className="flex p-10 justify-left">
                <p>{d.long}</p>
            </div>
       </div>
    )
}