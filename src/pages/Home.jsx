import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function useScrollReveal(selector) {
    useEffect(() => {
        const els = document.querySelectorAll(selector)
        els.forEach(el => el.classList.add('reveal'))

        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 80)
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })

        els.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [selector])
}

function useCounterAnimation() {
    useEffect(() => {
        function animateCounter(el) {
            const target = parseInt(el.getAttribute('data-target'), 10)
            const duration = 2000
            const start = performance.now()

            const tick = now => {
                const elapsed = now - start
                const progress = Math.min(elapsed / duration, 1)
                const eased = 1 - Math.pow(1 - progress, 3)
                el.textContent = Math.floor(eased * target).toLocaleString()
                if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
        }

        const statsSection = document.querySelector('.stats')
        if (!statsSection) return

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.stat-num').forEach(animateCounter)
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.3 })

        observer.observe(statsSection)
        return () => observer.disconnect()
    }, [])
}

export default function Home() {
    const [formStatus, setFormStatus] = useState('idle')

    useScrollReveal('.service-card, .stat-item, .step, .testimonial-card, .about-text, .contact-info, .contact-form, .about-card')
    useCounterAnimation()

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        const btn = e.target.querySelector('button[type="submit"]')
        btn.textContent = 'Sending…'
        btn.disabled = true
        setFormStatus('sending')

        setTimeout(() => {
            btn.textContent = '✓ Message Sent!'
            btn.style.background = 'linear-gradient(135deg, #22C55E, #16A34A)'
            e.target.reset()
            setFormStatus('sent')
            setTimeout(() => {
                btn.textContent = 'Send Message →'
                btn.style.background = ''
                btn.disabled = false
                setFormStatus('idle')
            }, 3500)
        }, 1400)
    }, [])

    const handleSmoothScroll = (e, hash) => {
        e.preventDefault()
        const target = document.querySelector(hash)
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <>
            {/* ─── HERO ─── */}
            <section className="hero" id="home">
                <div className="hero-video-wrap">
                    <video autoPlay muted loop playsInline className="hero-video">
                        <source src="/hero-bg.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content">
                    <div className="hero-badge">🌱 100% Renewable Energy</div>
                    <h1 className="hero-title">
                        Power Your World<br />
                        <span className="gradient-text">With The Sun</span>
                    </h1>
                    <p className="hero-subtitle">
                        Premium solar solutions for homes and businesses. Cut your energy bills by up to <strong>80%</strong> and live sustainably — backed by a 25-year warranty.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary btn-lg" onClick={(e) => handleSmoothScroll(e, '#contact')}>Get Free Quote →</a>
                        <a href="#about" className="btn btn-outline btn-lg" onClick={(e) => handleSmoothScroll(e, '#about')}>Learn More</a>
                    </div>
                    <div className="hero-trust">
                        <div className="trust-item"><span className="trust-num">5,000+</span><span>Installations</span></div>
                        <div className="trust-divider"></div>
                        <div className="trust-item"><span className="trust-num">25yr</span><span>Warranty</span></div>
                        <div className="trust-divider"></div>
                        <div className="trust-item"><span className="trust-num">4.9★</span><span>Rating</span></div>
                    </div>
                </div>
                <div className="hero-scroll">
                    <div className="scroll-dot"></div>
                </div>
            </section>

            {/* ─── MARQUEE BAND ─── */}
            <div className="marquee-band">
                <div className="marquee-track">
                    <span>☀ Clean Energy</span>
                    <span>⚡ 80% Bill Reduction</span>
                    <span>🌍 Carbon Neutral</span>
                    <span>🔋 Battery Storage</span>
                    <span>🏠 Residential &amp; Commercial</span>
                    <span>🛡 25-Year Warranty</span>
                    <span>☀ Clean Energy</span>
                    <span>⚡ 80% Bill Reduction</span>
                    <span>🌍 Carbon Neutral</span>
                    <span>🔋 Battery Storage</span>
                    <span>🏠 Residential &amp; Commercial</span>
                    <span>🛡 25-Year Warranty</span>
                </div>
            </div>

            {/* ─── ABOUT ─── */}
            <section className="about section" id="about">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-visual">
                            <div className="about-img-wrap">
                                <div className="about-card floating">
                                    <div className="about-card-icon">☀</div>
                                    <div>
                                        <strong>Solar Output</strong>
                                        <span>Today: 42.6 kWh</span>
                                    </div>
                                    <div className="about-card-badge green">+12%</div>
                                </div>
                                <div className="about-img-block">
                                    <video autoPlay muted loop playsInline className="about-video">
                                        <source src="/about-anim.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="about-card floating-2">
                                    <div className="about-card-icon">🌿</div>
                                    <div>
                                        <strong>CO₂ Saved</strong>
                                        <span>18.4 tonnes this year</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-text">
                            <span className="section-label">Who We Are</span>
                            <h2 className="section-title">Leading the Solar Revolution Since 2008</h2>
                            <p className="section-desc">
                                Solar Solution Islamabad has been at the forefront of renewable energy for over 15 years. From single rooftop panels to utility-scale installations, we design, install, and maintain solar systems that deliver measurable results.
                            </p>
                            <ul className="about-list">
                                <li><span className="check">✓</span> Certified &amp; licensed solar engineers</li>
                                <li><span className="check">✓</span> Custom system design for your energy needs</li>
                                <li><span className="check">✓</span> Full financing options with 0% APR</li>
                                <li><span className="check">✓</span> 24/7 monitoring &amp; support portal</li>
                            </ul>
                            <a href="#services" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#services')}>Our Services →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SERVICES ─── */}
            <section className="services section" id="services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">What We Offer</span>
                        <h2 className="section-title">Solar Solutions for Every Need</h2>
                        <p className="section-desc">From consultation to installation to monitoring — we handle everything.</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">🏠</div>
                            <h3>Residential Solar</h3>
                            <p>Custom rooftop systems sized for your home. Save on electricity bills from day one with smart energy management.</p>
                            <a href="#contact" className="service-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Learn more →</a>
                        </div>
                        <div className="service-card featured">
                            <div className="featured-badge">Most Popular</div>
                            <div className="service-icon">🏢</div>
                            <h3>Commercial Solar</h3>
                            <p>Large-scale solar for businesses, warehouses, and industrial facilities. Maximize ROI with enterprise-grade systems.</p>
                            <a href="#contact" className="service-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Learn more →</a>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔋</div>
                            <h3>Battery Storage</h3>
                            <p>Store surplus energy with our advanced battery systems. Stay powered during grid outages and off-peak hours.</p>
                            <a href="#contact" className="service-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Learn more →</a>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📊</div>
                            <h3>Energy Monitoring</h3>
                            <p>Real-time dashboards and alerts. Track your solar production, consumption, and savings from any device.</p>
                            <a href="#contact" className="service-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Learn more →</a>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔧</div>
                            <h3>Maintenance &amp; Repair</h3>
                            <p>Annual servicing, panel cleaning, inverter checks, and rapid response repair — keeping your system at peak output.</p>
                            <a href="#contact" className="service-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Learn more →</a>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🌾</div>
                            <h3>Agricultural Solar</h3>
                            <p>Power irrigation, livestock facilities, and farm operations with solar. Reduce operating costs dramatically.</p>
                            <a href="#contact" className="service-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Learn more →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── STATS ─── */}
            <section className="stats section" id="stats">
                <div className="stats-bg"></div>
                <div className="container">
                    <div className="section-header light">
                        <span className="section-label light">Our Impact</span>
                        <h2 className="section-title">Numbers That Matter</h2>
                    </div>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-num" data-target="5000">0</div>
                            <div className="stat-suffix">+</div>
                            <div className="stat-label">Installations Completed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num" data-target="120">0</div>
                            <div className="stat-suffix">MW</div>
                            <div className="stat-label">Total Solar Capacity</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num" data-target="85000">0</div>
                            <div className="stat-suffix">T</div>
                            <div className="stat-label">CO₂ Emissions Saved</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num" data-target="98">0</div>
                            <div className="stat-suffix">%</div>
                            <div className="stat-label">Customer Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="testimonials section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Testimonials</span>
                        <h2 className="section-title">What Our Customers Say</h2>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p>"Solar Solution Islamabad cut my electricity bill from $320 to under $40 per month. The install was fast, clean, and professional. Best investment I've ever made."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">JM</div>
                                <div>
                                    <strong>James Mitchell</strong>
                                    <span>Homeowner, Austin TX</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card featured">
                            <div className="stars">★★★★★</div>
                            <p>"We installed 480 panels across our warehouse complex. Payback period was 4 years and now we're saving over $80,000 annually. Incredible ROI."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">SR</div>
                                <div>
                                    <strong>Sarah Rodriguez</strong>
                                    <span>Operations Director, LogiCorp</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p>"The monitoring app is amazing — I can see exactly how much energy we're producing and what we're saving in real time. The team was fantastic throughout."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">DK</div>
                                <div>
                                    <strong>David Kim</strong>
                                    <span>Homeowner, San Diego CA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CONTACT ─── */}
            <section className="contact section" id="contact">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <span className="section-label">Contact Us</span>
                            <h2 className="section-title">Solar Solution Islamabad</h2>
                            <div className="biz-rating-inline">
                                <span className="biz-stars-inline">★★★★★</span>
                                <span className="biz-score-inline">5.0</span>
                                <span className="biz-reviews-inline">(5 reviews)</span>
                            </div>
                            <p>Solar energy system service in Islamabad. Get in touch with our team — we'll get back to you within 24 hours.</p>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <span className="contact-icon">📍</span>
                                    <div>
                                        <strong>Address</strong>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">🕐</span>
                                    <div>
                                        <strong>Popular Times</strong>
                                        <span>12 PM · Usually not too busy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" placeholder="John" required />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Smith" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="+1 (555) 000-0000" />
                            </div>
                            <div className="form-group">
                                <label>Property Type</label>
                                <select defaultValue="">
                                    <option value="">Select type...</option>
                                    <option>Residential</option>
                                    <option>Commercial</option>
                                    <option>Industrial</option>
                                    <option>Agricultural</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Tell us about your energy needs..." rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">Send Message →</button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
