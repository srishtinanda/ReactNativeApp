const regExpNAN = /^([^0-9]*)$/;
const validateExp = /([0-9])$/;

const invalidSign = /[\+/\*]$/;

export const validateStringWithSign = (input, newChar) => {
    if (input.length > 0) {
        let lastChar = input[input.length-1];
        if (regExpNAN.test(lastChar) && regExpNAN.test(newChar)) {
            return input.substring(0, input.length-1).concat(newChar);
        } else {
            return input.concat(newChar);
        }      
    } else if (input.length === 0 && invalidSign.test(newChar)) {
        return '';
    }
    else {
        return input.concat(newChar);
    }
} 

export const validateDeletedString = (input) => {
    if (input.length > 0) {
        let lastChar = input[input.length-1];
        if (regExpNAN.test(lastChar)) {
            return '0';
        } else
        return calculateTheResult(input);      
    } else 
    return '0';
} 

export const calculateTheResult = (input) => {
    const validInput = (input === 0) &&
     (invalidSign.test(input)) ? '' : input; 
    
    if (validateExp.test(validInput)) {
        let n = 0;
        let s = input;
        // Multiplication, division first
        let r = new RegExp(/([0-9]*\.?[0-9]*)([\*/])([0-9]*\.?[0-9]*)/);
        while (r.test(s)) {
            var m = r.exec(s);
            if (m[2] === '/') {
                n = new Number(m[1]) / new Number(m[3]);
            } else {
                n = new Number(m[1]) * new Number(m[3]);
            }
            s = s.replace(m[0], n);
        }
        // Addition, subtraction second
            s = addition(s);
        return s;
    }
     else {
        return !!validInput ? 
        calculateTheResult(validInput.substring(0, validInput.length-1))
         : '';
    }
}

addition = (s) => {
    r = new RegExp(/([\-0-9]*\.?[0-9]*)([\+\-])([0-9]*\.?[0-9]*)/);
      while (r.test(s)) {
        var m = r.exec(s);
          if (m[1].length === 0){
            break;
          } else if (r.test(m[1])) {
            m[1] = addition(m[1]);
          }
          if (m[2] === '+') {
              n = new Number(m[1]) + new Number(m[3]);
          } else {
              n = new Number(m[1]) - new Number(m[3]);
          }
            s = s.replace(m[0], n);
        }
    return s;
}
