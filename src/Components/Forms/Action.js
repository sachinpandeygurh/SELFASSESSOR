import React from 'react';
import { Btn } from '../Utils/Tools';

const Action = () => {
  return (
    <form className="bg-white text dark position-relative mt-5">
      <div className="position-fixed p-2 bottom-0 d-flex justify-content-end bg-white w-100">
        <Btn type="submit" className="btn-primary " title="Next" />
      </div>
    </form>
  );
};

export default Action;
