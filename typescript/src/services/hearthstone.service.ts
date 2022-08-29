import axios from "@services/axios.service"
import { getCardsId } from "../helpers/getCardsId.helper"
import { shuffler } from "../helpers/shuffler.helper"

const URI: string = "https://api.hearthstonejson.com/v1/121569/enUS/cards.collectible.json"
const response = await axios.get(URI)
let cardIds = getCardsId(response.data)

export function getCards() {
  const shufelledCards = shuffler(cardIds)
  cardIds = shufelledCards
  return shufelledCards
}

export function getCard(id: string) {
  return response.data.find((element: any) => element.id == id)
}
