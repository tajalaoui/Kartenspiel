<script setup>
import { ref, onMounted, computed } from "vue"
import { getCard } from "../services/hearthstone.service"

// TODO Never call services on component, use state instead
const props = defineProps(["cardId"])

onMounted(() => {
  card.value = getCard(props.cardId)
})

let card = ref({})

const rarity = computed((rarity) => {
  console.log(rarity)
  switch (rarity) {
    case "FREE":
      "background: white;"
      break
    case "RARE":
      "background: blue;"
      break
    case "EPIC":
      "background: purple;"
      break
    case "LEGENDARY":
      "background: orange;"
      break
    default:
      ""
  }
})
</script>

<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3 card-image">
        <img
          :src="'https://art.hearthstonejson.com/v1/256x/' + card.id + '.jpg'"
          alt="Placeholder image"
        />
      </figure>
    </div>

    <div class="card-circular-detail mana">
      <span>{{ card.cost ? card.cost : 0 }}</span>
    </div>
    <div class="card-circular-detail attack">
      <span>{{ card.attack ? card.attack : 0 }}</span>
    </div>
    <div class="card-circular-detail health">
      <span>{{ card.health ? card.health : 0 }}</span>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ card.name }}</p>
          <!-- <div class="card-rarity" :style="rarity(card.rarity)"></div> -->
          <div
            :class="{
              'card-rarity has-background-white': card.rarity == 'FREE',
              'card-rarity has-background-blue': card.rarity == 'RARE',
              'card-rarity has-background-purple': card.rarity == 'EPIC',
              'card-rarity has-background-orange': card.rarity == 'LEGENDARY',
            }"
          ></div>
        </div>
      </div>

      <div class="content">
        {{ card.text }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 250px;
  height: 430px;
  text-align: center;
  color: #212121;
  .card-image {
    // display: ;
  }
  .card-circular-detail {
    position: absolute;
    // top: 0;
    // background: green;
    border-radius: 50%;
    width: 1.3rem;
    height: 1.3rem;
  }

  .mana {
    top: 0;
    background: #8187ff;
  }
  .attack {
    bottom: 0;
    background: #c17900;
  }
  .health {
    bottom: 0;
    right: 0;
    background: #9f0000;
  }

  .card-rarity {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin: 0 auto;
  }
}
</style>