# CSS Styling Methods in React (Vite + JSX)

This document five different ways to apply CSS in a React project. Each method includes a definition, usage example, advantages, and when to use it.

## 1. Normal CSS File (`.css`)

### What it is

A regular CSS file imported into a React component. Styles apply globally unless scoped using unique class names.

### How to use

```jsx
import "./App.css";

export default function App() {
  return <button className="btn">Click Me</button>;
}
```

```css
/* App.css */
.btn {
  background: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
}
```

### Advantages

* Simple and familiar syntax
* No extra library needed
* Good for global styles

### When to use

* Small projects
* Styles shared by many components

## 2. Inline CSS

### What it is

CSS written directly inside the JSX element using the `style` attribute.

### How to use

```jsx
<button style={{ backgroundColor: "red", color: "white" }}>Click</button>
```

### Advantages

* Quick for one-time or small styles
* No extra file needed

### When to use

* Very small styling needs
* Dynamic values required immediately

---

## 3. Object-Based Inline CSS (with Hover using State)

### What it is

CSS is stored in a JavaScript object and applied using `style={object}`. Hover effects use `useState`.

### How to use

```jsx
import { useState } from "react";

export default function Button() {
  const [hover, setHover] = useState(false);

  const btn = {
    backgroundColor: hover ? "white" : "pink",
    color: hover ? "pink" : "white",
    padding: "10px 20px",
  };

  return (
    <button
      style={btn}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Save
    </button>
  );
}
```

### Advantages

* Fully controlled by JavaScript
* Dynamic values and logic possible

### When to use

* Conditional or animated inline styles
* When hover or active states need logic

## 4. Styled Components (CSS-in-JS)

### What it is

A popular library where CSS is written inside JavaScript as a component using template literals.

### Install

```
npm install styled-components
```

### How to use

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: black;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }
`;

export default function App() {
  return <Button>Click</Button>;
}
```

### Advantages

* Styles scoped to component
* Supports props and dynamic styling
* No class name conflicts

### When to use

* Medium to large projects
* Reusable UI components
* Theming needed

## 5. CSS Modules (`filename.module.css`)

### What it is

A CSS file where class names are automatically scoped and converted into unique names.

### How to use

```jsx
import styles from "./Button.module.css";

export default function Button() {
  return <button className={styles.btn}>Click</button>;
}
```

```css
/* Button.module.css */
.btn {
  background: green;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
}
```

### Advantages

* No style collisions
* Uses normal CSS syntax
* Simple and lightweight

### When to use

* Component-level styling
* Projects that need scoped CSS without extra library

## Summary Table

Method           |File Type          | Scoped          |Library Needed|Best For                                
-----------------|-------------------| ----------------|--------------|----------------------------------------
Normal CSS       |.css               | No              |No            |Global styles, basic styling            
Inline CSS       |Inside JSX         | Yes (to element)|No            |Quick one-time styles                   
Object Inline CSS|JS object          | Yes (to element)|No            |Conditional and hover logic             
Styled Components|JS template literal| Yes             |Yes           |Reusable styled UI components           
CSS Modules      |.module.css        | Yes             |No            |Component scoped CSS without extra setup
