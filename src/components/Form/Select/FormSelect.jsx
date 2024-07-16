import { useMainContext } from "../../../context/MainContext";


const FormSelect = ({value, name, labelText, onChange, onBlur }) => {

    const { state, dispatch } = useMainContext();

    return (
        <>
            <div className="flex flex-col gap-4">
                <label htmlFor={name} className="text-white text-2xl font-bold">{labelText}</label>
                <select value={value} name={name} onBlur={(e) => onBlur(e)} onChange={(e) => onChange(e)} id={name} className={`p-4  bg-transparent rounded-xl border-2 ${state.formErrors.errorMessages.some((error) => error.field === name) ? "border-red-500" : "border-gray-500"} text-gray-500`} >
                    <option value={""} disabled hidden >Selecione una categoria</option>
                    {
                        state.categorias.map((categoria) => {

                            return <option key={categoria.id} value={categoria.id} >{categoria.nombre}</option>

                        })
                    }
                </select>
                {
                    state.formErrors.errorMessages.some((error) => error.field === name) &&
                    <span className="text-red-500">{state.formErrors.errorMessages.find((error) => error.field === name).message}</span>
                }

            </div>

        </>
    )
}

export default FormSelect