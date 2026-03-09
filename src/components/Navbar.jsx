import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import WhatsAppIcon from './WhatsAppIcon'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [productsOpen, setProductsOpen] = useState(false)
    const location = useLocation()
    const isProductPage = location.pathname === '/solar-panels' || location.pathname === '/inverters'

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMobileOpen(false)
        setProductsOpen(false)
    }, [location])

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    const smoothScroll = (e, hash) => {
        if (location.pathname === '/') {
            e.preventDefault()
            document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setMobileOpen(false)
    }

    const megaOpen = () => {
        clearTimeout(window._megaCloseTimer)
        document.getElementById('megaMenu')?.classList.add('open')
        document.getElementById('megaBackdrop')?.classList.add('visible')
    }
    const megaClose = () => {
        window._megaCloseTimer = setTimeout(() => {
            document.getElementById('megaMenu')?.classList.remove('open')
            document.getElementById('megaBackdrop')?.classList.remove('visible')
        }, 150)
    }

    return (
        <nav className={`navbar${scrolled || isProductPage ? ' scrolled' : ''}`} id="navbar">
            <div className="nav-inner">

                {/* Logo */}
                <Link to="/" className="logo" onClick={() => setMobileOpen(false)}>
                    <span className="logo-icon">☀</span>
                    <span className="logo-text">Solar Solution <strong>Islamabad</strong></span>
                </Link>

                {/* Desktop links */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li className="nav-mega-trigger" id="megaTrigger" onMouseEnter={megaOpen} onMouseLeave={megaClose}>
                        <a href="#" className="nav-dropdown-toggle" onClick={e => e.preventDefault()}>
                            Products <span className="nav-arrow">&#9660;</span>
                        </a>
                    </li>
                    <li><Link to={isProductPage ? '/#about' : '#about'} onClick={e => smoothScroll(e, '#about')}>About</Link></li>
                    <li><Link to={isProductPage ? '/#services' : '#services'} onClick={e => smoothScroll(e, '#services')}>Services</Link></li>

                    <li><Link to={isProductPage ? '/#contact' : '#contact'} onClick={e => smoothScroll(e, '#contact')}>Contact</Link></li>
                </ul>

                {/* Desktop CTAs */}
                <div className="nav-actions">
                    <Link
                        to={isProductPage ? '/#contact' : '#contact'}
                        className="btn btn-primary nav-quote"
                        onClick={e => smoothScroll(e, '#contact')}
                    >
                        Get Free Quote
                    </Link>
                    <a href="https://wa.me/923001234567" target="_blank" rel="noopener" className="btn btn-whatsapp">
                        <WhatsAppIcon />
                        <span className="wa-btn-text">WhatsApp</span>
                    </a>
                </div>

                {/* Hamburger */}
                <button
                    className={`hamburger${mobileOpen ? ' is-open' : ''}`}
                    onClick={() => setMobileOpen(o => !o)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="mobile-nav">
                    <nav className="mobile-nav-links">
                        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
                        <Link to={isProductPage ? '/#about' : '#about'} onClick={e => smoothScroll(e, '#about')}>About</Link>
                        <Link to={isProductPage ? '/#services' : '#services'} onClick={e => smoothScroll(e, '#services')}>Services</Link>

                        {/* Products accordion */}
                        <button className={`mobile-products-toggle${productsOpen ? ' open' : ''}`} onClick={() => setProductsOpen(o => !o)}>
                            Products <span className="nav-arrow">&#9660;</span>
                        </button>
                        {productsOpen && (
                            <div className="mobile-products-menu">
                                <div className="mobile-product-group">
                                    <span className="mobile-product-label">🔆 Solar Panels</span>
                                    <Link to="/solar-panels" onClick={() => setMobileOpen(false)}>View All Panels</Link>
                                    <Link to="/solar-panels#group-300" onClick={() => setMobileOpen(false)}><span className="mob-watt">300W</span> Rs. 7,500 – 9,300</Link>
                                    <Link to="/solar-panels#group-400" onClick={() => setMobileOpen(false)}><span className="mob-watt">400W</span> Rs. 12,000 – 14,000</Link>
                                    <Link to="/solar-panels#group-550" onClick={() => setMobileOpen(false)}><span className="mob-watt pop">550W</span> Rs. 15,950 – 19,800 ⭐</Link>
                                    <Link to="/solar-panels#group-580" onClick={() => setMobileOpen(false)}><span className="mob-watt">580W</span> Rs. 16,240 – 20,300</Link>
                                    <Link to="/solar-panels#group-700" onClick={() => setMobileOpen(false)}><span className="mob-watt">700W</span> Rs. 21,000 – 26,250</Link>
                                </div>
                                <div className="mobile-product-group">
                                    <span className="mobile-product-label">⚡ Inverters</span>
                                    <Link to="/inverters" onClick={() => setMobileOpen(false)}>View All Inverters</Link>
                                    <Link to="/inverters#group-3kw" onClick={() => setMobileOpen(false)}><span className="mob-watt kw">3kW</span> Rs. 60,000 – 150,000</Link>
                                    <Link to="/inverters#group-5kw" onClick={() => setMobileOpen(false)}><span className="mob-watt kw pop">5kW</span> Rs. 140,000 – 230,000 ⭐</Link>
                                    <Link to="/inverters#group-6kw" onClick={() => setMobileOpen(false)}><span className="mob-watt kw">6kW</span> Rs. 200,000 – 270,000</Link>
                                    <Link to="/inverters#group-8kw" onClick={() => setMobileOpen(false)}><span className="mob-watt kw">8kW</span> Rs. 280,000 – 370,000</Link>
                                    <Link to="/inverters#group-10kw" onClick={() => setMobileOpen(false)}><span className="mob-watt kw">10kW</span> Rs. 350,000 – 480,000</Link>
                                </div>
                            </div>
                        )}

                        <Link to={isProductPage ? '/#contact' : '#contact'} onClick={e => smoothScroll(e, '#contact')}>Contact</Link>
                    </nav>

                    <div className="mobile-nav-ctas">
                        <Link to={isProductPage ? '/#contact' : '#contact'} className="btn btn-primary btn-full" onClick={e => smoothScroll(e, '#contact')}>
                            Get Free Quote →
                        </Link>
                        <a href="https://wa.me/923001234567" target="_blank" rel="noopener" className="btn btn-whatsapp btn-full" onClick={() => setMobileOpen(false)}>
                            <WhatsAppIcon /> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
