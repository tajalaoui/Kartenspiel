export function limiterBy(cardIds: any, amount: number) {
  return cardIds.splice(0, amount)
}
