import React, { useEffect, useState , useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT'){

    return {value: action.val, isInvalid: action.val.includes('@')};
  }
  if(action.type === 'INPUT_BLUR'){

    return {value: state.value,isInvalid: state.value.includes('@')};
  }

  return {value:'',isInvalid: false};
};

const passReducer = (state, action) => {
  if (action.type === 'USER_INPUT'){

    return {value: action.val, isInvalid: action.val.trim().length > 6};
  }
  if(action.type === 'INPUT_BLUR'){

    return {value: state.value,isInvalid: state.value.trim().length > 6};
  }

  return {value:'',isInvalid: false};
 
}

const Login = (props) => {
  /*const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  */
  /*const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  */
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext);

const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'',isInvalid:null});

const [passworState, dispatchPassword] = useReducer(passReducer, {value:'',isInvalid:null})

const { isInvalid: emailIsValid } = emailState;
const { isInvalid: PasswordIsValid } = passworState;

  useEffect(() => {
      const timeout =  setTimeout(() => {
        setFormIsValid(
          emailIsValid && PasswordIsValid);
      }, 500);
      return () => {
        clearTimeout(timeout)
      };
  }, [emailIsValid, PasswordIsValid]);
  

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', val: event.target.value});

    /*setFormIsValid(
      emailState.isInvalid && passworState.isInvalid
    );
    */
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passworState.value);
    }
    else if(!emailIsValid){


    }
    else{

    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
        id="email"
        label="E-mail"
        type="email"
        isValid={emailIsValid}
        value={emailState.value}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
            />

        <Input
        id="password"
        label="Password"
        type="password"
        isValid={PasswordIsValid}
        value={passworState.value}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
