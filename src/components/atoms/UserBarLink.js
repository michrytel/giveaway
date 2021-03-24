import React from 'react';
import { NavLink } from 'react-router-dom';

const UserBarLink = ({ text, path }) => {
  return (
    <NavLink to={path}>
      {text}
    </NavLink>
  );
}

export default UserBarLink;
