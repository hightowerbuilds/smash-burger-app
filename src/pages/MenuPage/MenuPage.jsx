
import NavBar from "../../components/NavBar/NavBar"

export default function MenuPage() {
  return (
    <div>
      <NavBar />

      <div>
      <h1 className='homePageSmashHeading'>SMASH BURGER</h1>

<p style={{ margin: '3%'}}>
ground beef smashed and grilled to deliciousness.

<ul style={{ margin: '3%'}}>
 <li>
   single patty $5
 </li>
 <li>
   double patty $10
 </li>
 <li>
   triple patty $15
 </li>
 <li>
   million patty $20
 </li>
</ul>
</p>

      </div>
    </div>
  )
}

