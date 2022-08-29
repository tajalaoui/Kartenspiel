export function limiterBy(cardIds, amount) {
  return cardIds.splice(0, amount)
}