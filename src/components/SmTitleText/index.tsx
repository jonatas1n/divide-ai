import Typography from "@mui/material/Typography";

type SmTitleTextProps = {
  title: string;
}

export const SmTitleText = ({title}: SmTitleTextProps) => {
  return (
    <Typography
      mb={2}
      ml={2}
      color="secondary.main"
      fontWeight="500"
      variant="h5"
      fontFamily="Lexend"
      display={{ sm: "unset", md: "none" }}
    >
      {title}
    </Typography>
  );
};
