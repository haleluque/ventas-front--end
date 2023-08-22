//Not being used because of infinite loop regarding the use effect
export const getAllProducts = async () => {
  const url = "http://localhost:8080/product";
  const response = await fetch (url);
  const data = await response.json();
  console.log(data);
  return data;
}

export const insertProduct = async (product) => {
  const url = "http://localhost:8080/product";
  await fetch (url , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
};