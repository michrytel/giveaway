import React from 'react';
import {Link} from 'react-scroll';

const NavBar = () => {

    return (
             <ul className='navbar'>
                <li className='navbar__item'>
                    <Link to='/' smooth={true} duration={500}>
                        Start
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link to='firstSteps' smooth={true} duration={500}>
                        About project
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link to='about' smooth={true} duration={500}>
                        About us
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link to='help' smooth={true} duration={500}>
                        Fundations and organizations
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
    );
}

export default NavBar;
