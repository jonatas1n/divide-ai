import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { Container } from "@mui/material";

const routes = {
  guests: "Participantes",
  products: "Produtos",
  costs: "Gastos",
  result: "Resultado",
};

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={1}
        >
          <Typography variant="h4">{title}</Typography>
          <Stack justifyContent="center">
            <Button
              color="inherit"
              onClick={toggleMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Menu />
            </Button>
            <Stack
              zIndex={5}
              right={0}
              top={64}
              bgcolor="#1976D2"
              sx={{
                flexDirection: { xs: "column", md: "row" },
                display: { xs: showMenu ? "flex" : "none", md: "flex" },
                position: { xs: "absolute", md: "unset" },
              }}
            >
              {Object.entries(routes).map(([path, label]) => (
                <Button
                  key={path}
                  href={path}
                  sx={{
                    color: "white",
                    display: "block",
                    textDecoration: "underline",
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};
