<template>
  <div>
    <!-- ///لاضافة عنوان المنتج والوصف -->
<Head>
  <Title>product details | {{ products.title }}</Title>
  <Meta name="description" :content="products.description"/>
</Head>
    <ProductDetails :products="products"/>
    
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import ProductDetails from "../../components/ProductDetails"
export default {
  components: {ProductDetails},
  async setup() {
    const route = useRoute(); // احصل على معلومات المسار الحالي
    const id = route.params.id; // احصل على معرف المنتج من المسار
    const url = 'https://fakestoreapi.com/products/' + id;
    
    const { data: products, error } = await useFetch(url, {key:id});

    // تحقق من وجود خطأ
    if (error.value) {
      console.error(error.value);
    }
    if(!products.value){
      throw createError({statusCode:404, statusMessage: 'products not found', fatal: true});
    }

    return { products };
  },

};
</script>

<style scoped></style>
