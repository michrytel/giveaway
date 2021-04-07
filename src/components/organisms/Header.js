import React from 'react';
import NavBar from "../molecules/NavBar";
import UserBar from "../molecules/UserBar";

const Header = ({firstLink, secondLink, firstName, secondName, navbar, clicker}) => {
    return (
        <header className="header">
            <nav className='nav'>
                <UserBar firstLink={firstLink} firstName={firstName} secondLink={secondLink} secondName={secondName} clicker={clicker}/>
                {navbar ? <NavBar/> : null}
            </nav>
        </header>

    );
}

export default Header;
