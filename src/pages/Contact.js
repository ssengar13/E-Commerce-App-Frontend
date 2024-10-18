import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { IoHome, IoCall, IoMail } from "react-icons/io5";
import { FaInfo } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <Meta title="Contact Us - Get in Touch with [Your Website Name" />
            <BreadCrumb title="Contact Us" />
            <div className="contact-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.42107256147!2d72.56932210232718!3d19.081988520926267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1729243871147!5m2!1sen!2sin" width="100%" height="450" className='border-0' title='map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className='d-flex justify-content-between contact-inner-wrapper'>
                                <div>
                                    <h3 className="contact-title mb-4">Contact</h3>
                                    <form action="" className='d-flex gap-15 flex-column'>
                                        <div>
                                            <input type="text" className="form-control" placeholder='Name' />
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" placeholder='Email' />
                                        </div>
                                        <div>
                                            <input type="tel" className="form-control" placeholder='Phone Number' />
                                        </div>
                                        <div>
                                            <textarea name='' id='' className='w-100 form-control' placeholder='Comments' cols="10" rows="4"></textarea>
                                        </div>
                                        <div>
                                            <button className='button border-0'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title mb-4">Get in touch with us.</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='mb-4 d-flex gap-10 align-items-center'>
                                                <IoHome className='fs-5 text-secondary mb-0' />
                                                <address className='mb-0'>
                                                    Landmark Residency,
                                                    Lane No.2 Veerbhadra Nagar,
                                                    Baner, Pune 411045
                                                </address>
                                            </li>
                                            <li className='mb-4 d-flex gap-10 align-items-center'>
                                                <IoCall className='fs-5 text-secondary mb-0' />
                                                <a href='tel:+919876543210' className=''>+91 98765 43210</a>
                                            </li>
                                            <li className='mb-4 d-flex gap-10 align-items-center'>
                                                <IoMail className='fs-5 text-secondary mb-0' />
                                                <a href='mailto:sengarsonal13@gmail.com' className=''>sengarsonal13@gmail.com</a>
                                            </li>
                                            <li className='mb-4 d-flex gap-10 align-items-center'>
                                                <FaInfo className='fs-5 text-secondary mb-0' />
                                                <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact