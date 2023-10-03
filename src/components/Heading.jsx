import { Box, Text } from "@chakra-ui/layout";
import React from "react";

const Heading = () => {
	return (
		<Box
			position={"absolute"}
			right={0}
			paddingY={3}
			paddingX={5}
			fontSize="20px"
		>
			<Text className="logo">Djordje.</Text>
		</Box>
	);
};

export default Heading;
