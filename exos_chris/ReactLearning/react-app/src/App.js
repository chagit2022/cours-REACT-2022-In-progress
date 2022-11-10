// on ferme les balises auto fermant comme p ou br ou h1 etc
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'


function App() {

   

    return (
		<div className="App">
      <h1 className="text-center mt-3">Todo list</h1>
      <Form />



		</div>
    );
}


export default App;








// let toggleContenu;

  // if(toggle){
  //   toggleContenu = <h1>le state est true depuis app.js</h1>;
  // }else{
  //   toggleContenu = <h1>le state est false depuis app.js</h1>;
  // }

// function App() {
//   // const [inputData, setInputData] = useState(10);

//   // const changeInput = (e) => {
//   //   // console.log(e);
//   //   setInputData(e)
//   // }
//   // console.log(inputData);
//   const [toggle, setToggle] = useState(true);

//   const changeState = () => {
//     setToggle(!toggle)
//   }
//   let toggleContenu;

// if(toggle){
//   toggleContenu = <h1>le state est true depuis app.js</h1>;
// }else{
//   toggleContenu = <h1>le state est false depuis app.js</h1>;
// }
// if(toggle){
//   return (
//     <div className="App">
//     {toggleContenu}
//     <button onClick={changeState}>Change State</button>

//     </div>
//   );
// }else if (toggle === false){
//   return (
//     <div className="App">
//      {toggleContenu}
//     <button onClick={changeState}>Change State</button>

//     </div>
//   );

// }
// }

// function App() {
 
//   const [toggle, setToggle] = useState(true);

//   const changeState = () => {
//     setToggle(!toggle)
//   }
  

//   // ternary
//     return (
//       <div className="App">
//         <div className = {toggle ? "box animated" : "box"}></div>
//       {/* {toggle ? <h1>le state est true depuis app.js</h1> : <h1>le state est false depuis app.js</h1>} */}
//       <button onClick={changeState}>Change State</button>
  
//       </div>

//     );

//   }


// export default App;

// function App() {

//     const [dataArr, setDataArr] = useState([
// 		{nom: "Joris"},
// 		{nom: "Juliette"},
// 		{nom: "Jhon"},
// 	]);

//     return (
// 		<div className="App">
// 			{dataArr.map((item, index)=> {
// 				return <p key={(index)}> Nom : {item.nom}</p>
// 			})}
// 		</div>
//     );
// }


// export default App;

