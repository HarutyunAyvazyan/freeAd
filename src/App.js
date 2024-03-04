

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
import Basket from './components/pages/basket';
import UserMenuDropDown from './components/pages/userPage/userMenuDropDown';
import AnnouncementUserPage from './components/pages/userPage/userMenuDropDown/announcement';
import SettingsUserPage from './components/pages/userPage/settings';
import Top from './components/pages/top';
import ForBusiness from './components/pages/forBusiness';
import SinglePage from './components/pages/singlePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element ={<AboutUs/>}/>
          <Route path="forYou" element={<ForYou />} />
          <Route path="top" element={<Top />} />
          <Route path="forBusiness" element={<ForBusiness />} />
          <Route path="singlePage" element={<SinglePage />} />


          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path = "announcement" element = {<Announcement/>}/>
          <Route path = "basket" element = {<Basket/>}/>
          <Route path="menuCategoriesMobile" element = {<MenuCategoryMobile/>}/>
          <Route path="menuCategoriesMobile/:menuCategoryName" element = {<MenuSubCategoryMobile/>}/>

          <Route path = "/:categoryName" element = {<CategoryPage/>}/>
          <Route path = "/:categoryName/:subCategoryName" element = {<SubCategoryPage/>}/>
          <Route path = "/:categoryName/:subCategoryName/:subCategorySubCategoryName" element = {<SubCategorySubCategoryPage/>}/>
          {/* <Route path = "/userPage" element = {<UserMenuDropDown/>}/> */}
          <Route path = "announcementUserPage" element = {<AnnouncementUserPage/>}/>
          <Route path = "settingsUserPage" element = {<SettingsUserPage/>}/>




        </Route>
      </Routes>      
    </div>
  );
}

export default App;
