import { gql, useQuery } from '@apollo/client';

const GET_PRODUCTS = gql`

    query{
      currencies
      categories{
        name
        products{
          name
        }
  }
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