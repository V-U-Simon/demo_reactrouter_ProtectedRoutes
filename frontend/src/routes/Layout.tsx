import { Link, Outlet } from "react-router-dom";
import { useAuth } from "src/hooks/useAuth";

export function Layout() {
  console.log("hook is working");
  const { token, login, logout } = useAuth();

  return (
    <>
      <button onClick={() => login()} className={`btn ${token && "border-green-400"}`} disabled={token}>
        Login
      </button>
      <button onClick={() => logout()} className={`btn ${!token && "border-red-400"}`} disabled={!token}>
        Logout
      </button>

      <h2>Authorization status: {JSON.stringify(token)}</h2>
      <div className="centered-container">
        <ul>
          <li>
            <Link to="/privateRoute">privateRoute</Link>
          </li>
          <li>
            <Link to="/privateComponent">privateComponent</Link>
          </li>
          <li>
            <Link to="/public">public</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
