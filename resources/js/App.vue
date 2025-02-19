<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent />
    <main class="flex-grow pt-10 px-6 "> <!-- Added top padding -->
      <!-- <img id="background" class="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg" alt="Laravel background" /> -->

      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>


<script>
import HeaderComponent from './components/layouts/Header.vue';
//import SidebarComponent from './components/layouts/Sidebar.vue';
import FooterComponent from './components/layouts/Footer.vue';
import MainContent from './components/layouts/Main.vue';

export default {
  name: "App",
  components: {
      HeaderComponent,
      // SidebarComponent,
      MainContent,
      FooterComponent
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
main {
  min-height: calc(100vh - 4rem); /* Adjust to ensure content fits well */
}
</style>
