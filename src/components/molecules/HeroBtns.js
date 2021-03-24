import React from 'react';
import BtnBig from "../atoms/BtnBig";

const HeroBtns = ({ to }) => {
    return (
        <div className='btns__hero'>
            <BtnBig to={to} text='Give things' />
            <BtnBig to={to} text='Organize a fundraiser' />
        </div>
    );
}

export default HeroBtns;
