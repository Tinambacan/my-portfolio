<template>
  <header class="text-white p-4 fixed top-0 w-full z-50 bg-gray-900 bg-opacity-50">
    <div class="flex justify-center items-center">
      <!-- Navigation Icons (Font Awesome) -->
      <nav class="md:hidden">
        <ul class="flex space-x-6">
          <li>
            <router-link to="/" class="p-2 hover:bg-gray-700 rounded flex justify-center">
              <font-awesome-icon :icon="['fas', 'home']" class="text-2xl" />
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="p-2 hover:bg-gray-700 rounded flex justify-center">
              <font-awesome-icon :icon="['fas', 'info-circle']" class="text-2xl" />
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="p-2 hover:bg-gray-700 rounded flex justify-center">
              <font-awesome-icon :icon="['fas', 'envelope']" class="text-2xl" />
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

  
  <script>
  export default {
    name: "HeaderComponent",
    data() {
      return {
        isNavOpen: false, // Nav starts closed on mobile
      };
    },
    methods: {
      toggleNav() {
        this.isNavOpen = !this.isNavOpen; // Toggle mobile nav visibility
      },
      closeNav() {
        this.isNavOpen = false;
        }
    },
  };
  </script>
  
  <style scoped>
  header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
  </style>
  