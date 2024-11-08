import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'

const SingleProduct = () => {
    const props = { width: 400, height: 500, zoomWidth: 500, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };
    const [orderedProduct, setorderedProduct] = useState(true);
    return (
        <>
            <Meta title="Product Details | Amazify" />
            <BreadCrumb title="Product Details" />
            <div className="main-product-wrapper py-4 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6 p-0">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div>
                                    <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="watcg" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="watcg" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="watcg" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="watcg" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 p-0">
                            <div className="main-product-details">
                                <div className='border-bottom'>
                                    <h3 className='title'>Mens Watch Bulk 10 Pack Multi Colored for Student</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100.00</p>
                                    <div className='d-flex gap-10 align-items-center mb-3'>
                                        <ReactStars
                                            count={5}
                                            size={14}
                                            value="4"
                                            edit={false}
                                            activeColor="#ffd700"
                                            color="#acacac"
                                        />
                                        <p className='mb-0 review-button'>(2 Reviews)</p>
                                    </div>
                                    <a href="#review" className='review-button'>Write a Review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading my-2'>Type :</h3>
                                        <p className='mb-0 product-data mt-1'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading my-2'>Brand :</h3>
                                        <p className='mb-0 product-data'>Kenneth Cole</p>
                                    </div>
                                    <div className='gap-30 mb-2'>
                                        <h3 className='product-heading my-2'>Categories :</h3>
                                        <p className='mb-0 product-data'>Airpods, amera, Laptop & Computers, Headphones, Portable Speakers, Smart Phones, Smart Watches, Smart Televison</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading my-2'>Tags :</h3>
                                        <p className='mb-0 product-data mt-1'>watches &nbsp;&nbsp; mobiles&nbsp;&nbsp;  kenneth cole  &nbsp;&nbsp; mobile</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading my-2'>Availablity :</h3>
                                        <p className='mb-0 product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex flex-column mb-3 mt-2'>
                                        <h3 className='product-heading'>Size :</h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border border-1 bg-white text-dark border-secondary px-2">S</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary px-2">M</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary px-2">L</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary px-2">XL</span>
                                        </div>
                                    </div>
                                    <div className='d-flex  flex-column mt-2 mb-2'>
                                        <h3 className='product-heading'>Color :</h3>
                                        <Color />
                                    </div>
                                    <div className='d-flex gap-10 flex-row mt-1 mb-3'>
                                        <h3 className='product-heading'>Quantity :</h3>
                                        <div className=''>
                                            <input type="number" className='form-control' name="" style={{ "width": "70px" }} min={1} max={10} id="" placeholder='0' />
                                        </div>
                                        <div className='d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button border-0'>Login</button>
                                            <button className='button signup' to='/signup'>SignUp</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <section className="description-wrapper home-wrapper-2 py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Description
                            </h3>
                            <p className="bg-white p-3 mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi doloribus est quasi non eveniet magni cupiditate, expedita culpa officia ratione facere odio adipisci rem, accusantium eos, quos pariatur reprehenderit!
                                Perspiciatis culpa fugit quisquam soluta mollitia quos dolores laboriosam accusantium voluptas, numquam voluptatum reiciendis laborum exercitationem ratione quibusdam atque repellat vitae consequatur, vero vel itaque officia, odit recusandae. Hic, veritatis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="review-wrapper py-4 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 id='review' className="section-heading">
                                Reviews
                            </h3>
                            <div className="review-inner-wrapper">
                                <div className='d-flex justify-content-between align-items-between review-head'>
                                    <div>
                                        <h4 className='mb-4'>Customer Reviews</h4>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <ReactStars
                                                count={5}
                                                size={14}
                                                value="4"
                                                edit={false}
                                                activeColor="#ffd700"
                                                color="#acacac"
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && <div>
                                            <a href="#" className='text-secondary text-decoration-underline'>Write a Review</a>
                                        </div>
                                    }
                                </div>
                                <div className="review-form mt-3 py-4">
                                    <h5>
                                        Write a Review
                                    </h5>
                                    <form action="" className='d-flex gap-15 flex-column'>
                                        <div>
                                            <label htmlFor="">Name</label>
                                            <input type="text" className="form-control" placeholder='Enter you name' />
                                        </div>
                                        <div>
                                            <label htmlFor="">Email</label>
                                            <input type="email" className="form-control" placeholder='Enter your email' />
                                        </div>
                                        <div>
                                            <label htmlFor="">Rating</label>
                                            <ReactStars
                                                count={5}
                                                size={14}
                                                value="0"
                                                edit={true}
                                                activeColor="#ffd700"
                                                color="#acacac"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Review Title</label>
                                            <input type="text" className="form-control" placeholder='Give your review a Title' />
                                        </div>
                                        <div>
                                            <label htmlFor="">Body of Review(1500)</label>
                                            <textarea name='' id='' className='w-100 form-control' placeholder='Write your comments here' cols="10" rows="4"></textarea>
                                        </div>
                                        <div className="text-end">
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews">
                                    <div className="review">
                                        <div className='d-flex align-items-center gap-10'>
                                            <h6 className='mb-0'>Sonal Sengar</h6>
                                            <ReactStars
                                                count={5}
                                                size={14}
                                                value="4"
                                                edit={false}
                                                activeColor="#ffd700"
                                                color="#acacac"
                                            />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat, maiores pariatur repellat eveniet unde. Delectus sint aut dolorem iusto asperiores eaque dignissimos tenetur ex suscipit veniam! Eaque, praesentium quam?</p>
                                    </div>
                                    <div className="review">
                                        <div className='d-flex align-items-center gap-10'>
                                            <h6 className='mb-0'>Sonal Sengar</h6>
                                            <ReactStars
                                                count={5}
                                                size={14}
                                                value="4"
                                                edit={false}
                                                activeColor="#ffd700"
                                                color="#acacac"
                                            />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat, maiores pariatur repellat eveniet unde. Delectus sint aut dolorem iusto asperiores eaque dignissimos tenetur ex suscipit veniam! Eaque, praesentium quam?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
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
                </div>
            </section>
        </>
    )
}

export default SingleProduct