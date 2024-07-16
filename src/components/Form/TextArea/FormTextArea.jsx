

const FormTextArea = ({ value, labelText, placeholder, name, rows = "4", cols = "15", onChange, onBlur }) => {
    return (
        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">

            <label htmlFor={name} className="text-white text-2xl font-bold">{labelText}</label>
            <textarea value={value} onBlur={(e) => onBlur(e)} onChange={(e) => onChange(e)} className="p-4 text-white bg-transparent rounded-xl border-2 border-gray-500" name={name} id={name} placeholder={placeholder} rows={rows} cols={cols} />
        </div>)
}

export default FormTextArea