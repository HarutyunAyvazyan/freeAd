import { useParams } from "react-router-dom"
import { useState } from "react"
import { Formik, Form, ErrorMessage, useFormik, Field, validateYupSchema } from "formik"
import * as Yup from "yup"

import { Dropdown } from 'primereact/dropdown';

import React from 'react';

import "./style.css"
import TextErrors from "../../textErrors"
import CheckBox from "../../../../ui/checkBox"
import RadioGroup from "../../../../ui/radioGroup"
import Input from "../../../../ui/input";
import TextArea from "../../../../ui/textArea";
import InputImages from "../../../../ui/inputImages";
import CustomSelect from "../../../../ui/select";
import { initalState } from "../../../pages/announcementPage";
import useMultiSteperFormAnnouncement from "../../multiSteperFormAnnouncement";
import FormComponent from "../../formSubCategoryComponent";






const FormAppartement = () => {
    const {   next,back,isFirstStep,isLastStep} = useMultiSteperFormAnnouncement([<FormComponent/>, <div>2</div>])

    const [selectedOption, setSelectedOption] = useState(null);


    const handleSelectChange = (option) => {
        setSelectedOption(option);
    };
    const arrayRadioGroup = [
        {
            name: "picked",
            value: "Sepakanater",
            label: "Sepakanater",
            id: "domofon",
            description: "Եթե դուք վաճառում եք ձեր սեփական անշարժ գույքը` սեփականատեր"

        }, {
            name: "picked",
            value: "Gorcakalutyun",
            label: "Gorcakalutyun",
            id: "sarnaran",
            description: "Եթե դուք միջնորդ եք, բրոքեր կամ անշարժ գույքի գործակալության ներկայացուցիչ"

        }
    ]

    const shqamutq = [
        {
            name: "shqamutq",
            value: "Domofon",
            label: "Domofon",
            id: "Domofon"

        }, {
            name: "shqamutq",
            value: "Drnapah",
            label: "Drnapah",
            id: "Drnapah"

        }, {
            name: "shqamutq",
            value: "Xaxahraparak",
            label: "Xaxahraparak",
            id: "Xaxahraparak"

        }
    ]

    const kayanatexi = [
        {
            name: "kayanatexi",
            value: "Bacotya kayanatexi",
            label: "Bacotya kayanatexi",
            id: "Bacotya kayanatexi"

        }, {
            name: "kayanatexi",
            value: "Cackapat kayanatexi",
            label: "Cackapat kayanatexi",
            id: "Cackapat kayanatexi"

        }, {
            name: "kayanatexi",
            value: "Avtotnak",
            label: "Avtotnak",
            id: "Avtotnak"

        }
    ]




    const { id } = useParams()
    console.log(id, "iddddddddddddddddd")

    const floors = Array.from({ length: 32 }).map((_, i) => ({ label: `${i + 1}`, value: i + 1 }));
    const typeBuilding = ["qare", "panelayin", "axyuse", "phayte", "monolit", "dfadfs"]
    const newBuilding = ["ayo", "voch", "asmdas", "lkajsdkdj",]
    const verelak = ["arka e", "arka che"]
    const snahanguycneriQanak = ["1", "2", "3", "3+"]
    const senyakneriQanak = ["1", "2", "3", "3", "4", "5", "6", "7"]
    const arastaxiBardzrutyun = ["2.5", "2.6", "2.7", "2.75", "3", "3.5"]
    const patshgamb = ["arka e", "arka che", "bac patshgamb", "pak patshgamb", "mi qani patshgamb"]
    const kahuyq = ["arka e", "arka che", "masnaki", "hamadzaynutyamb"]
    const veranorogum = ["chveranaorogvac", "hin veranaorogum", "veranorogvac"]
    const kencaxayinTexnika = [{
        name: "kencaxayinTexnika",
        value: "odorakichh",
        label: "odorakichh",
        id: "odorakichh"

    }, {
        name: "kencaxayinTexnika",
        value: "sarnaran",
        label: "sarnaran",
        id: "sarnaran"

    }, {
        name: "kencaxayinTexnika",
        value: "salojax",
        label: "salojax",
        id: "salojax"

    }, {
        name: "kencaxayinTexnika",
        value: "lvacqi meqena",
        label: "lvacqi meqena",
        id: "lvacqi meqena"

    }, {
        name: "kencaxayinTexnika",
        value: "choracnox meqena",
        label: "choracnox meqena",
        id: "choracnox meqena"

    }, {
        name: "kencaxayinTexnika",
        value: "aman lvacox meqena",
        label: "aman lvacox meqena",
        id: "aman lvacox meqena"

    }]
    const tesaranPatuhanic = [{
        name: "tesaranPatuhanic",
        value: "tesarn depi bak",
        label: "tesarn depi bak",
        id: "tesarn depi bak"

    }, {
        name: "tesaranPatuhanic",
        value: "tesarn depi poxoc",
        label: "tesarn depi poxoc",
        id: "tesarn depi poxoc"

    }, {
        name: "tesaranPatuhanic",
        value: "tesarn depi qaxaq",
        label: "tesarn depi qaxaq",
        id: "tesarn depi qaxaq"

    }, {
        name: "tesaranPatuhanic",
        value: "tesarn depi   aygi",
        label: "tesarn depi   aygi",
        id: "tesarn depi  aygi"

    }, {
        name: "tesaranPatuhanic",
        value: "tesarn depi ekexeci",
        label: "tesarn depi ekexeci",
        id: "tesarn depi ekexeci"

    }]

    let matchedCategories = [];
    initalState.forEach((category => category.subCategories.forEach(
        item => item.subCategories.forEach(sub => {
            if (sub.id == id) {
                matchedCategories.push(category.name)
                matchedCategories.push(item.name)
                matchedCategories.push(sub.name)
            }
        })
    )))

    console.log(matchedCategories, 'fuckcckk')
    const [selectedCity, setSelectedCity] = useState(null);


    const initalValues = {
        categoryName: matchedCategories,
        countFloor: "",
        buildingType: "",
        newBuilding: "",
        verelak: "",
        shqamutq: [],
        picked: "",
        floor: "",
        makeres: "",

        snahanguycneriQanak: "",
        senyakneriQanak: "",
        arastaxiBardzrutyun: "",
        patshgamb: "",
        kahuyq: "",
        veranorogum: "",
        kencaxayinTexnika: [],
        tesaranPatuhanic: [],
        nkaragir: "",
        nkar: []
    }

    const validationSchema = Yup.object({
        countFloor: Yup.number().required("Required !"),
        buildingType: Yup.string().required("Required !"),
        newBuilding: Yup.string().required("Required !"),
        verelak: Yup.string().required("Required !"),
        picked: Yup.string().required("Required !"),
        floor: Yup.number().required("Required !"),
        makeres: Yup.number().required("Required !"),
        snahanguycneriQanak: Yup.string().required("Required !"),
        senyakneriQanak: Yup.string().required("Required !"),
        arastaxiBardzrutyun: Yup.string().required("Required !"),
        patshgamb: Yup.string().required("Required !"),
        kahuyq: Yup.string().required("Required !"),
        veranorogum: Yup.string().required("Required !"),
        nkaragir: Yup.string().min(30).required("Required !"),
        nkar: Yup.array()
            .min(1, 'At least one image is required')
            .required('Images are required'),



    })


    const onSubmit = (values) => setTimeout(() => {
        next()
        console.log(values)
        // alert(JSON.stringify(values, null, 2));
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
                                aaa

                                {/* {categories.map((category) => (

                                    category.subCategories.map((subCategory) => (
                                        subCategory.subCategories.map((sub) => (`${sub.id}` === subCategoryName &&
                                            <div>
                                                {console.log(sub.id, "pppppppppp", subCategoryName)}
                                                {sub.formComponent}
                                            </div>
                                        ))
                                    ))
                                ))} */}

                                <div className="formContent">
                                    <div className="formGroup">
                                        <h2 className="formGroupTitle">Kargavichak</h2>
                                        <div className="formItem">
                                            <div className="formItemUi">
                                                <RadioGroup
                                                    arrayProps={arrayRadioGroup}
                                                    {...formik.getFieldProps("picked")}
                                                />
                                                <ErrorMessage component={TextErrors} name="picked" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="formGroup">
                                        <h2 className="formGroupTitle">Shenqi masin</h2>
                                        <div className="formItem">
                                            <div className="formItemTitle">harkeri qanak</div>
                                            <div className="formItemUi">
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
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">shinutyan tip</div>
                                            <div className="formItemUi">
                                                <Dropdown
                                                    className={formik.touched.buildingType && formik.errors.buildingType && "p-dropdown-error"}
                                                    checkmark={true}
                                                    style={{
                                                        width: 200,
                                                        height: 40
                                                    }}
                                                    name="buildingType"
                                                    options={typeBuilding}
                                                    virtualScrollerOptions={{ itemSize: 38, autoSize: true }}
                                                    placeholder="Building Type"
                                                    {...formik.getFieldProps("buildingType")}
                                                />
                                                <ErrorMessage component={TextErrors} name="buildingType" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">norakaruyc</div>
                                            <div className="formItemUi">
                                                <Dropdown
                                                    className={formik.touched.newBuilding && formik.errors.newBuilding && "p-dropdown-error"}
                                                    checkmark={true}
                                                    style={{
                                                        width: 120,
                                                        height: 40
                                                    }}
                                                    name="newBuilding"
                                                    options={newBuilding}
                                                    virtualScrollerOptions={{ itemSize: 38, autoSize: true }}
                                                    placeholder="newBuilding"
                                                    {...formik.getFieldProps("newBuilding")}
                                                />
                                                <ErrorMessage component={TextErrors} name="newBuilding" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">verelak</div>
                                            <div className="formItemUi">
                                                <Dropdown
                                                    className={formik.touched.verelak && formik.errors.verelak ? "p-dropdown-error" : "pdropdown"}
                                                    checkmark={true}
                                                    style={{
                                                        width: 200,
                                                        height: 40
                                                    }}
                                                    name="verelak"
                                                    options={verelak}
                                                    virtualScrollerOptions={{ itemSize: 38, autoSize: true }}
                                                    placeholder="Select Item"
                                                    {...formik.getFieldProps("verelak")}
                                                />
                                                <ErrorMessage component={TextErrors} name="verelak" />
                                            </div>
                                        </div>
                                        {/* <div className="formItem">
                                            <div className="formItemTitle">arka en</div>
                                            <div className="formItemUi">
                                                <CheckBox
                                                    options={shqamutq}
                                                    {...formik.getFieldProps("shqamutq")}
                                                />
                                                <ErrorMessage component={TextErrors} name="shqamutq" />
                                            </div>
                                        </div> */}
                                        <div className="formItem">
                                            <div className="formItemTitle">kayanatexi</div>
                                            <div className="formItemUi">
                                                <CheckBox
                                                    options={kayanatexi}
                                                    {...formik.getFieldProps("kayanatexi")}
                                                />
                                                <ErrorMessage component={TextErrors} name="kayanatexi" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="formGroup">
                                        <h2 className="formGroupTitle">Bnakarani masin</h2>
                                        <div className="formItem">
                                            <div className="formItemTitle">hark@</div>
                                            <div className="formItemUi">
                                                <Dropdown
                                                    className={formik.touched.floor && formik.errors.floor && "p-dropdown-error"}
                                                    highlightOnSelect={true}
                                                    checkmark={true}
                                                    style={{
                                                        width: 100,
                                                        height: 40
                                                    }}
                                                    name="floor"
                                                    options={floors}
                                                    virtualScrollerOptions={{ itemSize: 38, autoSize: true }}
                                                    placeholder="Select Item"
                                                    {...formik.getFieldProps("floor")}
                                                />
                                                <ErrorMessage component={TextErrors} name="floor" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">@ndhanur makeres</div>
                                            <div className="formItemUi">
                                                <Input
                                                    className={formik.touched.makeres && formik.errors.makeres ? "errors" : "input"}
                                                    style={{
                                                        width: "100px",
                                                        height: "40px",
                                                        // border: "1px solid  rgb(203, 225, 247)",
                                                        backgroundColor: "rgb(246, 249, 254)",
                                                        borderRadius: "5px"
                                                    }}

                                                    placeholder={"mm"}
                                                    type={"text"}
                                                    name={"makeres"}
                                                    {...formik.getFieldProps("makeres")}
                                                />
                                                <ErrorMessage component={TextErrors} name="makeres" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">snahanguycneri qanak@</div>
                                            <div className="formItemUi">
                                                <Dropdown
                                                    className={formik.touched.snahanguycneriQanak && formik.errors.snahanguycneriQanak && "p-dropdown-error"}
                                                    highlightOnSelect={true}
                                                    checkmark={true}
                                                    style={{
                                                        width: 100,
                                                        height: 40
                                                    }}
                                                    name="snahanguycneriQanak"
                                                    options={snahanguycneriQanak}
                                                    virtualScrollerOptions={{ itemSize: 38, autoSize: true }}
                                                    placeholder="Select Item"
                                                    {...formik.getFieldProps("snahanguycneriQanak")}
                                                />
                                                <ErrorMessage component={TextErrors} name="snahanguycneriQanak" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">senyakneri qanak</div>
                                            <div className="formItemUi">
                                                <Dropdown
                                                    className={formik.touched.senyakneriQanak && formik.errors.senyakneriQanak && "p-dropdown-error"}
                                                    highlightOnSelect={true}
                                                    checkmark={true}
                                                    style={{
                                                        width: 100,
                                                        height: 40
                                                    }}
                                                    name="senyakneriQanak"
                                                    options={senyakneriQanak}
                                                    virtualScrollerOptions={{ itemSize: 38, autoSize: true }}
                                                    placeholder="Select Item"
                                                    {...formik.getFieldProps("senyakneriQanak")}
                                                />
                                                <ErrorMessage component={TextErrors} name="senyakneriQanak" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">kahuyq</div>
                                            <div className="formItemUi">
                                                <Dropdown
                                                    className={formik.touched.kahuyq && formik.errors.kahuyq && "p-dropdown-error"}
                                                    highlightOnSelect={true}
                                                    checkmark={true}
                                                    style={{
                                                        width: 200,
                                                        height: 40
                                                    }}
                                                    name="kahuyq"
                                                    options={kahuyq}
                                                    virtualScrollerOptions={{ itemSize: 38, autoSize: true }}
                                                    placeholder="Select Item"
                                                    {...formik.getFieldProps("kahuyq")}
                                                />
                                                <ErrorMessage component={TextErrors} name="kahuyq" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">veranorogum</div>
                                            <div className="formItemUi">
                                                <Dropdown
                                                    className={formik.touched.veranorogum && formik.errors.veranorogum && "p-dropdown-error"}
                                                    highlightOnSelect={true}
                                                    checkmark={true}
                                                    style={{
                                                        width: 200,
                                                        height: 40
                                                    }}
                                                    name="veranorogum"
                                                    options={veranorogum}
                                                    virtualScrollerOptions={{ itemSize: 38, autoSize: true }}
                                                    placeholder="Select Item"
                                                    {...formik.getFieldProps("veranorogum")}
                                                />
                                                <ErrorMessage component={TextErrors} name="veranorogum" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">arastaxi bardzrutyun</div>
                                            <div className="formItemUi">
                                                <Dropdown
                                                    className={formik.touched.arastaxiBardzrutyun && formik.errors.arastaxiBardzrutyun && "p-dropdown-error"}
                                                    highlightOnSelect={true}
                                                    checkmark={true}
                                                    style={{
                                                        width: 120,
                                                        height: 40
                                                    }}
                                                    name="arastaxiBardzrutyun"
                                                    options={arastaxiBardzrutyun}
                                                    virtualScrollerOptions={{ itemSize: 38, autoSize: true }}
                                                    placeholder="Select Item"
                                                    {...formik.getFieldProps("arastaxiBardzrutyun")}
                                                />
                                                <ErrorMessage component={TextErrors} name="arastaxiBardzrutyun" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">patshgamb</div>
                                            <div className="formItemUi">
                                                <Dropdown
                                                    className={formik.touched.patshgamb && formik.errors.patshgamb && "p-dropdown-error"}
                                                    highlightOnSelect={true}
                                                    checkmark={true}
                                                    style={{
                                                        width: 200,
                                                        height: 40
                                                    }}
                                                    name="patshgamb"
                                                    options={patshgamb}
                                                    virtualScrollerOptions={{ itemSize: 38, autoSize: true }}
                                                    placeholder="Select Item"
                                                    {...formik.getFieldProps("patshgamb")}
                                                />
                                                <ErrorMessage component={TextErrors} name="patshgamb" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">kencaxayin texnika</div>
                                            <div className="formItemUi">
                                                <CheckBox
                                                    options={kencaxayinTexnika}
                                                    {...formik.getFieldProps("kencaxayinTexnika")}
                                                />
                                                <ErrorMessage component={TextErrors} name="kencaxayinTexnika" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">tesaran patuhanic</div>
                                            <div className="formItemUi">
                                                <CheckBox
                                                    options={tesaranPatuhanic}
                                                    {...formik.getFieldProps("tesaranPatuhanic")}
                                                />
                                                <ErrorMessage component={TextErrors} name="tesaranPatuhanic" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">nkaragir</div>
                                            <div className="formItemUi">
                                                <TextArea
                                                    className={formik.touched.nkaragir && formik.errors.nkaragir ? "textAreaErrors" : "textAreaInput"}
                                                    type={"text"}
                                                    name={"nkaragir"}
                                                    placeholder="ajjdh lsdkjhdj"
                                                    {...formik.getFieldProps("nkaragir")}
                                                />
                                                <ErrorMessage component={TextErrors} name="nkaragir" />
                                            </div>
                                        </div>
                                        <div className="formItem">
                                            <div className="formItemTitle">nkaragir</div>
                                            <div className="formItemUi">
                                                <InputImages
                                                    name="nkar"
                                                    description={"Դուք կարող եք ավելացնել ձեր գրասենյակի, աշխատավայրի, տարբերանշանի, աշխատանքային սարքավորումների լուսանկարները, ընկերության կամ թափուր աշխատատեղի հետ կապված այլ լուսանկարներ: Խնդրում ենք չհրապարակել համացանցից ներբեռնված լուսանկարներ:"}
                                                // {...formik.getFieldProps("nkar")}
                                                />
                                                <ErrorMessage component={TextErrors} name="nkar" />

                                            </div>
                                            <div>
                                                {!isFirstStep && <button onClick={back}> back </button>
                                                }
                                                <button onClick={next}  type="submit">{isLastStep ? "finish" : "next"}  </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div >

                    </Form>
                }
            }

        </Formik>


    )
}




export default FormAppartement

