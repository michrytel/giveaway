import React from 'react';
import { Link } from 'react-router-dom';

const BtnBig = ({ text, to }) => {
    return (
        <Link className='btn__big' to={to}><p>{text}</p></Link>
    );
}

export default BtnBig;
