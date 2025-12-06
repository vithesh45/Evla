import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="navbar">
<div className="nav-logo">
  <img 
    src="/assets/Elva.svg"  
    alt="Elva Tech" 
    className="logo-img" 
  />
  <span className="logo-text">Elva</span>
</div>


<ul className="nav-links">
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/services">Services</Link></li>
<li><Link to="/projects">Projects</Link></li>
{/* <li><Link to="/careers">Careers</Link></li> */}
<li><Link to="/contact">Contact</Link></li>
</ul>
</nav>
);
}