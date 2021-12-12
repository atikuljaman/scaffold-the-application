import React, { Component, createRef } from 'react'
import { useParams } from 'react-router';
import useProduct from '../../hooks/useProduct';
import Header from '../SharedPage/Header/Header';
import './ProductDetail.css';


function ProvideSingleData({ children }) {
    const { id } = useParams();
    const { loading, error, data } = useProduct(id);
    return children({ id, loading, error, data, });
}


class ProductDetail extends Component {

    state = {
        index: 0,
        buttonIndex: 0,
        capacityIndex: 0,
        usbPortIndex: 0,
        keyboardIndex: 0
    }

    selectedImgRef = createRef();
    selectedSizeBtnRef = createRef();
    selectedCapacityBtnRef = createRef();
    selectedUsbPortBtnRef = createRef();
    selectedKeyboardBtnRef = createRef();


    handleTabImg = index => {
        this.setState({ index: index })
        const images = this.selectedImgRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "")
        }
        images[index].className = "active";
    }

    handleTabSizeBtn = buttonIndex => {
        this.setState({ buttonIndex: buttonIndex })
        const buttons = this.selectedSizeBtnRef.current.children;
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = buttons[i].className.replace("active-btn", "")
        }
        buttons[buttonIndex].className = "active-btn";
    }

    handleTabCapacityBtn = capacityIndex => {
        this.setState({ capacityIndex: capacityIndex })
        const capacity = this.selectedCapacityBtnRef.current.children;
        for (let i = 0; i < capacity.length; i++) {
            capacity[i].className = capacity[i].className.replace("active-btn", "")
        }
        capacity[capacityIndex].className = "active-btn";
    }

    handleTabUsbPortBtn = usbPortIndex => {
        this.setState({ usbPortIndex: usbPortIndex })
        const usbPort = this.selectedUsbPortBtnRef.current.children;
        for (let i = 0; i < usbPort.length; i++) {
            usbPort[i].className = usbPort[i].className.replace("active-btn", "")
        }
        usbPort[usbPortIndex].className = "active-btn";
    }

    handleTabKeyboardBtn = keyboardIndex => {
        this.setState({ keyboardIndex: keyboardIndex })
        const usbPort = this.selectedKeyboardBtnRef.current.children;
        for (let i = 0; i < usbPort.length; i++) {
            usbPort[i].className = usbPort[i].className.replace("active-btn", "")
        }
        usbPort[keyboardIndex].className = "active-btn";
    }

    render() {
        const { index } = this.state
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
                            <Header />
                            <div className="product-detail-section" key={id}>
                                <div className="product-detail-left-container">
                                    <div className="unselected-product-img-container" ref={this.selectedImgRef}>
                                        {data?.product?.gallery?.map((img, index) => (
                                            <img className="unselected-product-img" src={img} alt="Unselected Product Images"
                                                onClick={() => this.handleTabImg(index)}
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
                                                {console.log(attribute)}
                                                <p className="size-title">{attribute?.name}:</p>
                                                <div>
                                                    {
                                                        attribute.id === 'Size' &&
                                                        <div className="size-select-btns" ref={this.selectedSizeBtnRef}>
                                                            {attribute?.items.map((item, buttonIndex) => (
                                                                <button onClick={() => this.handleTabSizeBtn(buttonIndex)}>{item?.displayValue}</button>
                                                            ))}
                                                        </div>
                                                    }
                                                    {
                                                        attribute.id === 'Color' &&
                                                        <div className="size-select-btns" ref={this.selectedSizeBtnRef}>
                                                            {attribute?.items.map((item, buttonIndex) => (
                                                                <button onClick={() => this.handleTabSizeBtn(buttonIndex)}>{item?.displayValue}</button>
                                                            ))}
                                                        </div>
                                                    }
                                                    {
                                                        attribute.id === 'Capacity' &&
                                                        <div className="size-select-btns" ref={this.selectedCapacityBtnRef}>
                                                            {attribute?.items.map((item, capacityIndex) => (
                                                                <button onClick={() => this.handleTabCapacityBtn(capacityIndex)}>{item?.displayValue}</button>
                                                            ))}
                                                        </div>
                                                    }
                                                    {
                                                        attribute.id === 'With USB 3 ports' &&
                                                        <div className="size-select-btns" ref={this.selectedUsbPortBtnRef}>
                                                            {attribute?.items.map((item, usbPortIndex) => (
                                                                <button onClick={() => this.handleTabUsbPortBtn(usbPortIndex)}>{item?.displayValue}</button>
                                                            ))}
                                                        </div>
                                                    }
                                                    {
                                                        attribute.id === 'Touch ID in keyboard' &&
                                                        <div className="size-select-btns" ref={this.selectedKeyboardBtnRef}>
                                                            {attribute?.items.map((item, keyboardIndex) => (
                                                                <button onClick={() => this.handleTabKeyboardBtn(keyboardIndex)}>{item?.displayValue}</button>
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
                                                <p className="selected-product-price">${attribute?.amount}</p>
                                            </div>
                                        )).slice(0, 1)}
                                    </div>
                                    <button className="add-to-cart-btn">Add to cart</button>
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
export default ProductDetail;