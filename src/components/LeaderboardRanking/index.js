import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // Crown Icon
import { useNavigate } from "react-router-dom";
import { getImageName } from "../../utils"; // Function to extract initials

function LeaderboardRanking({ selectedTab, topThree }) {
  const navigate = useNavigate();
  const tabMapping = ["daily", "weekly", "monthly"];
  const [tabIndex, setTabIndex] = useState(tabMapping.indexOf(selectedTab));

  useEffect(() => {
    setTabIndex(tabMapping.indexOf(selectedTab));
  }, [selectedTab]);


  return (
    <Box sx={{ textAlign: "center", padding: 2 }}>
      {/* Tabs Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "29px",
          backgroundColor: "#f5f5f5",
          padding: "10px",
          marginBottom: "49px",
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={(event, newValue) => {
            setTabIndex(newValue);
            navigate(`/leaderboard/${tabMapping[newValue]}`); // Navigate to selected tab
          }}
          centered
          sx={{
            "& .MuiTabs-flexContainer": { justifyContent: "center" },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "16px",
              padding: "6px 124px",
            },
          }}
        >
          <Tab label="Daily" />
          <Tab label="Weekly" />
          <Tab label="Monthly" />
        </Tabs>
      </Box>

      {/* Leaderboard Top 3 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {topThree.map((player, index) => (
          <Box
            key={index}
            sx={{
              transform: index === 1 ? "scale(1.2)" : "scale(0.9)",
              "&:hover": {
                transform: "scale(1.05) translateY(-10px)",
                transition: "0.3s ease-in-out",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Rank Label or Crown */}
            {index === 1 ? (
              <EmojiEventsIcon
                sx={{
                  position: "absolute",
                  top: "-25px",
                  color: "#FFD700",
                  fontSize: "32px",
                }}
              />
            ) : (
              <Typography
                sx={{
                  position: "absolute",
                  top: "-20px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  backgroundColor: "#fff",
                  padding: "2px 6px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              >
                {index === 0 ? "2nd" : "3rd"}
              </Typography>
            )}

            {/* Circle with Initials */}
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "#1976D2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {getImageName(player.name)}
            </Box>

            <Typography sx={{ fontWeight: "bold", marginTop: 1 }}>
              {player.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default LeaderboardRanking;
