import './Education.css'

import { education } from '../../storage'
import EducationCard from '../EducationCard/EducationCard'

export default function Education() {
    const educationList = education.map((item) => {
        return <EducationCard 
            key={item.id}
            institute_name={item.institute_name} 
            institute_logo={item.institute_logo} 
            institute_link={item.institute_link}
            lesson_title={item.lesson_title}
            description={item.description}
            credential={item.credential}
            skills={item.skills}
        />
    })

    return (
        <div className="education-container">
            <h1>Education</h1>
            <div className="education-display">
               {educationList}
            </div>
        </div>
    )
}