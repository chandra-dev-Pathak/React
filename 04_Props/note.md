## What does “Props” mean?

Props = Properties

In React, props are the data that is passed from a parent component to a child component.

### Simple line to remember:
**Props = Read-Only data passed from Parent → Child**

## Why do we need props?

Because React components are reusable.  
If we want different data each time, we send it through props.

---

## One-Way Data Flow (Important)

- Data always flows **from parent to child**
- Child cannot modify the props received
- Props are **immutable** (cannot be changed inside child)


---

## Basic Example

```jsx
function App() {
  return <Welcome name="Raj" />;
}

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

# Explanation

| Component | Responsibility              |
| --------- | --------------------------- |
| App       | Sending data (`name="Raj"`) |
| Welcome   | Receiving data using props  |

# Key Rule

- props.name = "Amit"  // Error: props are read-only
- Child can use props
- Child cannot change props

* Props are not just a way to send data.  
* In React, props are the foundation of reusability, clean code, and scalable UI.

## Without Props vs With Props (Real Life Example)

### Without Props (Bad Approach)

```jsx
function ProfileCard() {
  return <h2>Profile</h2>;
}

function SettingsCard() {
  return <h2>Settings</h2>;
}

function LogoutCard() {
  return <h2>Logout</h2>;
}
```

* Works, but:-
- Same code is repeated
- Three components doing the same UI job
- Not reusable

### With Props (Good Approach)

```jsx 
function Card({ title }) {
  return <h2>{title}</h2>;
}

function App() {
  return (
    <>
      <Card title="Profile" />
      <Card title="Settings" />
      <Card title="Logout" />
    </>
  );
}
```

* Benefits:-
- One component
- Used multiple times with different props
- Fully reusable
- Clean and maintainable

## Real-World Example: Button Component

* Without Props (bad)

```jsx
<button className="primary">Save</button>
<button className="primary">Delete</button>
<button className="primary">Submit</button>\
```
- Same button repeated three times → duplicate code

* With Props (good)

```jsx
function Button({ label }) {
  return <button className="primary">{label}</button>;
}

<Button label="Save" />
<Button label="Delete" />
<Button label="Submit" />
```

- One button component → unlimited usage

**Internal Working OF Props**

## 1. Props are always an Object

Whenever you pass props to a component, React combines all of them into one single object.

### Example:

```jsx
<User name="Rohan" age={22} city="Delhi" />
```

React internally converts this into:

```js
props = {
  name: "Rohan",
  age: 22,
  city: "Delhi"
}
```

It does not matter if you pass one prop or many props — React always sends them as one object.

## 2. How to check props object (console log example)

```jsx
function User(props) {
  console.log(props);
  return <p>Hello {props.name}</p>;
}

<User name="Rohan" age={22} />
```

Console output:

```js
{ name: "Rohan", age: 22 }
```

## 3. Props object is always passed (even if empty)

```jsx
function Test(props) {
  console.log(props);
  return <h1>Test</h1>;
}

<Test />
```

Console output:

```js
{}
```

Even if no props are passed, React still provides an empty object.

## 4. Props are Read-Only

```jsx
function User(props) {
  props.name = "Amit"; // Not allowed
}
```

Props cannot be changed. They are read-only. If you need data that can change, you must use **state**, not props.

## 5. Props can be any data type

| Type      | Example                              |
| --------- | ------------------------------------ |
| string    | `<User name="Raj" />`                |
| number    | `<Count value={10} />`               |
| boolean   | `<Btn disabled={true} />`            |
| array     | `<List items={[1,2,3]} />`           |
| object    | `<User info={{name:"A", age:20}} />` |
| function  | `<Btn onClick={handleClick} />`      |
| component | `<Modal footer={<Button />} />`      |

React accepts any type of value in props, but you must not modify them.

---

## 6. Props flow only from Parent to Child

* A child cannot send props back to the parent
* A child cannot change the value of props

This concept is called **one-way data flow**.

---

## 7. You can pass unlimited props

```jsx
<User
  name="Rohan"
  age={22}
  city="Delhi"
  isActive={true}
  skills={["JS", "React"]}
  address={{ pin: 110011 }}
/>
```

React receives them as:

```js
{
  name: "Rohan",
  age: 22,
  city: "Delhi",
  isActive: true,
  skills: ["JS", "React"],
  address: { pin: 110011 }
}
```

# React Props Complete Guide (Simple English)

---

## 1. Props are always an Object

Whenever you pass props to a component, React combines all of them into one single object.

### Example:

```jsx
<User name="Rohan" age={22} city="Delhi" />
```

React internally converts this into:

```js
props = {
  name: "Rohan",
  age: 22,
  city: "Delhi"
}
```

It does not matter if you pass one prop or many props — React always sends them as one object.

---

## 2. How to check props object (console log example)

```jsx
function User(props) {
  console.log(props);
  return <p>Hello {props.name}</p>;
}

