import './NavBar.css'

export default function NavBar() {
    return (
        <div className='nav-bar-container'>
            <ul className="nav-bar">
                <a id='home-link' href="/"><li>Home</li></a>
                <a id='about-link' href="/"><li>About</li></a>
                <a id='projects-link' href="/"><li>Projects</li></a>
                <a id='contact-link' href="/"><li>Contact</li></a>
            </ul>
            <div className="nav-slider-line">
                <div className='nav-slider'>
                    <div className='nav-balls' id="home-ball"></div>
                    <div className='nav-balls' id="about-ball"></div>
                    <div className='nav-balls' id="projects-ball"></div>
                    <div className='nav-balls' id="contact-ball"></div>
                </div>
            </div>
        </div>
    )
}