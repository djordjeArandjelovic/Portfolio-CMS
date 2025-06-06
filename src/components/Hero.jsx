import ResumePDF from "../Djordje_Arandjelovic.pdf";

import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import React from "react";
import img from "../assets/cover4.svg";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";

const Home = ({ bottomRef }) => {
	return (
		<>
			<Flex
				align={"center"}
				justify={"space-between"}
				height={"100vh"}
				paddingX={14}
				paddingY={{ base: "20%", md: 0, lg: 0 }}
				direction={{ base: "column", md: "row", lg: "row" }}
				gap={{ base: "10rem", md: 2, lg: 0 }}
			>
				<Box
					width={{
						base: "100%",
						md: "50%",
					}}
				>
					<Heading
						className="name"
						as={"h1"}
						marginBottom={5}
						fontSize={{
							base: 24,
							sm: 30,
							md: 36,
						}}
					>
						Djordje Arandjelovic
					</Heading>
					<Heading className="position" as={"h3"} fontSize={"md"}>
						iOS Developer
					</Heading>
					<Text color={"#fff"} className="heroText">
						iOS developer with experience in both SwiftUI and UIKit. 
						I enjoy building apps that are practical, functional, 
						and meet the needs of users. Currently working full-time 
						and also freelancing on various iOS projects.
					</Text>
					<Flex gap={10} className="btnBox">
						<Flex
							gap={{
								base: 0,
								sm: 2,
								md: 3,
								lg: 5,
							}}
							direction={{
								base: "column",
								sm: "row",
								md: "row",
								lg: "row",
							}}
						>
							<Button className="btn btn-cv">
								<a
									href={ResumePDF}
									download="Djordje-Arandjelovic-CV"
									target="_blank"
									rel="noreferrer"
								>
									Download CV
								</a>
							</Button>

							<Button
								onClick={() =>
									bottomRef.current?.scrollIntoView({ behavior: "smooth" })
								}
								className="btn btn-talk"
							>
								Let's Talk
							</Button>
						</Flex>
					</Flex>
					<Flex gap={5} className="contact">
						<Link
							color={"white"}
							href="https://www.linkedin.com/in/djordje-arandjelovic/"
							target="_blank"
						>
							<BiLogoLinkedin />
						</Link>
						<Link
							color={"white"}
							href="https://github.com/djordjeArandjelovic"
							target="_blank"
						>
							<FaGithub />
						</Link>
					</Flex>
				</Box>
				<Box className="img-container">
					<Image src={img} fallbackSrc="https://via.placeholder.com/400" />
				</Box>
			</Flex>
		</>
	);
};

export default Home;
