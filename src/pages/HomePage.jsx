

import { NavLink } from "react-router-dom";
import smashBurgerLogo from '../images/browser/smashBurgerLogo.jpg'
import homeLogo from '../images/browser/homeLogo.jpg'
import menuLogo from '../images/browser/menuLogo.jpg'
import smashLogo from '../images/browser/smashLogo.jpg'
import storeLogo from '../images/browser/storeLogo.jpg'


export default function HomePage() {
  return (
    <div>
    
    <div>
    <NavLink to='/'>
    <img src={homeLogo} />
    </NavLink>  
    <NavLink to='/menu'>
    <img src={menuLogo} />
    </NavLink>
    <NavLink to='/media'>
    <img src={smashLogo} />
    </NavLink>
    <NavLink to='/store'>
    <img src={storeLogo} />
    </NavLink>
    </div>
   
    <div>
    <img src={smashBurgerLogo}/>
    </div>

    </div>
  )
}
