const Catlist=({filteritem, arr})=>{
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