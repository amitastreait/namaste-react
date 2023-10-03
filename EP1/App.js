/**
 * Step1: Create the React Element using React.createElement('typeofTab',{}, 'content');
 * Step2: Create the Root using the ReactDOM.createRoot(document.getElementById('id of HTML container'));
 * Step3: render the React Element using root.render(reactElementObject);
 */
/**
 * ReactElement(Object): HTML(brower understads)
 */
/**
 * <div id="parent">
 *    <div id="child">
 *       <h1 id="heading">
 *           I am a child of <a href="http:// facebook>" target="_blank
 *       </h1>
 *       <h2 class="heading2">I am inside H2 Tag!!</h2>
 *    </div>
 * </div>
 */

/* create the multiple element */
const parent = React.createElement( 'div', { id:"parent" }, [
        React.createElement(
            'div', { id : "child" }, [ 
                React.createElement('h1', {}, "I am H1 Tag" ), 
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
            'a', { id : "pantherschools", href: "https://www.pantherschools.com", target: "_blank" }, 'visit pantherschools website'
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