import { Field } from "formik"
import "./style.css"

const CheckBox = ({ options,title }) => {

    return (
        

        <div className="checkBox" style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
         
        }}>
            {options.length && options.map((item) => (
                <label className="containerInput" >
                    <p className="checkBoxLabel">{item.label}</p>
                    <Field
                        type="checkbox"
                        name={item.name}
                        value={item.value}
                        id={item.id}
                    />
                    <span class="checkmark"></span>

                </label>

            ))}

        </div>
    )
}

export default CheckBox