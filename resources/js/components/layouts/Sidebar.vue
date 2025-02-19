<template>
    <div>
      <!-- Burger Menu Button (Only Visible on Mobile) -->
      <button 
        @click="toggleSidebar" 
        class="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
      >
        ☰
      </button>
  
      <!-- Sidebar (Hidden by Default on Large Screens) -->
      <aside 
        :class="['bg-gray-800 text-white w-64 min-h-screen p-4 fixed top-0 left-0 transition-transform transform', 
                 isOpen ? 'translate-x-0' : '-translate-x-full', 
                 'md:hidden']"
      >
        <button 
          @click="toggleSidebar" 
          class="absolute top-4 right-4 bg-red-600 p-2 rounded"
        >
          ✖
        </button>
  
        <ul class="mt-8">
          <li class="mb-2"><a href="#" class="block p-2 hover:bg-gray-700">Home</a></li>
          <li class="mb-2"><a href="#" class="block p-2 hover:bg-gray-700">About</a></li>
          <li class="mb-2"><a href="#" class="block p-2 hover:bg-gray-700">Contact</a></li>
        </ul>
      </aside>
    </div>
  </template>
  
  <script>
  export default {
    name: "SidebarComponent",
    data() {
      return {
        isOpen: false, // Sidebar starts closed on mobile
      };
    },
    methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen; // Toggle sidebar visibility
      },
    },
  };
  </script>
  
  <style scoped>
  aside {
    height: 100vh;
  }
  </style>
  