import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function closeMega() {
    const megaMenu = document.getElementById('megaMenu')
    const megaBackdrop = document.getElementById('megaBackdrop')
    const trigger = document.getElementById('megaTrigger')
    if (megaMenu) megaMenu.classList.remove('open')
    if (megaBackdrop) megaBackdrop.classList.remove('visible')
    if (trigger) trigger.classList.remove('active')
}

export default function MegaMenu() {
    const location = useLocation()

    // Close mega menu on route change
    useEffect(() => {
        closeMega()
    }, [location])

    const handleLinkClick = () => {
        setTimeout(closeMega, 80)
    }

    return (
        <>
            <div className="mega-menu" id="megaMenu"
                onMouseEnter={() => {
                    clearTimeout(window._megaCloseTimer)
                }}
                onMouseLeave={() => {
                    window._megaCloseTimer = setTimeout(() => {
                        closeMega()
                    }, 150)
                }}
            >
                <div className="mega-inner">

                    {/* Solar Panels Column */}
                    <div className="mega-col">
                        <div className="mega-col-header">
                            <div className="mega-col-icon">&#128262;</div>
                            <div>
                                <h3>Solar Panels</h3>
                                <p>A-Grade Tier-1 panels from world's top brands</p>
                            </div>
                        </div>
                        <div className="mega-items">
                            <Link to="/solar-panels#group-300" className="mega-item" onClick={handleLinkClick}>
                                <div className="mega-item-left"><span className="mega-watt">300W</span><span className="mega-item-name">Entry Level Panels</span></div>
                                <span className="mega-price">Rs. 7,500 &ndash; 9,300</span>
                            </Link>
                            <Link to="/solar-panels#group-400" className="mega-item" onClick={handleLinkClick}>
                                <div className="mega-item-left"><span className="mega-watt">400W</span><span className="mega-item-name">Mid-Range Panels</span></div>
                                <span className="mega-price">Rs. 12,000 &ndash; 14,000</span>
                            </Link>
                            <Link to="/solar-panels#group-550" className="mega-item popular-item" onClick={handleLinkClick}>
                                <div className="mega-item-left"><span className="mega-watt">550W</span><span className="mega-item-name">Most Popular</span></div>
                                <span className="mega-price">Rs. 15,950 &ndash; 19,800</span>
                            </Link>
                            <Link to="/solar-panels#group-580" className="mega-item" onClick={handleLinkClick}>
                                <div className="mega-item-left"><span className="mega-watt">580W</span><span className="mega-item-name">High Output Panels</span></div>
                                <span className="mega-price">Rs. 16,240 &ndash; 20,300</span>
                            </Link>
                            <Link to="/solar-panels#group-700" className="mega-item" onClick={handleLinkClick}>
                                <div className="mega-item-left"><span className="mega-watt">700W</span><span className="mega-item-name">Premium Commercial</span></div>
                                <span className="mega-price">Rs. 21,000 &ndash; 26,250</span>
                            </Link>
                        </div>
                        <Link to="/solar-panels" className="mega-view-all" onClick={handleLinkClick}>View All Solar Panels &rarr;</Link>
                    </div>

                    <div className="mega-divider"></div>

                    {/* Inverters Column */}
                    <div className="mega-col">
                        <div className="mega-col-header">
                            <div className="mega-col-icon">&#9889;</div>
                            <div>
                                <h3>Inverters</h3>
                                <p>On-Grid &amp; Hybrid systems for every home size</p>
                            </div>
                        </div>
                        <div className="mega-items">
                            <Link to="/inverters#group-3kw" className="mega-item" onClick={handleLinkClick}>
                                <div className="mega-item-left"><span className="mega-watt kw">3kW</span><span className="mega-item-name">Small Home System</span></div>
                                <span className="mega-price">Rs. 60,000 &ndash; 150,000</span>
                            </Link>
                            <Link to="/inverters#group-5kw" className="mega-item popular-item" onClick={handleLinkClick}>
                                <div className="mega-item-left"><span className="mega-watt kw">5kW</span><span className="mega-item-name">Most Popular</span></div>
                                <span className="mega-price">Rs. 140,000 &ndash; 230,000</span>
                            </Link>
                            <Link to="/inverters#group-6kw" className="mega-item" onClick={handleLinkClick}>
                                <div className="mega-item-left"><span className="mega-watt kw">6kW</span><span className="mega-item-name">Large Home System</span></div>
                                <span className="mega-price">Rs. 200,000 &ndash; 270,000</span>
                            </Link>
                            <Link to="/inverters#group-8kw" className="mega-item" onClick={handleLinkClick}>
                                <div className="mega-item-left"><span className="mega-watt kw">8kW</span><span className="mega-item-name">Heavy Residential</span></div>
                                <span className="mega-price">Rs. 280,000 &ndash; 370,000</span>
                            </Link>
                            <Link to="/inverters#group-10kw" className="mega-item" onClick={handleLinkClick}>
                                <div className="mega-item-left"><span className="mega-watt kw">10kW</span><span className="mega-item-name">Commercial Grade</span></div>
                                <span className="mega-price">Rs. 350,000 &ndash; 480,000</span>
                            </Link>
                        </div>
                        <Link to="/inverters" className="mega-view-all" onClick={handleLinkClick}>View All Inverters &rarr;</Link>
                    </div>

                    {/* Side CTA */}
                    <div className="mega-cta-col">
                        <div className="mega-cta-box">
                            <div className="mega-cta-icon">&#128202;</div>
                            <h4>Not sure what you need?</h4>
                            <p>Share your electricity bill and we'll design the perfect system &mdash; free.</p>
                            <Link to="/#contact" className="btn btn-primary" id="megaCtaBtn" onClick={handleLinkClick}>Free Consultation</Link>
                        </div>
                        <div className="mega-brands">
                            <span className="mega-brands-label">Brands We Carry</span>
                            <div className="mega-brand-list">
                                <span>Longi</span><span>Jinko</span><span>Canadian</span>
                                <span>JA Solar</span><span>Trina</span><span>Huawei</span>
                                <span>Growatt</span><span>Solis</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mega-backdrop" id="megaBackdrop" onClick={closeMega}></div>
        </>
    )
}
