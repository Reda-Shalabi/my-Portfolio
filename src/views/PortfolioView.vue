<script>
export default {
  data() {
    return {
      selectedCategory: 'all',
      categories: [
        { id: 'all', label: 'All Projects' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
      ],
      items: [
        {
          id: 5,
          name: 'Estashirna (استشرنا) - Legal Consultation Platform',
          category: 'frontend',
          role: 'Frontend Team Lead',
          imageUrl: '/img/portfolio-estashirna.png',
          status: 'Graduation Project: Advanced legal consultation web application connecting specialized lawyers with citizens, featuring 12 core React components, full RTL Arabic design, and secure authentication.',
          tech: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Axios', 'Lucide React', 'JWT'],
          github: 'null',
          demo: 'null'
        },
        {
          id: 1,
          name: 'Whales Academy - LMS Platform',
          category: 'fullstack',
          imageUrl: '/img/image.png',
          status: 'A comprehensive Learning Management System (LMS) designed for secure course delivery and student management.',
          tech: ['MERN Stack', 'Node.js', 'Express', 'React', 'MongoDB', 'Nginx', 'JWT'],
          github: 'null',
          demo: 'https://whales-academy.com/'
        },
        {
          id: 2,
          name: 'Personal Portfolio Website',
          category: 'frontend',
          imageUrl: 'photo',
          status: 'My personal portfolio website to display my profile, skills, experience, and projects with interactive modern UI.',
          tech: ['Vue.js 3', 'Tailwind CSS', 'Vite'],
          github: 'https://github.com/Reda-Shalabi/my-portfolio',
          demo: 'https://my-portfolio-vue-zeta.vercel.app/'
        },
        {
          id: 3,
          name: 'E-Commerce Website',
          category: 'fullstack',
          imageUrl: 'E-CommerceWebsite',
          status: 'A responsive full-featured e-commerce platform for browsing catalogs, cart management, and online checkout.',
          tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
          github: 'null',
          demo: 'null'
        },
        {
          id: 4,
          name: 'Restaurant Web App',
          category: 'fullstack',
          imageUrl: 'resturant',
          status: 'A modern restaurant website with an elegant design, menu showcase, online table booking, and customer reviews.',
          tech: ['ReactJS', 'NodeJS', 'ExpressJs', 'MongoDB', 'Bootstrap'],
          github: 'null',
          demo: 'null'
        },
      ]
    };
  },
  computed: {
    filteredItems() {
      if (this.selectedCategory === 'all') {
        return this.items;
      }
      return this.items.filter(item => item.category === this.selectedCategory);
    }
  }
}
</script>
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="portfolio">
      <header>
        <div
          class="text-2xl font-bold text-white mb-6 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Past Project Experience</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            Explore the projects I've worked on so far</h4>
        </div>
      </header>

      <!-- Category Filter Tabs -->
      <div class="flex justify-center flex-wrap gap-2 mb-8 fadein-bot">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          class="px-4 py-2 text-xs md:text-sm font-medium rounded-xl transition duration-300 border"
          :class="selectedCategory === cat.id 
            ? 'bg-amber-200 text-black border-amber-200 shadow-md font-semibold' 
            : 'bg-[#1e1e1f] text-gray-300 border-[#383838] hover:text-amber-200 hover:border-amber-200/50'"
        >
          {{ cat.label }}
        </button>
      </div>

      <section>
        <div>
          <div class="grid grid-cols-1 gap-6 pb-32 md:grid-cols-2 lg:grid-cols-3 fade-zoom-in">
            <div v-for="item in filteredItems" :key="item.id">
              <div
                class="item-card h-full flex flex-col justify-between rounded-2xl bg-[#1e1e1f] hover:bg-[#252526] border border-[#383838] hover:border-amber-200/40 text-amber-50 p-5 cursor-pointer relative transition-all duration-300 shadow-lg">
                <router-link :to="`/project/${item.id}`" class="absolute inset-0 z-10"></router-link>
                
                <div>
                  <div class="overflow-hidden rounded-xl mb-4 h-48 w-full bg-[#121212] flex items-center justify-center">
                    <img alt="Project preview" loading="lazy" decoding="async" class="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                      :src="item.imageUrl.startsWith('/') ? item.imageUrl : '/img/portfolio-' + item.imageUrl + '.png'">
                  </div>
                  
                  <div class="w-full flex flex-col gap-2 text-left">
                    <div v-if="item.role" class="w-fit px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-amber-200/15 text-amber-200 border border-amber-200/40">
                      ⚡ Role: {{ item.role }}
                    </div>
                    <div class="title-text font-bold text-lg text-white hover:text-amber-200 transition-colors">
                      {{ item.name }}
                    </div>
                    <p class="text-xs md:text-sm text-gray-400 line-clamp-3 leading-relaxed">
                      {{ item.status }}
                    </p>
                  </div>
                </div>

                <div class="mt-4 pt-3 border-t border-[#2e2e2e]">
                  <!-- Tech Pills -->
                  <div class="flex flex-wrap gap-1.5 mb-4">
                    <span 
                      v-for="(techName, idx) in (Array.isArray(item.tech) ? item.tech : item.tech.split(','))" 
                      :key="idx"
                      class="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#121212] text-amber-200 border border-amber-200/20"
                    >
                      {{ typeof techName === 'string' ? techName.trim() : techName }}
                    </span>
                  </div>

                  <div class="w-full flex justify-between items-center relative z-20">
                    <router-link :to="`/project/${item.id}`" class="text-xs text-amber-200 hover:underline flex items-center gap-1 font-medium" @click.stop>
                      View Details &rarr;
                    </router-link>

                    <div class="flex cursor-pointer items-center gap-3 text-gray-400" @click.stop>
                      <a v-if="item.github && item.github !== 'null'"
                        :href="item.github" target="_blank" rel="noreferrer"
                        title="View GitHub Repository" class="p-1 hover:text-amber-200 transition-colors" @click.stop>
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                          </path>
                        </svg>
                      </a>
                      <a v-if="item.demo && item.demo !== 'null'" :href="item.demo" target="_blank" rel="noreferrer"
                        title="Live Demo" class="p-1 hover:text-amber-200 transition-colors" @click.stop>
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div></template>

<style>
.item-card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-8px);
}
svg:hover{
  stroke: #ffdb70;
}
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Menggunakan animasi pada elemen yang diinginkan */
.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}
</style>