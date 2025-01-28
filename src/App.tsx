import { Route,  Routes } from "react-router-dom"
import Home from "./pages"
import About from "./pages/about"
import Support from "./pages/support"
import Solution from "./pages/solution"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/support" element={<Support/>} />
      <Route path="/solutions" element={<Solution/>} />
    </Routes>
  )
}

export default App
