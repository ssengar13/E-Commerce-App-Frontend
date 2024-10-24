import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'

const ProductCard = ({ grid }) => {
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3 mb-3"}`}>
                <Link to='/product-detail' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link><img src="images/wish.svg" alt="wishlist" /></Link>
                    </div>
                    <div className="product-img">
                        <img src="images/tab.jpg" alt="product" className='img-fluid' />
                        <img src="images/tab3.jpg" alt="product" className='img-fluid' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Apple iPad Pro</h6>
                        <h5 className="title">The ultimate blend of power and versatility, designed for professionals. </h5>
                        <ReactStars
                            count={5}
                            size={12}
                            value="3"
                            edit={false}
                            activeColor="#ffd700"
                            color="#acacac"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil hic minima officiis soluta qui laudantium minus alias veniam dignissimos dolorem eligendi sapiente repudiandae, consectetur, asperiores suscipit vitae quo ducimus laborum?
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <Link><img src="images/prodcompare.svg" alt="Compare " /></Link>
                            <Link><img src="images/view.svg" alt="View " /></Link>
                            <Link><img src="images/add-cart.svg" alt="addCart " /></Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3 mb-3"}`}>
                <Link to='/product-detail' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link><img src="images/wish.svg" alt="wishlist" /></Link>
                    </div>
                    <div className="product-img">
                        <img src="images/tab.jpg" alt="product" className='img-fluid' />
                        <img src="images/tab3.jpg" alt="product" className='img-fluid' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Apple iPad Pro</h6>
                        <h5 className="title">The ultimate blend of power and versatility, designed for professionals. </h5>
                        <ReactStars
                            count={5}
                            size={12}
                            value="3"
                            edit={false}
                            activeColor="#ffd700"
                            color="#acacac"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil hic minima officiis soluta qui laudantium minus alias veniam dignissimos dolorem eligendi sapiente repudiandae, consectetur, asperiores suscipit vitae quo ducimus laborum?
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <Link><img src="images/prodcompare.svg" alt="Compare " /></Link>
                            <Link><img src="images/view.svg" alt="View " /></Link>
                            <Link><img src="images/add-cart.svg" alt="addCart " /></Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3 mb-3"}`}>
                <Link to='/product-detail' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link><img src="images/wish.svg" alt="wishlist" /></Link>
                    </div>
                    <div className="product-img">
                        <img src="images/tab.jpg" alt="product" className='img-fluid' />
                        <img src="images/tab3.jpg" alt="product" className='img-fluid' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Apple iPad Pro</h6>
                        <h5 className="title">The ultimate blend of power and versatility, designed for professionals. </h5>
                        <ReactStars
                            count={5}
                            size={12}
                            value="3"
                            edit={false}
                            activeColor="#ffd700"
                            color="#acacac"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil hic minima officiis soluta qui laudantium minus alias veniam dignissimos dolorem eligendi sapiente repudiandae, consectetur, asperiores suscipit vitae quo ducimus laborum?
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <Link><img src="images/prodcompare.svg" alt="Compare " /></Link>
                            <Link><img src="images/view.svg" alt="View " /></Link>
                            <Link><img src="images/add-cart.svg" alt="addCart " /></Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3 mb-3"}`}>
                <Link to='/product-detail' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link><img src="images/wish.svg" alt="wishlist" /></Link>
                    </div>
                    <div className="product-img">
                        <img src="images/tab.jpg" alt="product" className='img-fluid' />
                        <img src="images/tab3.jpg" alt="product" className='img-fluid' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Apple iPad Pro</h6>
                        <h5 className="title">The ultimate blend of power and versatility, designed for professionals. </h5>
                        <ReactStars
                            count={5}
                            size={12}
                            value="3"
                            edit={false}
                            activeColor="#ffd700"
                            color="#acacac"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil hic minima officiis soluta qui laudantium minus alias veniam dignissimos dolorem eligendi sapiente repudiandae, consectetur, asperiores suscipit vitae quo ducimus laborum?
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <Link><img src="images/prodcompare.svg" alt="Compare " /></Link>
                            <Link><img src="images/view.svg" alt="View " /></Link>
                            <Link><img src="images/add-cart.svg" alt="addCart " /></Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard