import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SolarPanels from './pages/SolarPanels'
import Inverters from './pages/Inverters'
import Navbar from './components/Navbar'
import MegaMenu from './components/MegaMenu'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToHash from './components/ScrollToHash'

function App() {
    return (
        <>
            <ScrollToHash />
            <Navbar />
            <MegaMenu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solar-panels" element={<SolarPanels />} />
                <Route path="/inverters" element={<Inverters />} />
            </Routes>
            <WhatsAppFloat />
        </>
    )
}

export default App
