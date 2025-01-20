import { Link } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

export const Home = () => {
  return (
    <Container>
      <Stack>
        Seja bem vindo a minha calculadora de bares.
        <Link href="/guests">Começar!</Link>
      </Stack>
    </Container>
  )
}