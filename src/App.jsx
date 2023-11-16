import { Outlet } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"


function App() {
 

  return (
    <>
 {/* <button className="relative overflow-hidden btn  border-indigo-500 group m-20">
  <span className="relative z-10 transition-colors group-hover:text-white px-6 ">E Credit</span>
  <span className="absolute inset-0 bg-indigo-500 transition-all duration-900 transform scale-x-0 origin-left group-hover:scale-x-50"></span>
  <span className="absolute inset-0 bg-indigo-500 transition-all duration-900 transform scale-x-0 origin-right group-hover:scale-x-50"></span>
</button> */}
  <NavBar></NavBar>
  <Outlet></Outlet>
  <Footer></Footer>
    </>
  )
}

export default App
