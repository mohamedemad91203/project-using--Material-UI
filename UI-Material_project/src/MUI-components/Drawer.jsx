import { Divider, Drawer, useTheme, IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CreateIcon from "@mui/icons-material/Create";
import Person2Icon from "@mui/icons-material/Person2";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box } from '@mui/system';

const Drawerr = ({
  drawerWidth,
  setmyMode,
  noneORblock,
  drawerType,
  hideDrawer,
}) => {
  const currentlocation = useLocation();

  const navigate = useNavigate();

  const theme = useTheme();

  const myList = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Create", icon: <CreateIcon />, path: "/Create" },
    { text: "profile", icon: <Person2Icon />, path: "/profile" },
    { text: "Settings", icon: <SettingsIcon />, path: "/Settings" },
  ];


  return (
    
  <Box component="nav">
      <Drawer
      sx={{
        display: { xs: noneORblock, sm: "block" },

        width: ` ${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: ` ${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClick={() => {
        hideDrawer();
      }}
    >
      {/* <Button
        onClick={() => {
          setmyMode(theme.palette.mode === "light" ? "dark" : "light");
        }}
        variant="contained"
        color="primary"
      >
        dark
      </Button> */}

      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
          disablePadding
        >
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setmyMode(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon sx={{ color: "orange" }} />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </ListItem>

        <Divider />

        {myList.map((item) => {
          return (
            <ListItem
            key={item.text}
              sx={{
                bgcolor:
                  currentlocation.pathname === item.path
                    ? // @ts-ignore
                      theme.palette.favColor.main
                    : null,
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}

        {/* <ListItem sx={{ bgcolor:currentlocation.pathname === "/create"? theme.palette
// @ts-ignore
        .favColor.main:null}} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/create");
            }}
          >
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create " />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <ListItemText primary="Profile " />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings " />
          </ListItemButton>
        </ListItem>


 */}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout " />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  </Box>
  );
};

export default Drawerr;
