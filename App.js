import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>
const heading = <span> {elem} with caps!</span>
const number = 20903;
const JsxHeading = () => ( 
    <div id="container">
        <h1>
            {number + 3430}
            {console.log(number)} <br/>
            {heading}
        </h1>
        <h1 id="heading" className="heading">
            This is a Namaste React using JSX 🚀
        </h1>
    </div>
)

const HeadingComponent1 = () => <h1>This is a single line heading </h1>;
const MYClass = () => <a href="https://www.pantherschools.com" target="_blank"><h1>Signup</h1></a>;

// Component Coposition
const HeadingComponent = () =>{
    return(
        <div id="parent-container">
            {JsxHeading()}
            <JsxHeading/>
            <JsxHeading></JsxHeading>
            <HeadingComponent1>
            </HeadingComponent1>
            <MYClass></MYClass>
            <h1 id="heading" className="heading">
                Namaste React functional Components
            </h1>
        </div>
    )
}

const title = (
    <div id="container-component" tabIndex="Hello">
        <h1>Namaste React by Akshay Saini 🚀</h1>
        <HeadingComponent></HeadingComponent>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);