import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_FOOD } from '../queries';

import Button from '../button/Button';

const AddFood = () => {
	const [dessert, setDessert] = useState('');
	const [protein, setProtein] = useState();
	const [fat, setFat] = useState();
	const [carb, setCarb] = useState();
	const [calories, setCalories] = useState();

	const [addFood, { data }] = useMutation(ADD_FOOD);

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addFood({
						variables: { dessert , protein , fat, carb, calories },
					});
				}}>
				<label>
					Dessert :
					<input
						type='text'
						onChange={(e) => setDessert(e.target.value)}
						value={dessert}
					/>
				</label>
				<br />
				<label>
					Protein :{' '}
					<input 
						type='text'
						onChange={(e) => setProtein(e.target.value)}
						value={protein}
						/>
				</label>
				<br />
				<label>
					Fat : 
					<input 
						type='text' 
						onChange={(e) => setFat(e.target.value)}
						value={fat}
					/>
				</label>
				<br />
				<label>
					Carb :
					<input
						type='text'
						onChange={(e) => setCarb(e.target.value)}
						value={carb}	
					/>
				</label>
				<br />
				<label>
					Calories:{' '}
					<input 
						type='text'
						onChange={(e) => setCalories(e.target.value)}
						value={calories}	
					/>
				</label>
				<br />
				<br />
				<Button>Add Food</Button>
			</form>
		</div>
	);
};

export default AddFood;
