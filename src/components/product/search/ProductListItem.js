import "./ProductListItem.css";

const ProductListItem = (props) => {
  return <li className="item-list">{props.children}</li>;
};

export default ProductListItem;
