<script>
export default {
  data() {
    return {
      project: null,
      projects: [
        {
          id: 5,
          name: 'Estashirna (استشرنا) - Legal Consultation Platform',
          role: 'Frontend Team Lead',
          imageUrl: '/img/portfolio-estashirna.png',
          status: 'Graduation Project - Advanced Legal Consultation Platform connecting specialized lawyers with citizens under Egyptian law.',
          tech: 'React 18.2.0, Tailwind CSS 3.3.6, Framer Motion 10.16.16, Axios 1.13.5, Lucide React 0.563.0, js-cookie, crypto-js, RESTful API, JWT',
          github: 'null',
          demo: 'null',
          description: 'Graduation Project: An advanced legal consultation web platform designed to seamlessly connect specialized lawyers with citizens seeking instant legal advice supported by Egyptian law. As Frontend Team Lead, I directed the frontend architecture and led the team to build 12 scalable React components, ensured responsive and elegant Arabic RTL design, implemented robust JWT authentication with access/refresh token rotation and secure cookie handling, and developed real-time consultation chat functionality.',
          features: [
            'Frontend Team Leadership & Component Architecture',
            'Full Arabic (RTL) Layout & Responsive UI',
            '12 Modular React Components (Hero, Services, RoleSelection, Auth, Chat, etc.)',
            'Dual-Role Authentication (Lawyer & Citizen Portals)',
            'Secure JWT Token Management (Access/Refresh Tokens & crypto-js)',
            'Real-Time Live Consultation Chat System',
            'Smooth Framer Motion Transitions & Animations',
            'RESTful API Integration with Axios & Python/Django Backend'
          ],
          videoUrl: null
        },
        {
          id: 1,
          name: 'Whales Academy - LMS Platform',
          imageUrl: '/img/image.png',
          status: 'A comprehensive Learning Management System (LMS) designed for secure course delivery and student management.',
          tech: 'MERN Stack (MongoDB, Express, React.js, Node.js), Nginx, SSL',
          github: 'null',
          demo: 'https://whales-academy.com/',
          description: 'Whales Academy is a high-performance educational platform featuring secure video streaming, automated enrollment, and device fingerprinting to prevent account sharing.',
          features: ['Device Fingerprinting & Anti-Fraud System','Secure Video Streaming Integration (Bunny.net)','Automated Payment & E-money System',
                     'Real-time Notifications & Course Progress Tracking','Responsive Design', 'Dark Theme', 'Smooth Animations', 'Modern UI/UX'],
          videoUrl: 'null'
        },
        {
          id: 2,
          name: 'Personal Website',
          imageUrl: 'photo',
          status: 'My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.',
          tech: 'VueJS 3, Tailwind',
          github: 'https://github.com/Reda-Shalabi/my-portfolio',
          demo: 'https://my-portfolio-vue-zeta.vercel.app/',
          description: 'A modern and responsive portfolio website showcasing my skills, projects, and experience. Built with Vue.js 3 and Tailwind CSS, featuring smooth animations and a clean design.',
          features: ['Responsive Design', 'Dark Theme', 'Smooth Animations', 'Modern UI/UX'],
          videoUrl: 'https://vimeo.com/1142073576?share=copy&fl=sv&fe=ci'
        },
        {
          id: 3,
          name: 'E-Commerce Website',
          imageUrl: 'E-CommerceWebsite',
          status: 'A website that has a responsive display to make it easier for Customer to make Order from anywhere.',
          tech: 'React, Tailwind, Node.js, Express.js, MongoDB',
          github: 'null',
          demo: 'null',
          description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
          features: ['User Authentication', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard'],
          videoUrl: 'https://vimeo.com/1139618865?share=copy&fl=sv&fe=ci'
        },
        {
          id: 4,
          name: 'Resturant',
          imageUrl: 'resturant',
          status: 'A modern restaurant website with an elegant design, menu showcase, online table booking, and contact section for customer interaction.',
          tech: 'ReactJS, Bootstrap, ExpressJs, NodeJS, MongoDB',
          github: 'null',
          demo: 'null',
          description: 'An elegant restaurant website featuring menu display, online table reservations, and customer interaction features.',
          features: ['Menu Showcase', 'Table Booking', 'Contact Form', 'Responsive Design'],
          videoUrl: null
        },

      ]
    };
  },
  mounted() {
    this.loadProject();
  },
  methods: {
    loadProject() {
      const projectId = parseInt(this.$route.params.id);
      this.project = this.projects.find(p => p.id === projectId);
      if (!this.project) {
        this.$router.push('/portfolio');
      }
    },
    goBack() {
      this.$router.push('/portfolio');
    },
    getEmbedUrl(url) {
      if (!url) return '';
      
      // YouTube URL handling
      if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
      }
      if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0];
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
      }
      if (url.includes('youtube.com/embed/')) {
        return url;
      }
      
      // Vimeo URL handling
      if (url.includes('vimeo.com/')) {
        const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
        return `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`;
      }
      if (url.includes('player.vimeo.com/')) {
        return url;
      }
      
      return url;
    }
  }
}
</script>
<template>
  <div v-if="project" class="min-h-screen bg-[#0a0a0a] text-amber-50">
    <!-- Hero Section with Animation -->
    <div class="relative overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-transparent"></div>
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      </div>
      
      <!-- Content -->
      <div class="relative px-5 py-10 md:px-12 md:py-20">
        <!-- Back Button -->
        <button @click="goBack" 
          class="mb-8 flex items-center gap-2 text-amber-200 hover:text-amber-100 transition-colors fadein-left">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>Back to Portfolio</span>
        </button>

        <!-- Project Title -->
        <div class="fadein-bot">
          <div v-if="project.role" class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs md:text-sm font-semibold bg-amber-200/20 text-amber-200 border border-amber-200/40 mb-3">
            <span>⚡ Role:</span> {{ project.role }}
          </div>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">{{ project.name }}</h1>
          <div class="h-1 w-32 bg-amber-200 mb-8"></div>
        </div>

        <!-- Project Video / Image Container -->
        <div class="relative mb-12 fade-zoom-in">
          <div class="relative rounded-2xl overflow-hidden border border-amber-200/30 shadow-2xl">
            <div class="aspect-video bg-gradient-to-br from-[#1e1e1f] to-[#2a2a2a] flex items-center justify-center">
              <!-- YouTube/Vimeo Embed -->
              <iframe v-if="project.videoUrl && (project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') || project.videoUrl.includes('vimeo.com'))"
                :src="getEmbedUrl(project.videoUrl)"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy">
              </iframe>
              <!-- Direct Video File -->
              <video v-else-if="project.videoUrl"
                :src="project.videoUrl"
                controls
                class="w-full h-full object-cover"
                preload="metadata">
                Your browser does not support the video tag.
              </video>
              <!-- Project Image Banner -->
              <div v-else-if="project.imageUrl" class="w-full h-full flex items-center justify-center bg-[#121212] overflow-hidden">
                <img :src="project.imageUrl.startsWith('/') ? project.imageUrl : '/img/portfolio-' + project.imageUrl + '.png'" 
                     :alt="project.name" 
                     class="w-full h-full object-cover md:object-contain" />
              </div>
              <!-- Placeholder if no video and no image -->
              <div v-else class="w-full h-full flex flex-col items-center justify-center">
                <div class="relative">
                  <div class="absolute inset-0 bg-amber-200/20 rounded-full blur-xl animate-pulse"></div>
                  <div class="relative w-32 h-32 border-4 border-amber-200 rounded-full flex items-center justify-center">
                    <svg class="w-16 h-16 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <p class="mt-4 text-amber-200/70">Project Showcase</p>
              </div>
            </div>
            <!-- Animated border glow -->
            <div class="absolute inset-0 border-2 border-amber-200/50 rounded-2xl animate-pulse pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Details Section -->
    <div class="px-5 md:px-12 pb-20">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="md:col-span-2 space-y-8">
            <!-- Description -->
            <div class="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 md:p-8 fadein-left">
              <h2 class="text-2xl font-bold text-amber-200 mb-4">About This Project</h2>
              <p class="text-amber-50 leading-relaxed">{{ project.description || project.status }}</p>
            </div>

            <!-- Features -->
            <div class="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 md:p-8 fadein-left" style="animation-delay: 200ms;">
              <h2 class="text-2xl font-bold text-amber-200 mb-4">Key Features</h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="(feature, index) in project.features" :key="index"
                  class="flex items-center gap-3 p-3 bg-[#282828] rounded-lg hover:bg-[#333] transition-colors">
                  <div class="w-2 h-2 bg-amber-200 rounded-full"></div>
                  <span class="text-amber-50">{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Role Card (if exists) -->
            <div v-if="project.role" class="bg-[#1e1e1f] border border-amber-200/30 rounded-xl p-6 fadein-left" style="animation-delay: 250ms;">
              <h3 class="text-xl font-bold text-amber-200 mb-2">My Role</h3>
              <p class="text-white font-semibold text-base flex items-center gap-2">
                <span>👑</span> {{ project.role }}
              </p>
            </div>

            <!-- Tech Stack -->
            <div class="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 fadein-left" style="animation-delay: 300ms;">
              <h3 class="text-xl font-bold text-amber-200 mb-4">Tech Stack</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tech, index) in (project.tech.includes(',') ? project.tech.split(',') : [project.tech])" :key="index"
                  class="px-3 py-1 bg-amber-200/10 border border-amber-200/30 rounded-full text-amber-200 text-sm">
                  {{ tech.trim() }}
                </span>
              </div>
            </div>

            <!-- Links -->
            <div class="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 fadein-left" style="animation-delay: 400ms;">
              <h3 class="text-xl font-bold text-amber-200 mb-4">Links</h3>
              <div class="space-y-3">
                <a v-if="project.github !== 'null'" 
                  :href="project.github" 
                  target="_blank"
                  class="flex items-center gap-3 p-3 bg-[#282828] rounded-lg hover:bg-[#333] transition-colors group">
                  <svg class="w-5 h-5 text-amber-200 group-hover:text-amber-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span class="text-amber-50 group-hover:text-amber-100">View on GitHub</span>
                </a>
                <a v-if="project.demo !== 'null'" 
                  :href="project.demo" 
                  target="_blank"
                  class="flex items-center gap-3 p-3 bg-[#282828] rounded-lg hover:bg-[#333] transition-colors group">
                  <svg class="w-5 h-5 text-amber-200 group-hover:text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  <span class="text-amber-50 group-hover:text-amber-100">Live Demo</span>
                </a>
                <div v-if="project.github === 'null' && project.demo === 'null'"
                  class="text-amber-200/50 text-sm italic">
                  Links coming soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-zoom-in {
  animation: fadeZoomIn 0.8s ease-out;
}

.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.6s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBottom 0.6s ease-out forwards;
}

@keyframes fadeInBottom {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

