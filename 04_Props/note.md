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