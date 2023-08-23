import Button from "./UI/Button";
import "./Options.css";

const Options = (props) => {
  const onOptionButtonClickHandler = (option) => props.onChangeOption(option);

  return (
    <div>
      <div className="main-title">
        <header>
          <h1>Sales</h1>
          <label>Please select and option</label>
        </header>
      </div>
      <div className="options-container">
        <div className="options">
          <Button
            buttonStyle={"option-button"}
            onClick={() => onOptionButtonClickHandler("order")}
          >
            Add order
          </Button>
          <Button
            buttonStyle={"option-button"}
            onClick={() => onOptionButtonClickHandler("product")}
          >
            Add new product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Options;
