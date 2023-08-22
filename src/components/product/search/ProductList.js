import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  return (
    <ul>
      {props.items.map((product) => (
        <ProductListItem key={product.id}>
          <div>{product.name}</div>
          <div>${product.price}</div>
        </ProductListItem>
      ))}
    </ul>
  );
};

export default ProductList;
