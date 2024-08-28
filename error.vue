<template>
    <div class="error">
<div class="container">
    <div class="row">
        <div class=" text-center">

<p class=" text-danger fw-medium">{{ error.statusCode }}</p>
<h1 class=" mt-3">Ooooops</h1>
<p class=" mt-3">{{ error.messages }}</p>
        </div>
        <div class="btn">
            <NuxtLink to="/">
            <button>Go Home ...</button>
            </NuxtLink>
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
import { errorMessages } from 'vue/compiler-sfc';

   defineProps(['error']);
</script>

<style  scoped>
.error{
    padding: 20px 0;
}
</style>