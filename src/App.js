import Navbar from "./components/navbar";
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
import Header from './header';

function App() {
  return (
    <div class="container-lg">
    <Router>
     <Navbar />
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
  </div>

  );
}

export default App;
