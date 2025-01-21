export const formatMoneyString = (moneyString?: string) => {
  if (!moneyString) return moneyString;
  
  const formattedValue = moneyString
    .padStart(3, "0")
    .replace(/^0+,/g, ",")
    .replace(/\D/g, "")
    .replace(/(\d{2})$/, ",$1")
    .replace(/(?=(\d{3})+(\D))\B/g, ".");

  return formattedValue;
};

export const moneyNumberToString = (moneyNumber?: number) => {
  if (moneyNumber === undefined) return moneyNumber;

  const formattedValue = moneyNumber
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+,)/g, "$1.");

  return formattedValue;
};


export const moneyStringToNumber = (moneyString?: string) => {
  if (!moneyString) return moneyString;

  return parseFloat(moneyString.replace(".", "").replace(",", "."));
};
