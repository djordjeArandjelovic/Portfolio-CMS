import { useRef } from "react";
import Contact from "./components/ContactForm";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { Show, Spacer } from "@chakra-ui/react";

const App = () => {
	const bottomRef = useRef(null);
	return (
		<main>
			<Heading />
			<Hero bottomRef={bottomRef} />
			<Show below="300px">
				<Spacer />
			</Show>
			<Resume />
			<Projects />
			<Contact bottomRef={bottomRef} />
		</main>
	);
};
export default App;
