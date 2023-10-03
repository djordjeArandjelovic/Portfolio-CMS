import { useRef } from "react";
import Contact from "./components/ContactForm";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

const App = () => {
	const bottomRef = useRef(null);
	return (
		<main>
			<Heading />
			<Hero bottomRef={bottomRef} />
			<Resume />
			<Projects />
			<Contact bottomRef={bottomRef} />
		</main>
	);
};
export default App;
