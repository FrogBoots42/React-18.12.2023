const ButtonComponent = (props) => {
  return (
    <div>
      <button style={{ color: props.color }}>{props.content}</button>
    </div>
  );
};

export default ButtonComponent;
