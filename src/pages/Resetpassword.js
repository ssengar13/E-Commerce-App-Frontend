import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Resetpassword = () => {
    return (
        <>
            <Meta title="Reset Your Password - Secure Recovery | Amazify" />
            <BreadCrumb title="Reset Your Password" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Reset Your Password</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="password" name='password' placeholder='New Password' className='form-control' />
                                    </div>
                                    <div className='mt-1'>
                                        <input type="password" name='confirm-password' placeholder='Confirm Password' className='form-control' />
                                    </div>
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button border-0'>Change Password</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resetpassword