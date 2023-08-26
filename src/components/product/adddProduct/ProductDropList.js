import "./ProductDropList.css";
import ProductDropOption from "./ProductDropOption";

const ProductDropList = (props) => {
  return (
    <>
      {props.items.map((product) => (
        <ProductDropOption key={product.id} value={product.id} title={product.name} />
      ))}
    </>
  );
};

export default ProductDropList;
