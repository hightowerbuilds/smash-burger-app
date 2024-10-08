

import { NavLink } from "react-router-dom"
import smashBurgerLogo from '../../images/browser/smashBurgerLogo.jpg'
import './NavBar.css'

export default function NavBar() {
  return (
    <div> 
        
    <div className="NavBarMainBox"> 

    <NavLink className='NavBarLogo' to='/'><img src={smashBurgerLogo} /></NavLink>

    <div className="NavBarSubBox">
    <NavLink className='NavBarFontSpecial' to='/'>HOME</NavLink>  
    <NavLink className='NavBarFontSpecial' to='/menu'>MENU</NavLink>
    <NavLink className='NavBarFontSpecial' to='/media'>MEDIA</NavLink>
    <NavLink className='NavBarFontSpecial' to='/store'>STORE</NavLink>
    </div>
    </div>


    </div>
  )
}
