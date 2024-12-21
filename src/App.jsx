import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import EditTask from "./component/EditTask";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
};

export default App;

