import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

export const NotFound = () => {
  return (
    <Stack alignItems="center" my={6} spacing={4}>
      <Typography variant="h4" fontFamily="Lexend" fontWeight="700" color="secondary.main" textAlign="center">
        Parece que te mandaram pro lugar errado...
      </Typography>
      <SentimentDissatisfiedIcon color="secondary" sx={{ fontSize: 72 }}/>
      <Button startIcon={<HomeIcon fontSize="small" />} variant="contained" href="https://www.divideai.co">
        Ir à página inicial
      </Button>
    </Stack>
  )
}
