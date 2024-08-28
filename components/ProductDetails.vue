<template>
  <div class="detalis">
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="d-flex aa gap-5 align-items-center">
            <div class="two">
              <img :src="products.image" alt="" class="card-image" />
            </div>
            <div class="one">
              <h1 class="fs-4">{{ products.title }}</h1>
              <div>
                <div>
                <span class="text-black-50">price -${{ products.price }}</span>
              </div>
              <hr>
                <p>{{ products.description }}</p>
              </div>
              
              <!-- <p>{{ products.id }}</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { products } = defineProps(["products"]);
</script>

<style scoped>
.card-image {
  /* max-height: 200px; */
  width: 400px;
  /* margin: 0 auto; */
}
.one p {
  font-size: 12px;
  font-weight: 500;
}
.card {
  width: 100%;
  height: auto;
  padding: 5px;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
span {
  font-weight: 500;
}
.aa {
  justify-content: center;
}
@media (max-width:477px) {
    .aa {
  justify-content: center;
  flex-wrap: wrap;
}
.card-image{
    width: 150px;
}
}
</style>
