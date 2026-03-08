import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <h2>Marwane El abbadi</h2>

      <div className="links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/skills">Skills</Link>

        <Link to="/projects">Projects</Link>


        <Link to="/contact">Contact</Link>

      </div>

    </nav>

  );

}

export default Navbar;