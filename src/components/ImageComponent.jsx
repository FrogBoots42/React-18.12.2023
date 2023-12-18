const ImageComponent = (props) => {
  return <img id={props.id} src={props.src} alt={props.alt} width={props.width} style={{ margin: props.margin }}></img>;
};

export default ImageComponent;
