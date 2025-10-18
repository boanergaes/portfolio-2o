import './HomeMain.css'
import MyImg from '/my-picture.png'
import { tools_and_skills } from '../../storage'

export default function HomeMain() {
    const lenOfArr = tools_and_skills.length
    const angleInc = 360 / lenOfArr
    let angle = 0
    
    const toolsNskills = []
    for (let i = 0; i < lenOfArr; i++) {
        const item = tools_and_skills[i]
        toolsNskills.push(
            <div key={i} style={{transform: `rotate(${angle}deg)`}} className="skill-blade">
                <img className='skill-logos' src={Object.values(item)[0]} alt={Object.keys(item)[0] + ' logo'} />
            </div>
        )
        angle += angleInc
    }

    return (
        <div className='home-main-container'>
            <div className='home-main-upper'>
                <div className="home-3d-display">
                    <div className="skill-circle-container">
                        <div className="skill-circle">
                            {toolsNskills}
                        </div>
                    </div>
                    <img className='my-img' src={MyImg} alt="My picture" />
                </div>
            </div>
        </div>
    )
}