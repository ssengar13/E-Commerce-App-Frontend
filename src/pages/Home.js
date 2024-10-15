import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div id="mainBannerCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="main-banner position-relative">
                                            <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main-banner" />
                                            <div className="main-banner-content position-absolute">
                                                <h4>SUPERCHARGED FOR PROS.</h4>
                                                <h5>iPad S13+ Pro.</h5>
                                                <p>From $999.00 or $41.62/mo.</p>
                                                <Link className='button'>BUY NOW</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="main-banner position-relative">
                                            <img src="images/main-banner.jpg" className='img-fluid rounded-3' alt="main-banner" />
                                            <div className="main-banner-content position-absolute">
                                                <h4>EXPERIENCE THE FUTURE.</h4>
                                                <h5>Special Sale.</h5>
                                                <p>From $2,399.00 or $99.96/mo.</p>
                                                <Link className='button'>SHOP NOW</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="small-banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>BEST SALE</h4>
                                        <h5>Laptops Max</h5>
                                        <p>From $1699.00 or <br /> $64.62/mo.</p>
                                        {/* <Link className='button'>BUY NOW</Link> */}
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="small-banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% OFF</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p>Shops the latest band<br />styles, or colors.</p>
                                        {/* <Link className='button'>BUY NOW</Link> */}
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="small-banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy iPad Air</h5>
                                        <p>From $599.00 or <br /> $41.91/mo.</p>
                                        {/* <Link className='button'>BUY NOW</Link> */}
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="small-banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>FREE ENGRAVING</h4>
                                        <h5>Airpods Max</h5>
                                        <p>High-fidelity playback &<br />ultra-low distortion.</p>
                                        {/* <Link className='button'>BUY NOW</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className='d-flex align-items-center gap-25'>
                                    <img src="images/service.png" alt="services" />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className='mb-0'>From all orders over $100</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-25'>
                                    <img src="images/service-02.png" alt="services" />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className='mb-0'>Save upto 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-25'>
                                    <img src="images/service-03.png" alt="services" />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className='mb-0'>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-25'>
                                    <img src="images/service-04.png" alt="services" />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className='mb-0'>Get Factory direct price</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-25'>
                                    <img src="images/service-05.png" alt="services" />
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className='mb-0'>100% Protected Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Computers & Laptops</h6>
                                        <p>8 Items</p>
                                    </div>
                                    <img src="images/laptop.jpg" alt="camera" />
                                </div>
                                <div className='d-flex align-items-center gap-30'>
                                    <div>
                                        <h6>Cameras & Videos</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="TV" />
                                </div>
                                <div className='d-flex align-items-center gap-30'>
                                    <div>
                                        <h6>Smart Telivision</h6>
                                        <p>12 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="watch" />
                                </div>
                                <div className='d-flex align-items-center gap-30'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/game.png" alt="camera" />
                                </div>
                                <div className='d-flex align-items-center gap-30'>
                                    <div>
                                        <h6>Headphones</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="camera" />
                                </div>
                                <div className='d-flex align-items-center gap-30'>
                                    <div>
                                        <h6>Accessories</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/acc.jpg" alt="camera" />
                                </div>
                                <div className='d-flex align-items-center gap-30'>
                                    <div>
                                        <h6>Portable Speakers</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/speaker.jpg" alt="camera" />
                                </div>
                                <div className='d-flex align-items-center gap-30'>
                                    <div>
                                        <h6>Home Appliances</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/homeapp.jpg" alt="camera" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home