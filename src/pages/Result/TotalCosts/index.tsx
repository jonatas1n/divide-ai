import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type TotalCostsProps = {
  hasExtra: boolean
  total: number;
  extra: number;
}

export const TotalCosts = ({
  hasExtra, total, extra
}: TotalCostsProps) => {
  const extraValue = (total * extra) / 110;
  return (
    <Stack spacing={2}>
      {hasExtra ? (
        <Typography
          pr={2}
          variant="subtitle1"
          fontStyle="italic"
          align="right"
          color="secondary"
        >
          Consumo: $ {(total - extraValue).toFixed(2)}
          <br />
          {extra}% de adicional do garçom: $ {extraValue.toFixed(2)}
        </Typography>
      ) : null}
      <Typography pr={2} variant="h6" align="right">
        Total: R$ {total.toFixed(2)}
      </Typography>
    </Stack>
  )
}