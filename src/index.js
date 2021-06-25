// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// ReactDOM.render(<>
// <h1>MY FAV SERIES</h1>
// <p>Those are my favourite Netflix Series</p>
// <ol>
//   <li>Prison Break</li>
//   <li>Game Of Thrones</li>
//   <li>Breaing Bad</li>
//   <li>Sex Education</li>
//   <li>Lucifer</li>

// </ol>
// </>,document.getElementById("root")

// );
// const fname="Muhammad";
// const lname="Jahanzaib";
// ReactDOM.render(
//   <h1>{`my name is ${fname} ${lname}`}</h1>
//   ,document.getElementById("root")
// );
// var today=new Date();
// console.log(today);
// var date=today.toLocaleDateString();
// var time=today.toLocaleTimeString();
// // var month=today.getMonth();
// var year=today.getFullYear();
// var hours=today.getHours();
// var min=today.getMinutes();
// var sec=today.getSeconds();
// ReactDOM.render(<>
// <h1 className="heading">Asslam-u-Alaikum,My name is Jahanzaib!!</h1>
// <p>Today is{ ` ${date} ` } </p>
// <p>Current Time is {` ${time}`} </p>
// </>
//   ,
//   document.getElementById("root")
// )
//   const heading = {
//     color: 'green',
//     fontSize: '52 pt',
//     backgroundColor: 'pink',
//     margin: '300px 0',
//     // textAlign: 'center',
//     width: '400px',
//     borderRadius: '40px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px 20px'
//   };
// var today = new Date();

// var hours = today.getHours();
// var cssStyle = { background: 'pink' };

// if (hours > 0 && hours < 12) {
//   var greeting = "Good Morning";
//   cssStyle.color = "yellow";
// }
// else if (hours > 11 && hours < 20) {
//   var greeting = "Good afterNoon";
//   cssStyle.color = "red";


// } else if (hours > 19 && hours <= 24) {
//   var greeting = "Good Night";
//   cssStyle.color = "black";

// }
// ReactDOM.render(
//   <>
//     <div>
//       <h1 style={heading}>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
//     </div>
//   </>
//   , document.getElementById("root"));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './Card.jsx';
// import Sdata from './Sdata.jsx';
// function nCard(val) {


// }

// ReactDOM.render(<>
//   {Sdata.map((val) => {
//     return (
//       <Card
//         imgSrc={val.imgSrc}
//         title={val.title}
//         sName={val.sName}
//         link={val.link}
//       />
//     )
//   })}
// </>, document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById("root"));
