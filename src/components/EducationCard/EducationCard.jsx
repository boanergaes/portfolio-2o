import './EducationCard.css'

import Credential from '../Credential/Credential'

export default function EducationCard({institute_name, institute_logo, institute_link, lesson_title, description, credential, skills}) {
    const skillsDisplay = []
    for (let i = 0; i < skills.length; i++) {
        skillsDisplay.push(
            <span key={i} className='skill-elem'>{skills[i]}</span>
        )
    }

    return (
        <div className="education-card">
            <div className="edu-logo-section">
                <img src={institute_logo} alt={institute_name + ' logo'} />
            </div>
            <div className="edu-content-section">
                <h1 className='lesson-title'>{lesson_title}</h1>
                <a href={institute_link} className='institute-name' target='_blank'>{institute_name}</a>
                <p className='edu-description'>{description}</p>
                <div className="skills-display">
                    {skillsDisplay}
                </div>
                <Credential certificate={credential} />
            </div>
        </div>
    )
}