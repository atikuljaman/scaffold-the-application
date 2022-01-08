import React, { Component } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ButtonFunctionsContext from '../../contexts/ButtonFunctions';
import './ViewCart.css';

class ViewCart extends Component {

    render() {
        const { amounts, currency, addedProducts, buttonIndex, capacityIndex, usbPortIndex, keyboardIndex, handleIncrementProductQuantity, handleDecrementProductQuantity } = this.context;
        return (
            <div>
                <div className="view-cart-section">
                    <h1 className="view-cart-title">Cart</h1>
                    {
                        addedProducts?.map(addedProduct => (
                            <div className="view-cart-container">
                                <div className="view-cart-left-container">
                                    <p>
                                        {addedProduct?.brand}
                                        <br />
                                        <span>{addedProduct?.name}</span>
                                    </p>
                                    {
                                        !currency ? <p className="view-cart-product-price">
                                            ${(addedProduct?.prices[0]?.amount * addedProduct?.count).toFixed(2)}
                                        </p>
                                            :
                                            amounts.map((price, priceIndex) => (
                                                currency.currencyName === price?.currency &&
                                                <p className="view-cart-product-price">{currency.symbol}{(addedProduct?.prices[priceIndex].amount * addedProduct?.count).toFixed(2)}</p>

                                            ))
                                    }
                                    <div className="view-cart-product-size-btn">
                                        {
                                            addedProduct?.attributes.map(attribute => (
                                                <div>
                                                    {
                                                        attribute.id === 'Size' &&
                                                        <button>{attribute?.items[buttonIndex]?.value}</button>

                                                    }
                                                    {
                                                        attribute.type === 'swatch' &&
                                                        <button style={{ backgroundColor: attribute?.items[buttonIndex].value }}></button>
                                                    }
                                                    {
                                                        attribute.id === 'Capacity' &&
                                                        <button>{attribute?.items[capacityIndex].value}</button>
                                                    }
                                                    {
                                                        attribute.id === 'With USB 3 ports' &&
                                                        <button>{attribute?.items[usbPortIndex].value}</button>
                                                    }
                                                    {
                                                        attribute.id === 'Touch ID in keyboard' &&
                                                        <button>{attribute?.items[keyboardIndex].value}</button>
                                                    }
                                                </div>

                                            ))
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div className="view-cart-right-container">
                                        <div className="view-cart-increase-btn">
                                            <button onClick={() => handleIncrementProductQuantity(addedProduct)}><AiOutlinePlus /></button>
                                            <p>{addedProduct?.count}</p>
                                            <button onClick={() => handleDecrementProductQuantity(addedProduct)}><AiOutlineMinus /></button>
                                        </div>
                                        <div>
                                            <img src={addedProduct?.gallery[0]} className="view-cart-product-img" alt="Selected_Product_Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

ViewCart.contextType = ButtonFunctionsContext;
export default ViewCart;
