import logo from './logo.svg';
import './App.css';
import menu from './data.js';
import Menucomp from "./Menucomp.js";
import { useState } from 'react';
import Catlist from './Catlist';
function App() {

  const [items, setItems]=useState(menu);
  // const [cat, setCat]=useState([])

// instead of filtering here we can filter in catlist component

  // const filteritem=(catagory)=>{
  //   if(catagory==='all'){
  //     setItems(menu);
  //     return ;
  //   }
  //   const newitems=menu.filter((item)=>item.category===catagory);
  //   setItems(newitems);

  // }

  const set=new Set(menu.map((menuu)=>menuu.category));
  const arr= ['all', ...set];
  // setCat(arr);

  return (
    <div className="App">
      <div >
      <Catlist  arr={arr} setItems={setItems}/>
       {items.map((item)=><Menucomp item={item}  />)}
      </div>
    </div>
  );
}

export default App;
