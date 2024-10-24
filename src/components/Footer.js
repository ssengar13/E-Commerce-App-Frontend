import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin, BsYoutube, BsInstagram, BsGithub, BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex align-items-center gap-30">
                                <img src="images/newsletter.png" alt="newsletter" />
                                <h3 className='mb-0 text-white'>Sign Up for Newsletter</h3>
                            </div>
                        </div>
                        <div className="col-7">
                            <div class="input-group">
                                <input type="text" className="form-control py-1" placeholder="Your Email" aria-label="Your Email" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='mb-4 text-white'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'>
                                    Landmark Residency, <br />
                                    Lane No.2 Veerbhadra Nagar, <br />
                                    Baner, Pune 411045
                                </address>
                                <a href='tel:+919876543210' className='mt-3 d-block mb-1 text-white'>+91 98765 43210</a>
                                <a href='mailto:sengarsonal13@gmail.com' className='mt-2 d-block mb-0 text-white'>sengarsonal13@gmail.com</a>
                                <div className="social-icons d-flex align-items-center gap-15 mt-4">
                                    <Link to='#' className='icon-circle'>
                                        <BsFacebook className='text-white fs-4' />
                                    </Link>
                                    <Link to='#' className='icon-circle'>
                                        <BsGithub className='text-white fs-4' />
                                    </Link>
                                    <Link to='#' className='icon-circle'>
                                        <BsInstagram className='text-white fs-4' />
                                    </Link>
                                    <Link to='#' className='icon-circle'>
                                        <BsYoutube className='text-white fs-4' />
                                    </Link>
                                    <Link to='#' className='icon-circle'>
                                        <BsLinkedin className='text-white fs-4' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='mb-4 text-white'>Information</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1' to='/privacy-policy'>Privacy Policy</Link>
                                <Link className='text-white py-2 mb-1' to='/shipping-policy'>Shipping Policy</Link>
                                <Link className='text-white py-2 mb-1' to='/refund-policy'>Refund Policy</Link>
                                <Link className='text-white py-2 mb-1' to='/terms-and-condition'>Terms & Conditions</Link>
                                <Link className='text-white py-2 mb-1' to="/blog">Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='mb-4 text-white'>Account</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Search</Link>
                                <Link className='text-white py-2 mb-1'>About Us</Link>
                                <Link className='text-white py-2 mb-1'>Faq</Link>
                                <Link className='text-white py-2 mb-1' to="/contact">Contact</Link>
                                <Link className='text-white py-2 mb-1'>Size Chart</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='mb-4 text-white'>Quick Links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Accessories</Link>
                                <Link className='text-white py-2 mb-1'>Laptops</Link>
                                <Link className='text-white py-2 mb-1'>Headphones</Link>
                                <Link className='text-white py-2 mb-1'>Smart Watches</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Powered by Amazify.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer