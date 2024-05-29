import Product from "./Product.jsx";
function ProductTab() {
  return (
    <>
      <Product title="Phone" price={42000} />
      <Product title="Mango" price="30" />
      <Product title="chicken" price={300} />
    </>
  );
}

export default ProductTab;
