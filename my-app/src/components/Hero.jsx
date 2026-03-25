import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-3">
              Hi, I'm Swamy B S
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              MERN stack | Problem-solving |
            </p>
            <p className="text-xl text-gray-300 mb-8">
              I build modern, responsive web applications using React, Node.js, and modern web technologies. 
              Passionate about creating beautiful and functional user experiences.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-6 mb-8 justify-start md:justify-start">
              <a
                href="https://github.com/swamybs8102005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                title="GitHub"
              >
                <svg className="w-5 h-5 shrink-0 block group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.89 1.531 2.341 1.545 2.914 1.209.092-.937.349-1.546.636-1.903-2.22-.253-4.555-1.112-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.192 20 14.437 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/swamy-b-s-86613628b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                title="LinkedIn"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.337 1.039H3.663A2.662 2.662 0 001 3.702v12.596a2.662 2.662 0 002.663 2.663h12.674A2.663 2.663 0 0019 16.299V3.702a2.663 2.663 0 00-2.663-2.663zm-9.443 14.791h-2.62V8.184h2.62v7.646zm-1.31-8.691a1.519 1.519 0 110-3.038 1.519 1.519 0 010 3.038zm10.753 8.691h-2.618v-3.72c0-.887-.018-2.027-1.235-2.027-1.236 0-1.425.964-1.425 1.959v3.788h-2.618V8.184h2.512v1.045h.036c.35-.662 1.205-1.36 2.48-1.36 2.651 0 3.142 1.745 3.142 4.018v4.904z" />
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/swamybs820/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors group"
                title="Instagram"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.238.261 0 2.546 0 6.282c0 1.069-.008 1.408-.046 4.07.038 2.656.196 3.98.52 4.65.823 1.995 2.944 3.144 5.064 3.202 1.066.047 1.407.06 4.236.06 2.829 0 3.168-.013 4.235-.06 2.117-.057 4.21-1.201 5.02-3.085.457-.95.683-2.587.72-4.769.024-1.432.028-1.772.028-5.23 0-3.46-.003-3.798-.028-5.231-.037-2.08-.278-3.55-.72-4.524C19.88 1.17 17.766 0 15.682 0 14.607 0 14.268.012 11.333.06 8.401.108 7.618 0 7.618 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110 -6.666 3.333 3.333 0 010 6.666zm4.565-8.676a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Instagram</span>
              </a>

              <a
                href="https://leetcode.com/u/swamybs3450"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors group"
                title="LeetCode"
              >
                <span className="w-6 h-6 rounded-sm bg-white flex items-center justify-center shrink-0">
                  <img src="/leetcode-logo.png" alt="LeetCode" className="w-5 h-5 object-contain block group-hover:scale-110 transition-transform" />
                </span>
                <span className="text-sm font-medium">LeetCode</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md">
              <div className="bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full shadow-xl overflow-hidden w-80 h-80 flex items-center justify-center mx-auto">
                <img
                  src="https://via.placeholder.com/400x400?text=Your+Profile+Photo"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <p className="text-center text-gray-400 mt-4 text-sm">Replace with your profile photo</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
