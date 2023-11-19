import React from 'react';
// import { Link } from 'react-router-dom';
import box from '../../Image/box.svg';

// Button component
export const Btn = ({ type, title }) => {
  return (
    <button className={`btn ${type}`} type={type}>
      {title}
    </button>
  );
};

// Input component
export const Input = ({ label, type = 'text', title }) => {
  return (
    <div className="mb-3">
      <label htmlFor="inputName" className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        id="inputName"
        placeholder={title}
        style={{ border: '1px solid gray', height: 40 }}
      />
    </div>
  );
};


// Section type component
export const SectionType = ({ check = false, title }) => {
  const inputBox = () => {
    return {
      margin: 5,
      padding: 5,
      width: "16px",
      height: "16px",
      borderRadius: '50%',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
    };
  };

  return (
    <div className={`d-flex mx-1 flex-row justify-content-center`}>
      <input
        style={inputBox()}
        className={`input-box  rounded-pill ${check ? 'checked' : ''}`} // Add check condition to class name
        type="checkbox"
        defaultChecked={check}
      />
      <p className={`m-0 p-0`}>{title}</p>

    </div>
  );
};


// Card component
export const CardSide = ({  title , para }) => {
  return (
    <div className={`d-flex border p-2 m-1 rounded`}>
      <img className="card-img-top  " src={box} alt="Card cap" style={{width : "4rem"}}/>
      <div className="card-body d-flex mx-3 flex-column justify-content-center">
        <h6 className="card-title">{title}</h6>
        <p className="card-text" style={{fontSize:"12px"}}>{para} </p>
      </div>
    </div>
  );
};

export const HLine =({color="black"})=>{
 return( <div style={{flex: 1, height: '1.2px', backgroundColor: color}} />)

}

// Form title

export const Frmtitle = ({title }) => {
  return (
    <div className='card-body d-flex p-2 px-4 flex-column justify-content-center' style={{backgroundColor: "#1A8FE626"}}>
    <h5>{title}</h5>
<p style={{fontWeight: "12px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
<br/>
<p style={{fontWeight: "12px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </div> );
};
