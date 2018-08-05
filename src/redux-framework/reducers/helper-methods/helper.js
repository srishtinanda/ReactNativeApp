const regExpNAN = /^([^0-9]*)$/;
const validateExp = /([^0-9]*){1,}/

export const validateStringWithSign = (input, newChar) => {
    if (input.length > 0) {
        let lastChar = input[input.length-1];
        if (regExpNAN.test(lastChar) && regExpNAN.test(newChar)) {
            return input.substring(0, input.length-1).concat(newChar);
        } else
        return input.concat(newChar);      
    } else 
    return input.concat(newChar);
} 

export const calculateTheResult = (input) => {
    if (input.length > 0 && validateExp.test(input)) {
        // let firstChar = input[0];
        // let validInput = (firstChar === '-')?
        // '0'+ input : input;
        let n = 0;
        let s = input;
        // Multiplication, division first
        let r = new RegExp(/([0-9]*\.?[0-9]*)([\*/])([0-9]*\.?[0-9]*)/);
        while (r.test(s)) {
            var m = r.exec(s);
            if (m[2] === '*') {
                n = new Number(m[1]) * new Number(m[3]);
            } else {
                n = new Number(m[1]) / new Number(m[3]);
            }
            s = s.replace(m[0], n);
        }
        // Addition, subtraction second
        r = new RegExp(/([0-9]*\.?[0-9]*)([\+\-])([0-9]*\.?[0-9]*)/);
        while (r.test(s)) {
            var m = r.exec(s);
            if (m[2] === '+') {
                n = new Number(m[1]) + new Number(m[3]);
            } else {
                n = new Number(m[1]) - new Number(m[3]);
            }
            s = s.replace(m[0], n);
        }
        return s;
    } else {
        return input;
    }
}