import React from 'react';
import './index.css';

function Button(props) {
    return (
        <div onClick={props.onClick} className="button-container">
            {props.content}
        </div>
    )
}

export default Button
