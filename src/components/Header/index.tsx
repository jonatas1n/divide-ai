import { memo } from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";

import Container from "@mui/material/Container";

import { HeaderMenu } from "./HeaderMenu";

const TITLE = "DivideAí";

export const Header: React.FC = memo(() => {
  return (
    <AppBar position="fixed">
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack
              bgcolor="#FFFFFF"
              borderRadius="100vmax"
              maxWidth={25}
              maxHeight={25}
              justifyContent="center"
              alignItems="center"
              p={1}
              sx={{ aspectRatio: 1 }}
            >
              <img src="icon.svg" alt="divide-ai logo" width={25} height={25} />
            </Stack>
            <Typography variant="h5">{TITLE}</Typography>
          </Stack>
          <HeaderMenu />
        </Stack>
      </Container>
    </AppBar>
  );
});
