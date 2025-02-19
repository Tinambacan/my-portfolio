<template>
    <header class="bg-blue-900 text-white p-4 fixed top-0 w-full z-50">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold">My Portfolio</h1>
  
        <!-- Burger Menu Button (Hidden on Large Screens) -->
        <button 
          @click="toggleNav" 
          class="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
  
        <!-- Desktop Navigation (Hidden on Mobile) -->
        <nav class="hidden md:flex">
        <ul class="flex space-x-4">
            <li>
            <router-link to="/" active-class="font-bold bg-gray-700 font-bold" exact-active-class="font-bold bg-gray-700 font-bold" class="p-2 hover:bg-gray-700 rounded">
                Home
            </router-link>
            </li>
            <li>
            <router-link to="/about" active-class="font-bold font-bold bg-gray-700" class="p-2 hover:bg-gray-700 rounded">
                About
            </router-link>
            </li>
            <li>
            <router-link to="/contact" active-class="font-bold font-bold bg-gray-700" class="p-2 hover:bg-gray-700 rounded">
                Contact
            </router-link>
            </li>
        </ul>
        </nav>

      </div>
  
      <!-- Mobile Navigation (Visible when Burger is Clicked) -->
      <transition name="slide-fade">
        <nav 
            v-if="isNavOpen" 
            class="md:hidden absolute top-14 left-0 w-full bg-blue-800 text-white p-4 bg-opacity-90 shadow-md"
        >
            <ul class="space-y-2">
            <li><router-link to="/" class="p-2 hover:bg-gray-700 rounded" @click.native="closeNav">Home</router-link></li>
            <li><router-link to="/about" class="p-2 hover:bg-gray-700 rounded" @click.native="closeNav">About</router-link></li>
            <li><router-link to="/contact" class="p-2 hover:bg-gray-700 rounded" @click.native="closeNav">Contact</router-link></li>
            </ul>
        </nav>
        </transition>

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
  /* Transition for smooth fade and slide effect */
    .slide-fade-enter-active, .slide-fade-leave-active {
    transition: opacity 0.4s ease, transform 0.4s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
    }
  </style>
  