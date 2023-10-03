import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
	space: "9jee4qy2r8s7",
	environment: "master",
	accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetch = () => {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState([]);

	const getData = async () => {
		try {
			const res = await client.getEntries();
			const projects = res?.items?.map((item) => {
				const { title, url, image, stack } = item?.fields;
				const id = item?.sys?.id;
				const img = image?.fields?.file?.url;
				return { title, url, id, img, stack };
			});
			setProjects(projects);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return { loading, projects };
};

// client
// 	.getEntries()
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err));
