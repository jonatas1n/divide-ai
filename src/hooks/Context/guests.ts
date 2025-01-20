import { useState, Dispatch, SetStateAction } from "react";
import { generateId } from "../../utils/id-get";
import { GuestType } from "../../types";
import { getFromLocalStorage, saveOnLocalStorage } from "../../storage/storage";

const LOCAL_STORAGE_KEY = "guests";

export type GuestContextType = {
  guests: Record<string, GuestType>;
  addGuest: () => void;
  changeGuest: (guest: GuestType) => void;
  removeGuest: (guestID: string) => void;
};

export const GuestContext = () => {
  const storagedData = getFromLocalStorage(LOCAL_STORAGE_KEY);
  const [guests, setGuests] = useState<Record<string, GuestType>>(storagedData);

  const updateGuests: Dispatch<SetStateAction<Record<string, GuestType>>> = (
    guestData
  ) => {
    setGuests((prevGuests) => {
      const updatedGuests =
        typeof guestData === "function"
          ? guestData(prevGuests)
          : { ...prevGuests, ...guestData };
      saveOnLocalStorage({ type: LOCAL_STORAGE_KEY, data: updatedGuests });
      return updatedGuests;
    });
  };

  const clearEmptyGuests = () => {
    updateGuests((prevGuests) =>
      Object.entries(prevGuests).reduce(
        (newGuests: Record<string, GuestType>, [guestID, guest]) => {
          if (guest.name) {
            newGuests[guestID] = guest;
          }
          return newGuests;
        },
        {}
      )
    );
  };

  const newGuest = () => ({ id: generateId() });

  const addGuest = () => {
    const guest = newGuest();
    updateGuests((prev) => ({
      ...prev,
      [guest.id]: guest,
    }));
  };

  const changeGuest = (guest: GuestType) => {
    updateGuests((prev) => ({
      ...prev,
      [guest.id]: guest,
    }));
  };

  const removeGuest = (guestID: string) => {
    clearEmptyGuests();
    updateGuests((prev) => {
      const updatedGuests = { ...prev };
      delete updatedGuests[guestID];
      if (Object.keys(updatedGuests).length == 0) {
        const guest = newGuest();
        return { [guest.id]: guest };
      }
      return updatedGuests;
    });
  };

  return { guests, addGuest, changeGuest, removeGuest };
};
