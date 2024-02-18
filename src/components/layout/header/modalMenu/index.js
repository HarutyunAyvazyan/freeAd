import { useState } from "react"
import { IoHome } from "react-icons/io5";
import Categories from "../../../../constants/stateCategories";
import "./style.css"
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";




const ModalMenu = ({toggleModal}) => {
  const [categories, setCategories] = useState(Categories)
  const initialCategory = categories[0]

  const [currentTab, setCurrentTab] = useState(1)

  // const [isOpen, setIsOpen] = useState(false);
  // const [ev, setEv] = useState("")

  const handleMouseEnter = (e) => {
    setCurrentTab(e.target.id);
    console.log(currentTab, "id")
  };

  // const handleMouseLeave = () => {
  //   setIsOpen(false);
  // };
  const initialState = categories[0]

  return (
    <div className="container">
      <div className="mainModalDiv">
      <span className="close" onClick={toggleModal}>&times;</span>
        <div className="buttonsDiv">
          {categories.map((category, index) => (
            <button key={index} className="categoryButton" id={category.id} onMouseEnter={handleMouseEnter} >
              {/* <IoHome /> */}
              <img src={category.pathImg} alt='' width='30px' height='30px'/>
              <span>{category.name}</span>
              <MdArrowForwardIos/>
            </button>
          ))}
        </div>
        <div className="tabcontent">
          {
            categories.map((category, index) => (

              currentTab === `${category.id}` &&
              <div key={index}>
                <h2>{category.name}</h2>
                <div className="tabItems" style={currentTab === `${category.id}` ? { display: "flex" } : { display: "none" }}>
                  {category.subCategories.map((subCategory, index) => (
                    <div className="tabItem" key={index}>
                      <h4>{subCategory.name}</h4>
                      <div >
                        <ul className="subCategoryUl">
                          {subCategory.subCategories.map((subCategoryLink, index) => (
                            <Link key={index} className="subCategoryLink">
                              <li className="subCategoryLi">
                                {/* {console.log(5)} */}
                                {subCategoryLink}
                              </li>
                            </Link>

                          ))}
                        </ul>
                      </div>


                    </div>

                  ))}

                </div>
              </div>

            ))

          }
        </div>


      </div>

    </div>


    // <div>
    //   {categories.map((category, index) => (
    //     <CategoryButton key={category.id} categoryName={category.name} subCategories={category.subCategories} />
    //   ))}
    // </div>
  );
};






export default ModalMenu



