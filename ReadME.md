# Namaste - React 
## Day1 Learnings
- **Step1:** Create the React Element using React.createElement('typeofTab',{}, 'content');
- **Step2:** Create the Root using the ReactDOM.createRoot(document.getElementById('id of HTML container'));
    - The first element is the type of HTML Tag 
    - The second element is the
    - The third element is the child/vlaue for the tag 
        - There can be multiple elements within in Array
        - 
            `
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
            `
- **Step3:** render the React Element using root.render(reactElementObject);
- **ReactElement(Object):** HTML(brower understads)

# Day2 Learnings
- NPM is not a node package manager it does manage the packages for node but not an abbreviation for node package manager
- use `npm install -D parcel` to install the parcel bundler as a dev dependency

## Parcel

- Creates a Dev Build
- Created a Local Server for You
- Does HMR = Hot Module Replacement
- Uses the File Watching Algorithm - ** Written in C++ **
- Faster Development Experiences with Cache
- Image optimization
- Minification of File
- Bundling the Files as it's core job is bundeling 
- compressing the files
- Consistant Hashing
- Code Splitting
- Differential Bundling - So the App can run in older/different browsers
- Better Error Handling
- Support the Host app on HTTPS
- Tree Shaking - removed the unnecessary files for you
- Different dev and prod builds

## Packaging

- `package.json` is the configuration for npm.
- `package-lock.json` is the file that holds the exact version of the dependencies and also holds the hash of the dependecies so that the correct version can be deplopyed in prod.
- `node_modules` is like a database that contains the complete code for all the dependencies
- we should `never push node_modules` folder into production and git repositories
- if we have `package.json` & `package-lock.json` in our repository, we can generate the complete `node_modules` configuration
- **^ caret** Updates the minor upgrade for the dependencies for example from 2.8.3 - 2.8.4 [minor upgrade]
- **~ tilda** Updates the major upgrade for the dependencies - 2.8.5 - 2.3.0 [Major update]
- **Transitive Dependencies** Are the dependencies that comes from the dependencies of the package

## Build the App

- Use `npx parcel index.html` command to host your application in a localhost server where - 
    - `npx` is the package executer 
    - `parcel` is the name of the package that we wanted to execute
    - `index.html` is the name of the main file

# Day3 Learnings
- `npm start` is equal to `npm run start`
- `npm run start` with use `parcel index.html` because we have added the same in `package.json`
- JSX is not part of React
- JSX is a JavaScript syntax to develop react elements
- JSX is not HTML in JavaScript, it is a HTML/XML like syntax
- JSX Code (transpiled before it reached to JavaScript) - Job done by Parcel --> Babel
- JSX Code --> Bable --> React.createElement --> React Element --> JavaScript Object --> JavaScript Engine
- JSX is converted to React.createElement by Bable and then JS Engine can understand it
- To give the attribute in JSX we need to use camel case.
- Everything in React is a React component
    - Class based Component
    - Function based component
        - It is a normal JavaScript function that returns the JSX Syntax or React Element
- React Element - any JSX syntax is a React Element
- {} - withing {} we can weite any JavaScript syntax
- JSX takes care of CrossSiteScript injection attacks

# Day4 Learnings

## Food Delivery Application
- Before starting any project planning is very important
- If we want to pass the dynamic property into the React component we will prop 
- React functional component will accept a function argument named as props or can be any name 
- Props can also be deconstructed by using JavaScript concepts like { resName, cuisine }
- prop is nothing it's just a JavaScript object
- Config driven UI - UI changes based on the config/data coming from the backend
- While using JavaScript map function inside JSX then it is very important to pass the key element
- Always try to use unique Id as key if you do not have id use index as key but there should be a unique key 

## Video Progress Tracker

- [x] Day1
- [x] Day2
- [ ] Day3
- [ ] Day4

## Assignment Progress Tracker
- [ ] Day1
- [ ] Day2
- [ ] Day3
- [ ] Day4