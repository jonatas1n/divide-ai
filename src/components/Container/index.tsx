import { PropsWithChildren } from "react";
import Stack from "@mui/material/Stack";
import MUIContainer from "@mui/material/Container";
import { Header } from "../../components/Header";
import { Signature } from "../../components/Signature";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <Stack pb={3} minHeight="100dvh" bgcolor="#efefef">
      <Header />
      <MUIContainer sx={{ mt: 12 }}>
        {children}
        <Signature />
      </MUIContainer>
    </Stack>
  )
}