<User name="Rohan" age={22} />
```

Console output:

```js
{ name: "Rohan", age: 22 }
```

---

## 3. Props object is always passed (even if empty)

```jsx
function Test(props) {
  console.log(props);
  return <h1>Test</h1>;
}

<Test />
```

Console output:

```js
{}
```

Even if no props are passed, React still provides an empty object.

---

## 4. Props are Read-Only

```jsx
function User(props) {
  props.name = "Amit"; // Not allowed
}
```

Props cannot be changed. They are read-only. If you need data that can change, you must use **state**, not props.

---

## 5. Props can be any data type

| Type      | Example                              |
| --------- | ------------------------------------ |
| string    | `<User name="Raj" />`                |
| number    | `<Count value={10} />`               |
| boolean   | `<Btn disabled={true} />`            |
| array     | `<List items={[1,2,3]} />`           |
| object    | `<User info={{name:"A", age:20}} />` |
| function  | `<Btn onClick={handleClick} />`      |
| component | `<Modal footer={<Button />} />`      |

React accepts any type of value in props, but you must not modify them.

---

## 6. Props flow only from Parent to Child

* A child cannot send props back to the parent
* A child cannot change the value of props

This concept is called **one-way data flow**.

---

## 7. You can pass unlimited props

```jsx
<User
  name="Rohan"
  age={22}
  city="Delhi"
  isActive={true}
  skills={["JS", "React"]}
  address={{ pin: 110011 }}
/>
```

React receives them as:

```js
{
  name: "Rohan",
  age: 22,
  city: "Delhi",
  isActive: true,
  skills: ["JS", "React"],
  address: { pin: 110011 }
}
```

---

## 8. Simple Real Example

```jsx
function Product(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Price: {props.price}</p>
    </div>
  );
}

<Product title="iPhone 15" price={799} />
```

Console:

```js
{ title: "iPhone 15", price: 799 }
```

---

## Summary

| Concept          | Meaning                                         |
| ---------------- | ----------------------------------------------- |
| Props are object | Always passed as one object                     |
| Even if no props | Still receives `{}`                             |
| Read-only        | Cannot be changed                               |
| Any data type    | Allowed (string, number, array, function, etc.) |
| One-way flow     | Parent to Child only                            |
| Unlimited props  | Still grouped into one object                   |

---

**Props Destructuring** 

## 1. Why use destructuring?

### Without destructuring

```jsx
function User(props) {
  return <p>{props.name} is {props.age} years old</p>;
}
```

### With destructuring (recommended)

```jsx
function User({ name, age }) {
  return <p>{name} is {age} years old</p>;
}
```

Benefits:

* Cleaner syntax
* Less typing
* Easier to read

## 2. What is destructuring? (JS Concept)

```js
const person = { name: "Raj", age: 22 };
const { name, age } = person;
```

You can now use `name` and `age` directly.

React props are also objects, so destructuring works perfectly.

---

## 3. Example with multiple props

```jsx
function Product({ title, price, rating }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>₹{price}</p>
      <p>⭐ {rating}</p>
    </div>
  );
}
```
## 4. Destructuring + still keeping full props

```jsx
function User(props) {
  const { name, age } = props;
  console.log(props); // full object still available
  return <p>{name} - {age}</p>;
}
```

## 5. Destructuring with default values

```jsx
function Hello({ name = "Guest" }) {
  return <h1>Hello {name}</h1>;
}
```

If no `name` is passed, it will use `"Guest"`.

## 7. Destructuring nested props

```jsx
function User({ info: { name, age } }) {
  return <p>{name} is {age} years old</p>;
}

<User info={{ name: "Amit", age: 20 }} />
```

## 8. When NOT to destructure

Do **not** destructure when you want to forward the full props object.

```jsx
function Wrapper(props) {
  return <Child {...props} />;
}
```

## 9. Standard React pattern (preferred)

Best Practice:

```jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```

Not recommended:

```jsx
function Button(props) {
  const { label, onClick } = props;
}
```

**Different Types of Props in React**

Props are not limited to just strings or numbers — in React, you can pass almost any valid JavaScript data type as props.

## 1. String Props

```jsx
<Msg text="Hello" />

