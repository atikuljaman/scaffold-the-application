import React, { Component } from 'react'
import { useParams } from 'react-router';
import ButtonFunctionsContext from '../../contexts/ButtonFunctions';
import useProduct from '../../hooks/useProduct';
import './ProductDetail.css';


function ProvideSingleData({ children }) {
    const { id } = useParams();
    const { loading, error, data } = useProduct(id);
    return children({ id, loading, error, data, });
}


class ProductDetail extends Component {

    render() {
        const { amounts, currency, index, selectedImgRef, selectedSizeBtnRef, selectedColorBtnRef, selectedCapacityBtnRef, selectedUsbPortBtnRef, selectedKeyboardBtnRef, handleAddToCart, handleTabImg, handleTabSizeBtn, handleTabColorBtn, handleTabCapacityBtn, handleTabKeyboardBtn, handleTabUsbPortBtn } = this.context



        return (
            <ProvideSingleData>
                {({ id, data, error, loading }) => {
                    if (loading) {
                        return <h4>Loading...</h4>;
                    }

                    if (error) {
                        return (
                            <>
                                <h3>Something wen't wrong!</h3>
                                {
                                    console.log(error)
                                }
                            </>
                        )
                    }

                    return (
                        <>
                            <div className="product-detail-section" key={id}>
                                <div className="product-detail-left-container">
                                    <div className="unselected-product-img-container" ref={selectedImgRef}>
                                        {data?.product?.gallery?.map((img, index) => (
                                            <img className="unselected-product-img" src={img} alt="Unselected Product Images"
                                                onClick={() => handleTabImg(index)}
                                            />

                                        ))}
                                    </div>
                                    <div>
                                        <img className="selected-product-img" src={data?.product?.gallery[index]} alt="Selected Product" />
                                    </div>
                                </div>
                                <div className="product-detail-right-container">
                                    <h1 className="product-brand">
                                        {data?.product?.brand}
                                        <br />
                                        <span>{data?.product?.name}</span>
                                    </h1>
                                    <div className="product-size-option">
                                        {data?.product?.attributes.map(attribute => (
                                            <div>
                                                <p className="size-title">{attribute?.name}:</p>
                                                <div style={{ display: 'flex' }}>
                                                    {
                                                        attribute.id === 'Size' &&
                                                        <div className="size-select-btns" ref={selectedSizeBtnRef}>
                                                            {attribute?.items.map((item, buttonIndex) => (
                                                                <button onClick={() => handleTabSizeBtn(buttonIndex)}>{item.value}</button>
                                                            ))}
                                                        </div>
                                                    }
                                                    {
                                                        attribute.type === 'swatch' &&
                                                        <div className="size-select-btns" ref={selectedColorBtnRef}>
                                                            {attribute?.items.map((item, colorIndex) => (
                                                                <button onClick={() => handleTabColorBtn(colorIndex)} style={{ backgroundColor: item?.value }}></button>
                                                            ))}
                                                        </div>
                                                    }
                                                    {
                                                        attribute.id === 'Capacity' &&
                                                        <div className="size-select-btns" ref={selectedCapacityBtnRef}>
                                                            {attribute?.items.map((item, capacityIndex) => (
                                                                <button onClick={() => handleTabCapacityBtn(capacityIndex)}>{item?.value}</button>
                                                            ))}
                                                        </div>
                                                    }
                                                    {
                                                        attribute.id === 'With USB 3 ports' &&
                                                        <div className="size-select-btns" ref={selectedUsbPortBtnRef}>
                                                            {attribute?.items.map((item, usbPortIndex) => (
                                                                <button onClick={() => handleTabUsbPortBtn(usbPortIndex)}>{item?.value}</button>
                                                            ))}
                                                        </div>
                                                    }
                                                    {
                                                        attribute.id === 'Touch ID in keyboard' &&
                                                        <div className="size-select-btns" ref={selectedKeyboardBtnRef}>
                                                            {attribute?.items.map((item, keyboardIndex) => (
                                                                <button onClick={() => handleTabKeyboardBtn(keyboardIndex)}>{item?.value}</button>
                                                            ))}
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="product-price">
                                        {data?.product?.prices.map(attribute => (
                                            <div key={attribute?.id}>
                                                <p className="price-title">{attribute?.__typename}:</p>
                                            </div>

                                        )).slice(0, 1)}
                                        {
                                            !currency ? <p className="selected-product-price">
                                                ${data?.product?.prices[0].amount}
                                            </p>
                                                :
                                                amounts.map((price, priceIndex) => (
                                                    currency.currencyName === price?.currency &&
                                                    <p className="selected-product-price">{currency.symbol}{data?.product?.prices[priceIndex].amount}</p>

                                                ))
                                        }
                                    </div>
                                    <button onClick={() => handleAddToCart(data)} className="add-to-cart-btn">Add to cart</button>
                                    <div className="product-description">
                                        <p className="description" dangerouslySetInnerHTML={{ __html: data?.product?.description }}></p>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }}
            </ProvideSingleData>
        )
    }
}
ProductDetail.contextType = ButtonFunctionsContext;
export default ProductDetail;
