<script setup>
import { onMounted, ref, defineAsyncComponent } from "vue"
import { getCards } from "@services/hearthstone.service"
const Card = defineAsyncComponent(() => import("@components/Card.vue"))

onMounted(async () => {
  await startGame()
})

const cards = ref()
// let deck = ref()
let board = ref([])
let drawCards = ref()
let isFinalize = ref(false)
let isSelected = ref(false)

async function startGame() {
  cards.value = await getCards()
  board.value = cards.value.splice(0, 10)
}

function selectedCard(id) {
  console.log(...board.value)
  const cardId = board.value.find((element) => element == id)
  console.log("cardId: " + cardId)
  board.value.splice(cardId, 1, cards.value[0])

  console.log(board.value[cardId])
}

async function finalize() {
  await startGame()
}
</script>

<template>
  <div class="board mt-5">
    <div v-for="card in board">
      <Card @click="selectedCard(card)" class="card" :card="card" />
    </div>
  </div>
  <div class="controls mt-5">
    <button class="button is-large">Draw (x)</button>
    <button @click="finalize" class="button my-auto is-small">Finalize</button>
  </div>
</template>

<style lang="scss">
.board {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  .card:hover {
    border: 1px solid #000000;
    cursor: pointer;
  }
}

.controls {
  // text-align: center;
  // margin: 0 auto;
  display: flex;
  justify-content: center;
  .button {
    margin: 0 9px;
  }
}
</style>
