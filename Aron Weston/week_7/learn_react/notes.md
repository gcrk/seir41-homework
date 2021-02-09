## React elements are immutable

React elements are immutable meaning that once you create an element, you can't change it's children or attributes. 

- an objects state can not be changed after it is created, that object is fixed with set properties. 
- you can reassign an immutable variable to another variable but that is just an instance of the original object, a copy effectively
- the resigned variable is stored in a different location in memory, it will create a new object once reassigned. 
- the idea of an immutable objects is that every time we make a change to an established immutable object, you get a new object back rather than the same one - you get a changed copy
* Immutable: "Save as..." returns a new changed object with an established previous state, but in essence, a copy. 
* Mutable: "Save.." - save the object in place and let go of any earlier established state. 

Why immutable?
    * Stricter control over your data
    * Makes it easier to implement things like: undo/redo
    * In the context of React, by keeping objects immutable, by enabling quick and cheaper comparisons between versions of the state. 

JavaScript isn't built to work with immutable objects as arrays and objects are passed as reference type. This means that if you declare an array, an access the same array through a separate variable, any methods called on the second variable, will also be called on the first. The object is stored in the same location in memory. 

```js 
const a = [2,4,6,5];
console.log(a);
>> [2,4,6,5];

const b = a.sort(); 
console.log(b); >> [2,4,5,6];

console.log(a); >> [2,4,5,6];
```

In this context, the array at `b` is actually directly mutating the array at `a` through the method, `.sort()`. Directly changing the value of `a`. 

* Thinking about how the UI should look at any given moment rather than how to change it over time, elimates a whole class of bugs. Mutations through iterations can cause bugs, so React just renders a new version/instance of the object that it was initially rendering. 


## Components & Props

* A React component is a single, encapsulated peice of UI that is independent from the rest of the application and such is reusable. 

* Compnetnates are like JS functions that accept inputs (props), and return React elements describing what should appear on the screen. 

* A user defined component like below passes JSX attributes/children to the main `Person` component as a single object called props.

```JS
const person = <Person name="Aron" age="25" sex="male">
```

That props object would probably look something like this: 

```js
Person {
    name: "Aron",
    age: 25,
    sex: "male"
}
```

We can access this data or props by passing the props object to the component function params, or to the constructor of a class based component. 

The props object is quite powerful as every instance of the component object, will contain separate properties and render differently than other instances. 

### Extracting Components
A benefit of components is the abilitly to break them down and out into seperate other components, even if they are only used by a single component. 

**Name props from the components own point of view rather than the context in which it is being used**

Components can be created by other smaller, reusable components. 

* A pallete of useful reusable components pays off when the application grows in size - generally it's good to have small components for things like buttons, sections of a site, a header etc 

### Props are read only

* A component must never modify it's own props, they are read only. A `pure` function is one that doesn't change it's inputs 

**The single rule of react is that all components must act like pure functions and never change their props**

## State & LifeCycle 

* State is similar conceptually to props, but it is private to the component and fully controlled by the component.

* Mounting in React: 
<!-- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ -->
- The Document Object Model is a tree of DOM nodes and children of the HTML file. Generating the DOM from the source HTML is the start of the Critical Rendering Path, which ends when the browser paints the result into your browser window. 

- A dynamic webpage modifies the DOM through DOM methods, which restarts this Critical Rendering Path process, ending a modified child DOM node and a new paint in the browser window.

- DOM Methods: access the tree, anything inside the dom. 

- A React App only has a handful of DOM nodes, specificly HTML, Body and root as a child of body. React helps you do DOM operations. The process of inserting the <App> component into the DOM, or components into the App component, is called mounting a component. Effectively, it is just the creation of a DOM node. 

- A component is mounted when it's render representation is inserted into the DOM. The life cycle events that surround a component happen when this event occurs. 

- The  `constructor()` and `componentDidMount()` are initial life cycle methods that occur when a component is mounted, or created and rendered in the DOM. These methods don't apply when the component is updated that is `componentDidUpdate()`

- When React deletes a component, it is unmounted from the DOM. When react then calls componentWillUnMount(), which has it's own life cycle methods attached as well.

* What about the children? 

- When a component is mounted or unmounted, all of the children of that component are also mounted or unmounted in a chain reaction. 

## Component Life Cycle Methods 

* constructor() - this is called before the initial mounting occurs so any data needed before the first display of the component, gets initialized in the constructor (ie. state)

* componentDidMount() - this is called after the first render of the component in the DOM, or after the component is mounted. This is where you make any external API calls or anything where you need the component to be in the DOM in order to perform an action. 

