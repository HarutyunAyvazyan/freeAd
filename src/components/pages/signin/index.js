import { Link } from "react-router-dom"
import Input from "../../../ui/input"
import Logo from "../../layout/header/headerWeb/headerSearch/logo"
import "./style.css"
import { useState } from "react"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"


const Signin = () => {

    const initalValues = {
        email: "",
        password: "",
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().required("Required"),
    })

    const onSubmit = (values) => {
        console.log("Form data", values)
    }
    return (
        <Formik initialValues={initalValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <div className="signInDiv">
                            <p className="signInLabel">Sign in to Sayti anun</p>
                            <div className="signinInputsDiv">
                                <div className="signinLogo">
                                    <Link to={"/"} >
                                        <Logo />
                                    </Link>
                                </div>
                                <div className="inputsDiv">
                                    <Input
                                        label={"Login"}
                                        placeholder={"email or telephone"}
                                        type={"text"}
                                        name={"email"}
                                        {...formik.getFieldProps("email")}
                                    />
                                    <ErrorMessage name="email" />
                                    <Input
                                        label={"Password"}
                                        placeholder={"*********"}
                                        type={"password"}
                                        name={"password"}
                                        {...formik.getFieldProps("password")}
                                    />
                                    <ErrorMessage name="password" />
                                    <p className="forgotPssword">forgot password</p>
                                    <button className="signInBtnDiv" type="submit">
                                        sign in
                                    </button>
                                </div>
                            </div>
                            <div className="signInFooter">
                                <p className="signInFooterText">New to Sayti anun? <Link to="/signup" className="signInFooterLink">Sign Up</Link> .</p>
                            </div>
                        </div >

                    </Form>
                }
            }

        </Formik>


    )
}

export default Signin


