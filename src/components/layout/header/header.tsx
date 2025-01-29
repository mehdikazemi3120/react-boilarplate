import {Flex, Text} from "@mantine/core";
import classes from "./styles.module.css";
import {IconHome} from "@tabler/icons-react";

const Header = () => {
	return (
		<>
			<Flex className={classes.container}>
				<IconHome stroke={2.4} size={40} color="var(--mantine-color-red-7)"/>
				<Text className={classes.title}>
					Your Title
				</Text>
			</Flex>
		</>
	)
}

export default Header;