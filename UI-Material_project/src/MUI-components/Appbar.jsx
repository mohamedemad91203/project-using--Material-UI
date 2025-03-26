import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Link, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Appbar = ({ drawerWidth, showDrawer}) => {
  return (
    <div>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, sm: `${drawerWidth}px` },
        }}
        position="static"

      >
        <Toolbar>
          <IconButton
            onClick={() => {
              showDrawer()
            }}
            sx={{  mr:"9px"  ,   display: { sx: "none" } }}
          >
            <MenuIcon  />
          </IconButton>

          <Link
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              "&:haver": { color: "red" },
            }}
            color="inherit"
            href="/"
          >
            {" "}
            My expenses
          </Link>
          <Typography mr={2} variant="body1">
            Mohamed Emad
          </Typography>
          <Avatar color="inherit" alt="Mohamed Emad" src="./image/me.jpg" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
