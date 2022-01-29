import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./feature/counter/counterSlice";
export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {count == null ? <h1>abhi to null hai </h1> : <h1>Hello CodeSandbox</h1>}
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          let obj = {
            name: "karan",
            age: 27
          };
          dispatch(increment(obj));
        }}
      >
        karan
      </button>
      <button
        onClick={() => {
          console.log(count);
        }}
      >
        show count
      </button>
    </div>
  );
}
