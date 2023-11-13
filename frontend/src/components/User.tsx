import { Link, Outlet } from "react-router-dom";

export function User() {
  return (
    <>
      <h2>User</h2>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="account">Account</Link>
      </nav>
      <Outlet />
    </>
  );
}

export function Profile() {
  return <h3>Profile</h3>;
}

export function Account() {
  return <h3>Account</h3>;
}
