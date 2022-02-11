import {useState} from 'react';

const useInput = (validateValue) => {
    const [enteredValue,setEnteredValue] = useState('');
    const [IsTouched,setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && IsTouched;


    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    }
    const InputBlurHandler = (e)=>{
        setIsTouched(true)
    }

    const reset = () =>{
        setEnteredValue('');
        setIsTouched(false);
    }

    return{
        value:enteredValue,
        hasError:hasError,
        valueIsValid: valueIsValid,
        valueChangeHandler,
        InputBlurHandler,
        reset
    }
}
 
export default useInput;