* componentWillUnmount() - this is called right before a component is removed from the DOM. Good for cleaning up timers that are attached to a component that is going to be removed, if not, there will be a memory leak. 

## State 

Things to know about state and `setState()`.
1. Do not modify state directly: you can't access it like a normal object literal, you have to access the state through the `this.setState()` method, and will only work if you have a state object in the constructor. 

2. State Updates May Be Asynchronous
- Because this.props and this.state may be updated async, you can't rely on their values when updating the next state - you just need to use a setState function thing where you pass in the state and props object. 

3. State Updates are Merged: you run state updates separately because the state update is merged and can remove the values of the other independent state variables if left undefined.  

## Unidirectional / Top Down Data Flow
4. Data flows down: parent nor child components care about each others state or whether or not they're a function or a class. The state is the business of that component, and that component can pass it's state as a prop to it's child components. 
    The child component would get the state passed in as props and wouldn't know if it came from the parents state, props or was hand written, it's just there now. 
* state is always owned by one component, but it can share that state like a waterfall when each component is stacked like a tree and is below that parent element. 
* a component tree as a waterfall of props, each components state is one of those water droplets that lands on each component and carries down. 

## Event Handling 

* to preventDefault() behaviour in React, you have to be explicit like you normally would in a function. 

* Becareful using this in JSX callbacks, you have to always bind `this` to the methods that are being called, else they may be undefined. If you refer to a method without the `()` you should bind it to it with `this` 
     you can get around using `.bind()` through a specific ES6 syntax of using arrow functions within methods, or by using an arrow function within the click event 
     However, this can cause issues with lower components when you have to pass props down the component tree, causing extra rerendering and performance issues. 

* passing args: there are two ways to pass args to functions
1. Using the `Function.prototype.bind()`: in the example, the event object is bound to the the method as a part of `this`. 
    ```js
    <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
    ```
2. Using an arrow function: in this example the event object is passed in to the arrow function and taken as an argument in the method.
    ```js
     <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button
    ```




### Conditional Rendering

* You can use `if` just like you would normally within a component and the conditional operator within JSX 
    - The component will only render when that condition is satisfied, just wrap the return within the render method within an if-check
    - Generally you would get this data through props - these are passed in through the function params or the constructor
* Element variables: you can set a JSX element or React element to varialbe and return that variable depending on an if check. 
```js
render() {
    const isLoggedIn = this.state.isLoggedIn;
    //Create a button variable that will hold the element and it's actions/events and return that variable depending on the condition. 
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
```

* Using the logical `&&` logical operator: in JavaScript, `true && expresion` is equal to `true` and the same with false, meaning that if something is true, it will render the next output, if false, it will skip it.
    Utlimatley, I think that if checks are more readable. 


* Preventing rendering: you can use `return null` to render nothing based on an if check like guard clause, making the component render nothing if what is passed into the props isn't true, or not a specific thing.
    Returning null from render() doesn't prevent life cycle methods. 


## List and Keys

* If you wanted to transform a list of numbers, you would just `.map()` and then return those numbers within specific `<li>` elements. You can even store your `.map()` to a variable and output that variable within a `ul` to create a list of numbers

- A key is a special string attirubte that you need to include when creating lists, this can be a number or the index, just needs to be a string 
- The key attribute helps react idnetify which items have chanaged,added or removes. The best keys to use is a string ID that uniquiley idenitfies each element in the list, but you can also use the `index` value as a last resort. 

- It's generally not reccomended to use index as keys because React uses specific strings to indeity specifc elements within the list, the index of that elment in the list may change if something is changed within the list of data. If you push something to the start of the list, then all of the indexes change, and React won't know what is what. Data A that was on index 4, is now on Index 5. It can't keep track of this. 

- The idea here is to use permament and unqiue idenifiers for each item in the list. 

# The Three Reasons Not To Use an ID
1. the list and items are static–they are not computed and do not change;
2. the items in the list have no ids;
3. the list is never reordered or filtered.
Only when all of them are met, it is considered to be okay to use an index value as a key. 

* The key should only specified inside the new array that is being created with `.map()`
* A good rule of thumb is that elements inside the `map()` call need keys.

* Keys should only be unquie among siblings - you can have the same id shared between two elements in different arrays, ulimtaley, the parent is the main identifier there. 



### FORMS

* Controlled Components
- Mutable state is typically kept in the State property and updated with the `setState()` method.
- A controlled component is one that takes control away from the default value of an element, and makes the React state the single source of truth. In the form example, the input of the form is constantly updating the value of the form through the onChange handler and saving it to state. 



### Lifting State Up

