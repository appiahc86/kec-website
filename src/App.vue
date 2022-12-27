<script setup>
import {onBeforeUnmount, ref} from "vue";
import {onBeforeRouteLeave} from "vue-router";

const canvasBtnClose = ref(null);
const closeSidebar = () => {
  canvasBtnClose.value.click();
}
</script>

<template>
  <nav class="navbar navbar-expand-sm bg-light fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{name: 'home'}">KEcomplex</router-link>
      <div class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <span class="pi pi-bars"></span>
      </div>
      <div class="collapse navbar-collapse justify-content-end">
        <div class="navbar-nav">
          <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
          <router-link :to="{name: 'about'}" class="nav-link">About Us</router-link>
          <router-link :to="{name: 'about'}" class="nav-link">Gallery</router-link>
          <router-link :to="{name: 'contact'}" class="nav-link">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>



  <div class="offcanvas offcanvas-lg offcanvas-end"  style="width: 60% !important; background: #ccc;" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
      <button type="button" class="btn-close" ref="canvasBtnClose" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body text-center">
      <h6><router-link class="text-decoration-none" :to="{name: 'home'}" @click="closeSidebar">Home</router-link></h6><br>
      <h6><router-link class="text-decoration-none" :to="{name: 'about'}" @click="closeSidebar">About Us</router-link></h6><br>
      <h6><router-link class="text-decoration-none" :to="{name: 'home'}" @click="closeSidebar">Gallery</router-link></h6><br>
      <h6><router-link class="text-decoration-none" :to="{name: 'contact'}" @click="closeSidebar">Contact</router-link></h6><br>
    </div>
  </div>

  <router-view></router-view>

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
  color: red;
}

</style>
