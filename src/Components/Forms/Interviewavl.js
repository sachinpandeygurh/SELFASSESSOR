import React, { useEffect } from 'react'
import { Frmtitle, Input } from '../Utils/Tools';
import Main from '../Main';

const Interviewavl = () => {
  const handleSubmit =(event)=>{
    event.preventDefault(); 
    alert('Form submitted'); 
  }
    const statements = [
        {
          text: 'Email *',   required: false,
        },
        {
          text: 'Location',   required: false,
        },
        {
          text: 'Interview Date',   required: false,
        },
        {
          text: 'Interview Time',   required: false,
        },
        {
          text: 'Time Zone',   required: false,
        },
        {
          text: 'Interview Medium',   required: false,
        },
      ];

    
      return (
        <div className="m-auto" style={{ width: '800px', height: '100vh' }}>
          <Main />
          <div className=" d-flex flex-column justify-content-center pb-4 bg-white rounded ">
            <Frmtitle title="Interview Availability" />
            <form className="m-auto my-3" style={{ width: '39rem' ,}} onSubmit={handleSubmit} >
              {statements.map((statement, index) => (
                <div key={index}>
                  <Input label={`${index + 1}. ${statement.text}`} title={`Please Enter ${statement.text}`} required={statement.required} />
                </div>
              ))}
            </form>
          </div>
        </div>
      );
    };

export default Interviewavl