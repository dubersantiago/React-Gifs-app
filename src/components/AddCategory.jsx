import { useState } from "react";


const AddCategory = ({onNewCategory}) => {

    const [inputValue,setInputValue]=useState('');

    const onInpiutChange=(event)=>{
        setInputValue(event.target.value);
    }

    const onSubmit =(event)=>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (

        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="buscar gifs"
                value={inputValue}
                onChange={ onInpiutChange }
            />
        </form>
    );
}

export default AddCategory;
