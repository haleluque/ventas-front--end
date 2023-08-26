export const getAllOrders = async () => {
    const url = "http://localhost:8080/order";
    const response = await fetch (url);
    const data = await response.json();
    return data;
  }
  
  export const insertOrder = async (order) => {
    const url = "http://localhost:8080/order";
    await fetch (url , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
  };