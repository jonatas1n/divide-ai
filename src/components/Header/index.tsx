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
        width="60%"
        marginInline="auto"
      >
        <Typography variant="h4">{title}</Typography>
        <Stack direction="row" spacing={1}>
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
