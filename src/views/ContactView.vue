<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitMessage: ''
    };
  },
  mounted() {
    // Initialize EmailJS with your public key
    emailjs.init('vWv2LxKA8boL85zM1');
  },
  methods: {
    async submitForm() {
      if (!this.formData.name || !this.formData.email || !this.formData.message) {
        this.submitMessage = 'Please fill in all required fields';
        setTimeout(() => {
          this.submitMessage = '';
        }, 3000);
        return;
      }

      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        await emailjs.send('service_x9sa7el', 'template_yfb2o9c', {
          to_email: 'redavd12@gmail.com',
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message
        });

        this.isSubmitting = false;
        this.submitMessage = 'Thank you! Your message has been sent successfully.';
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      } catch (error) {
        this.isSubmitting = false;
        this.submitMessage = 'Failed to send message. Please try again.';
        console.error('Error sending email:', error);
        
        setTimeout(() => {
          this.submitMessage = '';
        }, 3000);
      }
    }
  }
}
</script>
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="contact">
      <header>
        <div class="text-2xl md:text-3xl font-bold text-white mb-5 fadein-bot title-section flex items-center justify-center flex-col">
          <h4 class="text-3xl md:text-4xl mb-2">Get In Touch</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            Let's work together on your next project</h4>
          <div class="h-[1px] w-32 bg-amber-200 md:w-96 mt-4 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
        </div>
      </header>
      
      <section class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 pb-32">
          <!-- Contact Info -->
          <div class="space-y-6 fadein-left">
            <div class="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 hover:bg-[#282828] transition-colors">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-lg bg-amber-200/10 border border-amber-200/30 flex items-center justify-center">
                  <svg class="w-6 h-6 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold text-lg">Email</h3>
                  <a href="redavd12@gmail.com" class="text-amber-200 hover:text-amber-100 transition-colors">
                    redavd12@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 hover:bg-[#282828] transition-colors">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-lg bg-amber-200/10 border border-amber-200/30 flex items-center justify-center">
                  <svg class="w-6 h-6 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/>
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
                  </svg>
                </div>
                <div>
                    <h3 class="text-white font-semibold text-lg">Phone</h3>
                  <a 
                    href="https://wa.me/201092945912?text=Hello%20Reda" 
                    target="_blank" 
                    class="text-amber-200 hover:text-amber-100 transition-colors"
                  >
                   WhatsApp / Call me – Reda Shalabi
                  </a>
              </div>

              </div>
            </div>

            <div class="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 hover:bg-[#282828] transition-colors">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-lg bg-amber-200/10 border border-amber-200/30 flex items-center justify-center">
                  <svg class="w-6 h-6 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold text-lg">Location</h3>
                  <p class="text-amber-200">Egypt</p>
                </div>
              </div>
            </div>

            <div class="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 hover:bg-[#282828] transition-colors">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-lg bg-amber-200/10 border border-amber-200/30 flex items-center justify-center">
                  <svg class="w-6 h-6 text-amber-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold text-lg">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/reda-shalabi-1a23932b9/" target="_blank" class="text-amber-200 hover:text-amber-100 transition-colors">
                    LinkedIn.com/Reda Shalabi
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 hover:bg-[#282828] transition-colors">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-lg bg-amber-200/10 border border-amber-200/30 flex items-center justify-center">
                  <svg class="w-6 h-6 text-amber-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold text-lg">GitHub</h3>
                  <a href="https://github.com/Reda-Shalabi" target="_blank" class="text-amber-200 hover:text-amber-100 transition-colors">
                    github.com/Reda-Shalabi
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="fadein-left" style="animation-delay: 200ms;">
            <div class="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 md:p-8">
              <h3 class="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form @submit.prevent="submitForm" class="space-y-5">
                <div>
                  <label for="name" class="block text-amber-200 text-sm font-medium mb-2">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="formData.name"
                    required
                    class="w-full px-4 py-3 bg-[#282828] border border-[#383838] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-200 transition-colors"
                    placeholder="Your Name">
                </div>

                <div>
                  <label for="email" class="block text-amber-200 text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="formData.email"
                    required
                    class="w-full px-4 py-3 bg-[#282828] border border-[#383838] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-200 transition-colors"
                    placeholder="your.email@example.com">
                </div>

                <div>
                  <label for="subject" class="block text-amber-200 text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    v-model="formData.subject"
                    class="w-full px-4 py-3 bg-[#282828] border border-[#383838] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-200 transition-colors"
                    placeholder="Project Inquiry">
                </div>

                <div>
                  <label for="message" class="block text-amber-200 text-sm font-medium mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    v-model="formData.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 bg-[#282828] border border-[#383838] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-200 transition-colors resize-none"
                    placeholder="Tell me about your project..."></textarea>
                </div>

                <div v-if="submitMessage" 
                  :class="submitMessage.includes('Thank you') ? 'text-green-400' : 'text-red-400'"
                  class="text-sm">
                  {{ submitMessage }}
                </div>

                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full px-6 py-3 bg-amber-200 text-[#1e1e1f] font-semibold rounded-lg hover:bg-amber-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else class="flex items-center justify-center gap-2">
                    <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
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

