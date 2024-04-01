import React, { useEffect } from "react";
import CreateRoomPage from "./CreateRoomPage";
import JoinRoomPage from "./JoinRoomPage";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");

  useEffect(() => {
    async function componentDidMount() {
      fetch("/api/user-in-room")
        .then((response) => response.json())
        .then((data) => {
          setRoomCode(data.code);
        });
    }
    componentDidMount()
  }, []);

  const renderHomePage = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>
              Join a Room
            </Button>
            <Button color="secondary" to="/create" component={Link}>
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            roomCode ? (
              <Navigate to={`/room/${roomCode}`} replace={true} />
            ) : (
              renderHomePage()
            )
          }
        />
        <Route path="/join/" element={<JoinRoomPage />} />
        <Route path="/create/" element={<CreateRoomPage />} />
        <Route path="/room/:roomCode/" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default HomePage;
