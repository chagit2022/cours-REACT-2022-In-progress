import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [dataImg, setDataImg] = useState();
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      setDataImg(data[0].url)
    })

  },[])

  
  return (
    <div className="App">
     {dataImg && <img src={dataImg} alt="cat" style={{width: "500px"}}/>}



    </div>
  );
}

export default App;
