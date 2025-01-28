import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import GroupIcon from "@mui/icons-material/Group";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Home = () => {
  return (
    <Container sx={{ p: 2, display: "grid", justifyContent: "center" }}>
      <Stack mb={4} spacing={3} alignContent="center" justifyContent="center">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          p={2}
          spacing={2}
          bgcolor="white"
          borderRadius={2}
        >
          <Typography
            textAlign="center"
            display="flex"
            fontSize={52}
            variant="h4"
            fontWeight="700"
            fontFamily="Lexend"
            justifyItems="center"
            color="primary.main"
          >
            DivideAí
          </Typography>
          <img src="icon.svg" alt="divide-ai logo" width={40} height={40} />
        </Stack>
        <Typography
          color="secondary.main"
          textAlign="center"
          lineHeight={1}
          fontFamily="Lexend"
          variant="h6"
        >
          A forma mais prática e justa de dividir a conta no restaurante.
        </Typography>
        <Button href="/guests" variant="contained">
          <Typography
            fontFamily="Lexend"
            variant="h6"
            display="flex"
            alignItems="center"
            gap={1}
          >
            Acessar <ArrowForwardIcon />
          </Typography>
        </Button>
      </Stack>
      <Divider />
      <Stack my={3}>
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography
                sx={{ fontSize: { sm: "1.3rem", md: "1.5rem" } }}
                fontFamily="Lexend"
                color="primary.main"
                alignItems="center"
              >
                <GroupIcon fontSize="small" /> Participantes
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="body1"
                fontFamily="Lexend"
                color="secondary.main"
              >
                Adicione quem vai dividir a contar.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography
                sx={{ fontSize: { sm: "1.3rem", md: "1.5rem" } }}
                fontFamily="Lexend"
                color="primary.main"
              >
                <FastfoodIcon fontSize="small" /> Produtos
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="body1"
                fontFamily="Lexend"
                color="secondary.main"
              >
                Registre tudo o que foi consumido.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography
                sx={{ fontSize: { sm: "1.3rem", md: "1.5rem" } }}
                fontWeight="500"
                fontFamily="Lexend"
                color="primary.main"
              >
                <AttachMoneyIcon fontSize="small" /> Consumos
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="body1"
                fontFamily="Lexend"
                color="secondary.main"
              >
                Informe o que cada pessoa consumiu.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Stack>
      <Stack p={2} border="1px solid #26a248">
        <Typography
          variant="h5"
          fontFamily="Lexend"
          textAlign="center"
          color="secondary.main"
        >
          O valor exato de todos na mesa.
          <br />
          <b>Simples, rápido e justo.</b>
          <br />
          <Link href="/participants">Vamos começar?</Link>
        </Typography>
      </Stack>
    </Container>
  );
};
