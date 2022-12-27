<script setup>
import { ref } from "vue";
import Carousel from "primevue/carousel";

//carousel images
const images = ref([
  {img: "/img/carousel/c1.jpg"},
  {img: "/img/carousel/c2.jpg"},
  {img: "/img/carousel/c3.jpg"},
])
</script>

<template>
  <br>
  <div style="margin-top: 48px !important;" class="mt-5">
    <Carousel :value="images" :numVisible="1" :numScroll="1" :circular="true" :showNavigators="false"
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

  <h3 class="text-center my-5">What We Are Offering</h3>

  <div class="container mb-5">
    <div class="row">
      <div class="col-md-4 my-3">
        <div class="s1 py-3 py-md-4 zoom">
          <h5 class="text-center text-white py-5">Quality Lesson</h5>
        </div>
      </div>
      <div class="col-md-4 my-3">
        <div class="s2 py-3 py-md-4 zoom">
          <h5 class="text-center py-5 text-white">Friendly Environment</h5>
        </div>
      </div>
      <div class="col-md-4 my-3 zoom">
        <div class="s3 py-3 py-md-4 zoom">
          <h5 class="text-center text-white py-5">Library & Laboratory</h5>
        </div>

      </div>
    </div>
  </div>


  <div class="background mb-5 text-white">
    <div class="container py-5">
      <div class="row">
        <div class="col-sm-6 py-5">
            <p class="text-center">
              <span style="font-size: 2em;" class="pi pi-thumbs-up-fill"></span>

            </p>
          <p class="fw-bold" style="font-size: 2em;" >
            <span class="text-warning">Kontoh</span> Educational Complex
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur, atque aut
            beatae blanditiis cum deleniti eaque eligendi error ex fuga labore modi,
            perferendis provident quas quibusdam ratione vero! Sed?</p>
        </div>
        <div class="col-sm-6 py-5">
          <h5 class="text-info">Aliquam delectus eveniet</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus eveniet ex impedit ipsam,
            iure minima similique. Asperiores error excepturi neque vitae.
            At et id iusto neque, similique totam voluptate?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus eveniet ex impedit ipsam,
            iure minima similique. Asperiores error excepturi neque vitae.
            At et id iusto neque, similique totam voluptate?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad alias enim esse
            excepturi hic id illo ipsum molestiae nihil pariatur provident quaerat saepe
            sapiente sequi, soluta vel veniam voluptas.</p>
          <h5 class="">Lorem ipsum dolor sit amet.</h5>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.s1, .s2, .s3{
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}
.s1 {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("/img/s1.jpeg");
}
.s2 {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("/img/s2.jpg");
}
.s3 {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("/img/s3.jpg");
}


.background {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("/img/bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

</style>