import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='columns'>
                <div className='column is-flex is-justify-content-start is-align-items-center is-one-third p-5 is-hidden-mobile'>
                    <figure className="image is-96x96">
                        <img src="/assets/img/logo-120p.png" alt="Kitchen" />
                    </figure>
                </div>
                <div className='column is-flex is-flex-direction-column is-align-items-center is-justify-content-center is-one-third p-5'>
                    <p>© 2024, All rights reserved</p>
                    <p>Created by Michael Eaton</p>
                </div>
                <div className='column is-flex is-justify-content-center is-align-items-center is-one-third p-5'>
                </div>
            </div>
        </footer>
    );
};

export default Footer;