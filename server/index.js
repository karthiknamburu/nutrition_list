const { ApolloServer, gql } = require('apollo-server');

const foodList = [
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

const typeDefs = gql`
	type Food {
		dessert: String
		nutritionInfo: Nutrition
    }
    
    type Nutrition {
        calories: Int,
        fat: Int,
        carb: Int,
        protein: Int
    }

	type Query {
		foodList: [Food]
	}
`;

const resolvers = {
	Query: {
		foodList: () => foodList,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
