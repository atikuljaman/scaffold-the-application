import { gql, useQuery } from '@apollo/client';

// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';

const GET_PRODUCTS = gql`
    
    query{
   category{
  products{
    id
    name
    gallery
    category
    prices{
      currency
      amount
    }
  }
}
}
`;
const useProducts = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    return {
        loading,
        error,
        data
    }
}
export default useProducts;