import React from 'react';
import Main from '../Main';
import { Frmtitle, Input } from '../Utils/Tools';
import Action from './Action';

const DocumentCollection = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert('Form submitted'); 
  };

  const statements = [
    {
      text: '10th Marksheet *',
      type: 'file',
      required: true,
    },
    {
      text: '12th Marksheet *',
      type: 'file',
      required: true,
    },
    {
      text: 'Graduation Marksheet *',
      type: 'file',
      required: true,
    },
    {
      text: 'Post Graduation Marksheet',
      type: 'file',
      required: false,
    },
    {
      text: 'Offer Letter',
      type: 'file',
      required: false,
    },
    {
      text: 'Salary Slips',
      type: 'file',
      required: false,
    },
    {
      text: 'Increment Letter',
      type: 'file',
      required: false,
    },
    {
      text: 'Others (if any)',
      type: 'file',
      required: false,
    },
  ];

  return (
    <div className="m-auto" style={{ width: '800px', height: '100vh' }}>
      <Main />
      <div className="d-flex flex-column justify-content-center pb-4 bg-white rounded">
        <Frmtitle title="Document Collection" />
        <form className="m-auto mt-3" style={{ width: '22rem' }} onSubmit={handleSubmit}>
          {statements.map((statement) => (
            <Input
              key={statement.text}
              label={`${statement.text}`}
              type={statement.type}
              required={statement.required} 
            />
          ))}
          <Action />
        </form>
      </div>
    </div>
  );
};

export default DocumentCollection;
