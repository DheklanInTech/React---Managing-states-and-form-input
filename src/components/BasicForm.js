// import { useState } from "react";

import useInput from "../hooks/user-input";

const BasicForm = (props) => {
    const {value:enteredFirstName,
        hasError:firstNameInputHasError,
         valueChangeHandler:firstNameChangedHandler,
         valueIsValid:enteredFirstNameIsValid,
         InputBlurHandler:firstNameBlurHandler,
         reset:resetFirstNameInput,
        } = useInput(value => value.trim() !== '');

 const {value:enteredSecondName,
       hasError:secondNameInputHasError,
       valueChangeHandler:secondNameChangedHandler,
        valueIsValid:enteredSecondNameIsValid,
       InputBlurHandler:secondNameBlurHandler,
       reset:resetSecondNameInput,
        } = useInput(value => value.trim() !== '');

        
     const {value:enteredEmail,
        hasError:emailInputHasError,
         valueChangeHandler:emailChangedHandler,
         valueIsValid:enteredEmailIsValid,
         InputBlurHandler:emailBlurHandler,
         reset:resetEmailInput,
        } = useInput(value => value.includes('@'));  

   let formIsValid = false
   
   if(enteredFirstNameIsValid && enteredSecondName && enteredEmail){
       formIsValid = true
   }

const formSubmitHandler = (e) =>{
    e.preventDefault()
    if(!formIsValid){
        return
    }
    resetFirstNameInput()
    resetSecondNameInput()
    resetEmailInput()
}

const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
const secondNameInputClasses = secondNameInputHasError ? 'form-control invalid' : 'form-control';
const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
      <form onSubmit={formSubmitHandler}>
        <div className='control-group'>
          <div className={firstNameInputClasses}>
            <label htmlFor='name'>First Name</label>
            <input type='text' id='name' value={enteredFirstName} onChange={firstNameChangedHandler} onBlur={firstNameBlurHandler} />
            {firstNameInputHasError && <p className="error-text">Can not be empty </p>}
          </div>
          <div className={secondNameInputClasses}>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name' value={enteredSecondName} onChange={secondNameChangedHandler} onBlur={secondNameBlurHandler} />
            {secondNameInputHasError && <p className="error-text">Can not be empty </p>}
          </div>
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' value={enteredEmail} onChange={emailChangedHandler} onBlur={emailBlurHandler} />
          {emailInputHasError && <p className="error-text">Please enter a valid email</p>}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;
  