import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { PropsWithChildren } from "react";

export const InfoCard = ({children}: PropsWithChildren) => {
  return (
      <Card sx={{ p: 2, bgcolor: "info.main" }}>
        <Typography fontFamily="Lexend" lineHeight={1.5} variant="body2">
          {children}
        </Typography>
      </Card>
)
}