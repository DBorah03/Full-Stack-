import "./Product.css";
import Price from "./Price.jsx";
function Product({ title }) {
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>Description</p>
      <Price oldPrice="9547" newPrice="7251" />
    </div>
  );
}
export default Product;
