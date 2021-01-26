import React from "react";

// const Body = () => (
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
// );
// const Body = () => {
//   return(
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//   );
// };

export function Body (props) {
  return(
    <p>
      {/* Edit <code>src/App.js</code> and save to reload. */}
      {props.text} <br></br>
      {props.text2} <br></br>
      {props.myFunc(10, 10)}
    </p>
  );
}

export function Body2 () {
    return(
        <div>hi</div>
    );
    
}