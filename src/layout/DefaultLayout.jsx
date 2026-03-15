import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";

export default function DefaultLayout() {
  return (
    <>
      <header className="d-flex justify-content-between py-4 mt-3 container my-bg">
        <NavBar />
      </header>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
