import { Field } from "formik"
import "./style.css"


const RadioGroup = ({ arrayProps, title }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        }}>      
            {arrayProps.length && arrayProps.map((item) => (
                <div className="ppp">
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <label className="radioGroup">
                            <p className="radioGroupLabel">{item.label}</p>
                            <Field
                                type="radio"
                                name={item.name}
                                id={item.id}
                                value={item.value}
                            />
                            <span class="checkmarkRadio"></span>
                            <div for={item.id}>
                            {item.description && <p className="radioGroupDescription" >{item.description}</p>}
                        </div>
                        </label>
                       
                    </div>
                </div>
            ))}
        </div>
    )
}
export default RadioGroup