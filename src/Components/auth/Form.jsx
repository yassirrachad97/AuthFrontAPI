import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const Form = ({ onSubmit, inputs, title, children }) => {
    return (
        <form onSubmit={onSubmit}>
             <h1>{title}</h1>
            {inputs.map((input, index) => (
                <InputField
                    key={index}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.onChange}
                    icon={input.icon}
                />
            ))}
            {children} 
            <Button text={inputs.find(input => input.submitText)?.submitText || "Envoyer"} />
        </form>
    );
};

export default Form;
