import React, { Component } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
import ButtonFunctionsContext from '../../../contexts/ButtonFunctions';
import './CartOverlay.css';

class CartOverlay extends Component {

    render() {
        const { amounts, currency, addedProducts, handleIncrementProductQuantity, handleDecrementProductQuantity, buttonIndex, colorIndex, capacityIndex, usbPortIndex, keyboardIndex } = this.context;

        let total = 0;

        for (let addedProduct of addedProducts) {
            if (currency.currencyName === 'USD') {
                total = total + addedProduct?.prices[0]?.amount * addedProduct?.count;
            }
            else if (currency.currencyName === 'GBP') {
                total = total + addedProduct?.prices[1]?.amount * addedProduct?.count;
            }
            else if (currency.currencyName === 'AUD') {
                total = total + addedProduct?.prices[2]?.amount * addedProduct?.count;
            }
            else if (currency.currencyName === 'JPY') {
                total = total + addedProduct?.prices[3]?.amount * addedProduct?.count;
            }
            else if (currency.currencyName === 'RUB') {
                total = total + addedProduct?.prices[4]?.amount * addedProduct?.count;
            }
            else {
                total = total + addedProduct?.prices[0]?.amount * addedProduct?.count;
            }
        }

        return (
            <div className="cart-overlay-section">
                <div className="cart-overlay-container">
                    {
                        addedProducts?.length === 0 ? <h4 className="cart-overlay-title"><span>Your bag is empty</span></h4>
                            :
                            <>
                                <h4 className="cart-overlay-title">My Bag, <span>{addedProducts?.length} items</span></h4>
                                {
                                    <div className="cart-overlay-sub-container">
                                        {
                                            addedProducts.map(product => (
                                                <>
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
                                                                        <p className="cart-overlay-price">{currency.symbol}{(product?.prices[priceIndex]?.amount * product?.count).toFixed(2)}</p>

                                                                    ))
                                                            }
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
                                                                                <button className="cart-overlay-size-btn" style={{ backgroundColor: attribute?.items[colorIndex]?.value }}></button>
                                                                            }
                                                                            {
                                                                                attribute.id === 'Capacity' &&
                                                                                <button className="cart-overlay-size-btn">{attribute?.items[capacityIndex]?.value}</button>
                                                                            }
                                                                            {
                                                                                attribute.id === 'With USB 3 ports' &&
                                                                                <button className="cart-overlay-size-btn">{attribute?.items[usbPortIndex]?.value}</button>
                                                                            }
                                                                            {
                                                                                attribute.id === 'Touch ID in keyboard' &&
                                                                                <button className="cart-overlay-size-btn">{attribute?.items[keyboardIndex]?.value}</button>
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
                                                    <div className="added-product-bottom">
                                                        <div className="total-price-container">
                                                            <p className="total-price-title">Total</p>
                                                            {
                                                                !currency ? <p className="total-price">
                                                                    ${(total).toFixed(2)}
                                                                </p>
                                                                    :
                                                                    <p className="total-price">
                                                                        {currency.symbol}{(total).toFixed(2)}
                                                                    </p>
                                                            }
                                                        </div>
                                                        <div className="added-product-bottom-btns">
                                                            <Link to="/viewCart">
                                                                <button className="view-bag-btn">view bag</button>
                                                            </Link>
                                                            <button className="check-out-btn">check out</button>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </div>
                                }
                            </>


                    }


                </div>
            </div>
        )
    }
}

CartOverlay.contextType = ButtonFunctionsContext;
export default CartOverlay;