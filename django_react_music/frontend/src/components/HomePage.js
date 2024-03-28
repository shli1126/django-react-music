import React from "react";
import CreateRoomPage from "./CreateRoomPage";
import JoinRoomPage from "./JoinRoomPage";
import Room from "./Room";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const HomePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>HomePage</p>} />
        <Route path="/join/" element={<JoinRoomPage />} />
        <Route path="/create/" element={<CreateRoomPage />} />
        <Route path="/room/:roomCode/" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default HomePage;
