import { Page1 } from "./Page1";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Page2 } from "./Page2";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<Page1 />} />
        <Route path="/details" element={<Page2 /> }/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
