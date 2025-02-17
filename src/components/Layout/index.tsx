import React, { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { Header } from "../../components/Header";
import CircularProgress from "@mui/material/CircularProgress";
import { Footer } from "../Footer";

export const Layout: React.FC = memo(() => {
  return (
    <Stack bgcolor="#efefef">
      <Header />
      <Container sx={{mt: 12, pb: 3}}>
        <Suspense
          fallback={
            <Stack alignItems="center" justifyContent="center" height="50vh">
              <CircularProgress />
            </Stack>
          }
        >
          <Outlet />
        </Suspense>
        <Footer />
      </Container>
    </Stack>
  );
});
