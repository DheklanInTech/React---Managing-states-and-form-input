//  import React, {useState} from "react";
import useInput from "../hooks/user-input";

const SimpleInput = (props) => {

    const {value:enteredName,
        hasError:nameInputHasError,
         valueChangeHandler:nameChangedHandler,
         valueIsValid:enteredNameIsValid,
         InputBlurHandler:nameBlurHandler,
         reset:resetNameInput,
        } = useInput(value => value.trim() !== '');


     const {value:enteredEmail,
            hasError:emailInputHasError,
             valueChangeHandler:emailChangedHandler,
             valueIsValid:enteredEmailIsValid,
             InputBlurHandler:emailBlurHandler,
             reset:resetEmailInput,
            } = useInput(value => value.includes('@') && value.trim() !== '');    

     
    

    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredEmailTouched,setEnteredEmailTouched] = useState(false);

 
    
    // const enterdEmailIsValid = enteredEmail.includes('@');
    // const enteredEmailIsInvalid = !enterdEmailIsValid && enteredEmailTouched;
      
   

    let formIsValid = false;
    if(enteredNameIsValid && enteredEmailIsValid){
        formIsValid = true
    }

    // const emailInputHandler = (e) =>{
    //     setEnteredEmail(e.target.value);
    // }

    // const emailInputBlurHandler = (e) =>{
    //     setEnteredEmailTouched(true)
    // }

    const formSubmitHandler = (e) => {
       e.preventDefault();

     if(!enteredNameIsValid){
           return;
       }

       resetNameInput()
       resetEmailInput()

    //    setEnteredEmail('');
    //    setEnteredEmailTouched(false)

    }
    const nameInputClasses = nameInputHasError ? 'form-control invalid': 'form-control';
    const emailInputClasses = nameInputHasError ? 'form-control invalid': 'form-control';

    return (
      <form onSubmit={formSubmitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' onBlur={nameBlurHandler} onChange={nameChangedHandler} value={enteredName} />
         {nameInputHasError && <p className="error-text">Name must not be empty</p>}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='name'>Your Email</label>
          <input type='text' id='email' onBlur={emailBlurHandler} onChange={emailChangedHandler} value={enteredEmail} />
         {emailInputHasError && <p className="error-text">email must contain @</p>}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;
  