<script setup>
import Image from 'primevue/image';
import {ref} from "vue";

const images = ref([
  '/img/gallery/1.jpg',
  '/img/gallery/2.jpg',
  '/img/gallery/3.jpg',
  '/img/gallery/4.jpg',
  '/img/gallery/5.jpg',
  '/img/gallery/6.jpg',
  '/img/gallery/7.jpg',
  '/img/gallery/8.jpg',
  '/img/gallery/9.jpg',
  '/img/gallery/10.jpg',
  '/img/gallery/11.jpg',
  '/img/gallery/12.jpg',
  '/img/gallery/13.jpg',
  '/img/gallery/14.jpg',
  '/img/gallery/15.jpg',
  '/img/gallery/16.jpg',
]);


</script>

<template>
<div class="mt-5">

  <div class="container-fluid">
    <div class="row">

     <template v-for="image in images" :key="image">
       <div class="col-6 col-md-4 col-lg-3 my-2">
         <Image :src="image" alt="image" :preview="true" imageClass="img-fluid w-100">
           <template #indicator>
             <span class="pi pi-eye"></span>
           </template>
         </Image>
       </div>

     </template>

    </div>
  </div>

</div>
</template>

<style scoped>

</style>