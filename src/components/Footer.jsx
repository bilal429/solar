import { Link } from 'react-router-dom'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer({ minimal = false }) {
    if (minimal) {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
                        <p>© 2026 Solar All rights reserved.</p>
                        <div className="footer-legal">
                            <Link to="/solar-panels">Solar Panels</Link>
                            <Link to="/inverters">Inverters</Link>
                            <Link to="/#contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <span className="logo-icon">☀</span>
                            <span className="logo-text">Solar</span>
                        </Link>
                        <p>Clean, affordable solar energy for homes and businesses across the US. Powering a sustainable future.</p>
                        <div className="social-links">
                            <a href="#" className="social">in</a>
                            <a href="#" className="social">tw</a>
                            <a href="#" className="social">fb</a>
                            <a href="#" className="social">yt</a>
                            <a href="https://wa.me/923001234567" target="_blank" rel="noopener" className="social social-wa" title="Chat on WhatsApp">
                                <WhatsAppIcon width={16} height={16} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Residential Solar</a></li>
                            <li><a href="#">Commercial Solar</a></li>
                            <li><a href="#">Battery Storage</a></li>
                            <li><a href="#">Energy Monitoring</a></li>
                            <li><a href="#">Maintenance</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Solar Calculator</a></li>
                            <li><a href="#">Incentives Guide</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Case Studies</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 Solar . All rights reserved.</p>
                    <a href="https://wa.me/923001234567" target="_blank" rel="noopener" className="footer-wa-btn">
                        <WhatsAppIcon width={16} height={16} />
                        Chat on WhatsApp
                    </a>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
