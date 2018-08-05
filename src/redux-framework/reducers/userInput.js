import { 
    INPUT_FROM_USER,
    CALCULATE,
    CLEAR_INPUT,
    DELETE_CHARACTER
} from '../actions/types';
import { validateStringWithSign, calculateTheResult } from './helper-methods/helper';

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
            let result = calculateTheResult(state.inputString);
            return { 
                inputString: result,
                result 
            };
        
        case 'CLEAR_INPUT':
            return { 
                inputString: '',
                result: '0'
            };
        
        case 'DELETE_CHARACTER':
            return { 
                inputString: state.inputString.substring(0, state.inputString.length-1),
                result: state.result
            };
        
        default :
            return state;
    }
}