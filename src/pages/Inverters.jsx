import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function useProductReveal() {
    useEffect(() => {
        const cards = document.querySelectorAll('.product-card, .type-card, .system-banner')
        cards.forEach(el => {
            el.style.opacity = '0'
            el.style.transform = 'translateY(28px)'
            el.style.transition = 'opacity .55s ease, transform .55s ease'
        })

        const io = new IntersectionObserver(entries => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) {
                    setTimeout(() => {
                        e.target.style.opacity = '1'
                        e.target.style.transform = 'translateY(0)'
                    }, i * 70)
                    io.unobserve(e.target)
                }
            })
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

        cards.forEach(el => io.observe(el))
        return () => io.disconnect()
    }, [])
}

export default function Inverters() {
    const [activeFilter, setActiveFilter] = useState('all')
    useProductReveal()

    const filters = [
        { value: 'all', label: 'All' },
        { value: '3kw', label: '3kW' },
        { value: '5kw', label: '5kW' },
        { value: '6kw', label: '6kW' },
        { value: '8kw', label: '8kW' },
        { value: '10kw', label: '10kW' },
    ]

    const handleFilter = (filter) => {
        setActiveFilter(filter)
        document.querySelectorAll('.watt-group').forEach(group => {
            if (filter === 'all' || group.id === `group-${filter}`) {
                group.style.display = ''
                group.style.animation = 'fadeUp .45s ease both'
            } else {
                group.style.display = 'none'
            }
        })
    }

    return (
        <>
            {/* PAGE HERO */}
            <section className="page-hero inverter-hero">
                <div className="page-hero-bg inverter-bg"></div>
                <div className="container">
                    <div className="breadcrumb"><Link to="/">Home</Link> / <span>Inverters</span></div>
                    <h1 className="page-hero-title">Solar <span className="gradient-text">Inverters</span></h1>
                    <p className="page-hero-sub">On-Grid &amp; Hybrid inverters for every system size. Pakistani market pricing — 3kW to 10kW.</p>
                </div>
            </section>

            {/* TYPE TABS */}
            <div className="filter-bar">
                <div className="container filter-inner">
                    <span className="filter-label">Inverter Type:</span>
                    <div className="filter-btns">
                        {filters.map(f => (
                            <button
                                key={f.value}
                                className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
                                data-filter={f.value}
                                onClick={() => handleFilter(f.value)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* TYPE EXPLAINER */}
            <div className="type-explainer">
                <div className="container type-cards">
                    <div className="type-card">
                        <div className="type-icon">🔌</div>
                        <h4>On-Grid</h4>
                        <p>Connected to utility grid. Exports excess power. No battery required. Best ROI for areas with stable grid.</p>
                    </div>
                    <div className="type-card highlighted">
                        <div className="type-icon">🔋</div>
                        <h4>Hybrid</h4>
                        <p>Works with grid + battery backup. Powers home during loadshedding. Most popular choice in Pakistan.</p>
                    </div>
                    <div className="type-card">
                        <div className="type-icon">🏝</div>
                        <h4>Off-Grid</h4>
                        <p>Fully independent from grid. Runs entirely on solar + batteries. Ideal for remote areas.</p>
                    </div>
                </div>
            </div>

            {/* INVERTERS SECTION */}
            <section className="products-section">
                <div className="container">

                    {/* 3kW */}
                    <div className="watt-group" id="group-3kw">
                        <h2 className="watt-heading"><span className="watt-badge">3kW</span> Inverters</h2>
                        <p className="watt-desc">Suitable for small homes (2–3 rooms). Handles basic load: fans, lights, small AC. Recommended: 6–8 × 550W panels.</p>
                        <div className="system-banner">
                            <div className="sys-stat"><span>Panels Needed</span><strong>6–8 panels</strong></div>
                            <div className="sys-stat"><span>Monthly Output</span><strong>~360–420 kWh</strong></div>
                            <div className="sys-stat"><span>Bill Savings</span><strong>Rs. 8,000–12,000/mo</strong></div>
                            <div className="sys-stat"><span>Full System Cost</span><strong>Rs. 3.5L – 4.5L</strong></div>
                        </div>
                        <div className="products-grid">
                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Inverex</div>
                                </div>
                                <h3>Inverex Nitrox 3kW On-Grid</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>3kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>On-Grid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Single Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>5 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 60,000 – 80,000</div>
                                    <div className="price-watt">Entry-Level On-Grid</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card featured-product">
                                <div className="featured-ribbon">Best Value</div>
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Solis</div>
                                </div>
                                <h3>Solis 3kW Hybrid Inverter</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>3kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Single Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>5 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 80,000 – 120,000</div>
                                    <div className="price-watt">Hybrid with Battery Support</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Growatt</div>
                                </div>
                                <h3>Growatt MIN 3000TL 3kW</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>3kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Single Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>5 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 100,000 – 150,000</div>
                                    <div className="price-watt">Premium Hybrid</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>
                        </div>
                    </div>

                    {/* 5kW */}
                    <div className="watt-group" id="group-5kw">
                        <h2 className="watt-heading">
                            <span className="watt-badge popular">5kW</span> Inverters
                            <span className="most-pop-badge">Most Popular</span>
                        </h2>
                        <p className="watt-desc">The most popular system size for Pakistani homes. Runs 1–2 ACs + full household load comfortably. Recommended: 10–12 × 550W panels.</p>
                        <div className="system-banner">
                            <div className="sys-stat"><span>Panels Needed</span><strong>10–12 panels</strong></div>
                            <div className="sys-stat"><span>Monthly Output</span><strong>~600–700 kWh</strong></div>
                            <div className="sys-stat"><span>Bill Savings</span><strong>Rs. 15,000–22,000/mo</strong></div>
                            <div className="sys-stat"><span>Full System Cost</span><strong>Rs. 6L – 8L</strong></div>
                        </div>
                        <div className="products-grid">
                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Inverex</div>
                                </div>
                                <h3>Inverex Veyron II 5kW Hybrid</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>5kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Single Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>5 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 140,000 – 175,000</div>
                                    <div className="price-watt">Hybrid with Backup</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card featured-product">
                                <div className="featured-ribbon">Top Pick</div>
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Huawei</div>
                                </div>
                                <h3>Huawei SUN2000 5kW Hybrid</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>5kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Single Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>10 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 190,000 – 230,000</div>
                                    <div className="price-watt">Smart AI Optimization</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Solis</div>
                                </div>
                                <h3>Solis S6 5kW On-Grid</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>5kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>On-Grid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Single Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>5 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 120,000 – 150,000</div>
                                    <div className="price-watt">Grid-Tied Only</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>
                        </div>
                    </div>

                    {/* 6kW */}
                    <div className="watt-group" id="group-6kw">
                        <h2 className="watt-heading"><span className="watt-badge">6kW</span> Inverters</h2>
                        <p className="watt-desc">Ideal for larger homes with heavy load. Runs 2 ACs + all appliances. Recommended: 12–14 × 550W panels.</p>
                        <div className="system-banner">
                            <div className="sys-stat"><span>Panels Needed</span><strong>12–14 panels</strong></div>
                            <div className="sys-stat"><span>Monthly Output</span><strong>~720–840 kWh</strong></div>
                            <div className="sys-stat"><span>Bill Savings</span><strong>Rs. 18,000–26,000/mo</strong></div>
                            <div className="sys-stat"><span>Full System Cost</span><strong>Rs. 7.5L – 9.5L</strong></div>
                        </div>
                        <div className="products-grid">
                            <div className="product-card featured-product">
                                <div className="featured-ribbon">Popular</div>
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Dong Jin</div>
                                </div>
                                <h3>Dong Jin ECO 6kW Hybrid IP66</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>6kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Single Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>5 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 220,000</div>
                                    <div className="price-watt">IP66 Weatherproof</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Growatt</div>
                                </div>
                                <h3>Growatt SPH 6000TL 6kW</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>6kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Single Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>5 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 200,000 – 240,000</div>
                                    <div className="price-watt">Wi-Fi Monitoring</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Huawei</div>
                                </div>
                                <h3>Huawei SUN2000 6kW Hybrid</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>6kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Single Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>10 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 230,000 – 270,000</div>
                                    <div className="price-watt">AI Smart Energy</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>
                        </div>
                    </div>

                    {/* 8kW */}
                    <div className="watt-group" id="group-8kw">
                        <h2 className="watt-heading"><span className="watt-badge">8kW</span> Inverters</h2>
                        <p className="watt-desc">Heavy residential &amp; small commercial use. Handles 3+ ACs and complete home load. Recommended: 16–18 × 550W panels.</p>
                        <div className="system-banner">
                            <div className="sys-stat"><span>Panels Needed</span><strong>16–18 panels</strong></div>
                            <div className="sys-stat"><span>Monthly Output</span><strong>~960–1080 kWh</strong></div>
                            <div className="sys-stat"><span>Bill Savings</span><strong>Rs. 24,000–35,000/mo</strong></div>
                            <div className="sys-stat"><span>Full System Cost</span><strong>Rs. 9L – 12L</strong></div>
                        </div>
                        <div className="products-grid">
                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Solis</div>
                                </div>
                                <h3>Solis RHI 8kW Hybrid</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>8kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Three Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>5 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 280,000 – 330,000</div>
                                    <div className="price-watt">3-Phase Hybrid</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card featured-product">
                                <div className="featured-ribbon">Recommended</div>
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Huawei</div>
                                </div>
                                <h3>Huawei SUN2000 8kW Hybrid</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>8kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Three Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>10 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 310,000 – 370,000</div>
                                    <div className="price-watt">AI Smart + App Control</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Growatt</div>
                                </div>
                                <h3>Growatt MOD 8000TL 8kW</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>8kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>On-Grid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Three Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>5 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 250,000 – 300,000</div>
                                    <div className="price-watt">3-Phase On-Grid</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>
                        </div>
                    </div>

                    {/* 10kW */}
                    <div className="watt-group" id="group-10kw">
                        <h2 className="watt-heading"><span className="watt-badge premium">10kW</span> Inverters</h2>
                        <p className="watt-desc">Commercial &amp; large residential systems. Maximum household independence. Recommended: 18–22 × 550W panels.</p>
                        <div className="system-banner">
                            <div className="sys-stat"><span>Panels Needed</span><strong>18–22 panels</strong></div>
                            <div className="sys-stat"><span>Monthly Output</span><strong>~1200–1320 kWh</strong></div>
                            <div className="sys-stat"><span>Bill Savings</span><strong>Rs. 30,000–45,000/mo</strong></div>
                            <div className="sys-stat"><span>Full System Cost</span><strong>Rs. 10L – 15L</strong></div>
                        </div>
                        <div className="products-grid">
                            <div className="product-card featured-product">
                                <div className="featured-ribbon">Commercial Grade</div>
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Dong Jin</div>
                                </div>
                                <h3>Dong Jin ECO 10kW Hybrid IP66</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>10kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Three Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>5 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 380,000</div>
                                    <div className="price-watt">IP66 Weatherproof</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Huawei</div>
                                </div>
                                <h3>Huawei SUN2000 10kW Hybrid</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>10kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Three Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>10 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 400,000 – 480,000</div>
                                    <div className="price-watt">Top-of-the-line AI System</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">⚡</div>
                                    <div className="product-brand">Solis</div>
                                </div>
                                <h3>Solis S6 10kW Three Phase</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Capacity</span><strong>10kW</strong></div>
                                    <div className="spec"><span>Type</span><strong>Hybrid</strong></div>
                                    <div className="spec"><span>Phases</span><strong>Three Phase</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>5 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Price Per Unit</div>
                                    <div className="price-amount">Rs. 350,000 – 420,000</div>
                                    <div className="price-watt">3-Phase Hybrid</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>
                        </div>
                    </div>

                    {/* Price Note */}
                    <div className="price-note">
                        <span>⚠</span>
                        <p>Prices are based on current Islamabad market rates (March 2026) and may vary by brand, supplier &amp; features. Battery cost is additional. Contact us for confirmed pricing and full system packages.</p>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="prod-cta">
                <div className="container">
                    <h2>Need help choosing the right inverter?</h2>
                    <p>We'll size your system based on your electricity bill and usage — completely free.</p>
                    <Link to="/#contact" className="btn btn-primary btn-lg">Get Free System Design →</Link>
                </div>
            </section>

            <Footer minimal />
        </>
    )
}
