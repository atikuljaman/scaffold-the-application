import React, { Component } from 'react'
import Header from '../SharedPage/Header/Header';
import img from '../../images/demo.jpg'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import './ViewCart.css';

class ViewCart extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="view-cart-section">
                    <h1 className="view-cart-title">Cart</h1>
                    <div className="view-cart-container">
                        <div className="view-cart-left-container">
                            <p>
                                Apollo
                                <br />
                                <span>Running Short</span>
                            </p>
                            <p className="view-cart-product-price">$50.00</p>
                            <div className="view-cart-product-size-btn">
                                <button>S</button>
                                <button>M</button>
                            </div>
                        </div>
                        <div>
                            <div className="view-cart-right-container">
                                <div className="view-cart-increase-btn">
                                    <button><AiOutlinePlus /></button>
                                    <p>1</p>
                                    <button><AiOutlineMinus /></button>
                                </div>
                                <div>
                                    <img src={img} className="view-cart-product-img" alt="Selected Product Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view-cart-container">
                        <div className="view-cart-left-container">
                            <p>
                                Apollo
                                <br />
                                <span>Running Short</span>
                            </p>
                            <p className="view-cart-product-price">$50.00</p>
                            <div className="view-cart-product-size-btn">
                                <button>S</button>
                                <button>M</button>
                            </div>
                        </div>
                        <div>
                            <div className="view-cart-right-container">
                                <div className="view-cart-increase-btn">
                                    <button><AiOutlinePlus /></button>
                                    <p>1</p>
                                    <button><AiOutlineMinus /></button>
                                </div>
                                <div>
                                    <img src={img} className="view-cart-product-img" alt="Selected Product Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCart;
