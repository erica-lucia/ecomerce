import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { Search, ShoppingCart, Person, Logout, Menu as MenuIcon } from "@mui/icons-material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#232f3e" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
          MiTienda
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "5px",
            padding: "0 10px",
            width: "40%",
          }}
        >
          <Search sx={{ color: "#888" }} />
          <InputBase placeholder="Buscar productos" sx={{ marginLeft: "10px", flex: 1, fontSize: "14px" }} />
        </Box>

        {/* Iconos y Menú */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Menú hamburguesa en móviles */}
          <IconButton sx={{ display: { xs: "flex", md: "none" } }} onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>

          {/* Carrito */}
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {/* Perfil */}
          <IconButton color="inherit">
            <Person />
          </IconButton>

          {/* Botón de Cerrar Sesión (NO HACE NADA) */}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Logout />}
            sx={{
              backgroundColor: "#f44336",
              color: "#fff",
              display: { xs: "none", md: "flex" },
            }}
            onClick={() => {}} // Función vacía, no hace nada
          >
            Cerrar Sesión
          </Button>
        </Box>

        {/* Menú desplegable en móviles */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {/* Opción de Cerrar Sesión en el Menú móvil (NO HACE NADA) */}
          <MenuItem onClick={handleMenuClose}>
            <Logout sx={{ marginRight: "10px" }} />
            Cerrar sesión
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
