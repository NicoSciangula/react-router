import {NavLink, Link} from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div>
        <h1 className="my-main-logo">React Router</h1>
      </div>
      <nav className="fs-4 my-nav">
        <Link to="/" className="px-2 my-link">
          Home Page
        </Link>
        <NavLink to="/about" className="px-2 my-link">
          About Us
        </NavLink>
        <NavLink to="/product" className="px-2 my-link">
          Prodotti
        </NavLink>
      </nav>
    </>
  );
}
