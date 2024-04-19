import { Link, useNavigate } from "react-router-dom"
import Input from "../../../ui/input"
import Logo from "../../layout/header/headerWeb/headerSearch/logo"
import "./style.css"
import { useState } from "react"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import TextErrors from "../../formsCategories/textErrors"
import users from "../../../constants/uesers"
import useMultiSteperFormAnnouncement from "../../formsCategories/multiSteperFormAnnouncement"
import FormComponent from "../../formsCategories/formSubCategoryComponent"
import pageName from "../../../constants/pageName"


const Signin = () => {
    const { next, back, isFirstStep, isLastStep } = useMultiSteperFormAnnouncement([])

    const navigate = useNavigate()

    const compareUsers = (user1, user2) => {
        return user1.email === user2.email && user1.password === user2.password;
    }

    // Поиск пользователя в массиве users


    const initalValues = {
        email: "",
        password: "",
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().required("Required"),
    })

    const onSubmit = (values) => {
        const foundUser = users.find(currentUser => compareUsers(currentUser, values));
        if (foundUser) {
            localStorage.setItem("user", JSON.stringify(values))
            navigate("/")
        } else {
            setTimeout(() => {
                next()
                // alert(JSON.stringify("tenc user chka", null, 2));

            }, 400)
        };
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
                                        className={formik.touched.email && formik.errors.email ? "errors " : "input"}
                                        label={"Login"}
                                        placeholder={"email or telephone"}
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
                                    <p className="forgotPssword">forgot password</p>
                                    <button className="signInBtnDiv" type="submit">
                                        sign in
                                    </button>
                                    {/* <div>
                                        {!isFirstStep && <button onClick={back}> back </button>
                                        }
                                        <button  type="submit">{isLastStep ? "finish" : "next"}  </button>
                                    </div> */}
                                </div>
                            </div>
                            <div className="signInFooter">
                                <p className="signInFooterText">New to Sayti anun? <Link to={pageName.signUp} className="signInFooterLink">Sign Up</Link> .</p>
                            </div>
                        </div >

                    </Form>
                }
            }

        </Formik>


    )
}

export default Signin


