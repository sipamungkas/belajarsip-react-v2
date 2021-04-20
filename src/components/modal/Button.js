export default function Button(props) {
  return (
    <button className={props.classes.join(" ")} onClick={() => props.onClick()}>
      {props.text}
    </button>
  );
}
