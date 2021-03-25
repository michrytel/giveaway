import React from 'react';
import HelpBtn from "../atoms/HelpBtn";

const HelpBtns = ({clicker}) => {
    return (
        <div className='btns__help'>
            <HelpBtn text='Fundations' data={"funds"} clicker={clicker}/>
            <HelpBtn text='Non-governmental organizations' data={"orgs"} clicker={clicker}/>
            <HelpBtn text='Local collections' data={"locals"} clicker={clicker}/>
        </div>
    );
}

export default HelpBtns;
