import { useState } from "react";
import "./App.css";
import Options from "./components/Options";
import SearchOrder from "./components/order/search/SearchOrder";
import SearchProduct from "./components/product/search/SearchProduct";

function App() {
  const [selectedOption, setSelectedOption] = useState("product");

  const showProductsPage = () =>
    selectedOption === "product" ? <SearchProduct /> : <SearchOrder />;

  const onChangeOptionButtonHandler = (option) => setSelectedOption(option);

  return (
    <div className="container">
      <Options onChangeOption={onChangeOptionButtonHandler} />
      {showProductsPage()}
    </div>
  );
}

export default App;
