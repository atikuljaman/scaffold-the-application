import React, { Component, createContext, createRef } from 'react'

const ButtonFunctionsContext = createContext();


export class ButtonFunctionsProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedProducts: [],
            index: 0,
            buttonIndex: 0,
            colorIndex: 0,
            capacityIndex: 0,
            usbPortIndex: 0,
            keyboardIndex: 0,
            currency: '',
            amounts: [],
            priceIndex: 0
        }
    };


    handleAddToCart = data => {
        const { product } = data
        const addedProducts = this.state.addedProducts.slice();
        let allReadyAddedToCart = false;

        addedProducts.forEach(addedProduct => {
            if (addedProduct.name === product.name) {
                allReadyAddedToCart = true
                addedProduct.count++
            }
        });

        if (!allReadyAddedToCart) {
            addedProducts.push({ ...product, count: 1 })
        }
        this.setState({ addedProducts })
    };

    handleIncrementProductQuantity = (product) => {
        const products = this.state.addedProducts;
        const added = products.find(pd => pd.name === product.name);
        if (added) {
            products.map(pd => (
                pd.name === product.name && this.setState({ ...added, count: added.count++ })
            ))
        }
    }

    handleDecrementProductQuantity = (product) => {
        const products = this.state.addedProducts;
        const added = products.find(pd => pd.name === product.name);
        if (added) {
            products.map(pd => (
                pd.name === product.name && this.setState({ ...added, count: added.count-- })
            ))

            if (added.count <= 0) {
                const yoo = products.filter(pd => pd.name !== product.name)
                this.setState({ addedProducts: yoo })
            }
        }
    }


    selectedImgRef = createRef();
    selectedSizeBtnRef = createRef();
    selectedColorBtnRef = createRef();
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
    handleTabColorBtn = colorIndex => {
        this.setState({ colorIndex: colorIndex })
        const buttons = this.selectedColorBtnRef.current.children;
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = buttons[i].className.replace("active-btn", "")
        }
        buttons[colorIndex].className = "active-btn";
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

    currencySwitcher = e => {
        const currencies = [
            {
                currencyName: "USD",
                symbol: '$'
            },
            {
                currencyName: "GBP",
                symbol: '£'
            },
            {
                currencyName: "AUD",
                symbol: 'A$'
            },
            {
                currencyName: "JPY",
                symbol: '¥'
            },
            {
                currencyName: "RUB",
                symbol: '₽'
            },
        ];


        if (e.target.value === 'USD') {
            this.setState({ currency: currencies[0] });
        }
        if (e.target.value === 'GBP') {
            this.setState({ currency: currencies[1] });
        }
        if (e.target.value === 'AUD') {
            this.setState({ currency: currencies[2] });
        }
        if (e.target.value === 'JPY') {
            this.setState({ currency: currencies[3] });
        }
        if (e.target.value === 'RUB') {
            this.setState({ currency: currencies[4] });
        }
    }

    amountSwitcher = data => {
        data.forEach(products => {
            this.setState({ amounts: products.prices });
        })
    }


    render() {
        const { amounts, currency, addedProducts, filterProduct, index, buttonIndex, colorIndex, capacityIndex, usbPortIndex, keyboardIndex } = this.state;
        const { selectedImgRef, selectedSizeBtnRef, selectedColorBtnRef, selectedCapacityBtnRef, selectedUsbPortBtnRef, selectedKeyboardBtnRef, handleAddToCart, handleIncrementProductQuantity, handleDecrementProductQuantity, handleTabImg, handleTabSizeBtn, handleTabColorBtn, handleTabCapacityBtn, handleTabUsbPortBtn, handleTabKeyboardBtn, currencySwitcher, amountSwitcher } = this;



        return (
            <ButtonFunctionsContext.Provider value={{
                amounts,
                currency,
                addedProducts,
                filterProduct,
                index,
                buttonIndex,
                colorIndex,
                capacityIndex,
                usbPortIndex,
                keyboardIndex,
                selectedImgRef,
                selectedSizeBtnRef,
                selectedColorBtnRef,
                selectedCapacityBtnRef,
                selectedUsbPortBtnRef,
                selectedKeyboardBtnRef,
                handleAddToCart,
                handleIncrementProductQuantity,
                handleDecrementProductQuantity,
                handleTabImg,
                handleTabSizeBtn,
                handleTabColorBtn,
                handleTabCapacityBtn,
                handleTabUsbPortBtn,
                handleTabKeyboardBtn,
                currencySwitcher,
                amountSwitcher



            }}>
                {this.props.children}
            </ButtonFunctionsContext.Provider>
        )
    }
}

export default ButtonFunctionsContext;