function Msg({ text }) {
  return <p>{text}</p>;
}
```

* Strings must be written inside quotes `" "`

## 2. Number Props

```jsx
<Count value={10} />

function Count({ value }) {
  return <h2>{value}</h2>;
}
```

* Numbers do **not** need quotes
* `{10}` correct
* `"10"` will be treated as a string

## 3. Boolean Props

```jsx
<Button disabled={true} />
// OR short-hand
<Button disabled />

function Button({ disabled }) {
  return <button disabled={disabled}>Click</button>;
}
```
* `true` / `false` must be inside `{}`

## 4. Array Props

```jsx
<List items={["Apple", "Banana", "Mango"]} />

function List({ items }) {
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}
```
* Useful for lists (menus, todos, etc.)

## 5. Object Props

```jsx
<User info={{ name: "Amit", age: 21 }} />

function User({ info }) {
  return <p>{info.name} is {info.age} years old</p>;
}
```

* Objects must be wrapped in `{}`
* Good for grouped data

## 6. Function as Props (Very Important)

```jsx
function App() {
  const sayHi = () => alert("Hi!");

  return <Button onClick={sayHi} />;
}

function Button({ onClick }) {
  return <button onClick={onClick}>Click</button>;
}
```

* Used for event handling, callbacks, and lifting state up
* One of the **most used** prop types in React

## 7. Component as Prop (Advanced but Useful)

```jsx
<Modal footer={<Button />} />

function Modal({ footer }) {
  return (
    <div className="modal">
      <h2>Modal Content</h2>
      {footer}
    </div>
  );
}
```

* You can pass entire JSX / component as a prop
* Used in UI libraries, modals, layouts

## 8. Mixed Props Example

```jsx
<Product
  title="iPhone 15"
  price={899}
  tags={["Mobile", "Apple"]}
  details={{ color: "Black", storage: "128GB" }}
  onBuy={() => alert("Order Placed!")}
  actionButton={<button>Buy Now</button>}
/>
```
* All valid props in one example

**------- Function as Props -----** 

This is the most powerful and important concept in React because it enables:

* Event handling
* Callback communication
* Lifting state up
* Parent → Child and Child → Parent interaction

If you understand this, you understand *how React apps actually work*.

## 1. Why do we pass functions as props?

Because:

* The **child component only displays UI**
* The **parent component controls logic, state, and data**

So if the child wants to trigger something (like button click, form submit, etc.),
it cannot change state directly — it must **call a function given by the parent**.

That function is passed **as a prop**.

## 2. Basic Example

### Parent Component

```jsx
function App() {
  const sayHi = () => alert("Hi!");

  return <Button onClick={sayHi} />;
}
```

### Child Component

```jsx
function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}
```

- Parent created the function
- Child just uses it
- When button is clicked → parent’s function runs

This is called **Callback via Props**

## 3. Lifting State Up (Very Common Pattern)

When multiple children need the same data → the state is moved to parent.

### Parent (stores state + logic)

```jsx
function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <h1>{count}</h1>
      <CounterButton onIncrement={increment} />
    </>
  );
}
```

### Child (only UI)

```jsx
function CounterButton({ onIncrement }) {
  return <button onClick={onIncrement}>Add +1</button>;
}
```

- Child cannot change state
- Child only calls the function
- Parent updates the state

## Interview Question

**Q: Why do we pass functions as props?**
**A:** To allow child components to trigger actions or update state that is stored in the parent.


**--------children Prop (The Special Prop in React)----------**

### 1. What is the `children` Prop?

`children` is a special built-in prop in React. It contains whatever JSX you write between a component’s opening and closing tag.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h1>Hello</h1>
  <p>This is inside card</p>
</Card>
```

React automatically passes this as:

```js
props = {
  children: (
    <>
      <h1>Hello</h1>
      <p>This is inside card</p>
    </>
  )
}
```

So `children` itself is a prop.

### 2. Layout Example

```jsx
function Layout({ children }) {
  return (
    <div className="layout">
      <header>My App</header>
      {children}
      <footer>© 2024</footer>
    </div>
  );
}

<Layout>
  <h2>Home Page</h2>
</Layout>

<Layout>
  <p>About Page Content</p>
</Layout>
```

Same layout, different content.

### 3. Modal Example

```jsx
function Modal({ children }) {
  return <div className="modal">{children}</div>;
}

<Modal>
  <h2>Warning!</h2>
  <p>Are you sure you want to continue?</p>
</Modal>
```

`children` lets you pass complete JSX, not just text.

### 4. Using props + children together

