import { Link } from "react-router-dom"
import "./style.css"
import Input from "../../../ui/input"
import Logo from "../../layout/header/headerWeb/headerSearch/logo"
import { useState } from "react"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"




const Signup = () => {


    const initalValues = {
        userName: "",
        email: "",
        telephone: "",
        password: "",
        confirmPassword: "",
    }

    const validationSchema = Yup.object({
        userName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        telephone: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), ""], "Passwords must match").required("Required")

    })

    const onSubmit = (values) => {
        console.log("Form data", values)
    }
    return (

        <Formik
            initialValues={initalValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return <Form>
                        <div className="signupDiv">
                            <p className="signupLabel">Sign up to Sayti anun</p>
                            <div className="signupInputsDiv">
                                <div className="signupLogo">
                                    <Link to={"/"} >
                                        <Logo />
                                    </Link>
                                </div>
                                <div className="inputsDiv">
                                    <Input
                                        label={"Username"}
                                        placeholder={"Username"}
                                        type={"text"}
                                        name={"Username"}
                                        {...formik.getFieldProps("userName")}
                                    />
                                    <ErrorMessage name="userName" />
                                    <Input
                                        label={"Telephone"}
                                        placeholder={"Telephone"}
                                        type={"text"}
                                        name={"telephone"}
                                        {...formik.getFieldProps("telephone")}
                                    />
                                    <ErrorMessage name="telephone" />
                                    <Input
                                        label={"Email "}
                                        placeholder={"Email"}
                                        type={"text"}
                                        name={"email"}
                                        {...formik.getFieldProps("email")}
                                    />
                                    <ErrorMessage name="email" />
                                    <Input
                                        label={"Password"}
                                        placeholder={"*********"}
                                        type={"password"}
                                        name={"Password"}
                                        {...formik.getFieldProps("password")}
                                    />
                                    <ErrorMessage name="password" />
                                    <Input
                                        label={"Confirm Password"}
                                        placeholder={"*********"}
                                        type={"password"}
                                        name={"password"}
                                        {...formik.getFieldProps("confirmPassword")}
                                    />
                                    <ErrorMessage name="confirmPassword" />


                                    <button className="signInBtnDiv" type="submit">
                                        sign in
                                    </button>
                                </div>
                            </div>
                            <div className="signInFooter">
                                <p className="signInFooterText">New to Sayti anun? <Link to="/signin" className="signInFooterLink">Sign in</Link> .</p>
                            </div>
                        </div >
                    </Form>
                }
            }


        </Formik>
    )
}



export default Signup
