import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route  path='/About' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
        </Routes>
    )
    
}

export default App
