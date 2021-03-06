import React from 'react';
import deco from '../../assets/Decoration.svg';

const Title = ({ mainText, text }) => {
  return (
    <div className='title'>
      {mainText && <h2>{mainText}</h2>}
      <h2>{text}</h2>
      <img className='title__img' src={deco} alt='' />
    </div>
  );
}

export default Title;
