import React, { useContext } from 'react';
import RatingContext from '../context/RatingContext';

export default function Gratitude() {
	const { stars } = useContext(RatingContext);

	return (
		<div>
			<div>
				<h1>Gracias por tu calificacion</h1>
				<p>Has calificado con {stars} estrellas</p>
			</div>
		</div>
	);
}
