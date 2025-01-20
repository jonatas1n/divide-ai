import { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import { Header } from "../../components/Header";

type ContainerProps = {
  children: ReactNode;
  title: string;
}

export const Container = ({ children, title }: ContainerProps) => {
  return (
    <Stack m={0}>
      <Header title={title} />
      <Stack maxWidth="1366px" width="60%" marginInline="auto">
        {children}
      </Stack>
    </Stack>
  )
}
