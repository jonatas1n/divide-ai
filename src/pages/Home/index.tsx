import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Container } from '../../components/Container';

export const Home = () => {
  return (
    <Container title="Conta do Bar">
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h4">Seja bem vindo a minha calculadora de bares.</Typography>
        <Button href="/conta-bar/guests" variant="contained">Começar!</Button>
      </Stack>
    </Container>
  )
}