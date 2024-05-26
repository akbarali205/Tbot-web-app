import React from 'react';
import './Button.css';

function Button(props) {

    const { type, title, onClick, disable } = props;

  return (
    <button className={`btn ${
        (type === 'add' && 'add') ||
        (type === 'remove' && 'remove') ||
        (type === 'checkout' && 'checkout')
    }`} onClick={onClick} disabled={disable}>
        {title}
    </button>
  )
}

export default Button