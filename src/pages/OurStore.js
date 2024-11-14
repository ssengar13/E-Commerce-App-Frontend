import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../components/ProductCard'
import Color from '../components/Color'
import Container from '../components/Container'

// Custom wrapper component for ReactStars
const CustomReactStars = ({ count = 5, size = 12, value = 3, edit = false, activeColor = "#ffd700" }) => {
    return (
        <ReactStars
            count={count}
            size={size}
            value={value}
            edit={edit}
            activeColor={activeColor}
        />
    );
};


const OurStore = () => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title="Shop the Latest Trends at Amazify" />
            <BreadCrumb title="Our Store" />
            <Container class1="store-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Shop By Categories
                            </h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch & Accessories</li>
                                    <li>Televison</li>
                                    <li>Camera</li>
                                    <li>Computers & Laptops</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Filter By
                            </h3>
                            <div>
                                <h5 className="sub-title">Availablity</h5>
                                <div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' />
                                        <label className='form-check-label'>In Stock  (2)</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' disabled />
                                        <label className='form-check-label'>Out of Stock  (0)</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className='d-flex align-items-center'>
                                        <span className='me-2 mb-3'>$</span>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="From" />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <span className='me-2 mb-3'>$</span>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput1" placeholder="To" />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colors</h5>
                                <div>
                                    <Color />
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' id='size-1' />
                                        <label className='form-check-label' htmlFor='size-1'>XS (2)</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' id='size-2' />
                                        <label className='form-check-label' htmlFor='size-2'>S (1)</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' id='size-3' />
                                        <label className='form-check-label' htmlFor='size-3'>M (9)</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' id='size-4' />
                                        <label className='form-check-label' htmlFor='size-4'>L (7)</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' id='size-5' />
                                        <label className='form-check-label' htmlFor='size-5'>XL (3)</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' id='size-6' />
                                        <label className='form-check-label' htmlFor='size-6'>XXL (4)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Product Tags
                            </h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-color rounded-3 py-2 px-3">Headphones</span>
                                    <span className="badge bg-light text-color rounded-3 py-2 px-3">Laptop</span>
                                    <span className="badge bg-light text-color rounded-3 py-2 px-3">Mobile</span>
                                    <span className="badge bg-light text-color rounded-3 py-2 px-3">Oppo</span>
                                    <span className="badge bg-light text-color rounded-3 py-2 px-3">Speaker</span>
                                    <span className="badge bg-light text-color rounded-3 py-2 px-3">Tablet</span>
                                    <span className="badge bg-light text-color rounded-3 py-2 px-3">Vivo</span>
                                    <span className="badge bg-light text-color rounded-3 py-2 px-3">Wire</span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Random Products
                            </h3>
                            <div>
                                <div className="random-products d-flex gap-10 py-3">
                                    <div className="w-30">
                                        <img src="images/headphone.jpg" className='img-fluid' alt="headphone" />
                                    </div>
                                    <div className="w-70">
                                        <h5 className='title'>Kids Headphones Bulk 10 Pack Multi Colored For...</h5>
                                        <CustomReactStars />
                                        <b className="fs-6">$100.00</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex gap-10 mt-3">
                                    <div className="w-30">
                                        <img src="images/speaker.jpg" className='img-fluid' alt="headphone" />
                                    </div>
                                    <div className="w-70">
                                        <h5 className='title'>Music Speaker Bulk 10 Pack Multi Colored For...</h5>
                                        <CustomReactStars />
                                        <b className="fs-6">$99.00</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-10">
                                    <p className='mb-0 sort-by-text px-4'>Sort By:</p>
                                    <select name="" id="" className='form-control form-select w-auto'>
                                        <option value="manual">Featured</option>
                                        <option value="best-selling">Best Selling</option>
                                        <option value="title-ascending">Alphabetically, A-Z</option>
                                        <option value="title-descending">Alphabetically, Z-A</option>
                                        <option value="price-ascending">Price - low to high</option>
                                        <option value="price-descending">Price - high to low</option>
                                        <option value="created-ascending">Date, old to new</option>
                                        <option value="created-descending">Date, new to old</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className="total-products mb-0">21 Products</p>
                                    <div className='d-flex aling-items-center gap-10 grid'>
                                        <img onClick={() => { setGrid(3); }} src="images/gr4.svg" alt="grid" className='d-flex img-fluid' />
                                        <img onClick={() => { setGrid(4); }} src="images/gr3.svg" alt="grid" className='d-flex img-fluid' />
                                        <img onClick={() => { setGrid(6); }} src="images/gr2.svg" alt="grid" className='d-flex img-fluid' />
                                        <img onClick={() => { setGrid(12); }} src="images/gr.svg" alt="grid" className='d-flex img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-list pb-5 ">
                            <div className="d-flex gap-10 flex-wrap">
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default OurStore