import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const routes = {
  guests: "Participantes",
  products: "Produtos",
  costs: "Gastos",
  result: "Resultado"
}

type HeaderProps = {
  title: string;
};

export const Header = ({title}: HeaderProps) => {
  return (
    <Stack mb={3}>
      <Stack direction="row" justifyContent="space-evenly" p={3} borderBottom="1px solid #000000">
        {Object.entries(routes).map(([key, label]) => (
          <Link key={key} href={key}>{label}</Link>
        ))}
      </Stack>
      <Typography mt={2} variant="h3">{title}</Typography>
    </Stack>
  )
}
