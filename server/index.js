const { ApolloServer, gql } = require('apollo-server');

let foodList = [
	{
		dessert: 'Oreo',
		nutritionInfo: {
			calories: 437,
			fat: 18,
			carb: 63,
			protein: 4,
		},
	},
	{
		dessert: 'Nougat',
		nutritionInfo: {
			calories: 360,
			fat: 19,
			carb: 50,
			protein: 37,
		},
	},
];

const addFood = (dessert, calories, fat, carb, protein) => {
	const newFood = { dessert, nutritionInfo: { calories, fat, carb, protein } };
	foodList = [...foodList, newFood];
	return { ...newFood };
};

const getFoodList = () => {
	return foodList;
};

const typeDefs = gql`
	type Food {
		dessert: String
		nutritionInfo: Nutrition
	}

	type Nutrition {
		calories: String
		fat: String
		carb: String
		protein: String
	}

	type Query {
		foodList: [Food]
	}

	input AddFoodInput {
		dessert: String
		calories: String
		fat: String
		carb: String
		protein: String
	}

	type Mutation {
		addFood(dessert: String, calories: String, fat: String, carb: String, protein: String): Food
	}
`;

const resolvers = {
	Query: {
		foodList: () => getFoodList(),
	},
	Mutation: {
		addFood: (parent, args) => {
			// console.log('im here');
			// console.log(args);
			const { dessert, calories, fat, carb, protein } = args;
			return addFood(dessert, calories, fat, carb, protein);
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
