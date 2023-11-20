import React, { useEffect } from 'react'
import { Frmtitle, Input } from '../Utils/Tools';
import Main from '../Main';

const Interviewavl = () => {
    const statements = [
        {
          text: 'Email',
        },
        {
          text: 'Location',
        },
        {
          text: 'Interview Date',
        },
        {
          text: 'Interview Time',
        },
        {
          text: 'Time Zone',
        },
        {
          text: 'Interview Medium',
        },
      ];
    // useEffect(
    //     statements,
    //     []
    // )
    
      return (
        <div className="m-auto" style={{ width: '800px', height: '100vh' }}>
          <Main />
          <div className=" d-flex flex-column justify-content-center pb-4 bg-white rounded">
            <Frmtitle title="Interview Availability" />
            <form className="m-auto mt-3" style={{ width: '39rem' }}>
              {statements.map((statement, index) => (
                <div key={index}>
                  <Input label={`${index + 1}. ${statement}`} title={`Please Enter ${statement}`} />
                </div>
              ))}
            </form>
          </div>
        </div>
      );
    };

export default Interviewavl