import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import LeaderboardHeader from "../../components/LeaderboardHeader";
import LeaderboardRanking from "../../components/LeaderboardRanking";
import LeaderboardUsers from "../../components/LeaderboardUsers";
import axios from "axios";

function Leaderboard() {
  console.log(process.env);
  const { type } = useParams(); // Get type from URL
  const selectedTab = type || "daily"; // Default to "daily"
  
  const [topThree, setTopThree] = useState([]); // Store top 3 winners
  // const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  
  // Function to get top 3 users based on highest points
  const updateWinners = (users) => {
    const sortedUsers = [...users]
    .sort((a, b) => b.points - a.points) // Sort by highest points
    .slice(0, 3); // Take top 3
    
    let top = sortedUsers[0];
    sortedUsers[0] = sortedUsers[1];
    sortedUsers[1] = top;
    setTopThree(sortedUsers);
  };
  
  // Fetch users from the backend
  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_BACKEND_URI}/api/users`)
    .then((response) => {
      setAllUsers(response.data);
      updateWinners(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh", // Full screen height
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Section */}
      <LeaderboardHeader />

      {/* Scrollable Content */}
      <Box
        sx={{
          flex: 1, // Takes remaining space
          overflowY: "auto", // Enables scrolling
          paddingBottom: "80px", // Prevents overlap with BottomBar
          scrollbarWidth: "none", // Hide scrollbar in Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar in Chrome/Safari
        }}
      >
        {/* Pass top 3 winners to Ranking Component */}
        <LeaderboardRanking selectedTab={selectedTab} topThree={topThree} />

        {/* User List Component (Updates Parent State) */}
        <LeaderboardUsers users={allUsers} updateWinners={updateWinners} />
      </Box>
    </Container>
  );
}

export default Leaderboard;
