import { useState } from "react"
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Signature } from "../Signature"
import { FormModal } from "../FormModal"

export const Footer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);
  return (
    <Stack mt={3}>
      <FormModal open={isOpenModal} onClose={toggleModal} />
      <Button onClick={toggleModal} variant="text" size="small">
          Sugestões ou Reclamações?
      </Button>
      <Signature />
    </Stack>
  )
}
