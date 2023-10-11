import "./Colors.css";
function Colors() {
  return (
    <div>
      <label className="Sidebar-label-container color-title">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <label className="Sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Black
      </label>
      <label className="Sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Blue
      </label>
      <label className="Sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Red
      </label>
      <label className="Sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Green
      </label>
      <label className="Sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>White
      </label>
    </div>
  );
}

export default Colors;
