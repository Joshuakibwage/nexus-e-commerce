import { gql } from '@apollo/client';

export const getProducts = gql`
  query GetProducts {
    products {
      id
      name
      description
      priceAmount
      currency
      images {
        id
      }
      category {
        id
        name
      }
    }
  }
`;


export const getCategories = gql`
  query GetCategories {
    categories {
      id
      name
      description
    }
  }
`;


export const getProduct = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
      priceAmount
      currency
      images {
        id
      }
      category {
        id
        name
      }
    }
  }
`;