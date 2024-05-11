import "./style.css"

const Input = ({ label, placeholder, type, onChange, name, value, onBlur, onFocus, style,className }) => {
    return (
        <div className="inputDiv">
            <label className="inputTitle">{label}</label>
            <input
                className={className}
                style={style}
                type={type}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}
                label={label}
                onFocus={onFocus}
            />
        </div>

    )
}


export default Input