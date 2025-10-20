import './HomeHero.css'

import { social_links } from "../../storage"
import { Link } from 'react-router-dom'

export default function HomeHero() {
    const socialLinks = social_links.map(({id, link, icon}) => {
        return (
            <a key={id} href={link} target='_blank'>
                <img className="social-icon" src={icon} />
            </a>
        )
    })
    return (
        <div className="hero-container">
            <p className="name">ZEAMANUEL MEBIT</p>
            <div className="social">
                {socialLinks}
            </div>
            <div className="hero">
                <h1 className='hero-title'>SOFTWARE ENGINEER</h1>
                <p>Currently studying at Addis Ababa University / College of Technology and Built Environment.</p>
                <Link to={'/About'} className='about-cta-btn'>Learn About Me</Link>
            </div>
        </div>
    )
}