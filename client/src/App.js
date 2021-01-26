import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import AddFood from './AddFood/AddFood';
import Button from './button/Button';
import Table from './Table/Table';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:4000/',
});

function App() {
	const [showAdd, setShowAdd] = useState(false);

	return (
		<ApolloProvider client={client}>
			<div>
				<section class='bg-light-gray'>
					<div class='cf ph2-ns'>
						<div class='fl w-100 w-20-ns pa2'></div>
						<div class='fl w-100 w-40-ns pa2'>
							<h1 className='f5 f4-ns fw6 mid-gray'>Nutrition List</h1>
						</div>
						<div class='fl w-100 w-40-ns pa2'>
							<Button inline onClick={() => setShowAdd(!showAdd)}>
								Add Item
							</Button>
						</div>
					</div>
				</section>
				{showAdd ? <AddFood /> : <Table />}
			</div>
		</ApolloProvider>
	);
}

export default App;
