import React from 'react';
import { Btn } from '../Utils/Tools';

const Action = () => {
  return (
    <form className="bg-white text dark position-relative">
      <div className="position-absolute">
        <Btn type="submit" success title="Next" />
      </div>
    </form>
  );
};

export default Action;
