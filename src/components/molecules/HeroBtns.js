import React from 'react';
import Btn from "../atoms/Btn";

const HeroBtns = ({ to }) => {
    return (
        <div className='btns__hero'>
            <Btn to={to} text='Give things' />
            <Btn to={to} text='Organize a fundraiser' />
        </div>
    );
}

export default HeroBtns;
