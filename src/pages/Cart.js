import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <Meta title="Your Cart" />
            <BreadCrumb title="Your Shopping Cart" />
            <section className="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center border-bottom">
                                <h4 className="col-6">PRODUCT</h4>
                                <h4 className="col-2">PRICE</h4>
                                <h4 className="col-2">QUANTITY</h4>
                                <h4 className="col-2 text-end">TOTAL</h4>
                            </div>
                            <div className="cart-data py-5 d-flex justify-content-between align-items-center border-bottom">
                                <div className="col-6 gap-20 d-flex align-items-center">
                                    <div className='w-20'>
                                        <img src="images/headphone.jpg" alt="headphone" className='img-fluid' style={{ width: "80px", height: "80px" }} />
                                    </div>
                                    <div className='w-80'>
                                        <h5 className="title">Kids headphones bulk 10 pack multicolored for students</h5>
                                        <p className="size mb-2">Size: S</p>
                                        <p className="color mb-2">Color: Red</p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <h5 className="price">$ 100.00 </h5>
                                </div>
                                <div className="col-2 d-flex flex-row align-items-center gap-15">
                                    <div >
                                        <input type="number" className='form-control' name="" style={{ "width": "70px" }} min={1} max={10} id="" placeholder='1' />
                                    </div>
                                    <div>
                                        <MdDelete className='fs-5' />
                                    </div>
                                </div>
                                <div className="col-2 text-end">
                                    <h5 className="price">$ 100.00 </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <Link to='/store' className='button'>Continue Shopping</Link>
                                <div className='d-flex flex-column align-items-end subtotal'>
                                    <h4>Sub Total: $ 100.00</h4>
                                    <p>Taxes and shipping calculated at checkout...</p>
                                    <Link to='/checkout' className='button'>Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
