import React, { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { Header } from "../../components/Header";
import { Signature } from "../../components/Signature";
import CircularProgress from "@mui/material/CircularProgress";

export const Layout: React.FC = memo(() => {
  return (
    <Stack pb={3} minHeight="100dvh" bgcolor="#efefef">
      <Header />
      <Container sx={{mt: 12}}>
      <Suspense
          fallback={
            <Stack alignItems="center" justifyContent="center" height="50vh">
              <CircularProgress />
            </Stack>
          }
        >
          <Outlet />
        </Suspense>
        <Signature />
      </Container>
    </Stack>
  );
});
