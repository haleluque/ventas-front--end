import { useState } from "react";
import Button from "../UI/Button";
import AddProduct from "../product/adddProduct/AddProduct";
import "./OrderForm.css";
import { v4 as uuidv4 } from "uuid";

const OrderForm = (props) => {
  const [orderProducts, setOrderProducts] = useState([]);

  const onSubmitOrderForm = (event) => {
    event.preventDefault();
    const newOrder = {
      orderSerial: uuidv4(),
      products: orderProducts,
    };
    props.onCreateOrder(newOrder);
  };

  const addProductToOrderClickHandler = (product) => {
    setOrderProducts((prevValue) => [...prevValue, product]);
  };

  return (
    <form onSubmit={onSubmitOrderForm}>
      <h3 className="form-title">Create Order</h3>
      <AddProduct
        orderProducts={orderProducts}
        onAddOrderProduct={addProductToOrderClickHandler}
      />
      <div className="form-buttons">
        <Button type="submit">Add Order</Button>
        <Button onClick={props.onCancelCreate}>Cancel</Button>
      </div>
    </form>
  );
};

export default OrderForm;
