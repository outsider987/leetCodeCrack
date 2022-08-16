import React, {  useState } from "react"



export const useForm = <T, >(initialStates:T)=>{

    
    const [values,setValues] = useState(initialStates);
    const [errors,setErrors] = useState({});
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value,name}=e.target
        setValues({...values,[name]:value})
        

    }
    const handleSubmit = (event:React.FormEvent<HTMLElement>)=>{
        event.preventDefault();
    }
    return {handleChange,handleSubmit,values}
}