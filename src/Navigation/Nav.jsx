import { FiHeart } from "react-icons/fi";
import { AipOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href=""></a>
      </div>
    </nav>
  );
}
export default Nav;
