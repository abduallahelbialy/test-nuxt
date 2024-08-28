<template>
   <div>
     <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light" v-if="showNavbar">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">Logo</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">About</NuxtLink>
          </li>
          <li class="nav-item bg-success ">
            <NuxtLink class="nav-link text-white p-2" to="/products">product</NuxtLink>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
 <div>
  <slot />
 </div>
  <AppFooter v-if="showNavbar"/>
  <div v-if="foota" class=" text-center ">
<ul class="navbar-nav m-auto d-flex">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/products">product</NuxtLink>
          </li>
        </ul>
  </div>
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue';
export default {
 components:{AppFooter},
 data(){
  return{
    show:true,
  }
 },
 computed:{
 showNavbar() {
      const hiddenPaths = ['/products',];
      
      return !hiddenPaths.includes(this.$route.path);
    },
    foota(){
      const show=['/products'];
      return show.includes(this.$route.path)
    }
 }
}
</script>

<style scoped>
/* You can add custom styles here */
.router-link-exact-active{
  color: #0d4194;
  font-weight: 500;
}
</style>
