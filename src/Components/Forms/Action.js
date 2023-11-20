import React from 'react';
import { Btn } from '../Utils/Tools';
import { Link } from 'react-router-dom';

const Action = () => {
  const handlClick =()=>{
    alert('Fields marked with * are mandatory fields');
  }
  return (
    <form className="bg-white text dark position-relative mt-5">
      <Link className="position-fixed p-2 bottom-0 d-flex justify-content-end bg-white w-100" onClick={handlClick}>
        <Btn type="submit" className="btn-primary " title="Next" />
      </Link>
    </form>
  );
};

export default Action;
