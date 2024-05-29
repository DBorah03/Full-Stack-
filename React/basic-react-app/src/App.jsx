import "./App.css";
import Title from "./Title";

function App() {
  let job = "software developer";
  return (
    <>
      <button>Hello World!</button>
      <Title />
      <p>This is my story</p>
      <p>I am a {job}</p>
      <p>3*3 is {3 * 3}</p>
    </>
  );
}

export default App;
