import { ReactNode } from "react";
import Stack from "@mui/material/Stack";

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Stack maxWidth="1366px" width="60%" marginInline="auto">
      {children}
    </Stack>
  )
}
