import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import headerCenterImg from '../../../images/header-img.png';
import { BsCart } from "react-icons/bs";
// import { IoIosArrowDown } from "react-icons/io";
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div id="navbar-section">
                <ul id="navbar">
                    <li><NavLink className="nav-link" to="">Women</NavLink></li>
                    <li><NavLink className="nav-link" to="">Men</NavLink></li>
                    <li><NavLink className="nav-link" to="">Kids</NavLink></li>
                </ul>
                <div className="navbar-center">
                    <img className="bag" src={headerCenterImg} alt="" />
                </div>
                <div className="navbar-right">
                    <div className="dropdown-container">
                        <select>
                            <option selected hidden>$ USD</option>
                            <option>$ USD</option>
                            <option>€ EUR</option>
                            <option>¥ JPY</option>
                        </select>
                    </div>
                    <div className="cart-icon">
                        <BsCart />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;