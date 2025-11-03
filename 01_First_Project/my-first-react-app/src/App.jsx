import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <h1>Welcome!</h1>
        <p>This is a Vite + React First app with header and footer.</p>
        <p>Footer is <u>Below</u></p>

      </div>
      <Footer />
    </>
  )
}

export default App
