import React from "react";
import {AppShell} from "@mantine/core";
import Header from "./header/header.tsx";
import Footer from "./footer/footer.tsx";

const Layout = ({children}: { children: React.ReactNode }) => {

	return (
		<>
			<AppShell
				header={{height: {xs: 70}}}
				padding={{xs: 5, sm: 5}}
			>
				<AppShell.Header withBorder={false}>
					<Header/>
				</AppShell.Header>

				<AppShell.Main style={{minHeight: '95vh'}} >
					{children}
				</AppShell.Main>

			</AppShell>
			<Footer/>
		</>

	);
};

export default Layout;
