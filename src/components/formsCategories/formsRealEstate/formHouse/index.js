// import CheckBox from "../../../../ui/checkBox";
// // import FormRegion from "../../formsCategoriewsGlobal/formRegion"
// import { Dropdown } from 'primereact/dropdown';
// import { Formik, Form, ErrorMessage, useFormik, Field, validateYupSchema } from "formik"
// import TextErrors from "../../textErrors";
// import * as Yup from "yup"
// // import CustomSelect from "../../../../ui/select";



// const FormHouse = () => {
//     const arrayCheckBox = [
//         {
//             name: "buildingType",
//             value: "domofon",
//             label: "domofon",
//             id: "domofon"

//         }, {
//             name: "buildingType",
//             value: "sarnaran",
//             label: "sarnaran",
//             id: "sarnaran"

//         }, {
//             name: "buildingType",
//             value: "odorakich",
//             label: "odorakich",
//             id: "odorakich"

//         }
//     ]

//     const initalValues = {
//         buildingType: "",

//     }

//     const validationSchema = Yup.object({
//         buildingType: Yup.string().required("Required !"),
//     })

//     const onSubmit = (values) => setTimeout(() => {
//         console.log(values)
//         alert(JSON.stringify(values, null, 2));
//     }, 400);

//     return (
//         <Formik initialValues={initalValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}>
//             {
//                 formik => {
//                     return <Form>
//                         <div className="container" >
//                             <div className="formAppartement" style={{ marginTop: "120px", }}>


//                                 <CustomSelect
//                                     name="buildingType"
//                                     options={arrayCheckBox}

//                                     {...formik.getFieldProps("buildingType")} />
//                                 <ErrorMessage component={TextErrors} name="buildingType" /> 
//                                 aaaaaaaaaaaaaaaaa
//                             </div>

//                             <button type="submit">submit</button>

//                         </div >

//                     </Form>
//                 }
//             }

//         </Formik>
//     )
// }

// export default FormHouse

import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextErrors from "../../textErrors";
import CustomSelect from "../../../../ui/select";
import WatchTheAd from "../../watchTheAd";
import { Dropdown } from 'primereact/dropdown';
import { Link, useParams } from "react-router-dom";
import useMultiSteperFormAnnouncement from "../../multiSteperFormAnnouncement";
import FormComponent from "../../formSubCategoryComponent";

const FormHouse = () => {
    const { categoryId } = useParams()
    // console.log(id)
    const { step, currentStepIndex, arrayComponents,  next,back,isFirstStep,isLastStep} = useMultiSteperFormAnnouncement([<FormComponent id={categoryId} />, <div>two</div>])



    // console.log(isFirstStep, "aa")
    const [formAddData, setFormAddData] = useState({})
    const [displayNone, setDisplayNone] = useState(false)
    // const [displayWatch, setDisplayWatch] = useState(false)



    const [selected, setSelected] = useState(false); // Состояние для отслеживания выбора элемента
    console.log(formAddData, "formAddData")
    console.log(displayNone, "dispalaynone")
    return (

        <div className="container">
            <div
                className="formAppartement"
                style={{ marginTop: "120px" }}
            >
                {`${currentStepIndex + 1}/${arrayComponents.length}`}
                {step}
                <div>
                    {!isFirstStep && <button onClick={back}> back </button>
                    }
                    <button onClick={next}
                    >{isLastStep ? "finish" : "next"}  </button>
                </div>

            </div>

         </div>

    );
};

export default FormHouse;




{/* <div style={displayNone ? { display: "none" } : { display: "block" }}>
<CustomSelect
    name="buildingType"
    options={arrayCheckBox}
    onChange={(value) => {
        formik.setFieldValue('buildingType', value);
    }}

/>


<ErrorMessage component={TextErrors} name="buildingType" />
<button onClick={() => {
    setFormAddData(formik.values)
    console.log(formik.errors, formik.touched, "errors")
    if (!formik.touched.buildingType && !formik.values.buildingType) {
        // Если пользователь не касался поля и оно пустое, показываем сообщение об ошибке
        setDisplayNone(false);
    } else {
        // Если было касание поля, скрываем форму только если есть ошибка
        setDisplayNone(isEmpty(formik.errors));
        // setDisplayNone(true)
    }

}} type="submit">Submit</button>

<Dropdown
    className={formik.touched.countFloor && formik.errors.countFloor && "p-dropdown-error"}
    highlightOnSelect={true}
    checkmark={true}
    style={{
        width: 100,
        height: 40
    }}
    name="countFloor"
    options={floors}
    virtualScrollerOptions={{ itemSize: 38, autoSize: true }}
    placeholder="Select Item"
    {...formik.getFieldProps("countFloor")}
/>
<ErrorMessage component={TextErrors} name="countFloor" />

</div>
<WatchTheAd
data={JSON.stringify(formAddData)}
style={displayNone ? { display: "block" } : { display: "none" }}
onClickPopoxel={() => {
    setDisplayNone(!displayNone)
}} 

/> */}
