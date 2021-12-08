import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import headerCenterImg from '../../../images/header-img.png';
import { BsCart } from "react-icons/bs";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div id="navbar-section">
                <ul id="navbar">
                    <li><NavLink activeStyle={{
                        fontWeight: 500,
                        color: "#5ECE7B",
                        borderBottom: '2px solid #5ECE7B'
                    }}
                        className="nav-link" to="/women">Women</NavLink></li>
                    <li><NavLink
                        activeStyle={{
                            fontWeight: 500,
                            color: "#5ECE7B",
                            borderBottom: '2px solid #5ECE7B'
                        }}
                        className="nav-link" to="/men">Men</NavLink></li>
                    <li><NavLink
                        activeStyle={{
                            fontWeight: 500,
                            color: "#5ECE7B",
                            borderBottom: '2px solid #5ECE7B'
                        }}
                        className="nav-link" to="/kids">Kids</NavLink></li>
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