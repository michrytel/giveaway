import React from 'react';
import UserBar from "../molecules/UserBar";
import NavBar from "../molecules/NavBar";

const Header = () => {
    return (
        <header className="header">
            <nav className='nav'>
                <UserBar/>
                <NavBar/>
            </nav>
        </header>

    );
}

export default Header;
