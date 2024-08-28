<template>
  <div class="productcard">
    <div class="container">
      <div class="row">
        <div class="bo m-auto">
          <div class="card mb-3">
            <img :src="product.image" alt="" class="img-card" />
            <div class="text text-center">
              <h1>{{ product.title }}</h1>
            </div>
            <div class="btn">
              <nuxt-link :to="`/products/${product.id}`">
                <button class="btn btn-danger w-100">Details</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.card {
  width: 300px;
  height: auto;
  padding: 5px;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.img-card {
  max-height: 120px;
  margin: 0 auto;
  max-width: 70%;
}

.box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card h1 {
  font-size: 12px;
}
</style>
