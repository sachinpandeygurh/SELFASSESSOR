import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import MyContext from './MyContext';
import Sections from './Components/sections';
import Sidebar from './Components/sidebar';
import Main from './Components/Main';
import DetailsCollection from './Components/Forms/DetailsCollection';
import DocumentCollection from './Components/Forms/DocumentCollection';

const App = () => {
  return (
    <BrowserRouter>
  
          <Sections/>
         <div className='row'>
         <Sidebar/>
         
        <Routes>
          <Route path="/" element={<DetailsCollection/>} />
          <Route path="/doc" element={<DocumentCollection/>} />
        </Routes>
         </div>
     
    </BrowserRouter>
  );
};
export default App;