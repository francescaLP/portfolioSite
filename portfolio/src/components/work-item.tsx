import { useState } from "react";

export interface ItemProps {
    name: string; year:number; desc:string; pict:string; index:number
}
export interface dProps {
    brief:string; cont:string; long:string;
}

export default function WorkItem(props){
    const [collapsed, setCollapsed] = useState(true);
    
    function renderCollapsed(){
        return ( <div onClick={handleClick} className="bg-slate-300 text-black justify-items-center justify-content-center h-100 p-4 m-4 rounded-xl hover:drop-shadow-xl">
            <h2>{props.name}</h2>
            <img className="scale-with-grid aspect-auto w-sm h-60" src={props.pict}/>
            <h3>{props.year}</h3>
            <p>{props.desc}</p>
            <div>
            </div>
        </div>);
    }
    function renderUnrolled(){
        return <div onClick={handleClick} className="bg-red-400">hello</div>
    }

    function handleClick(){
        console.log(props.name);
        setCollapsed(!collapsed);
    }
    return(collapsed ? renderCollapsed() : renderUnrolled());
};