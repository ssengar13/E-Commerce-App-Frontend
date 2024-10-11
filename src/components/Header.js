import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>Hotline: <a href='tel: +919876543210' className='text-white'>+91 9876543210</a></p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
