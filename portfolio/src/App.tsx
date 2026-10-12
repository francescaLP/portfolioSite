import Header from './components/header';
import Hero from './components/hero';
import Works from './components/works';
import Bio from './components/bio';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './components/Pages/homepage';
import WorkItemPage from './components/Pages/work-item-page';
import { items } from './components/items';
import { descriptions } from './components/descriptions';




function App() {
  var j = -1;
  return(<div className='bg-slate-200 min-h-screen'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {items.map((i) =>{
            console.log(descriptions[i.index])
            return <Route path= {"/" + i.name} element={WorkItemPage(i,i.index < descriptions.length ? descriptions[i.index] : {brief:"coming soon", long:"coming soon", cont:"coming soon"})}/>
        })}
      </Routes>
    </BrowserRouter>
    </div>
    );
}

export default App
