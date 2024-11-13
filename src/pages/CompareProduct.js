import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'
import tab from '../images/tab.jpg'
import tab1 from '../images/tab1.jpg'
import tab2 from '../images/tab2.jpg'
import tab3 from '../images/tab3.jpg'
import cross from '../images/cross.svg'

const CompareProduct = () => {
    return (
        <>
            <Meta title="Compare Products - Find the Best Option | Amazify" />
            <BreadCrumb title="Compare Products" />
            <div className="compare-product-wrapper home-wrapper-2 py-5 ">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={cross} alt="cross" className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src={tab1} alt="tab" className='img-fluid' />
                                </div>
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title mt-2">Milanese Loop Watch Band For 42/44mm Apple Watch</h5>
                                <h6 className="price mb-2 mt-3">$99.00</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p className='mb-1'>Kenneth Cole</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p className='mb-1'>Watch</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availablity:</h5>
                                        <p className='mb-1'>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p className='mb-1'>S</p>
                                            <p className='mb-1'>M</p>
                                            <p className='mb-1'>L</p>
                                            <p className='mb-1'>XL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={cross} alt="cross" className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src={tab} alt="tablet" className='img-fluid' />
                                </div>
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title mt-2">Milanese Loop Watch Band For 42/44mm Apple Watch</h5>
                                <h6 className="price mb-2 mt-3">$99.00</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p className='mb-1'>Kenneth Cole</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p className='mb-1'>Watch</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availablity:</h5>
                                        <p className='mb-1'>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p className='mb-1'>S</p>
                                            <p className='mb-1'>M</p>
                                            <p className='mb-1'>L</p>
                                            <p className='mb-1'>XL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={cross} alt="cross" className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src={tab2} alt="watch" className='img-fluid' />
                                </div>
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title mt-2">Milanese Loop Watch Band For 42/44mm Apple Watch</h5>
                                <h6 className="price mb-2 mt-3">$99.00</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p className='mb-1'>Kenneth Cole</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p className='mb-1'>Watch</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availablity:</h5>
                                        <p className='mb-1'>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p className='mb-1'>S</p>
                                            <p className='mb-1'>M</p>
                                            <p className='mb-1'>L</p>
                                            <p className='mb-1'>XL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={cross} alt="cross" className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src={tab3} alt="watch" className='img-fluid' />
                                </div>
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title mt-2">Milanese Loop Watch Band For 42/44mm Apple Watch</h5>
                                <h6 className="price mb-2 mt-3">$99.00</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p className='mb-1'>Kenneth Cole</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p className='mb-1'>Watch</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availablity:</h5>
                                        <p className='mb-1'>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p className='mb-1'>S</p>
                                            <p className='mb-1'>M</p>
                                            <p className='mb-1'>L</p>
                                            <p className='mb-1'>XL</p>
                                        </div>
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

export default CompareProduct