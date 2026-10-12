import WorkItem from "./work-item";
import {items} from "./items"

/*const items = [
    {name:"Crabble", year:2026, desc:"Web game about crabs in a bucket", pict:"src/assets/m-stereophyta.png"},
    { name:"Simian Sphere", year: 2017, desc:"Holographic game made for Looking Glass",pict:"src/assets/m-simianSphere.gif"}, 
    {name:"Stereophyta", year:2017, desc:"Game about farming and music",pict:"src/assets/m-stereophyta.png"}, 
    {name:"Levedad", year:2016, desc:"IGF Student award nominee",pict:"src/assets/levedad_16.png"},
]; */


export default function Works(){

    function displayWorks(){
        return ( <div className="py-8 works grid lg:grid-cols-3 flex justify-center justify-items-center">
            {items.map((i) => {
                return <WorkItem props={i}/>
            })}
        </div>);
    }
    return displayWorks();
}