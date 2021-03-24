import React from 'react';
import UserBar from "../molecules/UserBar";
import Nav from "../molecules/Nav";


const Navigation = () => {
  return (
    <nav className='nav'>
      <UserBar/>
      <Nav/>
    </nav>
  );
}

export default Navigation;
