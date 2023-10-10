import Navigation from "./Navigation/Nav";
import Recommended from "./Recommended/Recommended";
import Category from "./Sidebar/Category/Category";
import Products from "./products/Products";
function App() {
  return (
    <>
      <Navigation />
      <Products />
      <Recommended />
      <Category />
    </>
  );
}

export default App;
