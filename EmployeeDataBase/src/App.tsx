import { useState } from "react";
import "./App.css";

function App() {
  // const [data, setData] = useState([]);
  // const [loader, setLoader] = useState(false);
  const arr = Array(10000).fill(1)

  async function fecthData() {
    // setLoader(true);
    // await fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //     setLoader(false);
    //   });
  }
  return (
    <div>
      <center>
        <div>
          <input type="text" name="" id="" />
        </div>
        {/* <button  disabled={loader}onClick={fecthData}>load</button> */}
        {arr.map((_,idx) => (
        <li key={idx}>{idx}</li>
      ))}
      </center>

      
    </div>
  );
}

export default App;
