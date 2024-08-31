import { createBrowserRouter } from 'react-router-dom';
import { Layout, Home } from '@/pages';
import { DestinationPage } from './pages/DestinationPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
				index: true,
			},
			{
				path: '/destination',
				element: <DestinationPage />,
			},
		],
	},
]);

export default router;
