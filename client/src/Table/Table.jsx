import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { GET_NUTRITION_LIST } from '../queries';

import './Table.css';

const Table = () => {
	const { loading, error, data } = useQuery(GET_NUTRITION_LIST);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...(</p>;
	
	return (
		<div className='cf'>
			<div className='fl w-20 w-20-l tc pv5 bg-black-05'></div>
			<div className='fl w-20 w-20-l tc pv5 bg-black-05'>Dessert(100g serving)</div>
			<div className='fl w-20 w-20-l tc pv5 bg-black-05'>Calories</div>
			<div className='fl w-20 w-20-l tc pv5 bg-black-05'>Fat (g)</div>
			<div className='fl w-20 w-20-l tc pv5 bg-black-05'>Carbs (g)</div>
			<div className='fl w-20 w-20-l tc pv5 bg-black-05'>Protein (g)</div>
			{
				data.foodList.map(({ dessert, nutritionInfo: { calories, carb, fat, protein} }) => (
					<div key={dessert}>
						<div className='fl w-20 w-20-l tc pv5 bg-black-05'></div>
						<div className='fl w-20 w-20-l tc pv5 bg-black-05'>{dessert}</div>
						<div className='fl w-20 w-20-l tc pv5 bg-black-05'>{calories}</div>
						<div className='fl w-20 w-20-l tc pv5 bg-black-05'>{carb}</div>
						<div className='fl w-20 w-20-l tc pv5 bg-black-05'>{fat}</div>
						<div className='fl w-20 w-20-l tc pv5 bg-black-05'>{protein}</div>
					</div>

				))
			}
		</div>
	);
};

export default Table;
