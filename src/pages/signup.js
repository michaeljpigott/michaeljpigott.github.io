// Filename - pages/signup.js

import React from "react";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
	return (
		<div>
      <Helmet>
        <title>Sign up</title>
        <meta name="Sign up to our newsletter." />
      </Helmet>
			<h1>Sign Up Successful</h1>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
		</div>
	);
};

export default SignUp;
