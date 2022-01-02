import React, { Component } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
import ButtonFunctionsContext from '../../../contexts/ButtonFunctions';
import './CartOverlay.css';

class CartOverlay extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         count: []
    //     }
    // }

    // handlePlusBtn = (addedProducts) => {
    //     const totalCount = this.state.count.slice()

    //     for (var i in totalCount) {
    //         const { addedProduct } = addedProducts;

    //         if (totalCount[i].name === addedProduct.name) {
    //             const uuu = totalCount[i].count = addedProduct.count + 1;
    //             totalCount.push(uuu)
    //         }
    //         this.setState({ totalCount })
    //     }

    // }

    render() {
        const { amounts, currency, addedProducts, handleIncrementProductQuantity, handleDecrementProductQuantity, buttonIndex, colorIndex, capacityIndex, usbPortIndex, keyboardIndex } = this.context
        return (
            <div className="cart-overlay-section">
                <div className="cart-overlay-container">
                    {
                        addedProducts?.length === 0 ? <h4 className="cart-overlay-title"><span>Your bag is empty</span></h4>
                            :
                            <>
                                <h4 className="cart-overlay-title">My Bag, <span>{addedProducts?.length} items</span></h4>
                                {
                                    addedProducts.map(product => (
                                        <div className="added-product-container">
                                            <div className="added-product-left">
                                                <p>
                                                    {product?.brand}
                                                    <br />
                                                    {product?.name}
                                                </p>
                                                {
                                                    !currency ? <p className="cart-overlay-price">
                                                        ${(product?.prices[0]?.amount * product?.count).toFixed(2)}
                                                    </p>
                                                        :
                                                        amounts.map((price, priceIndex) => (
                                                            currency.currencyName === price?.currency &&
                                                            <p className="cart-overlay-price">{currency.symbol}{(product?.prices[priceIndex].amount * product?.count).toFixed(2)}</p>

                                                        ))
                                                }
                                                {/* <p className="cart-overlay-price">{currency}{
                                                    (amounts.map((price, priceIndex) => (
                                                        currency === price?.currency &&
                                                        <p className="selected-product-price">{currency}{product?.prices[priceIndex].amount}</p>

                                                    )) * product?.count).toFixed(2)
                                                    // (product?.prices[0]?.amount * product?.count).toFixed(2)
                                                }
                                                </p> */}
                                                <div className="cart-overlay-size-btns">
                                                    {
                                                        product?.attributes.map(attribute => (
                                                            <div>
                                                                {
                                                                    attribute.id === 'Size' &&
                                                                    <button className="cart-overlay-size-btn">{attribute?.items[buttonIndex]?.value}</button>

                                                                }
                                                                {
                                                                    attribute.type === 'swatch' &&
                                                                    <button className="cart-overlay-size-btn" style={{ backgroundColor: attribute?.items[colorIndex].displayValue }}></button>
                                                                }
                                                                {
                                                                    attribute.id === 'Capacity' &&
                                                                    <button className="cart-overlay-size-btn">{attribute?.items[capacityIndex].displayValue}</button>
                                                                }
                                                                {
                                                                    attribute.id === 'With USB 3 ports' &&
                                                                    <button className="cart-overlay-size-btn">{attribute?.items[usbPortIndex].displayValue}</button>
                                                                }
                                                                {
                                                                    attribute.id === 'Touch ID in keyboard' &&
                                                                    <button className="cart-overlay-size-btn">{attribute?.items[keyboardIndex].displayValue}</button>
                                                                }
                                                            </div>

                                                        ))
                                                    }
                                                </div>

                                            </div>
                                            <div className="added-product-right">
                                                <div className="increase-btns">
                                                    <button onClick={() => handleIncrementProductQuantity(product)}><AiOutlinePlus /></button>
                                                    <p>{product?.count}</p>
                                                    <button onClick={() => handleDecrementProductQuantity(product)}><AiOutlineMinus /></button>
                                                </div>
                                                <div>
                                                    <img className="cart-overlay-img" src={product?.gallery[0]} alt="cart_product_image" />
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
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

                            </>
                    }

                </div>
            </div>
        )
    }
}

CartOverlay.contextType = ButtonFunctionsContext;

export default CartOverlay;