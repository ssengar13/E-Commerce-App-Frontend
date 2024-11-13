import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import watch from '../images/watch.jpg'

const SpecialProduct = () => {
    return (
        <div className='col-6 mb-3'>
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src={watch} alt="product" className='img-fluid' />
                    </div>
                    <div className='special-product-content'>
                        <h5 className="brand">Apple</h5>
                        <h6 className="title">Apple Watch Series 9 – Your ultimate health...</h6>
                        <ReactStars
                            count={5}
                            size={12}
                            value="3"
                            edit={false}
                            activeColor="#ffd700"
                            color="#acacac"
                        />
                        <p className="price"><span className="red-p">$100</span> &nbsp; <strike>$200</strike></p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className='mb-0'><b>765 </b>Days</p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className='badge rounded-circle p-2 bg-danger'>01</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>01</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>01</span>
                            </div>
                        </div>
                        <div className="product-count my-3">
                            <p>Products: 5</p>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{ width: "25%" }}></div>
                            </div>
                        </div>
                        <Link className='button'>Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct