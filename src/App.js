import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
// Importerar egna komponenter
import Home from './pages/Home'
import About from './pages/About.tsx'
import Error from './pages/Error'
import Contact from './pages/Contact.tsx'
import { UserInfo } from './UserInfo'
import Specific from './pages/Specific'

function App() {
    return (
        <>
            <div className="App">
                {/* Navigation menu */}
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to={'/'}>Hem</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>Om</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Kontakt</Link>
                        </li>
                    </ul>
                </nav>
                {/* useContext */}
                <UserInfo.Provider value={"Välkommen gäst"}>
                <Routes>
                    {/*Router Paths */}
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/specific/:id" element={<Specific />} />
                    {/*Sending 2 props in this one to the page */}
                    <Route path="/contact" element={ <Contact mail={"mail@mail.se"} number={"460 555 55 55"} />} />
                    {/* Error handling */}
                    <Route path="*" element={<Error />} />
                </Routes>
                </UserInfo.Provider>
            </div>
        </>
    )
}

export default App
