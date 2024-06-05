function handleClick() {
  console.log("Hello!");
}

function handleMOuseOver() {
  console.log("Bye!");
}

function handleDblClick() {
  console.log("you double clicked");
}
export default function Button() {
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p onMouseOver={handleMOuseOver}>
        This is a demo for click and non-click events
      </p>
      <button onDoubleClick={handleDblClick}>Double Click</button>
    </>
  );
}
