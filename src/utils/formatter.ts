export const formatMoneyString = (moneyString?: string) => {
  if (!moneyString) return "0";

  return (parseFloat(moneyString.replace(/\D/g, ""))/100).toString();
};

export const moneyNumberToString = (moneyNumber?: number) => {
  if (!moneyNumber) return "0,00";

  const formattedValue = moneyNumber
  .toFixed(2)
  .replace(".", ",")
  .replace(/(\d)(?=(\d{3})+,)/g, "$1.");
  
  return formattedValue;
};
