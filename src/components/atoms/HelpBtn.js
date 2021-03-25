import React from 'react';
const HelpBtn = ({data, clicker, text}) => {
    return (
        <button className='btn__help' onClick={clicker} data-info={data}>{text}</button>
    );
}

export default HelpBtn;
