import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog1 from '../images/blog-1.jpg'

const Singleblog = () => {
    return (
        <>
            <Meta title="Blog Details" />
            <BreadCrumb title="Blog Details" />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to='/blog' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft />Go back to blogs</Link>
                                <h3 className="title">
                                    A Beautiful Sunday Morning Renaissance
                                </h3>
                                <img src={blog1} alt="blog" className='img-fluid w-100 my-4' />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloremque neque, vitae quaerat sapiente sunt, nihil voluptatum, quas soluta accusamus aliquid. Dolorem magni laudantium placeat iure modi obcaecati ad tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi illum sed, tenetur suscipit aliquid error rem distinctio magni alias aliquam veniam illo vero deleniti eius quos! Praesentium dolorem velit exercitationem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singleblog