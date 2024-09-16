
import smashBurgerLargeLogo from '../../images/browser/smashBurgerLargeLogo.png'
import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="homePageMainBox">

    <NavBar />


    <div className='homePageSectionOuterBox'>
      <div className='homePageSectionSubBox'>
      <img className='homePageSmashLogo' src={smashBurgerLargeLogo} />
      </div>
    
    </div>

<div className='homePageSectionOuterBox'>
    <div className='homePageSectionSubBox'>
<img src="" alt="" />
    </div>
</div>
    </div>
  )
}
