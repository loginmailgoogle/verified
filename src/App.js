import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllPage from "./Components/allpage";
import ThankYou from "./Components/ThankYou/thankyou";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
                <Route exact path="/" element={<AllPage />} />
                <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
