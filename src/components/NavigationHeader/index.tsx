import { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";

import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";

type NavOption = {
  label?: string | ReactNode;
  href?: string;
};

type NavigationHeaderProps = {
  previousOption?: NavOption;
  nextOption?: NavOption;
};

export const NavigationHeader = ({
  previousOption,
  nextOption,
}: NavigationHeaderProps) => {
  return (
    <Fade in>
      <Stack
        mb={2}
        sx={{ width: "100%", display: "grid", gridAutoFlow: "column" }}
        direction="row"
      >
        {previousOption && (
          <Button
            startIcon={<ArrowLeft fontSize="small" />}
            variant="text"
            sx={{ justifySelf: "flex-start" }}
            href={previousOption.href}
          >
            {previousOption.label ?? "Voltar"}
          </Button>
        )}
        {nextOption && (
          <Button
            endIcon={
              typeof nextOption.label === "string" && (
                <ArrowRight fontSize="small" />
              )
            }
            variant="text"
            sx={{ justifySelf: "flex-end" }}
            href={nextOption.href}
          >
            {nextOption.label ?? "Avançar"}
          </Button>
        )}
      </Stack>
    </Fade>
  );
};
