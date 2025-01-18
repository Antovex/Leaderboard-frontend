import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function LeaderboardHeader() {
  return (
    <div>
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "12px 4px",
          width: "100vw", // Full viewport width
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed", // Fix it to the top
          top: 0,
          left: 0,
          zIndex: 1000, // Ensure it stays above other elements
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Optional subtle shadow for clarity
        }}
      >
        {/* Left Side - Leaderboard Text */}
        <Typography variant="h6" sx={{ color: "#000", fontWeight: "bold" }} onClick={() => window.location.href = '/'}>
          Leader Board
        </Typography>

        {/* Right Side - Buttons and Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Points Button */}
          <Button
            variant="contained"
            startIcon={<EmojiEventsIcon />}
            sx={{
              backgroundColor: "#fff",
              color: "#ff4081",
              textTransform: "none",
              borderRadius: "19px",
              border: "1px solid #ff4081",
            }}
          >
            3982
          </Button>

          {/* Balance Button */}
          <Button
            variant="contained"
            startIcon={<CurrencyRupeeIcon />}
            sx={{
              backgroundColor: "#fff",
              color: "#4caf50",
              textTransform: "none",
              borderRadius: "19px",
              border: "1px solid #4caf50",
            }}
          >
            2875.00
          </Button>

          {/* Logo */}
          <IconButton>
            <TaskAltIcon sx={{ color: "#000", fontSize: "32px" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Spacer Div to Prevent Overlapping */}
      <div style={{ height: "72px", marginBottom: "10px" }}></div>
    </div>
  );
}

export default LeaderboardHeader;
