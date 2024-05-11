import { FastField, Field } from "formik"

const RadioGroupKargavichak = () => {

}

const Kargavichak = () => {
    return (
        <div className="kargavichak">
            <div>
                <Field
                    type="radio"
                    name="andziKargavichak"
                    id="radioOption1"
                    value="Sepakanter"
                />
                Sepakanater
            </div>

            <div>
                <Field
                    type="radio"
                    name="andziKargavichak"
                    id="radioOption2"
                    value="Gorcakalutyun"
                />
                Gorcakalutyun
            </div>

        </div>

    )
}

export default Kargavichak