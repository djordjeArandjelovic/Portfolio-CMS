import React, { useRef, useState } from "react";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	Stack,
	Textarea,
	Tooltip,
	useClipboard,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

const Contact = ({ bottomRef }) => {
	const [success, setSuccess] = useState(null);
	const form = useRef();
	const toast = useToast();

	const { hasCopied, onCopy } = useClipboard(
		"djordjearandjelovic993@gmail.com"
	);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAIL_JS_KEY,
				"template_mrqsu1f",
				form.current,
				"YGqQENJFxm0MZBDjE"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
					toast({
						title: "Success.",
						description: `Email sent! Thank you!`,
						status: "success",
						duration: 2500,
						isClosable: true,
						position: "top-right",
					});
				},
				(error) => {
					console.log(error.text);
					setSuccess(false);
					toast({
						title: "Error.",
						description: `An error occured, please try again.`,
						status: "error",
						duration: 2500,
						isClosable: true,
						position: "top-right",
					});
				}
			);
	};

	return (
		<>
			<Flex
				ref={bottomRef}
				top={"0"}
				left={"0"}
				width={"100%"}
				zIndex={"-1"}
				height={"99.4vh"}
				bg={useColorModeValue("gray.100", "gray.900")}
				align="center"
				justify="center"
				id="contact"
			>
				<Box
					borderRadius="lg"
					m={{ base: 5, md: 16, lg: 10 }}
					p={{ base: 5, lg: 16 }}
				>
					<Box>
						<VStack spacing={{ base: 4, md: 8, lg: 20 }}>
							<Heading
								fontSize={{
									base: "4xl",
									md: "5xl",
								}}
							>
								Get in Touch
							</Heading>

							<Stack
								spacing={{ base: 4, md: 8, lg: 20 }}
								direction={{ base: "column", md: "row" }}
							>
								<Stack
									align="center"
									justify="space-around"
									direction={{ base: "row", md: "column" }}
								>
									<Tooltip
										label={hasCopied ? "Email Copied!" : "Copy Email"}
										closeOnClick={false}
										hasArrow
									>
										<IconButton
											aria-label="email"
											variant="ghost"
											size="lg"
											fontSize="3xl"
											icon={<MdEmail />}
											_hover={{
												bg: "blue.500",
												color: useColorModeValue("white", "gray.700"),
											}}
											onClick={onCopy}
											isRound
										/>
									</Tooltip>

									<Box
										as="a"
										href="https://github.com/djordjeArandjelovic"
										target={"_blank"}
										rel={"noreferer"}
									>
										<IconButton
											aria-label="github"
											variant="ghost"
											size="lg"
											fontSize="3xl"
											icon={<BsGithub />}
											_hover={{
												bg: "blue.500",
												color: useColorModeValue("white", "gray.700"),
											}}
											isRound
										/>
									</Box>

									<Box
										as="a"
										href="https://www.linkedin.com/in/djordje-arandjelovic/"
										target={"_blank"}
										rel={"noreferer"}
									>
										<IconButton
											aria-label="linkedin"
											variant="ghost"
											size="lg"
											icon={<BsLinkedin size="28px" />}
											_hover={{
												bg: "blue.500",
												color: useColorModeValue("white", "gray.700"),
											}}
											isRound
										/>
									</Box>
								</Stack>

								<Box
									bg={useColorModeValue("white", "gray.700")}
									borderRadius="lg"
									p={8}
									color={useColorModeValue("gray.700", "whiteAlpha.900")}
									shadow="base"
								>
									<VStack spacing={5}>
										<form ref={form} onSubmit={sendEmail}>
											<FormControl isRequired>
												<FormLabel>Name</FormLabel>

												<InputGroup>
													<InputLeftElement>
														<BsPerson />
													</InputLeftElement>
													<Input
														mb={2}
														type="text"
														name="user_name"
														placeholder="Your Name"
													/>
												</InputGroup>
											</FormControl>

											<FormControl isRequired>
												<FormLabel>Email</FormLabel>

												<InputGroup>
													<InputLeftElement>
														<MdOutlineEmail />
													</InputLeftElement>
													<Input
														mb={2}
														type="email"
														name="user_email"
														placeholder="Your Email"
													/>
												</InputGroup>
											</FormControl>

											<FormControl isRequired>
												<FormLabel>Message</FormLabel>

												<Textarea
													mb={5}
													name="message"
													placeholder="Your Message"
													rows={6}
													resize="none"
												/>
											</FormControl>

											<Button
												type="submit"
												colorScheme="blue"
												bg="yellow.400"
												color="#000"
												_hover={{
													bg: "yellow.500",
												}}
												width="full"
											>
												Send Message
											</Button>
										</form>
									</VStack>
								</Box>
							</Stack>
						</VStack>
					</Box>
				</Box>
			</Flex>
		</>
	);
};

export default Contact;
