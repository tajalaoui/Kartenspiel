<script setup></script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}

html {
  scroll-behavior: smooth;
}

/* route transition */
.route-enter-from {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Montserrat", cursive !important;
}
</style>