```jsx
function Alert({ type, children }) {
  return <div className={`alert ${type}`}>{children}</div>;
}

<Alert type="success">Data saved successfully!</Alert>
<Alert type="error">Something went wrong!</Alert>
```

### 5. Important Notes

* `children` is a built‑in prop
* It **cannot be renamed** (must be `children` only)
* You receive it by `props.children` or destructuring `{ children }`

---

### 6. Interview Question

**Q:** What is the `children` prop in React?
**A:** It is a special prop that allows you to pass JSX between the opening and closing tags of a component.


### Part-8 — defaultProps (When Parent Does NOT Pass a Prop)

Sometimes we expect props in a component, but the parent forgets to pass them, which can cause errors or break the UI.
To avoid this, React provides **default props**, meaning if a prop is missing, it will use the default value.

### Why do we need default props?

```jsx
function User({ name }) {
  return <h2>User: {name}</h2>;
}

<User name="Ali" />   // OK
<User />               // ERROR (name = undefined)
```

### 1. Default Props — Old Method (React < 18)

```jsx
function User({ name }) {
  return <h2>User: {name}</h2>;
}

User.defaultProps = {
  name: "Guest",
};
```

Now:

```jsx
<User />   // Output: User: Guest
```

### 2. Default Props — New Method (With Destructuring)

```jsx
function User({ name = "Guest" }) {
  return <h2>User: {name}</h2>;
}
```

Now even if parent passes nothing:

```jsx
<User />          // Output: User: Guest
<User name="Ali" />  // Output: User: Ali
```

✔ Cleaner and recommended in modern React

### Multiple default props

```jsx
function Profile({ name = "Unknown", age = 0, city = "N/A" }) {
  return (
    <p>
      {name} — {age} years old — {city}
    </p>
  );
}
```

### Default props with children

```jsx
function Box({ children = "No content" }) {
  return <div className="box">{children}</div>;
}

<Box />                 // Output: No content
<Box> Hello World </Box> // children replace default
```

### Default props + normal props + children together

```jsx
function Button({ text = "Click Me", type = "primary", children }) {
  return <button className={type}>{children || text}</button>;
}
```

# PropTypes in React (Props Validation) – React 18+ Version

## 1. Why PropTypes?

React does **not** validate prop types by default. That means even if you pass a wrong value, React will not throw an error.

```jsx
<User name={123} /> // React accepts it, no error
```

This can lead to bugs in real-world apps.
To avoid this, we use **PropTypes** – runtime type checking for props.

## 2. Installing PropTypes (React 18+)

PropTypes is **not built-in** anymore. You must install it manually.

```bash
npm install prop-types
```

Then import it:

```js
import PropTypes from "prop-types";
```

## 3. Basic Example

```jsx
import PropTypes from "prop-types";

function User({ name, age }) {
  return <p>{name} - {age}</p>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
```

* Valid

```jsx
<User name="Ravi" age={21} />
```

* Invalid (Console Warning)

```jsx
<User name={100} age="Hello" />
```

Console Warning:

```
Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `User`, expected `string`.
```

## 4. `isRequired`

```jsx
User.propTypes = {
  name: PropTypes.string.isRequired, // must be passed
  age: PropTypes.number              // optional
};
```
If missing required prop:

Warning: Failed prop type: The prop `name` is marked as required...

## 5. Supported PropTypes

| Type        | Example                                                            |
| ----------- | ------------------------------------------------------------------ |
| string      | PropTypes.string                                                   |
| number      | PropTypes.number                                                   |
| bool        | PropTypes.bool                                                     |
| array       | PropTypes.array                                                    |
| object      | PropTypes.object                                                   |
| func        | PropTypes.func                                                     |
| element     | PropTypes.element                                                  |
| node        | Anything renderable (string, number, JSX, etc.)                    |
| arrayOf()   | PropTypes.arrayOf(PropTypes.number)                                |
| objectOf()  | PropTypes.objectOf(PropTypes.string)                               |
| oneOf()     | PropTypes.oneOf(["small", "medium", "large"])                      |
| oneOfType() | PropTypes.oneOfType([PropTypes.string, PropTypes.number])          |
| shape()     | PropTypes.shape({ name: PropTypes.string, age: PropTypes.number }) |

## 6. Example: `arrayOf` + `shape`

```jsx
UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};
```

## 7. Function as Prop

```jsx
Button.propTypes = {
  onClick: PropTypes.func.isRequired
};
```

## 8. Validating `children`

```jsx
Card.propTypes = {
  children: PropTypes.node
};
```