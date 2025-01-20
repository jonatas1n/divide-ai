import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Container } from '../../components/Container';

export const Home = () => {
  return (
    <Container title="Conta do Bar">
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h4">Seja bem vindo a minha calculadora de bares.</Typography>
        <Button href="/guests" variant="contained">Começar!</Button>
      </Stack>
    </Container>
  )
}