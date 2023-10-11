import "./Category.css";
function Category() {
  return (
    <div>
      <h2 className="Sidebar-title">Category</h2>
      <div>
        <label className="Sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="Sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sneakers
        </label>
        <label className="Sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Flats
        </label>
        <label className="Sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sandle
        </label>
        <label className="Sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Hills
        </label>
      </div>
    </div>
  );
}
export default Category;
