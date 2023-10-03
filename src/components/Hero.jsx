// import React from "react";
// import heroImg from "../assets/hero.svg";

// const Hero = () => {
// 	return (
// 		<section className="hero">
// 			<div className="hero-center">
// 				<div className="hero-title">
// 					<h1>Contentful CMS</h1>
// 					<p>
// 						Fashion axe stumptown selfies poutine kombucha, banh mi dreamcatcher
// 						godard leggings glossier. Mixtape tacos poke occupy art party
// 						live-edge, leggings VHS thundercats yes plz tbh put a bird on it.
// 						Neutra prism offal jawn tonx kogi. Pour-over af 8-bit small batch
// 						try-hard, same pitchfork shoreditch.
// 					</p>
// 				</div>
// 				<div className="img-container">
// 					<img src={heroImg} alt="woman and the browser" className="img" />
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Hero;

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
import React, { useState } from "react";
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
					<Heading className="name" as={"h1"} marginBottom={5}>
						Djordje Arandjelovic
					</Heading>
					<Heading className="position" as={"h3"} fontSize={"md"}>
						Frontend Developer
					</Heading>
					<Text className="heroText">
						I am a web developer, working on building (and occasinally
						designing) webs aplications. Currently my main focus is React and
						building web softwares. At the moment I am working as a Product
						Manager in a software development company.
					</Text>
					<Flex gap={10} className="btnBox">
						<a
							href={ResumePDF}
							download="Djordje-Arandjelovic-CV"
							target="_blank"
							rel="noreferrer"
						>
							<Button className="btn btn-cv" width={"10rem"}>
								Download CV
							</Button>
						</a>
						<Button
							onClick={() =>
								bottomRef.current?.scrollIntoView({ behavior: "smooth" })
							}
							className="btn btn-talk"
							width={"10rem"}
						>
							Let's Talk
						</Button>
					</Flex>
					<Flex gap={5} className="contact">
						<Link
							href="https://www.linkedin.com/in/djordje-arandjelovic/"
							target="_blank"
						>
							<BiLogoLinkedin />
						</Link>
						<Link href="https://github.com/djordjeArandjelovic" target="_blank">
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
