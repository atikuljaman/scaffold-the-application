// import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React, { Component } from 'react'
import Header from '../SharedPage/Header/Header';



const GET_PRODUCTS = gql`
    query{
        categories{
        products{
            name
        }
    }
}
`

class Home extends Component {
    render() {
        return (
            <useQuery query={GET_PRODUCTS}>
                <div>
                    <Header />
                </div>
            </useQuery>
        )
    }
}

export default Home;