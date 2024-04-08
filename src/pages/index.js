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
      <p>Random text goes here. Joe Bloggs is a good guy. I like him. He lives at 102 Smith Street in Melbourne. He was born on 1 January 1901.  </p>
      <p>Hamish Blake is a so-called comedian.</p>
      <a href="https://google.com.au/"><button type="button" class="btn btn-lg btn-primary">Big button</button></a>
		</div>

	);
};

export default Home;
