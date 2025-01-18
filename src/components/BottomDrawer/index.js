import React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  SwipeableDrawer,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { getImageName } from "../../utils";

const drawerBleeding = 56;

const Root = styled("div")(() => ({
  height: "100%",
}));

const StyledBox = styled("div")(() => ({
  backgroundColor: "#fff",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
}));

const Puller = styled("div")(() => ({
  width: 30,
  height: 6,
  backgroundColor: "#ccc",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function BottomDrawer({ open, onClose, user }) {
  if (!user) return null;

  const { name, totalPoints } = user;

  return (
    <Root>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `55%`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        onOpen={() => {}}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{ keepMounted: false }}
      >
        {/* Drawer Header */}
        <StyledBox
          sx={{ position: "relative", padding: "16px", textAlign: "center" }}
        >
          <Puller />
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 10, right: 16 }}
          >
            <CloseIcon />
          </IconButton>
          {/* User Avatar */}
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
              overflow: "hidden",
              margin: "auto",
              border: "3px solid #1976D2",
            }}
          >
            {getImageName(user.name)}
          </Box>
          {/* User Name & Handle */}
          <Typography sx={{ fontSize: "18px", fontWeight: "bold", mt: 1 }}>
            {name}
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold", mt: 1 }}>
            ID: {user._id}
          </Typography>
        </StyledBox>

        {/* Leaderboard Statistics */}
        <StyledBox sx={{ px: 3, pb: 3, height: "100%", overflow: "auto" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#2979ff",
              color: "#fff",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <LeaderboardIcon sx={{ fontSize: "20px" }} />
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
              Leaderboard Statistics
            </Typography>
          </Box>

          {/* Total Points */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: totalPoints.color || "#FFA500",
              padding: "8px 12px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}
            >
              Daily
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}
            >
              Points: {totalPoints}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}
              >
                {totalPoints}
              </Typography>
              <EmojiEventsIcon sx={{ color: "#FFD700" }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: totalPoints.color || "#FFA500",
              padding: "8px 12px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}
            >
              Weekly
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}
            >
              Points: {totalPoints}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}
              >
                {totalPoints}
              </Typography>
              <EmojiEventsIcon sx={{ color: "#FFD700" }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: totalPoints.color || "#FFA500",
              padding: "8px 12px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}
            >
              Monthly
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}
            >
              Points: {totalPoints}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}
              >
                {totalPoints}
              </Typography>
              <EmojiEventsIcon sx={{ color: "#FFD700" }} />
            </Box>
          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

BottomDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    handle: PropTypes.string,
    gender: PropTypes.string,
    memberSince: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        points: PropTypes.number,
        stars: PropTypes.number,
        color: PropTypes.string,
      })
    ),
  }),
};

export default BottomDrawer;
