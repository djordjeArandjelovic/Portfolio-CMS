import React from "react";
import heroImg from "../assets/hero.svg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						Fashion axe stumptown selfies poutine kombucha, banh mi dreamcatcher
						godard leggings glossier. Mixtape tacos poke occupy art party
						live-edge, leggings VHS thundercats yes plz tbh put a bird on it.
						Neutra prism offal jawn tonx kogi. Pour-over af 8-bit small batch
						try-hard, same pitchfork shoreditch.
					</p>
				</div>
				<div className="img-container">
					<img src={heroImg} alt="woman and the browser" className="img" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
