import React, { Component } from 'react'
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ButtonFunctionsContext from '../../../contexts/ButtonFunctions';
import useProducts from '../../../hooks/useProducts';
import './Women.css';


function ProvideData({ children }) {
    const { loading, error, data } = useProducts();
    return children({ loading, error, data, });
}


class Women extends Component {

    render() {

        const { currency, amounts, filterProductsByCategory, productCategory, category, filterProducts } = this.context;
        return (
            <div>
                <div className="women-section">
                    <ProvideData>
                        {
                            ({ loading, error, data }) => {
                                if (loading) return <div>Loading...</div>;
                                if (error) return <div>Error :(</div>;
                                return (
                                    <>
                                        <select onChange={productCategory} onClick={() => filterProductsByCategory(data?.category?.products)} id="select">
                                            <option defaultValue="All">All</option>
                                            {
                                                data.categories.map(category => (
                                                    <option>{category?.name}</option>
                                                ))
                                            }
                                        </select>

                                        <div className="women-card-container">
                                            <div className="product-card-container">

                                                {
                                                    !category ?
                                                        data.category.products.map(product => (
                                                            <div className="card">
                                                                <div className="product-desc">
                                                                    <div>
                                                                        <img className="product-img" src={product?.gallery[0]} alt="" />
                                                                        <p className="product-title">{product?.name}</p>
                                                                        {!currency ? <p className="product-price">
                                                                            ${product?.prices[0]?.amount}
                                                                        </p>
                                                                            :
                                                                            <p className="product-price">
                                                                                {
                                                                                    amounts.map((price, priceIndex) => (
                                                                                        currency.currencyName === price?.currency &&
                                                                                        <p className="product-price">{currency.symbol}{product?.prices[priceIndex].amount}</p>

                                                                                    ))
                                                                                }
                                                                            </p>}
                                                                    </div>
                                                                </div>
                                                                <Link to={`/productDetail/${product?.id}`}>
                                                                    <div className="add-to-cart">
                                                                        <BsCart className="product-cart-icon" />
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        ))
                                                        :
                                                        category === 'All' &&
                                                        filterProducts.map(product => (
                                                            <div className="card">
                                                                <div className="product-desc">
                                                                    <div>
                                                                        <img className="product-img" src={product?.gallery[0]} alt="" />
                                                                        <p className="product-title">{product?.name}</p>
                                                                        {!currency ? <p className="product-price">
                                                                            ${product?.prices[0]?.amount}
                                                                        </p>
                                                                            :
                                                                            <p className="product-price">
                                                                                {
                                                                                    amounts.map((price, priceIndex) => (
                                                                                        currency.currencyName === price?.currency &&
                                                                                        <p className="product-price">{currency.symbol}{product?.prices[priceIndex].amount}</p>

                                                                                    ))
                                                                                }
                                                                            </p>}
                                                                    </div>
                                                                </div>
                                                                <Link to={`/productDetail/${product?.id}`}>
                                                                    <div className="add-to-cart">
                                                                        <BsCart className="product-cart-icon" />
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        ))
                                                }
                                                {
                                                    category === 'clothes' &&
                                                    filterProducts.map(product => (
                                                        product?.category === 'clothes' &&
                                                        <div className="card">
                                                            <div className="product-desc">
                                                                <div>
                                                                    <img className="product-img" src={product?.gallery[0]} alt="" />
                                                                    <p className="product-title">{product?.name}</p>
                                                                    {!currency ? <p className="product-price">
                                                                        ${product?.prices[0]?.amount}
                                                                    </p>
                                                                        :
                                                                        <p className="product-price">
                                                                            {
                                                                                amounts.map((price, priceIndex) => (
                                                                                    currency.currencyName === price?.currency &&
                                                                                    <p className="product-price">{currency.symbol}{product?.prices[priceIndex].amount}</p>

                                                                                ))
                                                                            }
                                                                        </p>}
                                                                </div>
                                                            </div>
                                                            <Link to={`/productDetail/${product?.id}`}>
                                                                <div className="add-to-cart">
                                                                    <BsCart className="product-cart-icon" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ))
                                                }
                                                {
                                                    category === 'tech' &&
                                                    filterProducts.map(product => (
                                                        product?.category === 'tech' &&
                                                        <div className="card">
                                                            <div className="product-desc">
                                                                <div>
                                                                    <img className="product-img" src={product?.gallery[0]} alt="" />
                                                                    <p className="product-title">{product?.name}</p>
                                                                    {!currency ? <p className="product-price">
                                                                        ${product?.prices[0]?.amount}
                                                                    </p>
                                                                        :
                                                                        <p className="product-price">
                                                                            {
                                                                                amounts.map((price, priceIndex) => (
                                                                                    currency.currencyName === price?.currency &&
                                                                                    <p className="product-price">{currency.symbol}{product?.prices[priceIndex].amount}</p>

                                                                                ))
                                                                            }
                                                                        </p>}
                                                                </div>
                                                            </div>
                                                            <Link to={`/productDetail/${product?.id}`}>
                                                                <div className="add-to-cart">
                                                                    <BsCart className="product-cart-icon" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </>

                                )
                            }
                        }
                    </ProvideData >
                </div>
            </div>
        )
    }
}
Women.contextType = ButtonFunctionsContext;
export default Women;


