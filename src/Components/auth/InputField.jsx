

const InputField = ({ type, placeholder, value, onChange, icon, errorMessage }) => {
    const isError = Boolean(errorMessage);
    return (
        <div className="input-box">
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{ borderColor: isError ? 'red' : '#ccc' }}
                className={isError ? 'error' : ''} 
                required
            />
            {icon}
              <p className={`error-message ${isError ? 'visible' : ''}`}>{errorMessage}</p>
        </div>
    );
};

export default InputField;
