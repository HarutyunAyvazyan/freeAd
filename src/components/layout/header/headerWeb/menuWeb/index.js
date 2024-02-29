import { useEffect, useState } from "react"
import { IoHome } from "react-icons/io5";
import Categories from "../../../../../constants/stateCategories";
import "./style.css"
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";




const ModalMenu = ({ toggleModal }) => {
  const [categories, setCategories] = useState(Categories)
  const [currentTab, setCurrentTab] = useState(1)

  const handleMouseEnter = (id) => {
    setCurrentTab(id);
    console.log(id, "id")
  };

  useEffect(() => {

  }, [currentTab]);

  return (
    <div className="container">
      <div className="mainModalDiv">
        <span className="close" onClick={toggleModal}>&times;</span>
        <div className="buttonsDiv">
          {categories.map((category, index) => (
            <button key={index} className="categoryButton" id={category.id} onMouseEnter={() => handleMouseEnter(category.id)} >
              {/* <IoHome /> */}
              <img src={category.pathImg} alt='' width='30px' height='30px' />
              <div style={{
                width: "70%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}>
                <span className="categoryButtonText">{category.name}</span>
                <MdArrowForwardIos />
              </div>
            </button>
          ))}
        </div>
        {
          categories.map((category, index) => (
            currentTab === category.id &&
            <div className="tabcontent" key={index}>
              <Link to={`${category.name}`}
                onClick={toggleModal}
              >
                <h2>{category.name}</h2>
              </Link>
              <div className="tabItems"
                style={currentTab === category.id ? { display: "flex" } : { display: "none" }}
              >
                {category.subCategories.map((subCategory, index) => (
                  <div className="tabItem"
                    key={index}>
                    <Link to={`${category.name}/${subCategory.name}`}
                      onClick={toggleModal}
                    > <h4>{subCategory.name}</h4>
                    </Link>
                    <div >
                      <ul className="subCategoryUl">
                        {subCategory.subCategories.map((subCategoryLink, index) => (
                          <Link key={index}
                            className="subCategoryLink"
                            onClick={toggleModal}
                            to={`/${category.name}/${subCategory.name}/${subCategoryLink}`}>
                            <li className="subCategoryLi" >
                              <div>
                              {subCategoryLink}

                              </div>
                              {console.log(subCategoryLink, "l")}
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



