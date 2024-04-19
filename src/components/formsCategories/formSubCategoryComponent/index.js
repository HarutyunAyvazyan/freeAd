import { initalState } from "../../pages/announcementPage"
import Signin from "../../pages/signin"
import Signup from "../../pages/signup"
import FormAppartement from "../formsRealEstate/formAppartement"

// const initalState = [
//     {
//         id: 1,
//         name: "Ansharj guyq",
//         // pathImg: house,
//         subCategories: [
//             {
//                 id: 11,
//                 name: "vacharq",
//                 subCategories: [
//                     {
//                         id: 111,
//                         name: "tner",
//                         component: <FormAppartement />
//                     },
//                     {
//                         id: 112,
//                         name: "bnakaranner",
//                         component: <Signin />
//                     }, {
//                         id: 113,
//                         name: "hoxamaser",
//                         component: <Signup />
//                     },

//                 ]
//             },
//             {
//                 id: 12,
//                 name: "vardzakalutyun",
//                 subCategories: [
//                     {
//                         id: 121,
//                         name: "amaranocner",
//                         component: <FormAppartement />
//                     },
//                     {
//                         id: 122,
//                         name: "tnakner",
//                         component: <Signin />
//                     }, {
//                         id: 123,
//                         name: "tner",
//                         component: <Signup />
//                     },

//                 ]
//             },
//         ]
//     },
//     {
//         id: 2,
//         name: "transport",
//         // pathImg: house,
//         subCategories: [
//             {
//                 id: 21,
//                 name: "avtomeqenaner",
//                 subCategories: [
//                     {
//                         id: 211,
//                         name: "meqenaner",
//                         component: <Signup />
//                     },
//                     {
//                         id: 212,
//                         name: "motoner",
//                         component: <Signin />
//                     }, {
//                         id: 213,
//                         name: "avtoner",
//                         component: <FormAppartement />
//                     },

//                 ]
//             },
//             {
//                 id: 22,
//                 name: "bernatarner",
//                 subCategories: [
//                     {
//                         id: 221,
//                         name: "aaa",
//                         component: <Signup />
//                     },
//                     {
//                         id: 222,
//                         name: "bbb",
//                         component: <Signin />
//                     }, {
//                         id: 223,
//                         name: "ccc",
//                         component: <FormAppartement />
//                     },

//                 ]
//             },
//         ]
//     },

// ]


const FormComponent = ({ id }) => {


    return (
        <div>
            {initalState.map((category) => (
                category.subCategories.map((subCategory) => (
                    // console.log(subCategor, "bb")
                    <div key={subCategory.id}>
                        {subCategory.subCategories.map((sub) => (
                            <div key={sub.id}>
                                {`${sub.id}` === id && <div>
                                    {sub.component}</div>}
                            </div>
                        ))}
                    </div>

                ))
            ))}

        </div>
    )
}

export default FormComponent