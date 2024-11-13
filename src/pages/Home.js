import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Meta from '../components/Meta'
import Container from '../components/Container'

const Home = () => {
    return (
        <>
            <Meta title="Home - Amazify" />
            <Container class1="home-wrapper-1 py-5">
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
            </Container>

            <Container class1="home-wrapper-2 py-5">
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
            </Container>

            <Container class1="home-wrapper-2 py-5">
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
            </Container>

            <Container class1="featured-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Featured Collection
                        </h3>
                    </div>
                    <ProductCard />
                </div>
            </Container>

            <Container class1="famous-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-1.png" alt="famous" className='img-fluid' />
                            <div className="famous-content position-absolute">
                                <h5 className='brand'>Big Screen</h5>
                                <h6 className='title'>Smart Watch Series 7</h6>
                                <p className='description'>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-2.png" alt="famous" className='img-fluid' />
                            <div className="famous-content position-absolute">
                                <h5 className='brand text-black'>Studio Display</h5>
                                <h6 className='title text-black'>600 nits of brightness.</h6>
                                <p className='description text-black'>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-3.png" alt="famous" className='img-fluid' />
                            <div className="famous-content position-absolute">
                                <h5 className='brand text-black'>Home Speakers</h5>
                                <h6 className='title text-black'>Room-filling Sound.</h6>
                                <p className='description text-black'>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-4.png" alt="famous" className='img-fluid' />
                            <div className="famous-content position-absolute">
                                <h5 className='brand text-black'>Smartphones</h5>
                                <h6 className='title text-black'>Smart Phone 13 Pro. </h6>
                                <p className='description text-black'>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="special-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Special Products
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                </div>
            </Container>

            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Popular Products
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                </div>
            </Container>

            <Container class1="marquee-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className='d-flex'>
                                <div className='mx-5 w-25'>
                                    <img src="images/brand-01.png" alt="brand" />
                                </div>
                                <div className='mx-5 w-25'>
                                    <img src="images/brand-02.png" alt="brand" />
                                </div>
                                <div className='mx-5 w-25'>
                                    <img src="images/brand-03.png" alt="brand" />
                                </div>
                                <div className='mx-5 w-25'>
                                    <img src="images/brand-04.png" alt="brand" />
                                </div>
                                <div className='mx-5 w-25'>
                                    <img src="images/brand-05.png" alt="brand" />
                                </div>
                                <div className='mx-5 w-25'>
                                    <img src="images/brand-06.png" alt="brand" />
                                </div>
                                <div className='mx-5 w-25'>
                                    <img src="images/brand-07.png" alt="brand" />
                                </div>
                                <div className='mx-5 w-25'>
                                    <img src="images/brand-08.png" alt="brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="blog-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Latest News
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home