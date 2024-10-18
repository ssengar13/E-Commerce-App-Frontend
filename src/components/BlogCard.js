import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">15 October, 2024</p>
                <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
                <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel qui sapiente expedita in maiores eum. Cumque sapiente, praesentium hic.</p>
                <Link to="/" className="button">Read More</Link>
            </div>
        </div>
    )
}

export default BlogCard