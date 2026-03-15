import {NavLink, Link} from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div>
        <h1 className="my-font-color ps-2">React Router</h1>
      </div>
      <nav className="fs-4 my-nav">
        <Link to="/" className="px-2 my-link my-font-color">
          Home Page
        </Link>
        <NavLink to="/about" className="px-2 my-link my-font-color">
          About Us
        </NavLink>
        <NavLink to="/product" className="px-2 my-link my-font-color">
          Prodotti
        </NavLink>
      </nav>
    </>
  );
}
