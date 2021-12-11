import { gql, useQuery } from '@apollo/client';

// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';

const GET_PRODUCT = gql`
    
  query GetProduct($id: String!){
  product(id: $id){
    name
    gallery
    description
    attributes{
      id
      name
      type
      items{
        displayValue
      }
    }
    prices{
      currency
      amount
    }
    brand
  }
}
`;
const useProduct = (id) => {
    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: {
            id
        }
    });

    return {
        loading,
        error,
        data
    }
}
export default useProduct;