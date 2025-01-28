        
   import React from "react";
   import ReactDOM from "react-dom/client";

  
   const heading = React.createElement("h1",{id:"heading"},"Namaste React 👌");

   console.log(heading);

   const jsxheading = <h1 id="heading" >Namaste React using JSX</h1>

   console.log(jsxheading);

   const root = ReactDOM.createRoot(document.getElementById("root"));

   root.render(jsxheading);