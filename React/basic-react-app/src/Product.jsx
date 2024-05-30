function Product({ title, price, feature }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>Price is: {price}</h3>
      <h3>{feature}</h3>
    </div>
  );
}
export default Product;
