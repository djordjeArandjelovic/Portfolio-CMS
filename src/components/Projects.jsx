import { Badge, Box, HStack, VStack } from "@chakra-ui/layout";
import React from "react";
import { useFetch } from "../fetchProjects";

const Projects = () => {
	const { loading, projects } = useFetch();

	if (loading) {
		return (
			<section className="projects">
				<h2>Loading</h2>
			</section>
		);
	}
	return (
		<section className="projects">
			<div className="title">
				<h2>projects</h2>
				<div className="title-underline"></div>
			</div>
			<div className="projects-center">
				{projects.map((project) => {
					const { id, img, url, title, stack } = project;
					return (
						<a
							key={id}
							href={url}
							target="_blank"
							rel="noreferer"
							className="project"
						>
							<img src={img} alt={title} className="img" />
							<VStack>
								<h5>{title}</h5>
								<Box>
									<HStack mb={2}>
										{stack?.map((item, index) => (
											<Badge variant="solid" colorScheme="yellow" key={index}>
												{item}
											</Badge>
										))}
									</HStack>
								</Box>
							</VStack>
						</a>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
