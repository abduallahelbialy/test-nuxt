<template>
  <div class="About">
    <div class="container-fluid">
      <div class="row">
        <div class="text">
          <h1 class="text-center text-danger">About</h1>
          <p v-if="!hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            tempora sit quos fuga aperiam, rerum culpa, illo accusamus at minima
            explicabo quod officiis cum vero aut, velit odit deserunt
            in!xxxxxxxxxx
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            tempora sit quos fuga aperiam, rerum culpa, illo accusamus at minima
            explicabo quod officiis cum vero aut, velit odit deserunt
            in!zzzzzzzzz
          </p>
        </div>
        <div class="" v-for="card in cards" :key="card.id">
          <p>{{ card.text }}</p>
        </div>
      <div>{{ data }}</div>
        <button @click="toggle">sssssssssssss</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const {data}=await useFetch('/api/currency/GBP')
//for loop//``
const cards = [
  { id: 1, text: "abod" },
  { id: 2, text: "oamr" },
  { id: 2, text: "samy" },
];
///toggle//
const hidden = ref(false);
const toggle = () => {
  hidden.value = !hidden.value;
};
</script>

<style scoped>
.About {
  padding: 20px 0;
}
h1 {
  font-size: 35px;
  margin-bottom: 20px;
}
p {
  margin: 20px 0;
}
</style>
