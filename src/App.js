import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import HomePage from "./routes/HomePage"
import AppDrawer from "./routes/AppDrawer"
import AppPage from "./routes/AppPage"
import {useState} from "react"
import './App.css';

function App() {
  const [noOfClicks,updateNoOfClicks]=useState(1);
  return (
    <div>
    <Router>
      <Routes>
        <Route Exact path="/" element ={<HomePage clicksHandler={[noOfClicks,updateNoOfClicks]}/>} />
        <Route path="/AppDrawer" element ={<AppDrawer/>} />
        <Route path="/AppPage/:AppName" element ={<AppPage/>} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
