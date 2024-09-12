import { NavLink } from "react-router-dom"
import smashBurgerLogo from '../../images/browser/smashBurgerLogo.jpg'

export default function MenuPage() {
  return (
    <div>
      <h2>Menu</h2>
      <NavLink to='/'>
      <img src={smashBurgerLogo} />
      </NavLink>
    </div>
  )
}

