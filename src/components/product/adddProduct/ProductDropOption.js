import "./ProductDropOption.css";

const ProductDropOption = (props) => {
  return (
    <option value={props.value}>{props.title}</option>
  )
}

export default ProductDropOption