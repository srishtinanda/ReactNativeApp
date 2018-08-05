import { 
    INPUT_FROM_USER,
    CALCULATE,
    CLEAR_INPUT,
    DELETE_CHARACTER
} from '../actions/types';
import { 
    validateStringWithSign,
    calculateTheResult,
    validateDeletedString
} from './helper-methods/helper';

const initial_state = { inputString: '', result: '' } ;

export default (state = initial_state, action) => {
    switch (action.type) {

        case 'INPUT_FROM_USER':
            let validString = validateStringWithSign(state.inputString, action.payload);
            let calculatedValue = calculateTheResult(validString);
            return { 
                inputString: validString,
                result: calculatedValue 
            };
        
        case 'CALCULATE':
            calculatedValue = state.inputString !== '' ?
                calculateTheResult(state.inputString) : '0';
            return { 
                inputString: '',
                result: calculatedValue
            };
        
        case 'CLEAR_INPUT':
            return { 
                inputString: '',
                result: '0'
            };
        
        case 'DELETE_CHARACTER':
            validString = state.inputString.substring(0, state.inputString.length-1);
            calculatedValue = validateDeletedString(validString, action.payload);
            return { 
                inputString: validString,
                result: calculatedValue === '0' ? state.result : calculatedValue
            };
        
        default :
            return state;
    }
}