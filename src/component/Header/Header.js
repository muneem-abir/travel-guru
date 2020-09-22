import React from 'react';
import logo from './../../../src/Logo.png';

const Header = () => {
    return (
        <div>
            <div className="container mb-5">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="/home"><img src={logo} style={{ width: '150px', height: 'auto' }} alt="" srcset="" /></a>
                        <input type="text" className="form-control w-25 ml-5" name="search" id="" placeholder="search your destination " />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/news">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/destination">Destination</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-warning" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
        </div>
    );
};

export default Header;