import {
	Outlet,
	createRootRouteWithContext,
	createRoute,
} from "@tanstack/react-router";
import {AuthStore} from "./hooks/types";
import Layout from "./components/layout/layout.tsx";
import indexPage from "./pages/Index.tsx";


export interface RouterContext {
	authentication: AuthStore | undefined
}

export const route = createRootRouteWithContext<RouterContext>()({
	component: () => {
		return (
			<>
				{/*<ScrollRestoration/>*/}
				<Outlet/>
				{/*<Suspense>*/}
				{/*	<TanStackRouterDevtools initialIsOpen={false} position={"top-right"}/>*/}
				{/*</Suspense>*/}
			</>
		);
	},
});

export const layoutRoute = createRoute({
	getParentRoute: () => route,
	id: 'layout',
	component: () => <Layout><Outlet /></Layout>
})

export const indexRoute = createRoute({
	getParentRoute: () => layoutRoute,
	path: '/',
	component: indexPage
})


export const routeTree = route.addChildren([
	layoutRoute.addChildren([
		indexRoute,
	])
]);