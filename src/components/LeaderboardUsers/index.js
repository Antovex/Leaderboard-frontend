import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import BottomDrawer from "../BottomDrawer";
import { Button } from "@mui/material";
import { getImageName } from "../../utils";
import axios from "axios";

function LeaderboardUsers({ users, updateWinners, setUsers }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (user) => {
    setSelectedUser(user);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // ✅ Update only the top 3 winners to avoid unnecessary re-renders
  useEffect(() => {
    if (users && users.length > 0) {
      const topWinners = [...users]
        .sort((a, b) => b.points - a.points) // Sort users by highest points
        .slice(0, 3); // Take top 3 winners
      updateWinners(topWinners);
    }
  }, [users, updateWinners]);

  const handleClaimPoints = async (userId) => {
    try {
      const response = await axios.post(
        `http://localhost:8001/api/claim-points/${userId}`
      );
      const pointsAwarded = response.data.points;
      console.log(`User ${userId} awarded ${pointsAwarded} points!`);

      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        padding: "16px",
        maxHeight: "calc(100vh - 250px)",
        overflowY: "auto",
      }}
    >
      {users.map((user, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px",
            marginBottom: "10px",
            backgroundColor: "#fff",
            borderRadius: "19px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
          onClick={() => openDrawer(user)}
        >
          {/* Left - User Initials */}
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "#1976D2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {getImageName(user.name)}
          </Box>

          {/* Middle - Name & Rank */}
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            {user.name}
          </Typography>
          <Typography sx={{ color: "#888", fontSize: "14px" }}>
            Rank: {index + 1}
          </Typography>

          {/* Right - Prize & Points */}
          <Typography
            sx={{ fontSize: "14px", fontWeight: "bold", color: "#4CAF50" }}
          >
            {user.totalPoints}
          </Typography>

          {/* Right - Claim Points Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4caf50",
              color: "#fff",
              textTransform: "none",
              borderRadius: "19px",
              border: "1px solid #4caf50",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleClaimPoints(user._id);
            }}
          >
            Claim Points
          </Button>
        </Box>
      ))}

      {/* Bottom Drawer - Pass selected user info */}
      <BottomDrawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        user={selectedUser}
      />
    </Box>
  );
}

export default LeaderboardUsers;
