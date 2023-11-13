import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h1>React Router</h1>

      <nav>
        <Link to="/">Root</Link>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Outlet />
    </>
  );
};
