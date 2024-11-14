import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import Custominput from '../components/Custominput'

const Signup = () => {
    return (
        <>
            <Meta title="Create Your Account - Join Us Today | Amazify" />
            <BreadCrumb title="Create Account" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Create Account</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <Custominput type="text" name='name' placeholder='Your Name' />
                                <Custominput type="tel" name='number' placeholder='Phone Number' />
                                <Custominput type="email" name='email' placeholder='Email' />
                                <Custominput type="password" name='password' placeholder='Password' />
                                <div>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0'>Create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signup