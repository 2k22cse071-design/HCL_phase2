<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
=======
// import logo from './logo.svg';
>>>>>>> 892fa2a182576ff8e6fd810cd748cb11f6702245
import './App.css';
import Navbar from './nav_bar'; // Ensure using the correct filename case
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

import Navbar from './nav_bar';

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
    </Router>
=======
    <div className="App">
     <Navbar/>
    </div>
>>>>>>> 892fa2a182576ff8e6fd810cd748cb11f6702245
  );
}
export default App;
