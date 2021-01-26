import { gql } from 'apollo-boost';


const GET_NUTRITION_LIST = gql`
{
    foodList {
      dessert
      nutritionInfo{
        protein
        fat
        carb
        calories
      }
    }
  }
`;


export { GET_NUTRITION_LIST };