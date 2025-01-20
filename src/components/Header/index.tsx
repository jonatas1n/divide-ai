import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const routes = {
  guests: "Participantes",
  products: "Produtos",
  costs: "Gastos",
  result: "Resultado",
};

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        maxWidth="1366px"
        sx={{width: {xs: "95%", md: "60%"}}}
        marginInline="auto"
      >
        <Typography variant="h4">{title}</Typography>
        <Stack sx={{flexDirection: { xs: "column", md: "row"}}}>
          {Object.entries(routes).map(([path, label]) => (
            <Button
              key={path}
              href={path}
              sx={{ color: "white", display: "block", textDecoration: "underline" }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Stack>
    </AppBar>
  );
};
