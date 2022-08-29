import axios from "@services/axios.service"
import { getCardsId } from "../helpers/getCardsId.helper"
import { shuffler } from "../helpers/shuffler.helper"

const URI = "https://api.hearthstonejson.com/v1/121569/enUS/cards.collectible.json"
const response = await axios.get(URI)
let cardIds = getCardsId(response.data)

export function getCards() {
  const shufelledCards = shuffler(cardIds)
  // Reassigned cardIds so i can limit it to only 30
  cardIds = shufelledCards
  return shufelledCards
}

// Custom endpoint alike
export function getCard(id) {
  return response.data.find((element) => element.id == id)
}
