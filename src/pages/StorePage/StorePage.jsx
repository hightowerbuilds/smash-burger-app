import smashBurgerLogo from '../../images/browser/smashBurgerLogo.jpg'
import { NavLink } from 'react-router-dom'

export default function StorePage() {
  return (
    <div>
      <NavLink to='/'><img src={smashBurgerLogo} /></NavLink>
      <h2>StorePage</h2>
    
    </div>
  )
}
