<script setup>
import { RouterLink, RouterView } from "vue-router";
import Title from "./components/Title.vue";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";

</script>

<template>
  <header>
    <Title/>
    <NavBar/>
  </header>

  <!-- <RouterView /> -->

  <footer>
    <Footer/>
  </footer>

</template>
