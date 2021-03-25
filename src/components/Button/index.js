import React from 'react';
import './index.css';

function Button(props) {
    return (
        <button className={`button-container ${props.className}`} onClick={props.onClick}>
            {props.content}
        </button>
    )
}

export default Button
