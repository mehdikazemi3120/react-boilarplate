import React from 'react'
import ReactDOM from 'react-dom/client'

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dropzone/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import {createTheme, MantineProvider} from "@mantine/core";
import {QueryClient, QueryClientProvider} from "react-query";
import App from './App';


const theme = createTheme({
	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	breakpoints: {
		xs: "15em",
		sm: "48em",
		md: "64em",
		lg: "74em",
		xl: "90em",
	},
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<MantineProvider theme={theme}>
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<App/>
			</QueryClientProvider>
		</React.StrictMode>
	</MantineProvider>
)
