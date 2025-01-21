import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";

import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import { HeaderMenu } from "./HeaderMenu";

const TITLE = "Conta Bar";

export const Header = () => {
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
            <Box
              sx={{
                backgroundColor: "#ffffff",
                p: 1,
                borderRadius: "100vmax",
                aspectRatio: 1,
                maxWidth: 25,
                maxHeight: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="icon.svg" alt="Conta-bar logo" width={25} height={25} />
            </Box>
            <Typography variant="h5">{TITLE}</Typography>
          </Stack>
          <HeaderMenu />
        </Stack>
      </Container>
    </AppBar>
  );
};
