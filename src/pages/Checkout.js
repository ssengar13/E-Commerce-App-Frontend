import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import headphones from '../images/headphone.jpg'
import Container from '../components/Container'

const checkout = () => {
    return (
        <>
            <Container class1="checkout-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-7 px-5">
                        <div className="checkout-left-data">
                            <h3 className="website-name">Amazify.</h3>
                            <nav className="breadcrumb-nav" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/cart" className='text-secondary'>Cart</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Information</li>
                                    <li className="breadcrumb-item" aria-current="page">Shipping</li>
                                    <li className="breadcrumb-item" aria-current="page">Payment</li>
                                </ol>
                            </nav>
                            <h4 className="title">Contact Information</h4>
                            <p className="user-details">Sonal Sengar (sengarsonal13@gmail.com)</p>
                            <form action="" className='gap-15 d-flex flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <select name="" id="" className='form-select form-control'>
                                        <option value="" selected disabled>Select Country</option>
                                        <option value="india">India</option>
                                        <option value="usa">USA</option>
                                        <option value="canada">Canada</option>
                                        <option value="england">England</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className="form-control" placeholder='First Name (Optional)' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className="form-control" placeholder='Last Name' />
                                </div>
                                <div className='w-100'>
                                    <input type="text" className="form-control" placeholder='Address' />
                                </div>
                                <div className='w-100'>
                                    <input type="text" className="form-control" placeholder='Appartment, suite, etc. (Optional)' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className="form-control" placeholder='City' />
                                </div>
                                <div className='flex-grow-1'>
                                    <select name="" id="" className='form-select form-control'>
                                        <option value="" selected disabled>Select State</option>
                                        <option value="mumbai">Mumbai</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="pune">Pune</option>
                                        <option value="bangalore">Bangalore</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className="form-control" placeholder='Zip code' />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between mt-4 align-items-center">
                                        <Link to='/cart' className='d-flex align-items-center gap-10 back-cart '><HiOutlineArrowLeft />Go back to Cart</Link>
                                        <Link to='/cart' className='d-flex align-items-center gap-10 button'>Continue to Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5 order-detail  border-vertical px-5">
                        <div className='border-bottom py-4'>
                            <div className="d-flex justify-content-between align-items-center gap-10">
                                <div className='w-80 d-flex gap-20'>
                                    <div className='w-20 position-relative'>
                                        <span style={{ "top": "-8px", "left": "-8px" }} className="badge bg-secondary text-white rounded-circle position-absolute">1</span>
                                        <img className='img-fluid' src={headphones} alt="product" />
                                    </div>
                                    <div>
                                        <h5 className="title">Kids headphones bulk 10 pack multicolored for students</h5>
                                        <h5>S | Red</h5>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-0" style={{ whiteSpace: "nowrap" }}>$ 100.00</h6>
                                </div>
                            </div>
                        </div>

                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5>Subtotal :</h5>
                                <h6>$ 90.00</h6>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5>Shipping :</h5>
                                <h6>$ 10.00</h6>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center py-4 border-bottom'>
                            <h3>Total :</h3>
                            <h4>$ 100.00</h4>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default checkout
