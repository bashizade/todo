export const Input = ({ placeholder, name, onChange, value, type, label, onBlur }) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} name={name} onBlur={onBlur} onChange={onChange} value={value} className="input input-bordered w-full " />
        </div>
    )
}