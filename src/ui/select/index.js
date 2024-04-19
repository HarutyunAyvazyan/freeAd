// import { Field } from "formik";
// import "./style.css"
// import { useEffect, useRef, useState } from "react"


// const CustomSelect = ({ options,...props }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [placementTop, setPlacementTop] = useState(false); // Положение селекта (true - верх, false - низ)
//     const [selectedOption, setSelectedOption] = useState(null);
//     const selectRef = useRef(null);

//     useEffect(() => {
//       function handleClickOutside(event) {
//         if (selectRef.current && !selectRef.current.contains(event.target)) {
//           setIsOpen(false);
//         }
//       }

//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, [selectRef]);

//     const handleSelect = (e,option) => {
//       setSelectedOption(option);
//       setIsOpen(false);
//       console.log(e.target.value,"value")
//     };

//     const handleToggleSelect = () => {
//       setIsOpen(!isOpen);
//     };
//     console.log(selectRef,"ref")

//     useEffect(() => {
//       const rect = selectRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const scrollTop =  document.documentElement.scrollTop;
//       const distanceToTop = rect.top + scrollTop;
//       const distanceToBottom = windowHeight - rect.bottom + scrollTop;
//       setPlacementTop(distanceToTop > distanceToBottom);
//     }, [isOpen]);
//     return (
//       <div className="custom-select" ref={selectRef}>
//         <div className="selected-option" onClick={handleToggleSelect} name={props.name} value={props.value}>
//           {selectedOption ? selectedOption.label : 'Select an option'}
//         </div>
//         {isOpen && (
//           <div className={`options ${placementTop ? 'top' : 'bottom'}`}>
//             {options.map((option) => (
//               <div
//                 key={option.value}
//                 className="option"
//                 name={props.name}
//                 onClick={(e) => handleSelect(e,option)}
//               >
//                 {option.label}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }

//   export default CustomSelect;

import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const CustomSelect = ({ options, name, formik, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [placementTop, setPlacementTop] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [touched, setTouched] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // formik.setFieldValue(name, option.value)
    setTouched(true);
    props.onChange(option.value); // Вызываем обработчик изменений, если он передан через пропсы
  };

  const handleToggleSelect = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const rect = selectRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    const distanceToTop = rect.top + scrollTop;
    const distanceToBottom = windowHeight - rect.bottom + scrollTop;
    setPlacementTop(distanceToTop > distanceToBottom);
  }, [isOpen]);

  return (
    <div className="custom-select" ref={selectRef}>
      <div className="selected-option" onClick={handleToggleSelect} 
>
      {selectedOption ? selectedOption.label : "Select an option"}
    </div>
            {
    isOpen && (
      <div className={`options ${placementTop ? "top" : "bottom"}`}>
        {options?.map((option) => (
          <div
            key={option.value}
            className="option"
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    )
  }
        </div >
    );
};

export default CustomSelect;