import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './container/home/Home';
import DashBoard from './container/dashboard/DashBoard';
import Contact from './container/contact/Contact';
import Layout from './container/layout/Layout';
import DetailsStaff from './container/details-staff/DetailsStaff';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
        <Route path='/dashboard' element={<Contact/>}></Route>
        <Route path='/details-staff/:id' element={<DetailsStaff/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
