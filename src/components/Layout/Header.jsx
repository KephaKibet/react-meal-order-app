import { Fragment } from "react"
import HeaderCartButton from "./HeaderCartButton"

import headerImg from '../../assets/headerImg.jpg'
import classes from './Header.module.css'


const Header = props => {
  
//render header and image
  return <Fragment>
    <header className={classes.header}>
      <h1>Tunakula?</h1>
       <HeaderCartButton onClick={props.onShowCart} />
      
    </header>

    <div className={classes['main-image']}> 
      <img src={headerImg} alt="headerimg" />
    </div>

  </Fragment>
}

export default Header;