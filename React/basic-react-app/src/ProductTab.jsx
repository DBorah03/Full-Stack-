import Product from "./Product.jsx";

function ProductTab() {
  let opt1 = ["fast", "durable"];
  let opt2 = { a: "sweet", b: "fresh" };
  return (
    <>
      <Product title="Phone" price={42000} feature={opt1} />
      <Product title="Mango" price="30" feature={opt2.b} />
      <Product title="chicken" price={300} />
    </>
  );
}

export default ProductTab;
