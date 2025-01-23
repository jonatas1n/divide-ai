import { useState } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ROUTES } from "../constants";
import useMediaQuery from "@mui/material/useMediaQuery";

import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";

export const HeaderMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const currentPath =
    Object.keys(ROUTES).find(
      (route) => route == window.location.pathname.split("/").pop()
    ) ?? "guests";
  const isMdOrLarger = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <ClickAwayListener onClickAway={() => setShowMenu(false)}>
      <Stack justifyContent="center">
        <IconButton
          color="inherit"
          onClick={toggleMenu}
          sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
        >
          {showMenu ? <Close /> : <Menu />}
        </IconButton>
        <Grow
          in={showMenu || isMdOrLarger}
          style={{ transformOrigin: "-1 0 0" }}
        >
          <Stack
            zIndex={5}
            right={0}
            top={60}
            p={{ xs: 1, md: 0 }}
            bgcolor="secondary.main"
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
                href={path}
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
                    md:
                      currentPath === path ? "2px solid #f2f2bb" : "none",
                  },
                  borderLeft: {
                    xs:
                      currentPath === path ? "2px solid #f2f2bb" : "none",
                    md: "none",
                  },
                  backgroundColor: {
                    xs: currentPath === path ? "primary.main" : "unset",
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
