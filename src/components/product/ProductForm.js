import { useState } from "react";
import "./ProductForm.css";
import Button from "../UI/Button";

const ProductForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [productName, setProductName] = useState("");
  const [producPrice, setProductPrice] = useState("");

  const onSubmitProductForm = (event) => {
    event.preventDefault();
    if (
      isValid &&
      productName.trim().length > 0 &&
      producPrice.trim().length > 0
    ) {
      const newProduct = {
        name: productName,
        price: producPrice,
      };
      props.onCreateProduct(newProduct);
    }
    setIsValid(false);
  };

  const nameInputChangeHandler = (event) => {
    if (productName.trim().length > 0) {
      setIsValid(true);
    }
    setProductName(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    if (producPrice.trim().length > 0) {
      setIsValid(true);
    }
    setProductPrice(event.target.value);
  };

  return (
    <form onSubmit={onSubmitProductForm}>
      <h3 className="form-title">Create Product</h3>
      <div className="form-control">
        <label className="form-label">Name</label>
        <input type="text" onChange={nameInputChangeHandler} />
      </div>
      <div className="form-control">
        <label className="form-label">Price</label>
        <input type="text" onChange={priceInputChangeHandler} />
      </div>
      <div className="form-buttons">
        <Button type="submit">Add Product</Button>
        <Button onClick={props.onCancelCreate}>Cancel</Button>
      </div>
    </form>
  );
};

export default ProductForm;
