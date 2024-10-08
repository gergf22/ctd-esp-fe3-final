import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "./utils/routes";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContexGlobal } from "./utils/global.context";

const drawerWidth = 240;
const navItems = [
  { id: 1, name: "HOME", route: routes.home },
  { id: 2, name: "FAVORITOS", route: routes.favs },
  { id: 3, name: "CONTACTO", route: routes.contact },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const { state, dispatch } = useContexGlobal();
  const handleTheme = () => {
    dispatch({ type: "TOGGLE_THEME", payload: !state.theme });
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DH
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link to={item.route}>
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
        <ListItem>
          <ListItemButton sx={{ color: "#000" }} onClick={handleTheme}>
            {state.theme ? <LightModeIcon /> : <DarkModeIcon />}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        sx={state.theme ? { backgroundColor: "#000000" } : {}}
        component="nav"
        position="static"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            DH
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.route} key={item.id}>
                <Button sx={{ color: "#fff" }}>{item.name}</Button>
              </Link>
            ))}

            <Button sx={{ color: "#fff" }} onClick={handleTheme}>
              {state.theme ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>

            <Button sx={{ color: "#fff" }} onClick={() => navigate(-1)}>
              <ArrowBackIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
