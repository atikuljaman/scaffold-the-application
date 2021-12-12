import React, { Component } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
import img from '../../../images/demo.jpg'
import './CartOverlay.css';

class CartOverlay extends Component {
    render() {
        return (
            <div className="cart-overlay-section">
                <div className="cart-overlay-container">
                    <h4 className="cart-overlay-title">My Bag, <span>2 items</span></h4>
                    <div className="added-product-container">
                        <div className="added-product-left">
                            <p>
                                Apollo
                                <br />
                                Running Short
                            </p>
                            <p className="cart-overlay-price">$50.00</p>
                            <div className="cart-overlay-size-btns">
                                <button className="cart-overlay-size-btn">S</button>
                                <button className="cart-overlay-size-btn">M</button>
                            </div>
                        </div>
                        <div className="added-product-right">
                            <div className="increase-btns">
                                <button><AiOutlinePlus /></button>
                                <p>1</p>
                                <button><AiOutlineMinus /></button>
                            </div>
                            <div>
                                <img className="cart-overlay-img" src={img} alt="cart product image" />
                            </div>
                        </div>
                    </div>
                    <div className="added-product-container">
                        <div className="added-product-left">
                            <p>
                                Apollo
                                <br />
                                Running Short
                            </p>
                            <p className="cart-overlay-price">$50.00</p>
                            <div className="cart-overlay-size-btns">
                                <button className="cart-overlay-size-btn">S</button>
                                <button className="cart-overlay-size-btn">M</button>
                            </div>
                        </div>
                        <div className="added-product-right">
                            <div className="increase-btns">
                                <button><AiOutlinePlus /></button>
                                <p>1</p>
                                <button><AiOutlineMinus /></button>
                            </div>
                            <div>
                                <img className="cart-overlay-img" src={img} alt="cart product image" />
                            </div>
                        </div>
                    </div>
                    <div className="added-product-bottom">
                        <div className="total-price-container">
                            <p className="total-price-title">Total</p>
                            <p className="total-price">$100.00</p>
                        </div>
                        <div className="added-product-bottom-btns">
                            <Link to="/viewCart">
                                <button className="view-bag-btn">view bag</button>
                            </Link>
                            <button className="check-out-btn">check out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartOverlay;