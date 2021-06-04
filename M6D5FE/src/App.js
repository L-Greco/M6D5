import Navbar from "./components/Navbar/Navbar";
import BackOffice from "./components/BackOffice/BackOffice";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./App.css"


function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/backOffice" exact component={BackOffice} />
    </Router>
  );
}

export default App;
