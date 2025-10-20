import { useState } from 'react'
import './Credential.css'

function Cred({src}) {
    const [credActive, setCredActive] = useState(false)

    function handleCredClick() {
        setCredActive(!credActive)
    }

    return (
        <div onClick={handleCredClick} className={`certificate-container ${credActive ? 'active-cred' : ''}`}>
            <img src={src} alt={'accomplishment certificate'} />
        </div>
    )
}

function NoCred() {
    return  (
        <div className="certificate-container no-cred">
            <p className='null-cred'>NULL</p>
        </div>
    )
}

export default function Credential({certificate}) {
    return (
        certificate ? <Cred src={certificate} /> : <NoCred />
    )
}