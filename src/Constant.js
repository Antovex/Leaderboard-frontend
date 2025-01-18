import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export const NAV_ITEMS = [
  { link: "/", key: "home", icon: <HomeIcon sx={{ color: "#fff" }} /> },
  {
    link: "/history",
    key: "history",
    icon: <ListAltIcon sx={{ color: "#fff" }} />,
  },
  {
    link: "/create",
    key: "create",
    icon: <AddCircleOutlineIcon sx={{ color: "#fff" }} />,
  },
  {
    link: "/settings",
    key: "settings",
    icon: <SettingsIcon sx={{ color: "#fff" }} />,
  },
  {
    link: "/leaderboard/daily",
    key: "leaderboard",
    icon: <EmojiEventsIcon sx={{ color: "#fff" }} />,
  },
];
