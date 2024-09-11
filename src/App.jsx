
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MediaPage from "./pages/MediaPage"
import StorePage from "./pages/StorePage"
import MenuPage from "./pages/MenuPage"


export default function App() {
  return (
  	<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/media" element={<MediaPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/menu" element={<MenuPage />} />
			</ Routes>
  )
}