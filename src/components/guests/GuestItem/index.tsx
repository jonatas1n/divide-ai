import { useAppContext } from "../../../hooks/Context";
import { GuestForm } from "../GuestForm";
import { GuestType } from "../../../types";
import { ItemStyle } from "../../common/Item";

type GuestItemProps = {
  guest: GuestType;
}

export const GuestItem = ({ guest }: GuestItemProps) => {
  const { removeGuest } = useAppContext();
  const onRemove = () => removeGuest(guest.id);

  return (
    <ItemStyle>
      <GuestForm guest={guest} />
      <button onClick={onRemove}>DEL</button>
    </ItemStyle>
  )
}