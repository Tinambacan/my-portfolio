<template>
  <div class="w-20 h-1/2 bg-gray-900 bg-opacity-50 text-white fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center p-2">
    <ul class="space-y-4 h-full flex flex-col justify-center">
      <li v-for="item in menuItems" :key="item.route" class="relative group">
        <router-link 
          :to="item.route" 
          active-class="bg-gray-700 font-bold" 
          class="p-3 hover:bg-gray-700 rounded flex justify-center">
          <font-awesome-icon :icon="item.icon" class="text-4xl transition-transform duration-300 transform hover:scale-125" />
        </router-link>
        <!-- Tooltip -->
        <div class="absolute left-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 text-white text-sm px-2 py-1 rounded shadow-lg">
          {{ item.tooltip }}
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isNavOpen: false,
      menuItems: [
        { route: "/", icon: ["fas", "home"], tooltip: "Home" },
        { route: "/tech-stack", icon: ["fas", "layer-group"], tooltip: "Tech Stack" },
        { route: "/contact", icon: ["fas", "envelope"], tooltip: "Contact" }
      ]
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>
  
  