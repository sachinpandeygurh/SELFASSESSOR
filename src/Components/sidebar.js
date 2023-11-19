import React from 'react';
import { CardSide } from './Utils/Tools';

const Sidebar = () => {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 text-dark bg-white mt-3 h-100 " style={{width: "400px" , height:"100vh"}}>
    <ul class="nav nav-pills flex-column mb-auto">
     <CardSide title="New Form" para="Start creating a new form with the wide options of fields available"/>
     <p className='mt-4'>Explore the following Templates:</p>
     <CardSide title="Details Collection" para="Collect information from Candidates on their education, work experience, contact no,etc"/>
     <CardSide to='/doc' title="Document Collection" para="Save time and efforts: Explore this template to find a set of questions required for document collection "/>
     <CardSide to='/statement' title="Statement of Purpose" para="Start creating a new form with the wide options of fields available "/>
     <CardSide title="Interview Availability " para="Start creating a new form with the wide options of fields available"/>
    </ul>
  </div>
  );
};

export default Sidebar;
