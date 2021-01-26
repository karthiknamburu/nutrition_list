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

const ADD_FOOD = gql`
  mutation AddFood($dessert: String!, $protein: String, $fat: String, $carb: String, $calories: String) {
    addFood(dessert: $dessert, protein: $protein, fat: $fat, carb: $carb, calories: $calories) {
      dessert,
      nutritionInfo{
        protein
        fat
        carb
        calories
      }
    }
  }
`;


export { GET_NUTRITION_LIST, ADD_FOOD };