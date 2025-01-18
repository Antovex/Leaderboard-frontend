import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { NAV_ITEMS } from "../../Constant";
import { Box } from "@mui/material";

function BottomBar() {
  const currentPath = window.location.pathname;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#2979ff",
      }}
    >
      <BottomNavigation
        showLabels
        sx={{
          backgroundColor: "#2979ff",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = currentPath === item.link;

          return (
            <BottomNavigationAction
              key={item.key}
              label={item.label}
              icon={React.cloneElement(item.icon, {
                sx: { color: isActive ? "#FF9800" : "#FFF" },
              })}
              sx={{
                "& .Mui-selected": { color: "#FF9800" },
              }}
              onClick={() => {
                window.location.href = item.link;
              }}
            />
          );
        })}
      </BottomNavigation>
    </Box>
  );
}

export default BottomBar;
