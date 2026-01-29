<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="max-w-7xl mx-auto flex flex-col relative">

    <nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <button @click="redirectToHome" class="flex">
          <span class="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">Reda Shalabi</span>
        </button>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <router-link to="/"
                class="fadein-bot text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                aria-current="page">Home</router-link>
            </li>
            <li>
              <router-link to="/about"
                class="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">About</router-link>
            </li>
            <li>
              <router-link to="/education"
                class="fadein-bot fadein-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Education</router-link>
            </li>
            <li>
              <router-link to="/portfolio"
                class="fadein-bot fadein-2 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Portfolio</router-link>
            </li>
            <li>
              <router-link to="/services"
                class="fadein-bot fadein-5 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Services</router-link>
            </li>
            <li>
              <router-link to="/contact"
                class="fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Contact</router-link>
            </li>
          </ul>
        </div>

        <!-- Mobile: GitHub -->
        <div class="flex items-center gap-3 md:order-2 fadein-bot">
          <a href="https://github.com/Reda-Shalabi" class="hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg> 
                   </a>
          <!-- Mobile Toggle Button -->
          <!-- <button @click="toggleMenu" class="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-200 rounded-lg p-2">
            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button> -->
        </div>

        <!-- Mobile Navigation: 3 Important Pages -->
        <!-- <div class="md:hidden w-full order-3">
          <ul class="flex justify-around items-center py-3 text-sm font-medium border-t border-[#383838]">
            <li>
              <router-link to="/" @click="closeMenu"
                class="text-gray-300 hover:text-white transition-colors">Home</router-link>
            </li>
            <li>
              <router-link to="/about" @click="closeMenu"
                class="text-gray-300 hover:text-white transition-colors">About</router-link>
            </li>
            <li>
              <router-link to="/portfolio" @click="closeMenu"
                class="text-gray-300 hover:text-white transition-colors">Portfolio</router-link>
            </li>
          </ul>
        </div> -->

        <!-- Mobile Dropdown Menu -->
        <!-- <div v-if="isMenuOpen" 
          class="md:hidden w-full order-4 bg-[#1e1e1f] border-t border-[#383838] animate-slideDown">
          <ul class="flex flex-col py-4 space-y-2">
            <li>
              <router-link to="/services" @click="closeMenu"
                class="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#282828] transition-colors">Services</router-link>
            </li>
            <li>
              <router-link to="/education" @click="closeMenu"
                class="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#282828] transition-colors">Education</router-link>
            </li>
            <li>
              <router-link to="/contact" @click="closeMenu"
                class="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#282828] transition-colors">Contact</router-link>
            </li>
            <li class="pt-2 border-t border-[#383838]">
              <a href="https://github.com/Reda-Shalabi" target="_blank" @click="closeMenu"
                class="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-[#282828] transition-colors">
                <img class="w-5 h-5 rounded-full" src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="github">
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div> -->
      </div>
    </nav>

    <div class="md:mt-[100px]">
      <router-view />
    </div>
  </div>
  <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90 z-50">
    <nav class="flex justify-around items-center py-3 text-xs">
      <router-link to="/" class="text-gray-300 hover:text-white transition-colors flex flex-col items-center gap-1">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
        <span>Home</span>
      </router-link>
      <router-link to="/about" class="text-gray-300 hover:text-white transition-colors flex flex-col items-center gap-1">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        <span>About</span>
      </router-link>
      <router-link to="/portfolio" class="text-gray-300 hover:text-white transition-colors flex flex-col items-center gap-1">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
        <span>Portfolio</span>
      </router-link>
      <button @click="toggleMenu" class="text-gray-300 hover:text-white transition-colors flex flex-col items-center gap-1">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
        <span>More</span>
      </button>
    </nav>
    <!-- Mobile Dropdown Menu in Footer -->
    <div v-if="isMenuOpen" 
      class="bg-[#1e1e1f] border-t border-[#383838] animate-slideDown">
      <ul class="flex flex-col py-3 space-y-1">
        <li>
          <router-link to="/services" @click="closeMenu"
            class="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#282828] transition-colors text-sm">Services</router-link>
        </li>
        <li>
          <router-link to="/education" @click="closeMenu"
            class="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#282828] transition-colors text-sm">Education</router-link>
        </li>
        <li>
          <router-link to="/contact" @click="closeMenu"
            class="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#282828] transition-colors text-sm">Contact</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    redirectToHome() {
      this.$router.push('/')
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #ffdb70;
  border-radius: 5px;
}

::-webkit-scrollbar-button { width: 20px; }

body {
  font-family: 'Poppins', sans-serif;
  background: hsl(0, 0%, 7%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  color: white;
  transition: color 0.3s;
}

nav a.router-link-exact-active::after {
  display: inline-block;
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #ffdb70;
}

nav a.router-link-exact-active:hover {
  color: white;
}


@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out;
}

</style>
