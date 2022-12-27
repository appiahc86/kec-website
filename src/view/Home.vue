<script setup>
import { ref } from "vue";
import Carousel from "primevue/carousel";

//carousel images
const ads = ref([
  {img: "/img/1c.jpg"},
  {img: "/img/2c.jpg"},
  {img: "/img/3c.jpg"},
])
</script>

<template>
  <br>
  <div style="margin-top: 48px !important;" class="mt-5">
    <Carousel :value="ads" :numVisible="1" :numScroll="1" :circular="true" :showNavigators="false"
              :autoplayInterval="4000">
      <template #item="slotProps">
        <div class="product-item">
          <div class="product-item-content">
            <div class="mb-3">
              <img :src="slotProps.data.img" :alt="slotProps.data.img" class="img-fluid w-100"/>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>

<!--    <h3 class="blink mt-5" style="color: darkgreen; font-weight: bold; font-size: 1.5em;">-->
<!--      Website under construction</h3>-->
</template>

<style scoped>

</style>