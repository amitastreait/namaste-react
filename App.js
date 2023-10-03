import React from "react";
import ReactDOM from "react-dom/client";

/* create the multiple element */
const parent = React.createElement( 'div', { id:"parent" }, [
        React.createElement(
            'div', { id : "child" }, [ 
                React.createElement('h1', {}, "This is Namaste React 🚀" ), 
                React.createElement('h2', {}, "I am inside H2 Tag") 
            ]
        ),
        React.createElement(
            'div', { id : "child2" }, [ 
                React.createElement('h1', {}, "I am H1 Tag" ), 
                React.createElement('h2', {}, "I am inside H2 Tag") 
            ]
        ),
        React.createElement(
            'div', { id : "child23" }, [ 
                React.createElement('p', {}, React.createElement('span',{}, 'I am inside span') ) 
            ]
        ),
        React.createElement(
            'a', { id : "pantherschools", href: "https://www.pantherschools.com", target: "_blank" }, 'pantherschools website'
        )
    ]
);

/* Create a Single Element */
const heading  = React.createElement(
"h1",
{
    id: "heading",
    className: "heading",
    syxz: "true"
}, 
"Hello World from React!!"
);
console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
/**
* Render(Object): Convert the object into the DOM structure that browsers understands
*/