import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import HostPage from './pages/HostPage';
import Layout from './Layout';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import HostedFormPage from './pages/HostedFormPage';
import HostedPage from './pages/HostedPage';
import ParticipatedPage from './pages/ParticipatedPage';
import ParticipatePage from './pages/ParticipatePage';
import SelectedSociety from './pages/selectedSociety'; 
import ListAdmins from './pages/ListAdmins.jsx';
import AddAdmin from './pages/AddAdmin.jsx';
import Employment from './pages/Employment';
import Booking from './pages/Booking';
import Restro from './pages/Restro';




import Faq from './pages/Faq';
import Contact from './pages/Contact';
import About from "./pages/About";

import Education from './pages/education';



axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/hosted" element={<HostPage />} />
          <Route path="/Employment/:name" element={<Employment/>} />
          
          <Route path="/Restro/:name" element={<Restro/>} />
          <Route path="Booking/:name" element={<Booking/>} />
    
          <Route path="/Education/:name" element={<Education/>} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/Contact" element={<Contact />} />
         
          <Route path="/account/hosted/new" element={<HostedFormPage />} />
          <Route path="/account/hosted/:id" element={<HostedFormPage />} />
          <Route path="/host/:id" element={<HostedPage />} />
          <Route path="/account/participated" element={<ParticipatedPage />} />
          <Route path="/account/participated/:id" element={<ParticipatePage />} />
          <Route path="/society/:selectedSociety" element={<SelectedSociety />} />
          <Route path="/admin/list" element={<ListAdmins />} />
          <Route path="/admin/add" element={<AddAdmin />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
