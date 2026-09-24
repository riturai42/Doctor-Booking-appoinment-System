import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/doctors"
          element={<h1 className="page-title">Doctors Page</h1>}
        />

        <Route
          path="/services"
          element={<h1 className="page-title">Services Page</h1>}
        />

        <Route
          path="/about"
          element={<h1 className="page-title">About Page</h1>}
        />

        <Route
          path="/contact"
          element={<h1 className="page-title">Contact Page</h1>}
        />

        <Route
          path="/login"
          element={<h1 className="page-title">Login Page</h1>}
        />

        <Route
          path="/profile"
          element={<h1 className="page-title">Profile Page</h1>}
        />
      </Routes>
    </>
  );
};

export default App;