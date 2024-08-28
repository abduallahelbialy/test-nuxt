<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <h1 class="text-danger text-center mb-3">products</h1>
        <div class="box">
          <!-- <div class="card mb-3" v-for="da in data" :key="da.id">
            <div class="text text-center">
              <h1>{{ da.title }}</h1>
            </div>
            <div class="img-card">
              <img :src="da.image" alt="" class=" img-fluid">
            </div>
            <div class="description w-100">
              <p class=" text-black-50">{{ da.description }}</p>
              <span class=" text-danger">{{ da.price }}</span>
            </div>
            <div class="btn">
              <nuxt-link :to="`/products/${da.id}`">

              <button class=" btn btn-danger">Details</button>
              </nuxt-link>
            </div>
          </div> -->
          <!-- ///respal comoents// -->
          <div v-for="p in data" :key="p.id">
            <ProductCard :product="p"/>

          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../../components/ProductCard.vue"
export default {
  ///api//
  async setup() {
    ///لاضافة عنوان رئيسى للصفحه بعيد عن العنوان الافتراضى///
    useHead({
      title: "Product Card",
      meta:[{name:'description',content:"Product Card merchant"}]
    })
    //api fetch///
    const { data, error } = await useFetch("https://fakestoreapi.com/products");
    return { data, error };
  },
  components:{ProductCard}
 
};
</script>

<style scoped>
.products {
  padding: 20px 0;
}
.card {
  width: 300px;
  height: auto;
  padding: 5px;
  border-radius: 4px;
}
.img-card{
  width: 100%;
  height: 100%;
    object-fit: cover;
margin: auto;
}
.img-card img{
  max-width: 200px;
  height: 200px;
  
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
