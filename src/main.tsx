import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import router from './router';
import GlobalStyle from './styles/global';
import '@/styles/globals.css';
import { store } from '@/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</ReduxProvider>
	</React.StrictMode>,
);
