import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/main/Header"

function App() {
  return (
    <main>
    
      <Routes>
         <Route path="/" element={<Home/>}/>
      </Routes>
    </main>
  )
}

export default App