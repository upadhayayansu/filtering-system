import Card from "../components/Card";
import "./Products.css";

function Products({ result }) {
  return (
    <>
      <section className="card-container">
        {result.map((item) => (
          <Card {...item} />
        ))}
      </section>
    </>
  );
}

export default Products;
