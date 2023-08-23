const Button = (props) => {
  return (
    <button className={props.buttonStyle} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
