import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Slide from "@mui/material/Slide";

type GuestCostRowProps = {
  guestName?: string;
  cost: number;
};

export const GuestCostRow = ({guestName, cost}: GuestCostRowProps) => {
  const formattedCost = `$ ${cost.toFixed(2)}`;
  return (
    <Slide in direction="left">
      <TableRow>
        <TableCell>
          <Typography variant="h6">{guestName ?? ""}</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="h6">{formattedCost}</Typography>
        </TableCell>
      </TableRow>
    </Slide>
  )
};
