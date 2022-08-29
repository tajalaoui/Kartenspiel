import { limiterBy } from "./limiter.helper"

export function shuffler(id) {
  // Shuffling
  const cardIds = id.sort((a, b) => 0.5 - Math.random())

  // Limit by 30
  return limiterBy(cardIds, 30)
}
