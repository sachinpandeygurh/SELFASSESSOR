import React from 'react';
import Main from '../Main';
import { Frmtitle, Input } from '../Utils/Tools'

const DetailsCollection = () => {
  return (
    <div className='m-auto' style={{ width: '800px', height: '100vh' }}>
      <Main />
      <div className="  d-flex flex-column justify-content-center pb-4 bg-white rounded">
            <Frmtitle title="Details Collection"/>
        <form className='m-auto mt-3' style={{width: "22rem"}}>
          <Input label="1. Name *" title="Enter a Valid Salary in numbers e.g 50,000/-" />
          <Input label="2. Email*" title="Example - userid@gmail.com" />
          <Input label="3. Date of Birth" type="date" title="" />
          <Input label="4. Contact no " title="Enter your 10 digit contact no" />
          
        </form>
      </div>
    </div>
  );
};

export default DetailsCollection;
