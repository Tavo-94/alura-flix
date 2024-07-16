import { useMainContext } from "../../../context/MainContext";

const FormInput = ({ value, labelText = "default input", placeholder = "placeholder", type = "text", name = "input", onChange, onBlur}) => {
    
    const { dispatch, state } = useMainContext();
    

    return (
        <>
            <div className="flex flex-col gap-4">

                <label htmlFor={name} className="text-white text-2xl font-bold">{labelText}</label>
                <input 
                value={value}  
                className={`p-4 text-white bg-transparent rounded-xl border-2 ${state.formErrors.errorMessages.some((error) => error.field === name)? "border-red-500" : "border-gray-500"}`} 
                name={name} 
                id={name}  
                placeholder={placeholder} 
                type={type} 
                onChange={(e) => onChange(e)}
                onBlur={(e)=> onBlur(e)}
                />
                {
                    state.formErrors.errorMessages.some((error) => error.field === name) &&
                    <span className="text-red-500">{state.formErrors.errorMessages.find((error) => error.field === name).message}</span>
                }
            </div>
        </>
    )
}

export default FormInput