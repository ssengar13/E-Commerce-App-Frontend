import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'
import wish from '../images/wish.svg'
import prodcompare from '../images/prodcompare.svg'
import view from '../images/view.svg'
import addcart from '../images/add-cart.svg'
import tab from '../images/tab.jpg'
import tab3 from '../images/tab3.jpg'

// Custom wrapper component for ReactStars
const CustomReactStars = ({ count = 5, size = 12, value = 3, edit = false, activeColor = "#ffd700", color = "#acacac" }) => {
    return (
        <ReactStars
            count={count}
            size={size}
            value={value}
            edit={edit}
            activeColor={activeColor}
            color={color}
        />
    );
};


const ProductCard = ({ grid }) => {
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3 mb-3"}`}>
                <Link to={`${location.pathname === '/' ? `/product/:id` : location.pathname === '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'><img src={wish} alt="wishlist" /></button>
                    </div>
                    <div className="product-img">
                        <img src={tab} alt="product" className='img-fluid' />
                        <img src={tab3} alt="product" className='img-fluid' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Apple iPad Pro</h6>
                        <h5 className="title">The ultimate blend of power and versatility, designed for professionals. </h5>
                        <CustomReactStars />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil hic minima officiis soluta qui laudantium minus alias veniam dignissimos dolorem eligendi sapiente repudiandae, consectetur, asperiores suscipit vitae quo ducimus laborum?
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'><img src={prodcompare} alt="Compare " /></button>
                            <button className='border-0 bg-transparent'><img src={view} alt="View " /></button>
                            <button className='border-0 bg-transparent'><img src={addcart} alt="addCart " /></button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3 mb-3"}`}>
                <Link to={`${location.pathname === '/' ? `/product/:id` : location.pathname === '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'><img src={wish} alt="wishlist" /></button>
                    </div>
                    <div className="product-img">
                        <img src={tab} alt="product" className='img-fluid' />
                        <img src={tab3} alt="product" className='img-fluid' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Apple iPad Pro</h6>
                        <h5 className="title">The ultimate blend of power and versatility, designed for professionals. </h5>
                        <CustomReactStars />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil hic minima officiis soluta qui laudantium minus alias veniam dignissimos dolorem eligendi sapiente repudiandae, consectetur, asperiores suscipit vitae quo ducimus laborum?
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'><img src={prodcompare} alt="Compare " /></button>
                            <button className='border-0 bg-transparent'><img src={view} alt="View " /></button>
                            <button className='border-0 bg-transparent'><img src={addcart} alt="addCart " /></button>
                        </div>
                    </div>
                </Link>
            </div >
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3 mb-3"}`}>
                <Link to={`${location.pathname === '/' ? `/product/:id` : location.pathname === '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'><img src={wish} alt="wishlist" /></button>
                    </div>
                    <div className="product-img">
                        <img src={tab} alt="product" className='img-fluid' />
                        <img src={tab3} alt="product" className='img-fluid' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Apple iPad Pro</h6>
                        <h5 className="title">The ultimate blend of power and versatility, designed for professionals. </h5>
                        <CustomReactStars />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil hic minima officiis soluta qui laudantium minus alias veniam dignissimos dolorem eligendi sapiente repudiandae, consectetur, asperiores suscipit vitae quo ducimus laborum?
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'><img src={prodcompare} alt="Compare " /></button>
                            <button className='border-0 bg-transparent'><img src={view} alt="View " /></button>
                            <button className='border-0 bg-transparent'><img src={addcart} alt="addCart " /></button>
                        </div>
                    </div>
                </Link>
            </div >
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3 mb-3"}`}>
                <Link to={`${location.pathname === '/' ? `/product/:id` : location.pathname === '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'><img src={wish} alt="wishlist" /></button>
                    </div>
                    <div className="product-img">
                        <img src={tab} alt="product" className='img-fluid' />
                        <img src={tab3} alt="product" className='img-fluid' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Apple iPad Pro</h6>
                        <h5 className="title">The ultimate blend of power and versatility, designed for professionals. </h5>
                        <CustomReactStars />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil hic minima officiis soluta qui laudantium minus alias veniam dignissimos dolorem eligendi sapiente repudiandae, consectetur, asperiores suscipit vitae quo ducimus laborum?
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'><img src={prodcompare} alt="Compare " /></button>
                            <button className='border-0 bg-transparent'><img src={view} alt="View " /></button>
                            <button className='border-0 bg-transparent'><img src={addcart} alt="addCart " /></button>
                        </div>
                    </div>
                </Link>
            </div >
        </>
    )
}

export default ProductCard