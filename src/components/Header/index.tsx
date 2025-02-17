import { memo } from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";

import Container from "@mui/material/Container";

import { HeaderMenu } from "./HeaderMenu";
import { useNavigate } from "react-router-dom";

const TITLE = "DivideAí";

export const Header: React.FC = memo(() => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <AppBar color="secondary" position="fixed">
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            onClick={goHome}
          >
            <img src="icon.svg" alt="divide-ai logo" width={45} height={45} />
            <Typography
              fontFamily="Lexend"
              fontWeight="700"
              variant="h4"
              sx={{ userSelect: "none" }}
            >
              {TITLE}
            </Typography>
          </Stack>
          <HeaderMenu />
        </Stack>
      </Container>
    </AppBar>
  );
});
