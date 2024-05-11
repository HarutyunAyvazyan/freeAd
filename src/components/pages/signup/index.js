import { Link } from "react-router-dom"
import "./style.css"
import Input from "../../../ui/input"
import Logo from "../../layout/header/headerWeb/headerSearch/logo"
import { useState } from "react"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import TextErrors from "../../formsCategories/textErrors"
import pageName from "../../../constants/pageName"




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
        // console.log("Form data", values)
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
                                        className={formik.touched.userName && formik.errors.userName ? "errors " : "input"}
                                        label={"Username"}
                                        placeholder={"Username"}
                                        type={"text"}
                                        name={"userName"}
                                        {...formik.getFieldProps("userName")}
                                    />
                                    <ErrorMessage component={TextErrors} name="userName" />
                                    <Input
                                        className={formik.touched.telephone && formik.errors.telephone ? "errors " : "input"}
                                        label={"Telephone"}
                                        placeholder={"Telephone"}
                                        type={"text"}
                                        name={"telephone"}
                                        {...formik.getFieldProps("telephone")}
                                    />
                                    <ErrorMessage component={TextErrors} name="telephone" />
                                    <Input
                                        className={formik.touched.email && formik.errors.email ? "errors " : "input"}
                                        label={"Email "}
                                        placeholder={"Email"}
                                        type={"text"}
                                        name={"email"}
                                        {...formik.getFieldProps("email")}
                                    />
                                    <ErrorMessage component={TextErrors} name="email" />
                                    <Input
                                        className={formik.touched.password && formik.errors.password ? "errors " : "input"}
                                        label={"Password"}
                                        placeholder={"*********"}
                                        type={"password"}
                                        name={"password"}
                                        {...formik.getFieldProps("password")}
                                    />
                                    <ErrorMessage component={TextErrors} name="password" />
                                    <Input
                                        className={formik.touched.confirmPassword && formik.errors.confirmPassword ? "errors " : "input"}
                                        label={"Confirm Password"}
                                        placeholder={"*********"}
                                        type={"password"}
                                        name={"confirmPassword"}
                                        {...formik.getFieldProps("confirmPassword")}
                                    />
                                    <ErrorMessage component={TextErrors} name="confirmPassword" />


                                    <button className="signInBtnDiv" type="submit">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                            <div className="signInFooter">
                                <p className="signInFooterText">New to Sayti anun? <Link to={pageName.signIn} className="signInFooterLink">Sign in</Link> .</p>
                            </div>
                        </div >
                    </Form>
                }
            }


        </Formik>
    )
}



export default Signup
