// Filename - pages/about.js

import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
	return (
		<div>
      <Helmet>
        <title>About</title>
        <meta name="About the test site." />
      </Helmet>
			<h1>
				About this website
			</h1>
		</div>
	);
};

export default About;
