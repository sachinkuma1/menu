// const img=;

const Menucomp=({item})=>{
    const {id, title, category}=item;
    return (
        <>
       <img src="https://unsplash.com/photos/JhFYAeYLZTY"/>
       <p>{title}</p>
       <p>{category}</p>
       </>
    )
}

export default Menucomp;