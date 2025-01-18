import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BottomBar from "./components/BottomBar";
import Leaderboard from "./pages/Leaderboard";
import PointsPage from "./pages/History";
import CreateUserModal from "./pages/Create";
import NotFound from "./pages/Error";

function App() {
  console.log(process.env.REACT_APP_BACKEND_URI);
  return (
    <React.Fragment>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/leaderboard/:type" element={<Leaderboard />} />
            <Route path="/history" element={<PointsPage />} />
            <Route path="/create" element={<CreateUserModal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      <BottomBar />
    </React.Fragment>
  );
}

export default App;
