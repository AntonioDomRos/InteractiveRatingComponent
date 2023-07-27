import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Gratitude from './components/Gratitude';
import Rating from './components/Rating';
import { RatingProvider } from './context/RatingContext';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Rating />,
	},
	{
		path: '/gratitude',
		element: <Gratitude />,
	},
]);

function App() {
	return (
		<RatingProvider>
			<RouterProvider router={router} />
		</RatingProvider>
	);
}

export default App;
