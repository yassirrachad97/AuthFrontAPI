import React from "react";

const InputField = ({ type , placeholder , value , onChange, icon }) => {
    return (
<div className="input-box">
    <input 
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange} 
    required
    />
    {icon}
</div>
    );
};

export default InputField;