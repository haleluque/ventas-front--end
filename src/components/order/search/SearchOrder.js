import { useEffect, useState } from "react";
import "./SearchOrder.css";
import Button from "../../UI/Button";
import OrderForm from "../OrderForm";
import { insertOrder } from "../../../services/OrderServices";
import OrderList from "./OrderList";

const SearchOrder = () => {
  const [showForm, setShowForm] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/order")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const showOrderList = () => {
    if (orders.length > 0) {
      return <OrderList items={orders}/>;
    }
    return <p>No orders found. Maybe add one?</p>;
  };

  const onNewOrderClickHandler = () => {
    setShowForm(true);
  };

  const onCancelProductFormClickHandler = () => {
    setShowForm(false);
  };

  const onCreateOrderClickHandler = (order) => {
    insertOrder(order).then(() => {
      setShowForm(false);
      setOrders(order);
    });
  };

  const showOrderForm = () => {
    if (showForm) {
      return (
        <OrderForm
          onCreateOrder={onCreateOrderClickHandler}
          onCancelCreate={onCancelProductFormClickHandler}
        />
      );
    } else {
      return (
        <div>
          <div className="button-header">
            <Button buttonStyle={"new-button"} onClick={onNewOrderClickHandler}>
              Add Order
            </Button>
          </div>
          <h2 className="text-center">List of Orders</h2>
          <div className="list">{showOrderList()}</div>
        </div>
      );
    }
  };

  return <div className="option-container">{showOrderForm()}</div>;
};

export default SearchOrder;
