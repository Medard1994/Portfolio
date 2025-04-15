import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/Home"
import AboutMe from "./component/AboutMe"
import ContactMe from "./component/ContactMe"
import Skills from "./component/Skills"
import NotFound from "./pages/NotFound"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"

const App = () => {
  return (
   <Router>
    <Navbar />
    <Routes>

      <Route path="*" element={<Home />} />
      <Route path="NotFound" element={<NotFound />} />
      <Route path="about" element={<AboutMe />} />
      <Route path="Contact" element={<ContactMe />} />
      <Route path="Document" element={<Document />} />
      <Route path="Skills" element={<Skills />} />

      
    </Routes>
    <Footer />
   </Router>
  )
}

export default App 


