<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Web Development',
          icon: 'code',
          description: 'Custom web applications built with modern technologies. From simple websites to complex web applications, I create responsive and scalable solutions.',
          features: ['Frontend Development', 'Backend Development', 'Full Stack Solutions', 'API Integration'],
          color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
          id: 2,
          title: 'UI/UX Design',
          icon: 'design',
          description: 'Beautiful and intuitive user interfaces that provide excellent user experience. I focus on creating designs that are both aesthetically pleasing and functional.',
          features: ['User Interface Design', 'User Experience', 'Responsive Design', 'Prototyping'],
          color: 'from-purple-500/20 to-pink-500/20'
        },
        {
          id: 3,
          title: 'E-Commerce Solutions',
          icon: 'shopping',
          description: 'Complete e-commerce platforms with shopping cart, payment integration, and admin dashboard. Build your online store with modern features.',
          features: ['Shopping Cart', 'Payment Integration', 'Product Management', 'Order Management'],
          color: 'from-green-500/20 to-emerald-500/20'
        },
        {
          id: 4,
          title: 'API Development',
          icon: 'api',
          description: 'RESTful APIs and backend services for your applications. Secure, scalable, and well-documented APIs that power your frontend.',
          features: ['RESTful APIs', 'Database Design', 'Authentication', 'Documentation'],
          color: 'from-orange-500/20 to-red-500/20'
        },
        {
          id: 5,
          title: 'Website Maintenance',
          icon: 'maintenance',
          description: 'Ongoing support and maintenance for your websites. Keep your site updated, secure, and running smoothly with regular maintenance.',
          features: ['Bug Fixes', 'Updates', 'Security', 'Performance Optimization'],
          color: 'from-amber-500/20 to-yellow-500/20'
        },
        {
          id: 6,
          title: 'Consulting',
          icon: 'consulting',
          description: 'Technical consulting to help you make the right decisions for your projects. Get expert advice on architecture, technologies, and best practices.',
          features: ['Technical Advice', 'Architecture Planning', 'Code Review', 'Best Practices'],
          color: 'from-indigo-500/20 to-blue-500/20'
        }
      ]
    };
  }
}
</script>
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="services">
      <header>
        <div class="text-2xl md:text-3xl font-bold text-white mb-5 fadein-bot title-section flex items-center justify-center flex-col">
          <h4 class="text-3xl md:text-4xl mb-2">Offered Services</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            What I can do for you</h4>
          <div class="h-[1px] w-32 bg-amber-200 md:w-96 mt-4 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
        </div>
      </header>
      <section>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-32 fade-zoom-in">
          <div v-for="(service, index) in services" :key="service.id"
            class="service-card bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 md:p-8 hover:bg-[#282828] transition-all duration-300 fadein-left"
            :style="{ animationDelay: `${index * 100}ms` }">
            
            <!-- Icon -->
            <div class="mb-6">
              <div :class="`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} border border-amber-200/30 flex items-center justify-center`">
                <svg v-if="service.icon === 'code'" class="w-8 h-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                <svg v-else-if="service.icon === 'design'" class="w-8 h-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
                <svg v-else-if="service.icon === 'shopping'" class="w-8 h-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <svg v-else-if="service.icon === 'api'" class="w-8 h-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <svg v-else-if="service.icon === 'maintenance'" class="w-8 h-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <svg v-else-if="service.icon === 'consulting'" class="w-8 h-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-xl md:text-2xl font-bold text-white mb-3">{{ service.title }}</h3>

            <!-- Description -->
            <p class="text-amber-50/80 text-sm md:text-base mb-6 leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Features -->
            <div class="space-y-2">
              <div v-for="feature in service.features" :key="feature"
                class="flex items-center gap-2 text-sm text-amber-200/70">
                <div class="w-1.5 h-1.5 bg-amber-200 rounded-full"></div>
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(251, 191, 36, 0.1);
  border-color: rgba(251, 191, 36, 0.3);
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
</style>

