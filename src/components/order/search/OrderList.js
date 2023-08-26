import OrderListItem from "./OrderListItem"

const OrderList = (props) => {
  return (
    <ul>
    {props.items.map((order) => (
      <OrderListItem key={order.id}>
        <div className="item-info">
          <div>{order.orderSerial}</div>
        </div>
      </OrderListItem>
    ))}
  </ul>
  )
}

export default OrderList