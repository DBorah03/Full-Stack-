import "./Product.css";

function Product({ title, price }) {
  let styles = { backgroundColor: price > 3000 ? "yellow" : "" };
  return (
    <div className="Product" style={styles}>
      <h2>{title}</h2>
      <h3>Price is: {price}</h3>
      {price > 3000 ? <p>21% discount</p> : ""}
    </div>
  );
}
export default Product;
