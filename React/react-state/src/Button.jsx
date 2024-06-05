function printHello() {
  console.log("Hello!");
}

function printBye() {
  console.log("Bye");
}

export default function Button() {
  return (
    <>
      <button onClick={printHello}>Click me</button>
      <p onClick={printBye}>This a demo of click events</p>
    </>
  );
}
