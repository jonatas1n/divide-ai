import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";

export const Signature = () => {
  return (
    <Fade in timeout={3000}>
      <Button
        href="https://www.linkedin.com/in/jonatasgomesdev/"
        target="_blank"
        color="error"
        variant="text"
        sx={{ mt: 2, opacity: 0.5 }}
      >
        Feito com ❤ por Jônatas Gomes
      </Button>
    </Fade>
  );
};
