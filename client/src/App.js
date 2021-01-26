import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Table from './Table/Table';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:4000/',
});

function App() {
	return (
		<ApolloProvider client={client}>
			<section class='bg-light-gray'>
				<header className='tc pv4 pv5-ns'>
					<h1 className='f5 f4-ns fw6 mid-gray'>Jasper Whitehouse</h1>
				</header>
				<Table />
			</section>
		</ApolloProvider>

	);
}

export default App;
