import { useState } from "react"
import {  useFormikContext } from "formik";

import { TiDelete } from "react-icons/ti";
// import { TiDeleteOutline } from "react-icons/ti";

import { FcAddImage } from "react-icons/fc";
// import { FiDelete } from "react-icons/fi";



import "./style.css"

const InputImages = ({ name, description }) => {
    const [images, setImages] = useState([])
    // const [{ value }, , { setValue }] = useField(name);
    const { setFieldValue } = useFormikContext(); 


    const [url, setUrl] = useState([])
    const handleChange = (e) => {
        const files = e.target.files
        const filesArray = Array.from(files)
        const imagesArray = filesArray.map((file) => {
            return {
                name: file.name,
                url: URL.createObjectURL(file)
            };
        });
        setImages((prevImages) => [...prevImages, ...imagesArray]);
        setFieldValue(name, [...images, ...imagesArray]);
        // setImages(imagesArray)
        // setValue(imagesArray);
        // setImages((previousImages) => previousImages.concat(images))
        console.log(files, "files")
        console.log(filesArray, "filesArray")
        console.log(imagesArray, "imagesArray")
    }

    console.log(images, "images")
    return (
        <div className={images.length > 0 ?"inputImages" :"inputImagesEmpty"} >
            <div className="inputImagesAddButtonDiv">
                <label>
                    <FcAddImage className="inputImagesAddButton" />
                    <input
                        // {...props}
                        name={name}
                        className="inputImagesImages"
                        type="file"
                        onChange={handleChange}
                        multiple
                        accept="image/*" />
                </label>
                {description && <p className="inputImagesDescription">{description}</p>}
            </div>


            <div className="uploadImagesDiv">
                {images.length > 0 && images.map((image) => (
                    <div className="uploadImageDiv">
                        <img src={image.url} className="uploadImage" name={name} />
                        <TiDelete
                            onClick={() => {
                                const filteredImages = images.filter((item) => item !== image)
                                setImages(() => [ ...filteredImages]);
                                setFieldValue(name, [...filteredImages]);
                                // setImages(filteredImages);
                                // setFieldValue(filteredImages);
                            }}
                            className="uploadImageDelete" />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default InputImages


// import { useState } from "react";
// import { TiDelete } from "react-icons/ti";
// import { FcAddImage } from "react-icons/fc";
// import { Field, ErrorMessage, useField } from "formik";

// const InputImages = ({ name, description }) => {
//   const [images, setImages] = useState([]);

//   const [value  ,  setValue ] = useField(name);

//   const handleChange = (e) => {
//     const files = e.target.files;
//     const filesArray = Array.from(files);
//     const imagesArray = filesArray.map((file) => URL.createObjectURL(file));
//     setImages(imagesArray);
//     setValue(imagesArray);
//   };

//   return (
//     <div className="InputImages">
//       <div className="inputImagesAddButtonDiv">
//         <label>
//           <FcAddImage className="inputImagesAddButton" />
//           <input
//             name={name}
//             className="InputImagesImages"
//             type="file"
//             onChange={handleChange}
//             multiple
//             accept="image/*"
//           />
//         </label>
//         {description && <p className="inputImagesDescription">{description}</p>}
//       </div>

//       <div className="uploadImagesDiv">
//         {images.length > 0 &&
//           images.map((image, index) => (
//             <div className="uploadImageDiv" key={index}>
//               <img src={image} className="uploadImage" alt={`Uploaded ${index}`} />
//               <TiDelete
//                 onClick={() => {
//                   const filteredImages = images.filter((_, i) => i !== index);
//                   setImages(filteredImages);
//                   setValue(filteredImages);
//                 }}
//                 className="uploadImageDelete"
//               />
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default InputImages;
