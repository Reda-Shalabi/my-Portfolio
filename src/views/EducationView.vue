<script>
export default {
  data() {
    return {
      // currently opened image for the modal (null = closed)
      modalImage: null,
      education: [
        {
          id: 7,
          year: '2026',
          institution: 'Huawei ICT Academy (华为ICT学院)',
          program: 'General Knowledge of Cloud Computing',
          duration: 'Certificate Code: ICT20260907000084',
          status: 'Completed with Certificate (Issue Date: 2026-09-07)',
          Skills: 'Cloud Computing Fundamentals - Cloud Architecture - Cloud Services - Virtualization',
          Mode: 'Online',
          icon: 'certificate',
          isActive: true,
          certificatePhoto: '/img/cert-huawei-cloud.png'
        },
        {
          id: 6,
          year: '2026',
          institution: 'PureSoft Company',
          program: 'Backend Developer Intern',
          Skills: 'laravel - php - mysql - api - restful api - postman - git - github - Object-Oriented Programming (OOP) ',
          status: 'in Progress',
          Location_type: 'On-Site',
          Mode: 'Offline',
          icon: 'code',
          isActive: false,
          // update this path or place the file at public/img/cert-nti.png
          certificatePhoto: 'https://i.postimg.cc/SRwB86j1/photo-2026-05-15-21-22-12.jpg'
        },
        
        {
          id: 5,
          year: '2025',
          institution: 'NTI - National Telecommunication Institute',
          program: 'MEAN STACK Web Development',
          partnership: 'Partnered with: Digital Egypt Youth (DEY) - Creativa Innovation Hubs ',
          duration: '4 months - 210 Hours',
          status: 'Completed with Certificate',
          Mode: 'Offline',
          icon: 'code',
          isActive: true,
          // update this path or place the file at public/img/cert-nti.png
          certificatePhoto: 'https://i.postimg.cc/2Sdzhgs4/Reda-Abdelaziem-Wahid-Shalabi.png'
        },
        {
          id: 4,
          year: '2025',
          institution: 'NTI - National Telecommunication Institute',
          program: 'Full Stack Web Development Using PHP',
          partnership: 'Partnered with: ITIDA',
          duration: '1 month - 120 Hours',
          status: 'Completed with Certificate',
          Mode: 'Online',
          icon: 'code',
          isActive: true,
          // update this path or place the file at public/img/cert-nti.png
          certificatePhoto: 'https://i.postimg.cc/d1q1Jgm2/Reda-Abdelazim-Wahid-Shalaby.png'
        },
        {
          id: 3,
          year: '2025',
          institution: 'D.Pear Company',
          program: 'Front-End Web Development Summer Training',
          duration: '6 Weeks',
          status: 'Completed with Certificate',
          Mode: 'Hybrid',
          icon: 'code',
          isActive: true,
          // update this path or place the file at public/img/cert-nti.png
          certificatePhoto: 'https://i.postimg.cc/90qXF2Kr/photo-2025-08-15-16-13-04.jpg'
        },
        {
          id: 2,
          year: '2024',
          institution: 'IBM Skills build Academy',
          program: 'Web Development Track',
          duration: '3 Weeks',
          status: 'Completed with Certificate',
          Mode: 'Online',
          icon: 'certificate',
          isActive: true,
          // update this path or place the file at public/img/cert-ibm.png
          certificatePhoto: 'https://i.postimg.cc/XJHV4qvj/Web-Development-Reda-Abdelaziem-Shalabi.png'
        },
        {
          id: 1,
          year: '2023 - 2027',
          institution: 'Benha University - Faculty of Science',
          program: 'B.Sc. in Computer Science (Expected 2027)',
          Mode: 'Offline',
          duration: '4 Years',
          icon: 'graduation-cap',
          isActive: true
        }
      ]
    };
  },
  methods: {
    openModal(img) {
      this.modalImage = img;
    },
    closeModal() {
      this.modalImage = null;
    }
  }
}
</script>
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="education">
      <header>
        <div class="text-3xl md:text-4xl font-bold text-amber-200 mb-10 fadein-bot title-section flex items-center justify-end">
          Education
        </div>
      </header>
      <section class="relative">
        <!-- Timeline line -->
        <div class="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-amber-200"></div>
        
        <!-- Education entries -->
        <div class="relative space-y-8 md:space-y-12 pb-32">
          <div v-for="(item, index) in education" :key="item.id" 
            class="relative pl-8 md:pl-16 fadein-left"
            :style="{ animationDelay: `${index * 200}ms` }">
            
            <!-- Timeline node -->
            <div class="absolute left-0 md:left-6 top-2 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-amber-200 bg-[#1e1e1f] 
              flex items-center justify-center z-10"
              :class="{ 'bg-amber-200': item.isActive }">
              <!-- Icon inside node -->
              <svg v-if="item.icon === 'graduation-cap'" class="w-3 h-3 md:w-4 md:h-4 text-amber-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
              <svg v-else-if="item.icon === 'code'" class="w-3 h-3 md:w-4 md:h-4 text-amber-200" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.057a1 1 0 010 1.414L9.414 7l2.902 2.529a1 1 0 11-1.305 1.514l-3.5-3.043a1 1 0 010-1.514l3.5-3.043a1 1 0 011.414 0zm-4.632 0a1 1 0 000 1.414L10.586 7 7.684 9.529a1 1 0 101.305 1.514l3.5-3.043a1 1 0 000-1.514l-3.5-3.043a1 1 0 00-1.305 0z" clip-rule="evenodd"></path>
              </svg>
              <svg v-else-if="item.icon === 'certificate'" class="w-3 h-3 md:w-4 md:h-4 text-amber-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              <div v-else class="w-2 h-2 rounded-full bg-amber-200"></div>
            </div>
            
            <!-- Content card -->
            <div class="bg-[#1e1e1f] border border-[#383838] rounded-lg p-4 md:p-6 hover:bg-[#282828] transition-colors relative overflow-hidden">
              <!-- certificate background (subtle) -->
              <img v-if="item.certificatePhoto" :src="item.certificatePhoto" alt="certificate background" class="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm z-0 pointer-events-none">

              <!-- small clickable thumbnail top-right -->
              <img v-if="item.certificatePhoto" :src="item.certificatePhoto" alt="certificate thumbnail" @click="openModal(item.certificatePhoto)" class="absolute top-3 right-3 w-16 h-10 object-cover rounded border-2 border-amber-200 cursor-pointer z-20">

              <div class="relative z-10">
                <!-- Year -->
                <div class="text-amber-200 font-semibold text-sm md:text-base mb-2">
                  {{ item.year }}
                </div>
                
                <!-- Institution -->
                <div class="text-white font-bold text-base md:text-lg mb-2">
                  {{ item.institution }}
                </div>
                
                <!-- Partnership (if exists) -->
                <div v-if="item.partnership" class="text-amber-50 text-sm md:text-base mb-2">
                  {{ item.partnership }}
                </div>
                
                <!-- Program -->
                <div class="text-amber-50 text-sm md:text-base mb-2">
                  Program: {{ item.program }}
                </div>
                
                <!-- Duration (if exists) -->
                <div v-if="item.duration" class="text-amber-200 text-sm md:text-base mb-2">
                  Duration: {{ item.duration }}
                </div>

                 <!-- Mode (if exists) -->
                <div class="text-amber-50 text-sm md:text-base mb-2">
                  Mode: {{ item.Mode }}
                </div>
                
                <!-- Status (if exists) -->
                <div v-if="item.status" class="text-amber-200 text-sm md:text-base mb-2">
                  Status: {{ item.status }}
                </div>

                <!-- Skills (if exists) -->
                <div v-if="item.Skills" class="text-amber-50 text-sm md:text-base mb-2">
                  Skills: {{ item.Skills }}
                </div>

                <!-- Location Type (if exists) -->
                <div v-if="item.Location_type" class="text-amber-50 text-sm md:text-base mb-2">
                  Location: {{ item.Location_type }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>

    <!-- Modal / Lightbox for certificate images -->
    <div v-if="modalImage" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" @click.self="closeModal">
      <div class="max-w-3xl max-h-[80vh] p-4">
        <img :src="modalImage" alt="certificate full" class="w-full h-auto rounded shadow-lg" />
        <div class="flex justify-end mt-3">
          <button @click="closeModal" class="text-white bg-amber-600 px-3 py-1 rounded">Close</button>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
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
</style>

