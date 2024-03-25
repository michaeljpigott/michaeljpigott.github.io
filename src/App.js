import Navigation from "./components/navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import './App.css';
import { clarity } from "react-microsoft-clarity";
import { HelmetProvider } from "react-helmet-async";

const clarityKey = process.env.REACT_APP_CLARITY;

clarity.init(clarityKey);

function App() {
  return (


<HelmetProvider>

    <Router>
    <Navigation />


     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route
        path="/contact"
        element={<Contact />}
        />
      <Route path="/blogs" element={<Blogs />} />
      <Route
        path="/sign-up"
        element={<SignUp />}
      />
     </Routes>

    </Router>
    </HelmetProvider>


  );
}

export default App;
