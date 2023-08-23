import ProductListItem from "./ProductListItem";
import "./ProductList.css";

const ProductList = (props) => {
  return (
    <ul>
      {props.items.map((product) => (
        <ProductListItem key={product.id}>
          <div className="item-info">
            <div>{product.name}</div>
            <div>${product.price}</div>
          </div>
        </ProductListItem>
      ))}
    </ul>
  );
};

export default ProductList;
