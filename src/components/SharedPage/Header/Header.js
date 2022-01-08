import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import headerCenterImg from '../../../images/header-img.png';
import { BsCart } from "react-icons/bs";
import CartOverlay from '../CartOverlay/CartOverlay';
import useProducts from '../../../hooks/useProducts';
import ButtonFunctionsContext from '../../../contexts/ButtonFunctions';
import './Header.css';


function ProvideData({ children }) {
    const { loading, error, data } = useProducts();
    return children({ loading, error, data, })
}


class Header extends Component {

    render() {
        const { addedProducts, currencySwitcher, amountSwitcher, buttonIndex, selectedSizeBtnRef, handleTabSizeBtn, handleIncrementProductQuantity, totalCount, handleDecrementProductQuantity } = this.context;

        const cartOverlayBtn = e => {
            const isDropDownButton = e.target.matches("[data-dropdown-overlay-btn]");
            const body = document.querySelector("body");
            if (isDropDownButton && e.target.closest("[data-dropdown-overlay]") != null) return;

            let cartDropdown;
            if (!isDropDownButton) {
                cartDropdown = e.target.closest("[data-dropdown-overlay]");
                cartDropdown.classList.toggle("active");

                if (cartDropdown.classList.contains("active")) {
                    body.style.overflow = "hidden";
                } else {
                    body.style.overflow = "auto";
                }
            }

            document.querySelectorAll("[data-dropdown-overlay].active").forEach(dropdown => {
                if (dropdown === cartDropdown) return;
                dropdown.classList.remove("active")
            });
        };


        return (
            <ProvideData>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <div>Loading...</div>;
                        if (error) return <div>Error :(</div>;
                        return (
                            <>
                                <div id="navbar-section" >
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
                                        <select onChange={currencySwitcher} onClick={() => amountSwitcher(data.category.products)}>
                                            {
                                                data.currencies.map((currency, priceIndex) => (
                                                    <option>{currency}</option>
                                                ))
                                            }
                                        </select>
                                        <div className="cart-icon-container">
                                            <div className="dropdown" data-dropdown-overlay>
                                                <button className="cart-overlay-btn" onClick={cartOverlayBtn} data-dropdown-overlay-btn>
                                                    <BsCart />
                                                    {
                                                        addedProducts !== 0 && <div className="cart-item-length">{addedProducts?.length}</div>

                                                    }
                                                </button>
                                                <div className="dropdown-menu">
                                                    <CartOverlay selectedSizeBtnRef={selectedSizeBtnRef} handleTabSizeBtn={handleTabSizeBtn} buttonIndex={buttonIndex} handleDecrementProductQuantity={handleDecrementProductQuantity} totalCount={totalCount} addedProducts={addedProducts} handleIncrementProductQuantity={handleIncrementProductQuantity} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>

                        )
                    }
                }

            </ProvideData >
        )
    }
}

Header.contextType = ButtonFunctionsContext;
export default Header;


