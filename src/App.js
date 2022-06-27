import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FetchApi from "./screens/FetchApi";


function App() {
  return (
    <div>
      <Router>

        <Routes>

          <Route exact path='/' element={< FetchApi />}></Route>

        </Routes>
 
      </Router>
    </div>
  );
}

export default App;
