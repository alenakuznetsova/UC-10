import React, { useState } from "react";
import { validateString } from "../utils/common";

function ValidateInput() {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [shouldValidate, setShouldValidate] = useState(false);    

    const handleInputChange = (event) => {
        setValue(event.target.value);

        if (shouldValidate) {
            if (validateString(event.target.value, 30)) {
                setIsValid(true);
            } else {
                setIsValid(false);
            }
        }
    }

    const handleInputFocus = () => {
        setIsFocused(true);
        setShouldValidate(true);
    }

    const handleInputBlur = () => {
        setIsFocused(false);
    }

    return (
        <div>
            <input 
                type="text" 
                value={value} 
                onChange={handleInputChange} 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur} 
            />
            {(isFocused && !isValid) && <p style={{ color: 'red' }} >Error</p>}
        </div>
    );
}

export default ValidateInput;