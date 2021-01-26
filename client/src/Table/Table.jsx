import React, { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { GET_NUTRITION_LIST } from '../queries';

import Button from '../button/Button';
import './Table.css';

const Table = () => {
	const { loading, error, data } = useQuery(GET_NUTRITION_LIST);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...(</p>;

	return (
		<div class='pa4'>
			<div>
				<br />
				<Button inline type="delete">Delete</Button>
			</div>
			<div class='overflow-auto'>
				<table class='f6 w-100 mw8 center' cellspacing='5'>
					<thead>
						<tr>
							<th class='fw6 bb b--black-20 tl pb3 pr3 bg-white'></th>
							<th class='fw6 bb b--black-20 tl pb3 pr3 bg-white'>
								Dessert(100g serving)
							</th>
							<th class='fw6 bb b--black-20 tl pb3 pr3 bg-white'>Calories</th>
							<th class='fw6 bb b--black-20 tl pb3 pr3 bg-white'>Fat (g)</th>
							<th class='fw6 bb b--black-20 tl pb3 pr3 bg-white'>Carbs (g)</th>
							<th class='fw6 bb b--black-20 tl pb3 pr3 bg-white'>
								Protein (g)
							</th>
						</tr>
					</thead>
					<tbody class='lh-copy'>
						{data.foodList.map(
							({
								dessert,
								nutritionInfo: { calories, carb, fat, protein },
							}) => (
								<tr key={dessert}>
									<td class='pv3 pr3 bb b--black-20 bg-grey'>
										<input type='checkbox' />
									</td>
									<td class='pv3 pr3 bb b--black-20'>{dessert}</td>
									<td class='pv3 pr3 bb b--black-20'>{calories}</td>
									<td class='pv3 pr3 bb b--black-20'>{carb}</td>
									<td class='pv3 pr3 bb b--black-20'>{fat}</td>
									<td class='pv3 pr3 bb b--black-20'>{protein}</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
