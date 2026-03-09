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

export default function SolarPanels() {
    const [activeFilter, setActiveFilter] = useState('all')
    useProductReveal()

    const filters = [
        { value: 'all', label: 'All' },
        { value: '300', label: '300W' },
        { value: '400', label: '400W' },
        { value: '550', label: '550W' },
        { value: '580', label: '580W' },
        { value: '700', label: '700W' },
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
            <section className="page-hero">
                <div className="page-hero-bg"></div>
                <div className="container">
                    <div className="breadcrumb"><Link to="/">Home</Link> / <span>Solar Panels</span></div>
                    <h1 className="page-hero-title">Solar <span className="gradient-text">Panels</span></h1>
                    <p className="page-hero-sub">Premium A-Grade Tier-1 panels from the world's top brands. All prices per piece — Islamabad market rates.</p>
                </div>
            </section>

            {/* FILTER BAR */}
            <div className="filter-bar">
                <div className="container filter-inner">
                    <span className="filter-label">Filter by Wattage:</span>
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

            {/* PANELS GRID */}
            <section className="products-section">
                <div className="container">

                    {/* 300W */}
                    <div className="watt-group" id="group-300">
                        <h2 className="watt-heading"><span className="watt-badge">300W</span> Solar Panels</h2>
                        <p className="watt-desc">Ideal for small homes, shops &amp; basic appliances. Budget-friendly entry-level option.</p>
                        <div className="products-grid">
                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">JA Solar</div>
                                </div>
                                <h3>JA Solar 300W Mono</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>300W</strong></div>
                                    <div className="spec"><span>Type</span><strong>Monofacial</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>18.5%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 8,700 – 9,300</div>
                                    <div className="price-watt">~Rs. 29–31 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Trina Solar</div>
                                </div>
                                <h3>Trina Solar 300W Poly</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>300W</strong></div>
                                    <div className="spec"><span>Type</span><strong>Polycrystalline</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>18.2%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 8,400 – 9,900</div>
                                    <div className="price-watt">~Rs. 28–33 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Crown Solar</div>
                                </div>
                                <h3>Crown Solar 300W Mono</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>300W</strong></div>
                                    <div className="spec"><span>Type</span><strong>Monofacial</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>18.0%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>10 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 7,500 – 9,000</div>
                                    <div className="price-watt">~Rs. 25–30 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>
                        </div>
                    </div>

                    {/* 400W */}
                    <div className="watt-group" id="group-400">
                        <h2 className="watt-heading"><span className="watt-badge">400W</span> Solar Panels</h2>
                        <p className="watt-desc">Great for medium homes with ACs and multiple appliances. Good power-to-size ratio.</p>
                        <div className="products-grid">
                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Jinko Solar</div>
                                </div>
                                <h3>Jinko Solar 400W Mono</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>400W</strong></div>
                                    <div className="spec"><span>Type</span><strong>Monofacial</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>20.4%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 12,000 – 12,800</div>
                                    <div className="price-watt">~Rs. 30–32 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Longi Solar</div>
                                </div>
                                <h3>Longi Solar 400W Hi-MO</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>400W</strong></div>
                                    <div className="spec"><span>Type</span><strong>Monofacial</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>21.0%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 12,800 – 14,000</div>
                                    <div className="price-watt">~Rs. 32–35 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Canadian Solar</div>
                                </div>
                                <h3>Canadian Solar 400W HiKu</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>400W</strong></div>
                                    <div className="spec"><span>Type</span><strong>Monofacial</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>20.6%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 12,400 – 13,600</div>
                                    <div className="price-watt">~Rs. 31–34 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>
                        </div>
                    </div>

                    {/* 550W */}
                    <div className="watt-group" id="group-550">
                        <h2 className="watt-heading">
                            <span className="watt-badge popular">550W</span> Solar Panels
                            <span className="most-pop-badge">Most Popular</span>
                        </h2>
                        <p className="watt-desc">The most widely used size in Pakistan. Perfect for 5kW–10kW residential systems. High efficiency, fewer panels needed.</p>
                        <div className="products-grid">
                            <div className="product-card featured-product">
                                <div className="featured-ribbon">Best Seller</div>
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Longi Solar</div>
                                </div>
                                <h3>Longi HiMO 10X 550W N-Type</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>550W</strong></div>
                                    <div className="spec"><span>Type</span><strong>N-Type Bifacial</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>22.0%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 17,600 – 19,800</div>
                                    <div className="price-watt">~Rs. 32–36 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Jinko Solar</div>
                                </div>
                                <h3>Jinko Tiger Neo 550W</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>550W</strong></div>
                                    <div className="spec"><span>Type</span><strong>N-Type TOPCon</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>21.8%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 16,500 – 17,600</div>
                                    <div className="price-watt">~Rs. 30–32 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">JA Solar</div>
                                </div>
                                <h3>JA Solar DeepBlue 4.0 550W</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>550W</strong></div>
                                    <div className="spec"><span>Type</span><strong>N-Type Bifacial</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>21.5%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 15,950 – 17,050</div>
                                    <div className="price-watt">~Rs. 29–31 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>
                        </div>
                    </div>

                    {/* 580W */}
                    <div className="watt-group" id="group-580">
                        <h2 className="watt-heading"><span className="watt-badge">580W</span> Solar Panels</h2>
                        <p className="watt-desc">High-output panels for larger homes and commercial setups. Maximises generation per roof space.</p>
                        <div className="products-grid">
                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Canadian Solar</div>
                                </div>
                                <h3>Canadian Solar HiHero 580W</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>580W</strong></div>
                                    <div className="spec"><span>Type</span><strong>N-Type HJT</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>22.5%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 17,980 – 19,720</div>
                                    <div className="price-watt">~Rs. 31–34 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Trina Solar</div>
                                </div>
                                <h3>Trina Vertex S+ 580W</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>580W</strong></div>
                                    <div className="spec"><span>Type</span><strong>N-Type TOPCon</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>22.1%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 16,240 – 19,140</div>
                                    <div className="price-watt">~Rs. 28–33 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Longi Solar</div>
                                </div>
                                <h3>Longi HiMO 7 580W Bifacial</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>580W</strong></div>
                                    <div className="spec"><span>Type</span><strong>N-Type Bifacial</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>22.3%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 18,560 – 20,300</div>
                                    <div className="price-watt">~Rs. 32–35 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>
                        </div>
                    </div>

                    {/* 700W */}
                    <div className="watt-group" id="group-700">
                        <h2 className="watt-heading"><span className="watt-badge premium">700W</span> Solar Panels</h2>
                        <p className="watt-desc">Ultra-high power commercial-grade panels. Maximum output, fewer panels needed. Limited availability.</p>
                        <div className="products-grid">
                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Jinko Solar</div>
                                </div>
                                <h3>Jinko Tiger Pro 700W</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>700W</strong></div>
                                    <div className="spec"><span>Type</span><strong>N-Type TOPCon</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>23.0%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 21,000 – 22,400</div>
                                    <div className="price-watt">~Rs. 30–32 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Longi Solar</div>
                                </div>
                                <h3>Longi HiMO X6 700W</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>700W</strong></div>
                                    <div className="spec"><span>Type</span><strong>N-Type Bifacial</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>23.2%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 22,400 – 25,200</div>
                                    <div className="price-watt">~Rs. 32–36 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Get Quote</Link>
                            </div>

                            <div className="product-card coming-soon">
                                <div className="product-header">
                                    <div className="product-icon">☀</div>
                                    <div className="product-brand">Canadian Solar</div>
                                </div>
                                <h3>Canadian Solar HiHero 700W</h3>
                                <div className="product-specs">
                                    <div className="spec"><span>Wattage</span><strong>700W</strong></div>
                                    <div className="spec"><span>Type</span><strong>N-Type HJT</strong></div>
                                    <div className="spec"><span>Efficiency</span><strong>23.5%</strong></div>
                                    <div className="spec"><span>Warranty</span><strong>25 Years</strong></div>
                                </div>
                                <div className="product-price">
                                    <div className="price-per">Per Piece</div>
                                    <div className="price-amount">Rs. 23,100 – 26,250</div>
                                    <div className="price-watt">~Rs. 33–37.5 /watt</div>
                                </div>
                                <Link to="/#contact" className="btn btn-primary btn-full">Enquire</Link>
                            </div>
                        </div>
                    </div>

                    {/* Price Note */}
                    <div className="price-note">
                        <span>⚠</span>
                        <p>Prices are based on current Islamabad market rates (March 2026) and may vary by supplier. Contact us for the latest confirmed pricing and bulk discounts.</p>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="prod-cta">
                <div className="container">
                    <h2>Not sure which panel is right for you?</h2>
                    <p>Our experts will analyse your energy needs and recommend the perfect system — free of charge.</p>
                    <Link to="/#contact" className="btn btn-primary btn-lg">Get Free Consultation →</Link>
                </div>
            </section>

            <Footer minimal />
        </>
    )
}
