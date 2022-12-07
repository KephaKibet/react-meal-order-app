import classes from './Input.module.css'

const Input = props => {
  
  return <div className={classes.input} >
    <label htmlFor={props.input.id}>{props.label}</label>
    {/* takes care of  id={props.input.id} and type="text" makes input highly configurable from outside the component */}
    <input {...props.input} />
  </div>
}

export default Input;