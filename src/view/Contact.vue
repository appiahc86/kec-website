<script setup>
import emailjs from '@emailjs/browser';
import {ref} from "vue";
import Button from "primevue/button";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
const sendingMail = ref(false);

const toast = useToast();
const myForm = ref();
const email = ref('');
const sendMail = async () => {
  try {
    if (!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)){
      return toast.add({severity:'error', summary: 'Error!', detail:'Please Enter a valid email address', life: 4000});
    }
    sendingMail.value = true;
    const result = await emailjs.sendForm('service_htz4qfg', 'contact_form', myForm.value, 'QuYtDzfIbQkBjBtnD');
    myForm.value.reset();
    toast.add({severity:'success', summary: 'Thank You!', detail:'Your Message has been sent', life: 4000});
  }catch (e){
    toast.add({severity:'error', summary: 'Error!', detail:'Sorry, error occurred. Please try again later', life: 4000});
  }finally { sendingMail.value = false; }

}
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
          <a href="tel:+233243321512" class="text-decoration-none text-info">233 243 321 512</a> /
          <a href="tel:+233598559814" class="text-decoration-none text-info">233 598 559 814</a>
        </div>
        <div class="col-md-4 px-md-4 mt-5">
          <h1 class="fw-bold mb-4"><span class="pi pi-envelope" style="font-size: 1em;"></span></h1>
          <h1 class="fw-bold mb-4" style="font-size: 1.5em;">Email</h1>
          <p class="mb-4">Kindly send us an email using the email address below</p>
          <a  class="text-decoration-none text-info">kontohschool@gmail.com</a>
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
        <form class="mb-5" ref="myForm" @submit.prevent="sendMail">
          <div class="form-floating">
            <div class="p-inputgroup">
              <input type="text" placeholder="Your Name*" required class="p-input p-inputtext mb-3" name="name">

            </div>
            <div class="p-inputgroup">
              <input type="email" v-model="email" required placeholder="Email*" class="p-input p-inputtext mb-3" name="email">
            </div>
            <div class="p-inputgroup">
              <input type="text" required placeholder="Subject*" class="p-input p-inputtext mb-3" name="subject">
            </div>
            <div class="p-inputgroup">
              <textarea cols="10" rows="5" required placeholder="Message*" class="p-inputtext" name="message"></textarea>
            </div>
            <div class="p-inputgroup mt-3">

              <Button label="Send Now" type="submit" class="p-button-rounded p-button-sm mx-auto mt-3"
                      :loading="sendingMail" loadingIcon="spinner-border"
                    />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  <Toast position="center" style="padding: 0;"/>
</template>


<style scoped>

</style>