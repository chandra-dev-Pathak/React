## 1. What is React?

React is a declarative, component-based JavaScript library for building user interfaces, created by Facebook (now Meta) and maintained as an open source project. It focuses on rendering UIs efficiently by breaking a page into small, reusable pieces called components. React is intentionally "library"-scoped (not a full framework); you decide which routing, state-management, and build tools to pair with it.

**Key ideas:**

* **Component-based:** UI is built from reusable components.

* **Declarative:** You declare *what* the UI should look like for a given state; React handles the rendering.

* **Virtual DOM & reconciliation:** React minimizes costly DOM updates by computing diffs between virtual DOM trees and applying only necessary changes.

* **JSX:** A syntax extension that looks like HTML inside JavaScript and compiles down to `React.createElement()` calls.

* **Use cases:** Single Page Applications (SPAs), interactive widgets, dashboards, mobile apps via React Native.

## 2. SPA vs MPA (short comparison)

| Feature    |                                  SPA |                              MPA |
| ---------- | -----------------------------------: | -------------------------------: |
| Page load  |                    Single HTML shell |              Multiple HTML pages |
| Navigation | Client-side routing (no full reload) |    Server-side full page reloads |
| Speed      |            Faster after initial load |        Slower, each page reloads |
| Example    |                      Gmail, Facebook | Old multi-page sites, some blogs |

**When to choose SPA:** complex interactions, app-like behavior, offline caching. **When to choose MPA:** SEO-first content-heavy site where server-rendered pages are simpler.

---

## 3. Virtual DOM & Reconciliation

The browser DOM operations are expensive. React keeps a virtual representation (Virtual DOM) in memory. On state change React:

1. Creates a new Virtual DOM tree.
2. Compares it with the previous tree (diffing algorithm).
3. Computes minimal operations to update the real DOM (patching) — this is reconciliation.

**Why this matters in interviews:** Explain how diffing avoids full DOM repaint and how keys in lists help reconciliation.

---

## 4. JSX — what it is and why it matters

JSX stands for JavaScript XML — it allows us to write HTML-like syntax inside JavaScript.

```jsx
function App() {
  return <h1>Hello React!</h1>;
}
```

* JSX is not HTML — it’s JavaScript expressions that evaluate to React elements.
* Use `{}` to inject JS expressions inside JSX.

* JSX is not understood by browsers.
* It gets converted into JavaScript using Babel before reaching the browser.

* JSX is a syntax extension that lets us write HTML-like code inside JavaScript. It is converted into `React.createElement()` calls using Babel before execution.

---

## 5. Components (Function vs Class)

**Function components (modern):**

* Components are the building blocks of a React application.

* React apps = collection of reusable components.

* A component is a reusable, independent piece of UI that can have its own logic, structure, and styling.

* Think of UI like Lego blocks:- Button, Navbar, Card, Footer — all are components.

**How to use a Component?**

Hello.jsx
```jsx
function Hello() {
  return <h1>Hello!</h1>;
}
export default Hello;
```

* Component used like HTML tag.

* Self-closing <Hello />

App.jsx
```jsx

import Hello from "./Hello";

function App() {
  return <Hello />;
}

```

**Class components (legacy):**

```jsx
class Welcome extends React.Component {
  render() {
    return <h2>Welcome to React!</h2>;
  }
}
```

*Why did React move from Class components to Function components?*

* Simpler syntax
* No this binding problem
* Hooks allow reusable logic
* Better performance & clean code

Today, function components with hooks are recommended. Hooks like `useState`, `useEffect` allow state & lifecycle logic in functions.

---

## 6. How a React project runs (basic structure)

```
my-app/
 ├─ public/
 │   └─ index.html   <-- single HTML shell
 └─ src/
     ├─ index.js     <-- ReactDOM.createRoot(...).render(<App />)
     └─ App.js       <-- root component
```

`index.js` example:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

## 7. Quick Cheatsheet (commands)

* `npx create-react-app my-app`
* `npm start` — run dev server
* `npm run build` — create production build

## 8. Testing

* Unit test components with `Jest` + `React Testing Library`.
* Integration/end-to-end tests with Cypress or Playwright.

## 9. Deployment & Tooling

* Build with `create-react-app`, Vite, or Next.js.
* Deploy on Vercel, Netlify, or any static host.
* Use ESLint, Prettier, TypeScript for code quality.

**10. Interview-level talking points:**

* *Difference between library and framework; why React chooses to be a library.*

A library gives you tools, but you decide how to use them. A framework gives you structure and controls the flow of your application.

Why React is a library:- React only handles the UI layer — it does not decide routing, global state, file structure, backend communication, etc.

You are free to choose tools like react-router, redux, zustand, vite etc.
React is a library because it focuses only on UI rendering and gives freedom to choose the rest of the stack.

* *How React’s Virtual DOM and reconciliation make it performant.*

React doesn’t update the real DOM directly. It creates a lightweight copy called Virtual DOM, finds the difference (diffing), and updates only the changed parts — not the whole UI. That makes it fast.

Step-by-step explanation:-
01- State changes → React builds a new Virtual DOM tree
02- It compares old vs new (Diffing algorithm)
03- Only the changed nodes are patched into the real DOM (Reconciliation)

Key point:- Real DOM updates are slow, but JavaScript object comparison (Virtual DOM) is fast.

React is fast because it batches updates and performs minimal DOM manipulation using Virtual DOM + reconciliation.

* *Why function components + hooks replaced most class-component usage.*

Function components are simpler, shorter, easier to reuse, and hooks allow state & lifecycle without classes.

Hooks solved problems of class components like complex lifecycles, this binding, and poor reusability — that’s why modern React is 90% function components.