import GifItem from "./GifItem";
import { UseFetchGifs } from "../hooks/useFetchGifs";



const GifGrid = ({category}) => {

    const {images,isLoading}=UseFetchGifs(category);
    

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>cargando...</h2>}
            <div className="card-grid">
                {images.map((imagen)=>{
                    return <GifItem 
                                key={imagen.id} 
                                {...imagen}
                            />
                })}
                
                
            </div>
        </>
    );
}

export default GifGrid;
