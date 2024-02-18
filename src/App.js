

import './App.css';
import Home from './components/pages/home';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import AboutUs from './components/pages/aboutUs';
import ForYou from './components/pages/forYou';
import Signin from './components/pages/signin';
import Signup from './components/pages/signup';
import Announcement from './components/pages/announcementPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element ={<AboutUs/>}/>
          <Route path="forYou" element={<ForYou />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path = "announcement" element = {<Announcement/>}/>
        </Route>
      </Routes>      
    </div>
  );
}

export default App;
