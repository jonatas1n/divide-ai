import Modal, { ModalProps } from "@mui/material/Modal";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

type FormModalProps = {
  onClose: VoidFunction;
} & Omit<ModalProps, 'children' | 'onClose'>;

export const FormModal = ({onClose, ...modalProps}: FormModalProps) => {
  return (
    <Modal {...modalProps} onClose={onClose}>
      <Card elevation={5} sx={{position: "absolute", margin: 2, transform: "translate(-50%, -50%)",  top: "50%", left: "50%", minWidth: "60vw"}}>
        <Stack spacing={1} p={4} textAlign="center">
          <Typography fontFamily="Lexend">
            Em breve, lançaremos um formulário para você mandar suas dúvidas e sugestões.
          </Typography>
          <Typography fontFamily="Lexend" fontWeight="400" variant="caption">
            Anote para quando ele estiver disponível!
          </Typography>
          <Button onClick={onClose}>OK</Button>
        </Stack>
      </Card>
    </Modal>
  )
}