<script setup>
import {onMounted, ref} from "vue";
import Carousel from "primevue/carousel";

//carousel images
const images = ref([
  {img: "/img/carousel/c1.jpg", name: "c1"},
  {img: "/img/carousel/c2.jpg", name: "c2"},
  {img: "/img/carousel/c3.jpg", name: "c3"},
  {img: "/img/carousel/c4.jpg", name: "c4"},
])

onMounted(() => {
  const container = document.querySelector('.animate-container');
  const show = document.querySelector('#show');

  window.addEventListener('scroll', () => {
    const containerRect = container.getBoundingClientRect();

    if (containerRect.top < window.innerHeight) {
      container.style.transform = "translateY(-70px)";
      container.style.transition = "all 2s";
      setTimeout(() => {
        // container.style.transform = "translateY(-100px)";
        // container.style.transition = "all 2s";

        show.style.display = "inline";
        container.style.display = "none";
      }, 2000)


    }
  });


})
</script>

<template>
  <br>
  <div style="margin-top: 40px !important;" class="mt-5">
    <Carousel :value="images" :numVisible="1" :numScroll="1" :circular="true" :showNavigators="false"
              :autoplayInterval="4000">
      <template #item="slotProps">
        <div class="product-item">
          <div class="product-item-content">
            <div class="mb-3">
              <img :src="slotProps.data.img" :alt="slotProps.data.name" class="img-fluid w-100"/>
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
          <p class="fw-bold" style="font-size: 1.5em;" >
            <span class="" id="show" style="display:none;"><img src="/img/logo.png" alt="logo" width="50" height="50"></span>
            <span class="text-warning down-name">Kontoh <span class="text-white">Educational Complex</span></span>
          </p>

            <div class="animate-container">
              <img src="/img/logo.png" alt="logo" width="50" height="50">
            </div>

        </div>
        <div class="col-sm-6 py-5">
          <p>
            Kontoh Educational Complex offers pre-school, primary and junior
            high school. The school was founded in January 2014 by the Late Nathaniel Kontoh,
            a retired Headmaster of Saint Peters Secondary school.
          </p>
          <p>
            KEC seeks that, all learners find pathways to success through the independence,
            innovation, and diversity of our schools, creating a more equitable world. We train
            children from all walks of life irrespective of their belief or faith. We seek to
            make education convenient for anyone who has passion for school.
          </p>

          <router-link class="text-decoration-none" :to="{name: 'about'}">
            <h5 class="text-white read-more">Read More <span class="pi pi-arrow-right fw-bold"></span></h5>
          </router-link>

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
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("/img/s1.jpg");
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
  background-size: cover;
}

.read-more:hover {
  color: #9a9797 !important;
}

@media screen and (max-width: 700px){
  .down-name{
    font-size: 0.9em;
  }
}

@media screen and (max-width: 350px){
  .down-name{
    font-size: 0.6em;
  }
}
</style>