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
      <Stack maxWidth="1366px" sx={{width: {xs: "95%", md: "60%"}}} marginInline="auto">
        {children}
      </Stack>
    </Stack>
  )
}
