import React, { Component } from 'react'
import { BsCart } from 'react-icons/bs';
import Header from '../../SharedPage/Header/Header';
import './Women.css';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';


function ProvideData({ children }) {
    const { loading, error, data } = useProducts();
    return children({ loading, error, data, });
}



class Women extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="women-section">
                    <ProvideData>
                        {
                            ({ loading, error, data }) => {
                                if (loading) return <div>Loading...</div>;
                                if (error) return <div>Error :(</div>;
                                return (
                                    <>
                                        <h1 className="page-tile">Category name</h1>
                                        <div className="women-card-container">
                                            <div className="product-card-container">
                                                {
                                                    data.category.products.map(product => (
                                                        <div className="card">
                                                            <div className="product-desc">
                                                                <div>
                                                                    <img className="product-img" src={product?.gallery[0]} alt="" />
                                                                    <p className="product-title">{product?.name}</p>
                                                                    <p className="product-price">${product?.prices[0]?.amount}</p>
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

export default Women;


