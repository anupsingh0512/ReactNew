        
   import React from "react";
   import ReactDOM from "react-dom/client";

   
   const Header = () => {
        return (
                <div className="header">
                  <div className="logo-container">
                    <img className="logo" src="https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg?t=st=1739872710~exp=1739876310~hmac=2b5f0e786bf94bd5e347ea2637db9a45700920d3b6688949e477ae7e31c19079&w=740"  />
                  </div>
                  <div className="nav-items">
                    <ul>
                        <li> Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart </li>
                    </ul>
                  </div>
                </div>
        )
    }
   
    const AppLayout = () => {
        return (
                <div className="app">
                 <Header />
                </div>
        )
   }

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<AppLayout />);