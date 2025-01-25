import { useState } from "react";
import { GifGrid,AddCategory } from "./components";




const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory=(category)=>{
        if(categories.includes(category))return;
        setCategories([category,...categories])
    }

    return (
        <>  
            
            <h1>GifExpertApp</h1>

            
            <AddCategory 
                onNewCategory={onAddCategory}
            />
            
            
            {categories.map((categoria)=><GifGrid key={categoria} category={categoria}/>)}
            {/* gif item */}
            
            <p>Desarrollado por @Duber_Garcia </p>    
        </>
    );
}

export default GifExpertApp;
