<template>
  <div class="relative flex flex-col min-h-screen bg-cover bg-center pt-10 pb-5" :style="{ backgroundImage: `url(${bg})` }">
    
    <!-- Sidebar (Visible on Medium Screens and Larger) -->
    <SidebarComponent class="hidden md:block" />
    
    <!-- Header (Visible Only on Small Screens) -->
    <HeaderComponent class="block md:hidden" />
    
    <main class="flex-grow flex items-center justify-center"> <!-- Center Content -->
      <router-view />
    </main>

    <FooterComponent />
  </div>
</template>



<script>
import HeaderComponent from './components/layouts/Header.vue';
import SidebarComponent from './components/layouts/Sidebar.vue';
import FooterComponent from './components/layouts/Footer.vue';
import MainContent from './components/layouts/Main.vue';

export default {
  name: "App",
  components: {
      HeaderComponent,
      SidebarComponent,
      MainContent,
      FooterComponent
  },
  data() {
      return {
        bg: '/images/bg1.svg',
      };
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

.space-grotesk {
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800; 
  font-style: normal;
}

.space-grotesk-p {
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400; 
  font-style: normal;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}
main {
  min-height: calc(100vh - 4rem); /* Adjust to ensure content fits well */
}
</style>
