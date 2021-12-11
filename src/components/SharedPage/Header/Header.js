import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import headerCenterImg from '../../../images/header-img.png';
import { BsCart } from "react-icons/bs";
import './Header.css';
import CartOverlay from '../CartOverlay/CartOverlay';

class Header extends Component {

    render() {

        const cartOverlayBtn = e => {
            const isCartOverlayDropDown = e.target.matches("[cart-dropdown-overlay-btn]");
            if (!isCartOverlayDropDown && e.target.closest('[cart-dropdown-overlay]') != null) return;

            let cartDropdown;
            if (isCartOverlayDropDown) {
                cartDropdown = e.target.closest('[cart-dropdown-overlay]');
                cartDropdown.classList.toggle('active');
            }

            document.querySelectorAll("[cart-dropdown-overlay].active").forEach(dropdown => {
                if (dropdown === cartDropdown) return;
                dropdown.classList.remove("active");
            });
        }

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
                            <option defaultValue="$ USD" hidden>$ USD</option>
                            <option>$ USD</option>
                            <option>€ EUR</option>
                            <option>¥ JPY</option>
                        </select>
                    </div>
                    <div className="cart-icon-container">
                        <div className="cart-icon" cart-dropdown-overlay>
                            <button className="cart-overlay-btn" onClick={cartOverlayBtn} cart-dropdown-overlay-btn>
                                <BsCart />
                            </button>
                            <div className="cart-overlay">
                                <CartOverlay />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;