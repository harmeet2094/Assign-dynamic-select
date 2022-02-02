import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let arr = [1, 2, 3, 4, 5];

  const [valueA, setValueA] = useState([...arr]);
  const [valueB, setValueB] = useState([...arr]);
  const [valueC, setValueC] = useState([...arr]);

  const onReset = () => {
    setValueA([...arr]);
    setValueB([...arr]);
    setValueC([...arr]);
  };

  const handleChange = (event, text) => {
    let getValue = Number.parseInt(event.target.value, 10);

    switch (text) {
      case "a":
        if (valueA.includes(getValue)) {
          setValueB(
            valueA.filter((x) => {
              return x !== getValue;
            })
          );
        }
        break;

      case "b":
        if (valueB.includes(getValue)) {
          setValueC(
            valueB.filter((x) => {
              return x !== getValue;
            })
          );
        }
        break;

      case "c":
        if (valueC.includes(getValue)) {
          setValueA(
            valueC.filter((x) => {
              return x !== getValue;
            })
          );
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <section className="d-1">
        <select onChange={(e) => handleChange(e, "a")}>
          {/* <option>Select A</option> */}
          {valueA.map((data, key) => {
            return (
              <option value={data} key={key}>
                {data}
              </option>
            );
          })}
        </select>
      </section>
      <br />
      <section className="d-2">
        <select onChange={(e) => handleChange(e, "b")}>
          {/* <option>Select B</option> */}
          {valueB.map((data, key) => {
            return (
              <option value={data} key={key}>
                {data}
              </option>
            );
          })}
        </select>
      </section>
      <br />
      <section className="d-3">
        <select onChange={(e) => handleChange(e, "c")}>
          {/* <option>Select C</option> */}
          {valueC.map((data, key) => {
            return (
              <option onChange={handleChange} value={data} key={key}>
                {data}
              </option>
            );
          })}
        </select>
      </section>
      <br />
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
