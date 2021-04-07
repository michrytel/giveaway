import React from 'react';
import UserBarLink from '../atoms/UserBarLink';

const UserBar = ({firstName, firstLink, secondName, secondLink, clicker}) => {
    return (
        <ul className='userbar'>
            <li className='userbar__item'>
                <UserBarLink path={firstLink} text={firstName} />
            </li>
            <li className='userbar__item' onClick={clicker}>
                <UserBarLink path={secondLink} text={secondName} />
            </li>
        </ul>
    )
}

export default UserBar;
