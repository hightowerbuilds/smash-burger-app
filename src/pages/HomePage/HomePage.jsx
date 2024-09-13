
import Calendar from '../../components/Calendar/Calendar'
import Gallery from '../../components/Gallery/Gallery'
import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="homePageMainBox">

    <NavBar />


    <div className='homePageSectionOuterBox'>
    <div className='homePageSectionSubBox'>
    <div>
     <Calendar />
    </div>

    <div>
     <Gallery />
    </div>

    <div>
      history of the Smash Burger
    </div>
    </div>
    </div>

    </div>
  )
}
