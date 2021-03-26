import React from 'react';
import UserBarLink from '../atoms/UserBarLink';

const UserBar = () => {
  return (
    <ul className='userbar'>
      <li className='userbar__item'>
        <UserBarLink path='/login' text='Login' />
      </li>
      <li className='userbar__item'>
        <UserBarLink path='/register' text='Register' />
      </li>
    </ul>
  );
}

export default UserBar;
