
import smashBurgerLargeLogo from '../../images/browser/smashBurgerLargeLogo.png'
import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="homePageMainBox">

    <NavBar />


    <div className='homePageSectionOuterBox'>
      <img src={smashBurgerLargeLogo} alt="" />
    </div>

    </div>
  )
}
