import React from "react";
import { jobsData } from "../data";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import scss from "../assets/scss.svg";
import react from "../assets/react.svg";
import { Image } from "@chakra-ui/image";
import {
	Box,
	Card,
	CardBody,
	Divider,
	GridItem,
	Heading,
	Show,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";

const Resume = () => {
	return (
		<>
			<Show above="590px">
				<Box className="main-grid">
					<main className="main">
						<Show above="650px">
							<p className="eyebrow">Skills & Experience</p>
							<h1 color="#fff" className="page-title">
								My Resume
							</h1>
							<p color="#fff" className="intro">
								I am a front end developer with product manager experience and
								passion for learning new techonologies.
							</p>
						</Show>
						<Show below="650px">
							<Heading>My Resume</Heading>
						</Show>
						<Show above="890px">
							<div className="job-experience">
								{jobsData.map((job) => (
									<div className="job" key={job.id}>
										<p className="year">{job.years}</p>
										<div className="job-info">
											<h2 color="#fff" className="role">
												{job.role}
											</h2>
											<span className="company">{job.company}</span>
										</div>
										<p color="#fff">{job.description}</p>
									</div>
								))}
							</div>
						</Show>
						<Show below="890px">
							<VStack>
								{jobsData.map((job) => (
									<Card
										background={"#1b212c"}
										paddingBlock="2rem"
										key={job?.id}
										width="140%"
										position={"relative"}
									>
										<CardBody className="job">
											<Text color={"#ffc940"} as={"p"} className="year">
												{job?.years}
											</Text>
											<Heading
												color="#fff"
												fontSize={{
													base: "xl",
													md: "2xl",
												}}
												size={"lg"}
												className="role"
											>
												{job?.role}
											</Heading>
											<Divider />
											<Box className="job-info">
												<Text
													position={"absolute"}
													top={14}
													right={5}
													textTransform={"uppercase"}
													fontSize={"0.875rem"}
													color={"#6e77a0"}
													as={"span"}
													className="company"
												>
													{job?.company}
												</Text>
											</Box>
											<Text color="#fff" as={"p"} width="90%">
												{job?.description}
											</Text>
										</CardBody>
									</Card>
								))}
							</VStack>
						</Show>
					</main>
					<Show above="590px">
						<aside className="aside">
							<h2 className="visually-hidden">My skills</h2>
							<ul className="icon-list" role="list">
								<li>
									<p className="visually-hidden">html</p>
									<Image src={html} />
								</li>
								<li>
									<p className="visually-hidden">css</p>
									<img src={css} alt="" />
								</li>
								<li>
									<p className="visually-hidden">scss</p>
									<img src={scss} alt="" />
								</li>
								<li>
									<p className="visually-hidden">javascript</p>
									<img src={js} alt="" />
								</li>
								<li>
									<p className="visually-hidden">javascript</p>
									<img src={react} alt="" />
								</li>
							</ul>
						</aside>
					</Show>
				</Box>
			</Show>
			<Show below="590px">
				<Heading color="#fff" textAlign={"center"}>
					My Resume
				</Heading>
				<SimpleGrid placeItems={"center"} padding={10} columns={2} spacing={10}>
					<GridItem>
						<Image height={"60px"} width={"60px"} src={html} />
					</GridItem>
					<GridItem>
						<Image height={"60px"} width={"60px"} src={css} />
					</GridItem>
					<GridItem>
						<Image height={"60px"} width={"60px"} src={scss} />
					</GridItem>
					<GridItem>
						<Image height={"60px"} width={"60px"} src={js} />
					</GridItem>
					<GridItem>
						<Image height={"60px"} width={"60px"} src={react} />
					</GridItem>
				</SimpleGrid>
				<VStack>
					{jobsData?.map((job) => (
						<Card width={"90%"} key={job?.id}>
							<CardBody>
								<Text color={"#872642"}>{job?.company}</Text>
								<Heading color="#fff">{job?.role}</Heading>
								<Text color={"#ffc940"}>{job?.years}</Text>
								<Text color="#fff">{job?.description}</Text>
							</CardBody>
						</Card>
					))}
				</VStack>
			</Show>
		</>
	);
};

export default Resume;
