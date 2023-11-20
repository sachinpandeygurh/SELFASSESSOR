import React from 'react';
import Main from '../Main';
import { Frmtitle, Input } from '../Utils/Tools';

const StatementPurpose = () => {
  // Define an array of statements
  const statements = [
    {
      text: 'Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?',
    },
    {
      text: 'Describe a situation where you had to overcome a significant challenge. How did you approach the problem, and what was the outcome?',
    },
    {
      text: 'Share an example of a time when you had to work with a team to achieve a common goal. How did you contribute to the team success?',
    },
  ];

  const TxtFrm = ({ statement, sNo }) => {
    return (
      <div className="form-group">
        <label htmlFor="inputName" className="form-label">{`${sNo}. ${statement.text}`}</label>
        <textarea name="postContent" style={{ width: '37em' }}></textarea>
      </div>
    );
  };

  return (
    <div className="m-auto" style={{ width: '800px', height: '100vh' }}>
      <Main />
      <div className=" d-flex flex-column justify-content-center pb-4 bg-white rounded">
        <Frmtitle title="Statements of Purpose" />
        <form className="m-auto mt-3" style={{ width: '39rem' }}>
          {statements.map((statement, index) => (
            <div key={index}>
              <TxtFrm statement={statement} sNo={index + 1} />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default StatementPurpose;
