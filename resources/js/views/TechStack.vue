<template>
  <div class="max-w-4xl mx-auto text-center mt-10 mb-10 p-6 rounded-lg bg-opacity-20 backdrop-blur-lg shadow-lg">
    <!-- Animated Heading -->
    <h2 
      class="text-3xl md:text-4xl bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent font-extrabold space-grotesk animate-fade-in">
      🚀 Tech Stack
    </h2>

    <!-- Skill Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mt-6">
      <div 
        v-for="(skill, index) in skills" 
        :key="index" 
        class="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
        <div class="relative w-24 h-24">
          <img 
            :src="skill.image" 
            :alt="skill.name" 
            class="w-full h-full object-contain rounded-lg shadow-md transition-shadow hover:shadow-red-500/50" />
          <div class="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 hover:opacity-30 transition-opacity rounded-lg"></div>
        </div>

        <!-- Skill Name -->
        <p class="text-white mt-3 text-sm font-semibold space-grotesk-p">
          {{ skill.name }}
        </p>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: "TechStackPage",
    data() {
      return {
        skills: [
          { name: "Laravel", image: "/images/laravel.png" },
          { name: "PHP", image: "/images/php1.svg" },
          { name: "Java", image: "/images/java.png" },
          { name: "Python", image: "/images/python.png" },
          { name: "C++", image: "/images/cpp.png" },
          { name: "HTML", image: "/images/html.png" },
          { name: "Tailwind CSS", image: "/images/tailwind.png" },
          { name: "JavaScript", image: "/images/JS.png" },
          { name: "Vue.JS", image: "/images/vue.png" },
          { name: "Node.js", image: "/images/nodejs.svg" },
          { name: "MySQL", image: "/images/mysql.png" },
          { name: "Git", image: "/images/git.png" },
        ]
      };
    }

  };
  </script>
  <style scoped>
  /* Smooth Fade-in Animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  </style>
  