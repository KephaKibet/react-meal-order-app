import React from 'react';
import classes from './Input.module.css'

// use ref in a custom componet, wrap component with React.forwardRef to forward the ref
const Input = React.forwardRef((props,ref) => {
  
  return <div className={classes.input} >
    <label htmlFor={props.input.id}>{props.label}</label>
    {/* takes care of  id={props.input.id} and type="text" makes input highly configurable from outside the component */}
    <input ref={ref} {...props.input} />
  </div>
});

export default Input;