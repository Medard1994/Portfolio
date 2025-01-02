import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"

import Navbar from "./component/Navbar"
import Footer from "./component/Footer"

const App = () => {
  return (
   <Router>
    <Navbar />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App