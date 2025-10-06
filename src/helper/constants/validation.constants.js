const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i;
const onlyCharacterRegex = /^[a-zA-Z]+$/i;

const emailPattern = {
    value: emailRegex,
    message: 'Invalid email address.'
}

const passwordPattern = {
    value: passwordRegex,
    message: "Password must include lowercase, uppercase, number, special character and min 8 length.",
};

const domainPattern = {
    value: onlyCharacterRegex,
    message: "Only character allowed",
};

const phonePattern = {
    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    message: "Invalid phone number."
};

const phoneNumberValidation = {
    required: "Phone number is required.",
    minLength: {
        value: 10,
        message: "Phone number must have 10 digits",
    },
    maxLength: {
        value: 10,
        message: "Phone number must have 10 digits",
    },
};

const urlValidate = {
    value: /^(https?:\/\/)?(www\.)?[a-z0-9-]+\.[a-z]+(\/[a-z0-9#]+\/?)*$/i,
    message: "Invalid URL format",
}

export const noInitSpace = (value) => {
    if (!value) return true; // Skip validation if the value is empty or only spaces
    return value[0] !== " " || `Space not allowed`; // Checks if first character is a space
};


export const notOnlySpecialChars = (value) => {
    if (!value) return true; // Skip validation if no value or only spaces
    return /[A-Za-z0-9]/.test(value) || `Invalid Data`;
}
export const validEmail = (value) => {
    if (!value) return true; // Skip validation if no value or only spaces
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value) || `Please enter a valid email address.`;
}

export const onlyNumber = (value) => {
    if (!value) return true; // Skip validation if no value or only spaces
    return /^[0-9()+\-]*([ ]?[0-9()+\-]+)*$/.test(value) || "Only number allowed."
}

// Masking function
export const maskMobileNumber = (value) => {
    const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    return numericValue.replace(/(\d{3})(\d{3})(\d{1,4})/, "($1) $2-$3"); // Format as (000) 000-0000
};

export const unMaskMobileNumber = (mobileNumber) => {
    var cleanedNumber = mobileNumber.replace(/\D/g, ''); // \D matches any non-digit
    return cleanedNumber;
}

export {
    emailPattern,
    passwordPattern,
    domainPattern,
    phonePattern,
    phoneNumberValidation,
    urlValidate
}
