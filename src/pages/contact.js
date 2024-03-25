// Filename - pages/contact.js

import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
	return (
		<div>
      <Helmet>
        <title>Contact</title>
        <meta name="How to contact us." />
      </Helmet>
			<h1>
				Mail us on
				example@example.com
			</h1>
		</div>
	);
};

export default Contact;
