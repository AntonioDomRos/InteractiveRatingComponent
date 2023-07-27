import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import RatingContext from '../context/RatingContext';

function Rating() {
	const { stars, setstars } = useContext(RatingContext);
	const [navigate, setnavigate] = useState(false);

	const handleChange = (e) => {
		setstars(Number(e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(stars);
		setnavigate(true);
	};

	if (navigate) {
		return <Navigate to={'/gratitude'} />;
	}

	return (
		<div>
			<div>
				<h1>Califica nuestro servicio</h1>
				<p>Deja tu calificación y dinos qué opinas:</p>
			</div>
			<div>
				<div>
					<h2>Título de la Card</h2>
					<p>Texto de la Card</p>
				</div>
				<div>
					<div className="rating">
						<input
							type="radio"
							hidden
							name="rate"
							id="rating_5"
							value="5"
							onChange={handleChange}
						/>
						<label htmlFor="rating_5"></label>

						<input
							type="radio"
							hidden
							name="rate"
							id="rating_4"
							value="4"
							onChange={handleChange}
						/>
						<label htmlFor="rating_4"></label>

						<input
							type="radio"
							hidden
							name="rate"
							id="rating_3"
							value="3"
							onChange={handleChange}
						/>
						<label htmlFor="rating_3"></label>

						<input
							type="radio"
							hidden
							name="rate"
							id="rating_2"
							value="2"
							onChange={handleChange}
						/>
						<label htmlFor="rating_2"></label>

						<input
							type="radio"
							hidden
							name="rate"
							id="rating_1"
							value="1"
							onChange={handleChange}
						/>
						<label htmlFor="rating_1"></label>
					</div>
					<Link to="/gratitude">
						<button onClick={handleSubmit}>Enviar calificación</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Rating;
