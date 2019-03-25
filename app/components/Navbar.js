import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div>
      <div>
        {' '}
        <Link to="/">Go To HomePage</Link>
      </div>
      <div>
        {' '}
        <Link to="/candies">Go get candies!</Link>
      </div>
    </div>
  );
};

export default Navbar;
