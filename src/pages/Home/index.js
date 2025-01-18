import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@mui/system";

// Keyframe animations for text and button
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", // Dark theme
        color: "#121212",
      }}
    >
      {/* Animated Text */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          animation: `${fadeIn} 1.5s ease-in-out`,
        }}
      >
        Welcome. <br /> Let the Game Begin !
      </Typography>

      {/* Animated Button */}
      <Button
        variant="contained"
        sx={{
          marginTop: "48px",
          fontSize: "18px",
          fontWeight: "bold",
          backgroundColor: "#FF9800",
          padding: "12px 30px",
          animation: `${fadeIn} 2s ease-in-out`,
          "&:hover": { backgroundColor: "#F57C00" },
        }}
        onClick={() => navigate("/leaderboard/daily")}
      >
        LEADER BOARD
      </Button>
    </Box>
  );
}

export default Home;
