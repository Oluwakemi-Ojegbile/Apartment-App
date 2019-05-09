<template>
  <div class="home">
    <page-header/>
    <app-card/>
    <sign-up/>
     <app-card2/>
     <testi-monial/>
     <post-property/>
     <page-footer/>
  </div>
  </template>

<script>
import PageHeader from '@/components/Header.vue';
import appCard from '@/components/AppCard.vue';
import signUp from '@/components/Signup.vue';
import appCard2 from '@/components/AppCard2.vue';
import testiMonial from '@/components/Testimonial.vue';
import postProperty from '@/components/PostProperty.vue';
import pageFooter from '@/components/Footer.vue';
export default {
  name: 'home',
  components: {
   PageHeader, appCard, signUp, appCard2, testiMonial, postProperty,pageFooter
  }
}
</script>
<style scoped>

</style>
