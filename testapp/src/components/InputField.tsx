import React, { useRef, useState } from "react"

interface InputFieldProps{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField:React.FC<InputFieldProps> =({todo, setTodo, handleAdd})=>{
    const inputRef = useRef<HTMLInputElement>(null);
    
    return(
        <React.Fragment>
            <form className="input"  onSubmit={(e)=>{
                    handleAdd(e);
                    inputRef.current?.blur()
                }}>
                <input 
                ref ={inputRef}
                type="input" 
                value={todo} 
                onChange ={(e)=> setTodo(e.target.value)} 
                placeholder="Enter a task" 
                className="input__box__main" />
                <button className = "input__btn" type="submit">ADD</button>
            </form>
        </React.Fragment>
    )
}
 
export default InputField;