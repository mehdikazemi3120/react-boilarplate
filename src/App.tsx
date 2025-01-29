import {useAuthStore} from "./hooks/useAuthStore";
import {RouterProvider, createRouter} from '@tanstack/react-router';
import {routeTree} from './router';

const router = createRouter({
	routeTree,
	context: {
		authentication: undefined
	}
})


declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}


const App = () => {
	const auth = useAuthStore();

	return (
		<RouterProvider router={router} context={{authentication: auth}}/>
	)
}

export default App;