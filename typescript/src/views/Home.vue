<script setup lang="ts">
import { onMounted, ref, defineAsyncComponent } from "vue"
import { getCards } from "../services/hearthstone.service"
const Card = defineAsyncComponent(() => import("@components/Card.vue"))

onMounted(async () => {
  await startGame()
})

const cards = ref()
let board = ref([])
let isFinalize = ref(false)
let selectedCardCount = ref(0)
let selectedCards = ref([])
let roundsCount = ref(0)

async function startGame(): Promise<void> {
  // Reset
  isFinalize.value = true
  selectedCards.value = []
  selectedCardCount.value = 0

  cards.value = await getCards()
  board.value = cards.value.splice(0, 10)
}

function onCardClick(id): void {
  if (roundsCount.value == 3) return
  if (selectedCardCount.value <= 2) {
    selectedCardCount.value++
    selectedCards.value.push(id)
  }
}
function onDrawCardClick(): void {
  if (roundsCount.value == 3) return
  selectedCardCount.value = 0
  let cardIndex

  for (let i = 0; i < selectedCards.value.length; i++) {
    cardIndex = board.value.findIndex((element) => element == selectedCards.value[i])
    if (cardIndex > -1) board.value.splice(cardIndex, 1, cards.value[i])
  }

  roundsCount.value++
}

async function onFinalizeClick(): Promise<void> {
  await startGame()
}
</script>

<template>
  <div class="board mt-5">
    <div v-for="cardId in board">
      <Card @click="onCardClick(cardId)" :key="cardId" class="card" :cardId="cardId" />
    </div>
  </div>
  <div class="controls mt-5">
    <button @click="onDrawCardClick" :disabled="roundsCount == 3" class="button is-large">
      Draw ({{ selectedCardCount }})
    </button>
    <button @click="onFinalizeClick" class="button my-auto is-small">Finalize</button>
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
