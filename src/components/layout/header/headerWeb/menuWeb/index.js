import { useEffect, useState } from "react"
import { IoHome } from "react-icons/io5";
import Categories from "../../../../../constants/stateCategories";
import "./style.css"
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import pageName from "../../../../../constants/pageName";




const ModalMenu = ({ toggleModal, handleMouseEnterModal, handleMouseLeaveModal, enter }) => {
  const [categories, setCategories] = useState(Categories)
  const [currentTab, setCurrentTab] = useState(1)

  const handleMouseEnter = (id) => {
    setCurrentTab(id);
    // console.log(id, "id")
  };

  useEffect(() => {

  }, [currentTab]);

  return (
    <div className="container">
      <div className="mainModalDiv" onMouseEnter={handleMouseEnterModal} onMouseLeave={handleMouseLeaveModal} >
        <span className="close" onClick={toggleModal}>&times;</span>
        <div className="buttonsDiv">
          {categories.map((category, index) => (
            <button className="categoryButton" id={category.id} onMouseEnter={() => handleMouseEnter(category.id)} key={index}>
              {/* <IoHome /> */}
              <img src={category.pathImg} alt='' width='30px' height='30px' />
              <div style={{
                width: "85%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
                key={index}
              >
                <span className="categoryButtonText">{category.name}</span>
                <MdArrowForwardIos className="categoryButtonArrow" />
              </div>
            </button>
          ))}
        </div>
        {
          categories.map((category, index) => (
            currentTab === category.id &&
            <div className="tabcontent" key={category.id} >
              <Link to={pageName.categoryPage}
                onClick={toggleModal}

              >
                <h2 >{category.name}</h2>
              </Link>
              <div className="tabItems"
                style={currentTab === category.id ? { display: "flex" } : { display: "none" }}
              >
                {category.subCategories.map((subCategory, index) => (
                  <div className="tabItem" key={subCategory.id}
                  >
                    {/* <Link to={`subCategoryPage`} */}
                    {/* onClick={toggleModal} */}
                    {/* >  */}
                    <h4 >{subCategory.name}</h4>
                    {/* </Link> */}
                    <div >
                      <ul className="subCategoryUl" >
                        {subCategory.subCategories.map((subCategoryLink, index) => (
                          <Link
                            key={index}
                            className="subCategoryLink"
                            onClick={toggleModal}
                            to={pageName.subCategory}>
                            <li className="subCategoryLi" >
                              <div >
                                {subCategoryLink}
                              </div>
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
  );
};






export default ModalMenu



