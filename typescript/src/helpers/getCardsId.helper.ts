export function getCardsId(cards: Array<any>): Array<any> {
  // Get only id's
  return cards.map((card) => card.id)
}
