import './App.css';
import Home from './Home';
import Blogpage from './blogpage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/blogpage/kaushik" element={<Blogpage id={0}/>} />
            <Route path="/blogpage/sidd" element={<Blogpage id={1}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;