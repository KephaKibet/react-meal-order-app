import { useRef } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const submitHandler = e => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount;
    
  
  return <form className={classes.form}>
    <Input
      ref={amountInputRef}
      label="amount"
      input={{
      id: 'amount',
      type: 'number',
      min: '1',
      max: '5',
      step: '1',
      defaultValue: '1'
    }} />
    <button>+Add</button>

  </form>
}

export default MealItemForm;