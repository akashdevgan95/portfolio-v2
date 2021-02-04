import React from 'react';

const Input = ({name}) => {
    return (
        <div class='form-input-container'>
            <input type='text' required />
            <label>
                <span>{name}</span>
            </label>
        </div>
    )
}

export default Input;