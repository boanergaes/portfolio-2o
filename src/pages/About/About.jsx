import './About.css'
import NavBar from '../../components/NavBar/NavBar'
import AboutDesc from '../../components/AboutDesc/AboutDesc'
import Education from '../../components/Education/Education'

export default function About() {
    return (
        <div className='about-container'>
            <AboutDesc />
            <Education />
        </div>
    )
}