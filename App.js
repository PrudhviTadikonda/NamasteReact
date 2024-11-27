import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React Element Using Jsx
  </h1>
);

// Functional Component is arrow function or we can use a normal function also but we need to use return
//Always have namne Capital Letter and return a jsx function
//Functional component can be written with out using return also and it needs the braces to be removed
const Title = () => (
  <h1 className="Title" tabIndex="5">
    This is Functional component Title
  </h1>
);

//We can use nested also like wrap it in a div

// Component composition is putting component inside a component like we put below a title component inside the functional component
// we can also use any js like { number } below  inside jsx and it comes as html we should use {}
// whenever use send data inside {} jsx will sanitize everything which solves cross site scripting

const number = 1000;

const FunctionalComponent = () => (
  <div id="container">
    <Title />
    <h2>{number}</h2>
    <h3>{heading}</h3>
    <h1 className="heading">
      This is Functional component inside a div container
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//Rendering an react element

//root.render(heading);

//Rendering a component is done as below
root.render(<FunctionalComponent />);
