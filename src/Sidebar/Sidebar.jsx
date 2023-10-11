import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Sidebar.css";
function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <AiOutlineShoppingCart />
          </h1>
        </div>
      </section>
    </>
  );
}
export default Sidebar;
