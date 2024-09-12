

import { NavLink } from "react-router-dom";
import smashBurgerLogo from '../../images/browser/smashBurgerLogo.jpg'
import homeLogo from '../../images/browser/homeLogo.jpg'
import menuLogo from '../../images/browser/menuLogo.jpg'
import smashLogo from '../../images/browser/smashLogo.jpg'
import storeLogo from '../../images/browser/storeLogo.jpg'


export default function HomePage() {
  return (
    <div style={{
      width: '100%',
      height: 'auto',
      backgroundColor: 'lightblue'
    }}>
    
    <div style={{
      display: 'inline-flex',
      width: '100%'
    }}> 
    <NavLink to='/'>
    <img src={smashBurgerLogo} />
    </NavLink>

    <div style={{
      display: 'inline-flex',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>

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
    
    </div>

    <div style={{
      padding: '5%',
     
    }}>
      <div style={{
        width: '100%',
        height: '40vh',
        border: '10px dodgerblue solid'
      }}>
        home page contents
      </div>
    </div>
    








    </div>
  )
}
