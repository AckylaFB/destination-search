import { createBrowserRouter } from 'react-router-dom';
import { Layout, Home } from '@/pages';

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
		],
	},
]);

export default router;
