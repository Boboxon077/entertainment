import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"


function App() {
  
  return <div className="home">
    <Navbar/>
    <Home/>
  </div>
}

export default App