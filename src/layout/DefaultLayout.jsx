import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";

export default function DefaultLayout() {
  return (
    <>
      <header className="d-flex justify-content-between p-3">
        <NavBar />
      </header>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
