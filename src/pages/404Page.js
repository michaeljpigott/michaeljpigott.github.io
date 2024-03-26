import React from 'react'
import { Helmet } from "react-helmet-async";

const PageNotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Page not found</title>
        <meta name="This appears to be a 404 error." />
      </Helmet>
        <h1>Page not found</h1>
        <p><strong>Whoops! There's nothing here!</strong></p>
        <img width="200px" alt="Drawing of a computer with a frowny face" src="/../../../noun-page-not-found-2577203.png"/>
        <p>page not found by Vectors Point from <a href="https://thenounproject.com/browse/icons/term/page-not-found/" title="page not found Icons">Noun Project</a> (CC BY 3.0)</p>
        </div>
  );
};

export default PageNotFound;