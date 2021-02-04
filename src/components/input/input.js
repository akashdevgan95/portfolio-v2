import React from 'react';

const Input = ({name,setInputValue, value, resetError}) => {
    return (
        <div class='form-input-container'>
            <input id={name} value={value} onChange={(e) => {setInputValue(e.target.value);resetError(''); }} type='text' required />
            <label>
                <span>{name}</span>
            </label>
        </div>
    )
}

export default Input;