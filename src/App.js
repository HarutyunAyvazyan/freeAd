

import './App.css';
import Home from './components/pages/home';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import AboutUs from './components/pages/aboutUs';
import ForYou from './components/pages/forYou';
import Signin from './components/pages/signin';
import Signup from './components/pages/signup';
import Announcement from './components/pages/announcementPage';
import CategoryPage from './components/categories/categoryPage';
import SubCategoryPage from './components/categories/subCategoryPage';
import SubCategorySubCategoryPage from './components/categories/subCtegorySubCategoryPage';
// import MenuMobile from './components/layout/header/headerMobile/menuCategoriesMobile';
import MenuCategoryMobile from './components/layout/header/headerMobile/menuCategoriesMobile';
import MenuSubCategoryMobile from './components/layout/header/headerMobile/menuSubCategoriesMobile';
import UserMenuDropDown from './components/pages/userPage/userMenuDropDown';
import AnnouncementUserPage from './components/pages/userPage/userMenuDropDown/announcement';
import SettingsUserPage from './components/pages/userPage/settings';
import Top from './components/pages/top';
import ForBusiness from './components/pages/forBusiness';
import SinglePage from './components/pages/singlePage';
import AnotherUserPage from './components/pages/anotherUserPage';
import { useEffect, useState } from 'react';
import { getProducts } from './utils';
import NotFound from './components/pages/notFound';
import FormAppartement from './components/formsCategories/formsRealEstate/formAppartement';
import TheLawsOfTheAnnouncement from './components/pages/theLawsOfTheAnnouncement';
import FormHouse from './components/formsCategories/formsRealEstate/formHouse';
import pageName from './constants/pageName';
import Favorite from './components/pages/favorite';
import FavoriteUsers from './components/pages/favorite/favoriteUsers';
import FavoriteAnnouncement from './components/pages/favorite/favoriteAnnouncement';


function App() {
  const [basket,setBasket] = useState([])
  // const [basketProducts,setBasketProducts] = useState([])
  // const [like,setLike] = useState(false)
 

  // useEffect(()=>{
  //   setLike(!like)
  // },like)

  const handleClickLike = (id) => {
   !basket.includes(id) ? basket.push(id) :basket.splice(basket.indexOf(id),1)
  //  setBasketProducts(getProducts().filter((product) => basket.includes(product.id)))
      // setLike(!like)
  }

  return (
    <div className="App">
      <Routes>
        <Route path={pageName.home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={pageName.about} element ={<AboutUs/>}/>
          <Route path={pageName.forYou} element={<ForYou />} />
          <Route path={pageName.top} element={<Top />} />
          <Route path={pageName.forBusiness} element={<ForBusiness />} />
          <Route path={pageName.product} element={<SinglePage />} />
          <Route path={pageName.user} element={<AnotherUserPage  handleClickLike={handleClickLike}  />} />
          <Route path={pageName.notFound} element={<NotFound/>} />



          <Route path={pageName.signIn} element={<Signin />} />
          <Route path={pageName.signUp} element={<Signup />} />
          <Route path = {pageName.addAnnouncement} element = {<Announcement/>}/>
          <Route path = {pageName.theLawsOfTheAnnouncement} element = {<TheLawsOfTheAnnouncement/>}/>

          <Route path = {pageName.addAnnouncementForm} element = {<FormHouse/>}/>

          <Route path = {pageName.favorite} element = {<Favorite basket={basket}/>}>
          <Route path="users" element={<FavoriteUsers />} />
          <Route path="ad" element={<FavoriteAnnouncement />} />

          </Route>
          
          <Route path= {pageName.menuCategoriesMobile} element = {<MenuCategoryMobile/>}/>
          <Route path={pageName.menuSubCategoriesMobile} element = {<MenuSubCategoryMobile/>}/>

          <Route path = {pageName.categoryPage} element = {<CategoryPage/>}/>
          <Route path = {pageName.subCategory} element = {<SubCategoryPage/>}/>
          {/* <Route path = "subCategorySubCategoryPage" element = {<SubCategorySubCategoryPage/>}/> */}
          {/* <Route path = "/userPage" element = {<UserMenuDropDown/>}/> */}
          <Route path = {pageName.announcementUserPage} element = {<AnnouncementUserPage/>}/>
          <Route path = {pageName.settingsUserPage} element = {<SettingsUserPage/>}/>




        </Route>
      </Routes>      
    </div>
  );
}

export default App;
