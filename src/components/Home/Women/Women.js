// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';
import React, { Component } from 'react'
import { BsCart } from 'react-icons/bs';
import Header from '../../SharedPage/Header/Header';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import './Women.css';

const GET_PRODUCTS = gql`
  query{
	category{
  	products{
      id
      name
      gallery
      prices{
        amount
        currency
      }
    }
  }
}
`



class Women extends Component {
    render() {

        return (
            <div>
                <Header />
                <div className="women-section">
                    <Query query={GET_PRODUCTS}>
                        {({ loading, error, data }) => {
                            if (loading) return <div>Loading...</div>;
                            if (error) return <div>Error :(</div>;

                            console.log(data.category.products[0]);
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
                                                        <div className="add-to-cart">
                                                            <BsCart className="product-cart-icon" />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </>

                            )
                        }}
                    </Query>
                </div>
            </div>
        )
    }
}

export default Women;