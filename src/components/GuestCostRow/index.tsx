import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Slide from "@mui/material/Slide";

type GuestCostRowProps = {
  guestName?: string;
  cost: number;
  extra?: number;
};

export const GuestCostRow = ({
  guestName,
  cost,
  extra = 0,
}: GuestCostRowProps) => {
  const extraValue = (cost * 10) / 110;
  const formattedCost = `$ ${cost.toFixed(2)}`;
  return (
    <Slide in direction="left">
      <TableRow
        sx={{
          "&:last-child :is(td, th)": { border: 0 },
          "&:nth-of-type(even)": { backgroundColor: "#f4f4f4" },
        }}
      >
        <TableCell>
          <Typography variant="h6">{guestName ?? ""}</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="h6">{formattedCost}</Typography>
          {extra ? (
            <Typography variant="subtitle2">
              $ {(cost - extraValue).toFixed(2)} + $ {extraValue.toFixed(2)}
            </Typography>
          ) : null}
        </TableCell>
      </TableRow>
    </Slide>
  );
};
