import React from 'react';
import { Link } from 'react-router-dom';

const Btn = ({ text, to }) => {
    return (
        <Link className='btn__big' to={to}><p>{text}</p></Link>
    );
}

export default Btn;
