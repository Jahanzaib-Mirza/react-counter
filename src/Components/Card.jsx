// function Card(props){
//     return(
//         <>
//     <div className="cards">
//       <div className="card">
//         <img src={props.imgSrc} alt={props.sName} />
//         <div className="card-info">
//           <span className="card-category">{props.title}</span>
//           <h3 className="card-heading">{props.sName}</h3>
//           <a href={props.link} target="_blank">
//             <button>Watch Now</button>
//           </a>
//         </div>
//       </div>
//     </div>
// </>
//     );
// }
// export default Card;

import React, { useState } from 'react';
// let num = 0;

function Counter() {
  // const state = newState();
  const [num, setNum ] = useState(0);

const IncNum = ()=> {
  // console.log ('clicked');
  console.log (num);
  
  setNum(num +1);

}
const DecNum = () => {
  setNum(num - 1);
}
return (
  <>
  <h1>Counter</h1>
  <div>{num}</div>
  <button onClick={IncNum}>Increment</button>
  <button onClick={DecNum}>Decrement</button>

  </>
);
}
export default Counter;