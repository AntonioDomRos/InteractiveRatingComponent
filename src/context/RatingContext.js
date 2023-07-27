import { createContext, useState } from 'react';

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
	const [stars, setstars] = useState(5);

	return (
		<RatingContext.Provider value={{ stars, setstars }}>
			{children}
		</RatingContext.Provider>
	);
};

export default RatingContext;
