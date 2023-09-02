import "./App.css";
import Navbar from "./compound/components/Navbar";
import Alert from "./compound/components/Alert";
import Textform from "./compound/components/Textform";
import About from "./compound/components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Text Converter"/>
        <Alert/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/About" element={<About/>}>
             
            </Route>

            <Route  exact path="/Textform" element={<Textform/>}>
              
             
            </Route>
          </Routes>
        
     
     
        </div>
      </Router>
    </>
  );
}

export default App;
