import { gql } from '@apollo/client';

export const GetProducts = gql`
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


export const GetCategories = gql`
  query GetCategories {
    categories {
      id
      name
      description
    }
  }
`;


export const GetProduct = gql`
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