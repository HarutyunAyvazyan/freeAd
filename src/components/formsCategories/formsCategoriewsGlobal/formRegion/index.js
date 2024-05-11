// import { useState } from "react"
// import { IoIosArrowDown } from "react-icons/io";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import regions from "../../../../constants/regions"
// import Input from "../../../../ui/input";
// import "./style.css"
// import { Collapse } from 'react-bootstrap';
// import { Dropdown } from 'primereact/dropdown';

// const FormRegion = ({ ...props }) => {
//     const floors = Array.from({ length: 32 }).map((_, i) => ({ label: `${i + 1}`, value: i + 1 }));

//     const [selectedItem, setSelectedItem] = useState(null);
//     const [openTab, setOpenTab] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);
//     const [valueInput, setValueInput] = useState("")
//     const [enter, setEnter] = useState(false)
//     const handleMouseEnter = () => {
//         setEnter(true)
//     }
//     const handleMouseLeave = () => {
//         setEnter(false)
//     }

//     const handleInputFocus = () => {
//         setIsOpen(true);
//     };

//     const handleAddCity = (city) => {
//         setIsOpen(false);
//         setValueInput(city)
//     }

//     const handleInputBlur = () => {
//         enter ? setIsOpen(true) : setIsOpen(false)
//         // setIsOpen(!isOpen);
//     };
//     const handleTabToggleCities = (id) => {
//         setOpenTab(openTab === id ? null : id);
//     };

//     return (



//             <div className="container">
//                 <div style={{ width: "300px" }}
//                     className="aa" >
//                     <input
//                         label={"taracashrjan"}
//                         className="aa"
//                         type="text"
//                         placeholder={"taracashrjan"}
//                         onFocus={handleInputFocus}
//                         onBlur={handleInputBlur}
//                         value={valueInput}
//                     />
//                     {
//                         isOpen &&
//                         <div className="formRegion"
//                             onMouseEnter={handleMouseEnter}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             {regions.map((region) => (
//                                 <div key={region.id} >
//                                     <button
//                                         onClick={() => handleTabToggleCities(region.id)}
//                                         id={region.name}
//                                         className="formRegionButton"
//                                     >
//                                         {region.name}
//                                         <IoIosArrowDown />
//                                     </button>
//                                     {openTab === region.id && (
//                                         <div className="formRegionCities" >
//                                             {region.cities.map((city) => (
//                                                 <div key={city}
//                                                     value={city}
//                                                     onClick={() => handleAddCity(city)}
//                                                     className="formRegionCity">
//                                                     <div style={{ paddingLeft: "50px" }}>
//                                                         {city}
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     }
//                 </div>
//             </div>

//         // <div className="countFloor">
//         //     <div>harkeri qanak</div>
//         //     <Dropdown
//         //         highlightOnSelect={true}
//         //         className="w-full md:w-14rem"
//         //         checkmark={true}

//         //         style={{
//         //             width: 100,
//         //             height: 40
//         //         }}
//         //         name="countFloor"
//         //         options={floors}
//         //         virtualScrollerOptions={{ itemSize: 38, scrollHeight: 300 }}
//         //         placeholder="Select Item"
//         //         // {...formik.getFieldProps("countFloor")}
//         //         {...props}
//         //     />

//         // </div>




//     )

// }

// export default FormRegion



// // const [openTab, setOpenTab] = useState(null);
// // const [isOpen, setIsOpen] = useState(false);
// // const [valueInput, setValueInput] = useState("")
// // const [enter, setEnter] = useState(false)
// // const handleMouseEnter = () => {
// //     setEnter(true)
// // }
// // const handleMouseLeave = () => {
// //     setEnter(false)
// // }

// // const handleInputFocus = () => {
// //     setIsOpen(true);
// // };

// // const handleAddCity = (city) => {
// //     setIsOpen(false);
// //     setValueInput(city)
// // }

// // const handleInputBlur = () => {
// //     enter ? setIsOpen(true) : setIsOpen(false)
// //     // setIsOpen(!isOpen);
// // };
// // const handleTabToggleCities = (id) => {
// //     setOpenTab(openTab === id ? null : id);
// // };
// // console.log(enter, "enter")
// // return (
// //     <div className="container">
// //         <div style={{ width: "300px" }}
// //             className="aa" >
// //             <input
// //                 label={"taracashrjan"}
// //                 className="aa"
// //                 type="text"
// //                 placeholder={"taracashrjan"}
// //                 onFocus={handleInputFocus}
// //                 onBlur={handleInputBlur}
// //                 value={valueInput}
// //             />
// //             {
// //                 isOpen &&
// //                 <div className="formRegion"
// //                     onMouseEnter={handleMouseEnter}
// //                     onMouseLeave={handleMouseLeave}
// //                 >
// //                     {regions.map((region) => (
// //                         <div key={region.id} >
// //                             <button
// //                                 onClick={() => handleTabToggleCities(region.id)}
// //                                 id={region.name}
// //                                 className="formRegionButton"
// //                             >
// //                                 {region.name}
// //                                 <IoIosArrowDown />
// //                             </button>
// //                             {openTab === region.id && (
// //                                 <div className="formRegionCities" >
// //                                     {region.cities.map((city) => (
// //                                         <div key={city}
// //                                             value={city}
// //                                             onClick={() => handleAddCity(city)}
// //                                             className="formRegionCity">
// //                                             <div style={{ paddingLeft: "50px" }}>
// //                                                 {city}
// //                                             </div>
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             )}
// //                         </div>
// //                     ))}
// //                 </div>
// //             }
// //         </div>
// //     </div>
// // )

import CheckBox from "../../../../ui/checkBox";
// import FormRegion from "../../formsCategoriewsGlobal/formRegion"
import { Dropdown } from 'primereact/dropdown';
import { Formik, Form, ErrorMessage, useFormik, Field, validateYupSchema } from "formik"
import TextErrors from "../../textErrors";
import * as Yup from "yup"



const FormHouse = () => {
    const arrayCheckBox = [
        {
            name: "checked",
            value: "domofon",
            label: "domofon",
            id: "domofon"

        }, {
            name: "checked",
            value: "sarnaran",
            label: "sarnaran",
            id: "sarnaran"

        }, {
            name: "checked",
            value: "odorakich",
            label: "odorakich",
            id: "odorakich"

        }
    ]
    const typeBuilding = ["qare", "panelayin", "axyuse", "phayte", "monolit", "dfadfs"]

    const initalValues = {
        buildingType: "",

    }

    const validationSchema = Yup.object({
        Type: Yup.string().required("Required !"),
    })

    const onSubmit = (values) => setTimeout(() => {
        console.log(values)
        alert(JSON.stringify(values, null, 2));
    }, 400);

    return (
        <Formik initialValues={initalValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <div className="container" >
                            <div className="formAppartement" style={{ marginTop: "120px", }}>
                                <Dropdown
                                    // className={formik.touched.buildingType && formik.errors.buildingType && "p-dropdown-error"}
                                    checkmark={true}
                                    style={{
                                        width: 200,
                                        height: 40
                                    }}
                                    name="Type"
                                    options={typeBuilding}
                                    virtualScrollerOptions={{ itemSize: 38, scrollHeight: 210 }}
                                    placeholder=" Type"
                                    {...formik.getFieldProps("Type")} />
                                <ErrorMessage component={TextErrors} name="Type" />


                                sssssssssssssssss                         
                                   </div>

                                    <button type="submit">submit</button>
                        </div >

                    </Form>
                }
            }

        </Formik>
    )
}

export default FormHouse