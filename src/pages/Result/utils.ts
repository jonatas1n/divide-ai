import { CostType, GuestType, ProductType } from "../../types";

export const calculateGuestCosts = (costs: Record<string, CostType>, products: Record<string, ProductType>, guests: Record<string, GuestType>, extraValue: number = 0) => {
  return Object.values(costs).reduce<Record<string, number>>((acc, cost) => {
    const total = Object.values(cost.products)
      .filter((product) => product.id)
      .reduce(
        (sum, product) =>
          sum + (products[product.id]?.price ?? 0) * product.quantity,
        0
      ) * (1 + extraValue/100);

    cost.guests
      .filter((guestID) => guests[guestID])
      .forEach((guestID) => {
        acc[guestID] = (acc[guestID] ?? 0) + total / cost.guests.length;
      });

    return acc;
  }, {});
};

export const calculateTotalCost = (guestCosts: Record<string, number>) =>
  Object.values(guestCosts).reduce((sum, cost) => sum + cost, 0);

export const generateShareText = (guestCosts: Record<string, number>, guests: Record<string, GuestType>) => {
  return (
    "➗ A conta está pronta! Confira agora em: divideai.co\n\n" +
    Object.entries(guestCosts)
      .map(([guestID, cost]) => `- ${guests[guestID].name}: $ ${cost.toFixed(2)}`)
      .join("\n") + "\n\n"
  );
};

export const shareResults = async (shareText: string) => {
  const shareData = {
    title: "Divide Aí",
    text: shareText,
    url: "https://divideai.co",
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      alert("Compartilhado com sucesso!");
    } catch (error) {
      console.error("Erro ao compartilhar:", error);
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(shareText);
  } catch (error) {
    console.error("Erro ao copiar o texto:", error);
  }
};