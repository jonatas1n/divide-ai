import { useState } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ROUTES } from "../constants";
import useMediaQuery from "@mui/material/useMediaQuery";

import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import Grow from "@mui/material/Grow";

export const HeaderMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const currentPath = window.location.pathname.split("/").pop();
  const isMdOrLarger = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <ClickAwayListener onClickAway={() => setShowMenu(false)}>
      <Stack justifyContent="center">
        <Button
          color="inherit"
          onClick={toggleMenu}
          sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
        >
          {showMenu ? <Close /> : <Menu />}
        </Button>
        <Grow in={showMenu || isMdOrLarger} style={{ transformOrigin: '-1 0 0' }}>
          <Stack
            zIndex={5}
            right={0}
            top={60}
            bgcolor="#1976D2"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              display: { xs: showMenu ? "grid" : "none", md: "flex" },
              position: { xs: "absolute", md: "unset" },
              alignItems: "start",
            }}
          >
            {Object.entries(ROUTES).map(([path, route]) => (
              <Button
                key={path}
                href={"/conta-bar/" + path}
                color="inherit"
                startIcon={<route.icon />}
                sx={{
                  ml: { xs: 0, md: 2 },
                  py: { xs: 2, md: 1 },
                  px: 2,
                  display: "flex",
                  borderRadius: 0,
                  justifyContent: "flex-start",
                  borderBottom: {
                    xs: "none",
                    md: currentPath === path ? "2px solid white" : "none",
                  },
                  borderLeft: {
                    xs: currentPath === path ? "2px solid white" : "none",
                    md: "none",
                  },
                  backgroundColor: {
                    xs: currentPath === path ? "#4f91e3" : "unset",
                    md: "unset",
                  },
                }}
              >
                {route.label}
              </Button>
            ))}
          </Stack>
        </Grow>
      </Stack>
    </ClickAwayListener>
  );
};
