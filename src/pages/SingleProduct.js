import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import { TbGitCompare, TbHeart } from "react-icons/tb";
import { CiDeliveryTruck, CiViewBoard, CiHeart } from "react-icons/ci";
import { BsLink45Deg } from "react-icons/bs";
import Container from '../components/Container'

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

const SingleProduct = () => {
    const props = { width: 400, height: 500, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };
    const [orderedProduct] = useState(true);
    return (
        <>
            <Meta title="Product Details | Amazify" />
            <BreadCrumb title="Product Details" />
            <Container class1="main-product-wrapper py-4 home-wrapper-2">
                <div className="row d-flex align-items-stretch">
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
                                    <CustomReactStars />
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
                                <div className='d-flex gap-15 flex-row mt-1 mb-3 align-items-center'>
                                    <h3 className='product-heading'>Quantity :</h3>
                                    <div className=''>
                                        <input type="number" className='form-control' name="" style={{ "width": "70px" }} min={1} max={10} id="" placeholder='0' />
                                    </div>
                                    <div className='d-flex justify-content-center gap-15 ms-5'>
                                        <button className='button border-0'>Add To Cart</button>
                                        <button className='button signup' to='/signup'>Buy It Now</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-20 mt-3 mb-3'>
                                    <div className='d-flex align-items-center'>
                                        <a href="/" className='mt-1'><TbHeart className='fs-5 me-2' />Add To Wishlish</a>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <a href="/" className='mt-1'><TbGitCompare className='fs-5 me-2' />Add To Compare</a>
                                    </div>
                                </div>
                                <div className='d-flex mt-3 mb-3'>
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item border-bottom">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <CiDeliveryTruck className='fs-5 me-2' /> Shipping & Returns
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className='mb-0'>Free Shipping and Returns available on all orders!</p>
                                                    <p className='mb-0'>We ship all US domestic orders within <strong>5-10 buisness days!</strong></p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-bottom">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <CiViewBoard className='fs-5 me-2' />Materials
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className='mb-0'>A traditional, durable, and elegant material that's resistant to moisture and perspiration. Stainless steel watches are also unlikely to cause skin irritation.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-bottom">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <CiHeart className='fs-5 me-2' />Care Instructions
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className='mb-0'>Use a soft damp cloth and a drop of mild soap to remove any haze, Air dry.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex mt-3 mb-3'>
                                    <h3 className='product-heading'><BsLink45Deg className='me-2 fs-5' />Share</h3>
                                </div>
                                <div className='d-flex mt-3 mb-3 justify-content-center align-items-center payment flex-column gap-10'>
                                    <h3 className='title'>Payment Methods</h3>
                                    <div>
                                        <svg className="icon icon--full-color me-2 fs-5" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24"><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"></path><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"></path><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"></path><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"></path><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"></path><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"></path><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"></path></svg>
                                        <svg className="icon icon--full-color me-2 fs-5" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-google_pay"><title id="pi-google_pay">Google Pay</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path><path d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z" fill="#5F6368"></path><path d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z" fill="#4285F4"></path><path d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z" fill="#34A853"></path><path d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z" fill="#FBBC04"></path><path d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z" fill="#EA4335"></path></svg>
                                        <svg className="icon icon--full-color me-2 fs-5" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                                        <svg className="icon icon--full-color me-2 fs-5" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>
                                        <svg className="icon icon--full-color me-2 fs-5" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-shopify_pay"><title id="pi-shopify_pay">Shop Pay</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000"></path><path d="M35.889 0C37.05 0 38 .982 38 2.182v19.636c0 1.2-.95 2.182-2.111 2.182H2.11C.95 24 0 23.018 0 21.818V2.182C0 .982.95 0 2.111 0H35.89z" fill="#5A31F4"></path><path d="M9.35 11.368c-1.017-.223-1.47-.31-1.47-.705 0-.372.306-.558.92-.558.54 0 .934.238 1.225.704a.079.079 0 00.104.03l1.146-.584a.082.082 0 00.032-.114c-.475-.831-1.353-1.286-2.51-1.286-1.52 0-2.464.755-2.464 1.956 0 1.275 1.15 1.597 2.17 1.82 1.02.222 1.474.31 1.474.705 0 .396-.332.582-.993.582-.612 0-1.065-.282-1.34-.83a.08.08 0 00-.107-.035l-1.143.57a.083.083 0 00-.036.111c.454.92 1.384 1.437 2.627 1.437 1.583 0 2.539-.742 2.539-1.98s-1.155-1.598-2.173-1.82v-.003zM15.49 8.855c-.65 0-1.224.232-1.636.646a.04.04 0 01-.069-.03v-2.64a.08.08 0 00-.08-.081H12.27a.08.08 0 00-.08.082v8.194a.08.08 0 00.08.082h1.433a.08.08 0 00.081-.082v-3.594c0-.695.528-1.227 1.239-1.227.71 0 1.226.521 1.226 1.227v3.594a.08.08 0 00.081.082h1.433a.08.08 0 00.081-.082v-3.594c0-1.51-.981-2.577-2.355-2.577zM20.753 8.62c-.778 0-1.507.24-2.03.588a.082.082 0 00-.027.109l.632 1.088a.08.08 0 00.11.03 2.5 2.5 0 011.318-.366c1.25 0 2.17.891 2.17 2.068 0 1.003-.736 1.745-1.669 1.745-.76 0-1.288-.446-1.288-1.077 0-.361.152-.657.548-.866a.08.08 0 00.032-.113l-.596-1.018a.08.08 0 00-.098-.035c-.799.299-1.359 1.018-1.359 1.984 0 1.46 1.152 2.55 2.76 2.55 1.877 0 3.227-1.313 3.227-3.195 0-2.018-1.57-3.492-3.73-3.492zM28.675 8.843c-.724 0-1.373.27-1.845.746-.026.027-.069.007-.069-.029v-.572a.08.08 0 00-.08-.082h-1.397a.08.08 0 00-.08.082v8.182a.08.08 0 00.08.081h1.433a.08.08 0 00.081-.081v-2.683c0-.036.043-.054.069-.03a2.6 2.6 0 001.808.7c1.682 0 2.993-1.373 2.993-3.157s-1.313-3.157-2.993-3.157zm-.271 4.929c-.956 0-1.681-.768-1.681-1.783s.723-1.783 1.681-1.783c.958 0 1.68.755 1.68 1.783 0 1.027-.713 1.783-1.681 1.783h.001z" fill="#fff"></path></svg>
                                        <svg className="icon icon--full-color me-2 fs-5" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
            <Container class1="description-wrapper home-wrapper-2 py-4">
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
            </Container>
            <Container class1="review-wrapper py-4 home-wrapper-2">
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
                                        <CustomReactStars />

                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {
                                    orderedProduct && <div>
                                        <a href="/" className='text-secondary text-decoration-underline'>Write a Review</a>
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
                                        <CustomReactStars />
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
                                        <CustomReactStars />

                                    </div>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat, maiores pariatur repellat eveniet unde. Delectus sint aut dolorem iusto asperiores eaque dignissimos tenetur ex suscipit veniam! Eaque, praesentium quam?</p>
                                </div>
                                <div className="review">
                                    <div className='d-flex align-items-center gap-10'>
                                        <h6 className='mb-0'>Sonal Sengar</h6>
                                        <CustomReactStars />
                                    </div>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat, maiores pariatur repellat eveniet unde. Delectus sint aut dolorem iusto asperiores eaque dignissimos tenetur ex suscipit veniam! Eaque, praesentium quam?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
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
            </Container>
        </>
    )
}

export default SingleProduct