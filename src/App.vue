<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const canvasBtnClose = ref(null);
const closeSidebar = () => {
  canvasBtnClose.value.click();
}

const goToHome = () => router.push({name: 'home'});

</script>

<template>
  <nav class="navbar navbar-expand-md bg-light fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{name: 'home'}">
        <img src="/img/logo.png" alt="logo" width="30" height="30">&nbsp;
        <span class="text-warning fw-bold logo-name">Kontoh <span class="text-primary">Educational Complex</span></span>
      </router-link>
      <div class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <span class="pi pi-bars"></span>
      </div>
      <div class="collapse navbar-collapse justify-content-end">
        <div class="navbar-nav">
          <router-link class="nav-link mx-2 links" :to="{name: 'home'}">Home</router-link>
          <router-link :to="{name: 'about'}" class="nav-link mx-2 links">About Us</router-link>
          <router-link :to="{name: 'gallery'}" class="nav-link mx-2 links">Gallery</router-link>
          <router-link :to="{name: 'contact'}" class="nav-link mx-2 links">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>



  <div class="offcanvas offcanvas-lg offcanvas-end"  style="width: 60% !important; background: #ccc;" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
      <button type="button" class="btn-close" ref="canvasBtnClose" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body text-center">
      <h6><router-link class="text-decoration-none" :to="{name: 'home'}" @click="closeSidebar">Home</router-link></h6><br>
      <h6><router-link class="text-decoration-none" :to="{name: 'about'}" @click="closeSidebar">About Us</router-link></h6><br>
      <h6><router-link class="text-decoration-none" :to="{name: 'gallery'}" @click="closeSidebar">Gallery</router-link></h6><br>
      <h6><router-link class="text-decoration-none" :to="{name: 'contact'}" @click="closeSidebar">Contact</router-link></h6><br>
    </div>
  </div>

  <router-view></router-view>


  <div class="footer bg-dark text-white py-5">

    <div class="container">
      <div class="row">
        <div class="col-sm-7 mt-3">
          <div class="">&copy; All Right Reserved 2022, <span class="text-warning">Kontoh </span>Educational Complex</div>
        </div>
        <div class="col-sm-5 mt-3">
          <div class="d-flex text-center">
            <div class="mx-auto">
              <a><span class="pi pi-facebook" style="font-size: 1.6em"></span></a>
              <a ><span class="pi pi-youtube mx-4" style="font-size: 1.6em"></span></a>
              <a ><span class="pi pi-twitter" style="font-size: 1.6em"></span></a>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.router-link-exact-active {
  color: #983198;
  font-weight: bold;
}

@media screen and (max-width: 500px){
  .logo-name{
    font-size: 0.85em;
  }
}

@media screen and (max-width: 350px){
  .logo-name{
    font-size: 0.5em;
  }
}

/*@media screen and (max-width: 300px){*/
/*  .logo-name{*/
/*    font-size: 0.5em;*/
/*  }*/
/*}*/
</style>
