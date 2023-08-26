import { useEffect, useState } from "react";
import "./AddProduct.css";
import ProductDropOption from "./ProductDropOption";
import ProductDropList from "./ProductDropList";
import Button from "../../UI/Button";
import ProductList from "../search/ProductList";

const AddProduct = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const changeProductHandler = (event) => {
    event.preventDefault();
    setSelectedProduct(event.target.value);
  };

  const showProductDropdownOptions = () => {
    if (products.length > 0) {
      return <ProductDropList items={products} />;
    }
    return <ProductDropOption value={0} title="No Products" />;
  };

  const addProductToOrderClickHandler = (event) => {
    event.preventDefault();
    if (products.length > 0) {
      const selected = products.find((product) => {
        return product.id === Number(selectedProduct);
      });
      if (selected && selected.id !== 0) {
        props.onAddOrderProduct(selected);
      }
    }
  };

  return (
    <>
      <div className="form-control">
        <label className="form-label">Product</label>
        <select value={selectedProduct} onChange={changeProductHandler}>
          {showProductDropdownOptions()}
        </select>
        <Button onClick={addProductToOrderClickHandler}>Add</Button>
      </div>
      <div className="list">
        <ProductList items={props.orderProducts} />
      </div>
    </>
  );
};

export default AddProduct;
