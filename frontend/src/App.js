import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from "./components/login/Login"

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
