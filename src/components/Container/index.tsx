import { PropsWithChildren } from "react";
import Stack from "@mui/material/Stack";
import MUIContainer from "@mui/material/Container";
import { Header } from "../../components/Header";
import { Signature } from "../../components/Signature";

type ContainerProps = {
  title: string;
}

export const Container = ({ children, title }: PropsWithChildren<ContainerProps>) => {
  return (
    <Stack pb={3} minHeight="100vh">
      <Header title={title} />
      <MUIContainer sx={{ mt: 12 }}>
        {children}
      </MUIContainer>
      <Signature />
    </Stack>
  )
}
