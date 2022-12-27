<script setup>

</script>

<template>
  <br>
<!--  Map -->
    <div class="mt-4">
      <iframe class="w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15849.207601042497!2d-1.5268119!3d6.7329742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ae587e970de1f09!2sKONTOH%20EDUCATIONAL%20COMPLEX!5e0!3m2!1sen!2sgh!4v1672112108043!5m2!1sen!2sgh" height="300" style="width: auto;"></iframe>
    </div>




  <div class="py-5" style="background: #09093f;">
    <div class="container text-white">
      <div class="row">
        <div class="col-md-4 mt-5">
          <h1 class="fw-bold mb-4"><span class="pi pi-phone" style="font-size: 1em;"></span></h1>
          <h1 class="fw-bold mb-4" style="font-size: 1.5em;">Call Us On</h1>
          <p class="mb-4">Kindly contact us on the following phone numbers:</p>
          <a href="tel:+2332436373432" class="text-decoration-none text-info">233 243 637 3432</a> /
          <a href="tel:+2335436373432" class="text-decoration-none text-info">233 543 637 3432</a>
        </div>
        <div class="col-md-4 px-md-4 mt-5">
          <h1 class="fw-bold mb-4"><span class="pi pi-envelope" style="font-size: 1em;"></span></h1>
          <h1 class="fw-bold mb-4" style="font-size: 1.5em;">Email</h1>
          <p class="mb-4">Kindly send us an email using the email address below</p>
          <a  class="text-decoration-none text-info">kecomplex@gmail.com</a>
        </div>
        <div class="col-md-4 mt-5">
          <h1 class="fw-bold mb-4"><span class="pi pi-map-marker" style="font-size: 1em;"></span></h1>
          <h1 class="fw-bold mb-4"  style="font-size: 1.5em;">Location</h1>
          <p class="mb-4">Ejisu-Fumesua, GPS Address: AK-218-3548</p>
        </div>
      </div>
    </div>
  </div>


<!--  form  for email -->
<div style="background: #ccc;">
  <div class="container pt-5">
    <div class="row justify-content-center">
      <div class="col-sm-6 text-center">
        <h1 class="fw-bold">LEAVE US YOUR MESSAGE</h1>
        <p style="font-size: 1em;">AND WE WILL GET IN TOUCH WITH YOU</p>
        <form class="mb-5">
          <div class="form-floating">
            <div class="p-inputgroup">
              <input type="text" placeholder="Your Name*" class="p-input p-inputtext mb-3">

            </div>
            <div class="p-inputgroup">
              <input type="email" placeholder="Email*" class="p-input p-inputtext mb-3">
            </div>
            <div class="p-inputgroup">
              <input type="text" placeholder="Subject*" class="p-input p-inputtext mb-3">
            </div>
            <div class="p-inputgroup">
              <textarea cols="10" rows="5" placeholder="Message*" class="p-inputtext"></textarea>
            </div>
            <div class="p-inputgroup mt-3">
              <button class="p-button p-button-rounded p-button mx-auto">Send Now</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  </div>
</div>


</template>


<style scoped>
.cover {
  /*background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url("/img/about/cover.jpg");*/
  background: url("/img/about/cover.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>