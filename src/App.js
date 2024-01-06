// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Themes from './components/Themes'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
function App() {
  return (<>
<BrowserRouter basename="/test">
  <Navbar/>
  <Themes/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>}></Route>
    <Route path='/portfolio' element={<Portfolio/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
  </Routes>
  </BrowserRouter>
  
  </>
  )}

export default App;