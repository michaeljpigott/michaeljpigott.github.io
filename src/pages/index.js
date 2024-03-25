// Filename - pages/index.js

import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
	return (
		<div class="container-lg">
      <Helmet>
        <title>Home</title>
        <meta name="The homepage for the test site." />
      </Helmet>
			<h1>Welcome to my test website</h1>
      <a href="https://google.com.au/"><button type="button" class="btn btn-lg btn-primary">Big button</button></a>
		</div>

	);
};

export default Home;
