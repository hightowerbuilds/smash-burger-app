
import './HomePage.css'
import { NavLink } from "react-router-dom";
import smashBurgerLogo from '../../images/browser/smashBurgerLogo.jpg'



export default function HomePage() {
  return (
    <div className="homePageMainBox">
  
    <div className="homePageNavBarMainBox"> 

    <NavLink className='homePageNavBarLogo' to='/'><img src={smashBurgerLogo} /></NavLink>

    <div className="homePageNavBarSubBox">
    <NavLink className='homePageNavBarFontSpecial' to='/'>HOME</NavLink>  
    <NavLink className='homePageNavBarFontSpecial' to='/menu'>MENU</NavLink>
    <NavLink className='homePageNavBarFontSpecial' to='/media'>MEDIA</NavLink>
    <NavLink className='homePageNavBarFontSpecial' to='/store'>STORE</NavLink>
    </div>
    </div>

    <div className='homePageSectionOuterBox'>
    <div className='homePageSectionSubBox'>
        home page contents
    </div>
    </div>

    </div>
  )
}
