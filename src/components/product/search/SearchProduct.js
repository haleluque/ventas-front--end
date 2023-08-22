import { useEffect, useState } from "react";
import Button from "../../UI/Button";
import ProductList from "./ProductList";
import ProductForm from "../ProductForm";
import { insertProduct } from "../../../services/ProductServices";

const SearchProduct = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [products]);

  const showProductList = () => {
    if (products.length > 0) {
      return <ProductList items={products} />;
    }
    return <p>No products found. Maybe add one?</p>;
  };

  const onNewProductClickHandler = () => {
    setShowForm(true);
  };

  const onCancelProductFormClickHandler = () => {
    setShowForm(false);
  };

  const onCreateProductClickHandler = (product) => {
    insertProduct(product).then(() => {
      setShowForm(false);
      setProducts(product);
    });
  };

  const showProductForm = () => {
    if (showForm) {
      return (
        <ProductForm
          onCreateProduct={onCreateProductClickHandler}
          onCancelCreate={onCancelProductFormClickHandler}
        />
      );
    } else {
      return (
        <div>
          <div>
            <Button onClick={onNewProductClickHandler}>Add Product</Button>
          </div>
          <div>SearchProduct</div>
          <div>{showProductList()}</div>
        </div>
      );
    }
  };

  return <div>{showProductForm()}</div>;
};

export default SearchProduct;
