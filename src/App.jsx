import Navigation from "./Navigation/Nav";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

import Products from "./products/Products";
function App() {
  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
