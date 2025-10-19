import './Home.css'
import NavBar from "../../components/NavBar/NavBar"
import HomeMain from '../../components/HomeMain/HomeMain'
import HomeHero from '../../components/HomeHero/HomeHero'

export default function Home() {
    return (
        <div className="home-container">
            <HomeMain />
            <hr className='divider' />
            <HomeHero />
        </div>
    )
}