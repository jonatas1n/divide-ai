import { useState } from "react";

import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Menu from "@mui/icons-material/Menu";
import Group from "@mui/icons-material/Group";
import Liquor from "@mui/icons-material/Liquor";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Calculate from "@mui/icons-material/Calculate";
import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

const routes = {
  guests: { label: "Participantes", icon: Group },
  products: { label: "Produtos", icon: Liquor },
  costs: { label: "Gastos", icon: AttachMoneyIcon },
  result: { label: "Resultado", icon: Calculate },
};

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <AppBar position="fixed">
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={{xs: 2, md: 0}}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box sx={{ backgroundColor: "#ffffff", p: 1, borderRadius: "100vmax", aspectRatio: 1, maxWidth: 25, maxHeight: 25, justifyContent: "center", alignItems: "center" }}>
              <img src="icon.svg" alt="Conta-bar logo" width={25} height={25} />
            </Box>
            <Typography variant="h5">{title}</Typography>
          </Stack>
          <Stack justifyContent="center">
            <Button
              color="inherit"
              onClick={toggleMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {showMenu ? <Close /> : <Menu />}
            </Button>
            <Stack
              zIndex={5}
              right={0}
              top={60}
              p={2}
              bgcolor="#1976D2"
              sx={{
                flexDirection: { xs: "column", md: "row" },
                display: { xs: showMenu ? "flex" : "none", md: "flex" },
                position: { xs: "absolute", md: "unset" },
                alignItems: "start",
              }}
            >
              {Object.entries(routes).map(([path, route]) => (
                <Button
                  key={path}
                  href={'/conta-bar/' + path}
                  color="inherit"
                  startIcon={<route.icon />}
                  sx={{
                    marginLeft: 2,
                    color: "white",
                    display: "flex",
                  }}
                >
                  {route.label}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};
