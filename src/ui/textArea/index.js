import "./style.css"

const TextArea = ({...props}) => {
    return (
        <div className="textArea">
            <textarea 
            className={props.className ? props.className :"textAreaInput"}
            style={props.style}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
            placeholder={props.placeholder}
            label={props.label}
            onFocus={props.onFocus}/>
        </div>
    )
}

export default TextArea