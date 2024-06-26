export const isEmail = (email) => {
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    return regex.test(email);
}

export const isPassword = (password) => {
    let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    return regex.test(password);
}

//funcion age min 15 years old

export const isAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();

    return age >= 15;
}

export const requirementsPassword = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[a-z]/, index: 1 },
    { regex: /[A-Z]/, index: 2 },
    { regex: /[0-9]/, index: 3 },
    { regex: /[!@#$%^&*]/, index: 4 }
]