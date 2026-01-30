import { Link } from "react-router";
import "./Navigation.scss";

function Navigation() {
  return (
    <div className="navContainer">
      <span>FinTrack</span>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/balance">Balance</Link>
        <Link to="/billing">Billing</Link>
      </nav>
    </div>
  );
}

export default Navigation;
