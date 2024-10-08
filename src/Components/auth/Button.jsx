import React from 'react';

const Button = ({ text }) => {
    return (
        <button className='submit' type="submit">
            {text}
        </button>
    );
};
export default Button;