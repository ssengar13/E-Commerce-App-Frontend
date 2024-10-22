import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Wishlist = () => {
    return (
        <>
            <Meta title="Your Wishlist - Save Your Favorite Products | Amazify" />
            <BreadCrumb title="Your Wishlist" />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-2">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src="images/tab.jpg" alt="tab" className='img-fluid w-100' />
                                </div>
                            </div>
                            <div className="wishlist-details py-3 px-3">
                                <h5 className="title">Honour T1 7.0 1GB RAM 8GB ROM 7 Inch with Wi-Fi+3G...</h5>
                                <h6 className="price mb-2 mt-3">$99.00</h6>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src="images/tab1.jpg" alt="tab" className='img-fluid w-100' />
                                </div>
                            </div>
                            <div className="wishlist-details py-3 px-3">
                                <h5 className="title">Honour T1 7.0 1GB RAM 8GB ROM 7 Inch with Wi-Fi+3G...</h5>
                                <h6 className="price mb-2 mt-3">$99.00</h6>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src="images/tab2.jpg" alt="tab" className='img-fluid w-100' />
                                </div>
                            </div>
                            <div className="wishlist-details py-3 px-3">
                                <h5 className="title">Honour T1 7.0 1GB RAM 8GB ROM 7 Inch with Wi-Fi+3G...</h5>
                                <h6 className="price mb-2 mt-3">$99.00</h6>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src="images/tab3.jpg" alt="tab" className='img-fluid w-100' />
                                </div>
                            </div>
                            <div className="wishlist-details py-3 px-3">
                                <h5 className="title">Honour T1 7.0 1GB RAM 8GB ROM 7 Inch with Wi-Fi+3G...</h5>
                                <h6 className="price mb-2 mt-3">$99.00</h6>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src="images/tab3.jpg" alt="tab" className='img-fluid w-100' />
                                </div>
                            </div>
                            <div className="wishlist-details py-3 px-3">
                                <h5 className="title">Honour T1 7.0 1GB RAM 8GB ROM 7 Inch with Wi-Fi+3G...</h5>
                                <h6 className="price mb-2 mt-3">$99.00</h6>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src="images/tab3.jpg" alt="tab" className='img-fluid w-100' />
                                </div>
                            </div>
                            <div className="wishlist-details py-3 px-3">
                                <h5 className="title">Honour T1 7.0 1GB RAM 8GB ROM 7 Inch with Wi-Fi+3G...</h5>
                                <h6 className="price mb-2 mt-3">$99.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist