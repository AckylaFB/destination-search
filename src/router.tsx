import { createBrowserRouter } from 'react-router-dom';
import { Layout, Home, DestinationPage } from '@/pages';

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
