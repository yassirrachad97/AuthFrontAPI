export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 6;
};



export const validateUsername = (username) => {
    return username.length >= 3;
};

export const validatePhoneNumber = (phoneNumber) => {
   
    const phoneRegex = /^[0-9\s\-()]{10,15}$/;
    return phoneRegex.test(phoneNumber);
};