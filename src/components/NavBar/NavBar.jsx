import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Projects from '../../pages/Projects/Projects'
import Contact from '../../pages/Contact/Contact'

export default function NavBar() {
    const navLinkStyles = ({isActive}) => ({
        color: isActive ? 'var(--main-font-color)' : 'var(--main-dim-font-color)',
        fontSize: isActive ? 'x-large' : 'medium',
    })
    
    return (
        // <BrowserRouter>
            <aside>
                <nav className="nav-bar">
                    <NavLink style={navLinkStyles} className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`} id='home-link' to="/">
                        <p>Home</p>
                        <div className='nav-balls' id="home-ball"></div>
                    </NavLink>
                    <NavLink style={navLinkStyles} className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`} id='about-link' to="/About">
                        <p>About</p>
                        <div className='nav-balls' id="about-ball"></div>
                    </NavLink>
                    <NavLink style={navLinkStyles} className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`} id='projects-link' to="/Projects">
                        <p>Projects</p>
                        <div className='nav-balls' id="projects-ball"></div>
                    </NavLink>
                    <NavLink style={navLinkStyles} className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`} id='contact-link' to="/Contact">
                        <p>Contact</p>
                        <div className='nav-balls' id="contact-ball"></div>
                    </NavLink>
                    <div className="nav-slider-line"></div>
                </nav>

                <h1 className='portfolio'>PORTFOLIO</h1>
            </aside>
        // </BrowserRouter>
    )
}