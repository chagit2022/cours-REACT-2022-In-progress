import "./App.css";
import { useState,useEffect, useRef} from "react";
import Video from "./assets/videos/parmesan.mp4";

function App() {
  const [toggle, setToggle] = useState(true);

  const ref = useRef();

  useEffect(() =>{

  },[])

  const toggleFunc = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <video ref={ref} width="500" height="750" autoPlay controls muted>
        <source src={Video} />
      </video>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
