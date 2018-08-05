import { 
    INPUT_FROM_USER,
    CALCULATE,
    RESULT,
    CLEAR_INPUT,
    DELETE_CHARACTER 
} from './types';

export const calculateResult = (inputString) => {
    return {
        type: CALCULATE,
        payload: inputString
    };
};

export const clearInputString = () => {
    return {
        type: CLEAR_INPUT
    };
};

export const calculateInput = (input) => {
    return {
        type: RESULT
    };
};

export const deleteLastChar = () => {
    return {
        type: DELETE_CHARACTER
    };
};

export const userTypedInput = (selectedInput) => {
    return {
        type: INPUT_FROM_USER,
        payload: selectedInput
    };
};
