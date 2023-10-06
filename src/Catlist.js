import menu from "./data.js"

const Catlist=({ arr, setItems})=>{
    const filteritem=(catagory)=>{
        if(catagory==='all'){
          setItems(menu);
          return ;
        }
        const newitems=menu.filter((item)=>item.category===catagory);
        setItems(newitems);
    
      }


     return (
        <>
      { arr.map((single)=>{
        return (<button
        onClick={()=>filteritem(single)}
        >{single}</button>)
       })}
        </>
     )
}
export default Catlist;