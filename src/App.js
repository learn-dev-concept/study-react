import './styles/app.css';
import { useState } from 'react';

// Test Constant
let content;
let isBoolType = true;
const username = 'hong-gil-dong123';

// Test Components
function Test() {
    return <h3>asdasdasd</h3>;
}

function Test2() {
    return <h3>cxz1231232asdasdasd</h3>;
}

if (isBoolType) {
    content = <h3>true123</h3>;
}

else {
    content = <h3>false123</h3>;
}

// function MyApp() {
//     return (
//         <form className="app">
//             <label>Username</label>
//             <hr/>
//             <hr/>
//             <h3>{username}</h3>
//             <input id="username" type="text"></input>

//             <div style={{
//                 height: '200px',
//                 width: '300px',
//                 border: '1px solid red'
//             }}>
//             </div>

//             {content}

//             {
//                 isBoolType ? <h3>123123123</h3> : <h3>456456456</h3>
//             }
            
//             {
//                 isBoolType ? (<Test />) : (<Test2 />)
//             }
            
//             {
//                 isBoolType && <Test />
//             }

//         </form>
//     );
// }





// const products = [
//     { title: 'Cabbage', id: 1 },
//     { title: 'Garlic', id: 2 },
//     { title: 'Apple', id: 3 },
//   ];

// function MyApp() {

//     const listItems = products.map(product =>
//         <li key={product.id}>
//           {product.title}
//         </li>
//       );
      
//       return (
//         <ul>{listItems}</ul>
//     );
// }




// const products = [
//     { title: 'Cabbage', isFruit: false, id: 1 },
//     { title: 'Garlic', isFruit: false, id: 2 },
//     { title: 'Apple', isFruit: true, id: 3 },
//   ];
  
// function MyApp() {
//     const listItems = products.map(product =>
//       <li
//         key={product.id}
//         style={{
//           color: product.isFruit ? 'magenta' : 'darkgreen'
//         }}
//       >
//         {product.title}
//       </li>
//     );
  
//     return (
//       <ul>{listItems}</ul>
//     );
//   }