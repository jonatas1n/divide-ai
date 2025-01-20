import { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import MUIContainer from "@mui/material/Container";
import { Header } from "../../components/Header";

type ContainerProps = {
  children: ReactNode;
  title: string;
}

export const Container = ({ children, title }: ContainerProps) => {
  return (
    <Stack m={0}>
      <Header title={title} />
      <MUIContainer>
        {children}
      </MUIContainer>
    </Stack>
  )
}
