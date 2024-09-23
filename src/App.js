import logo from './logo.svg';
import './App.css';
import Header from './navbar/Header';
import Section from './pages/login/Section';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Beranda from './pages/beranda/Beranda'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/beranda" element={<Beranda />}/>
        </Routes>
      </Router>
    </>
  );
}
{/* <script>
document.querySelector(".btnMasuk").addEventListener("click", (e) => {
  console.log("button was clicked!")
})
</script> */}

export default App;
