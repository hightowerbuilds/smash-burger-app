
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
        
        <Calendar />
     

    </div>
    <div className='homePageSectionSubBox'>
        
    
        <Gallery />

    </div>
    </div>

    </div>
  )
}
