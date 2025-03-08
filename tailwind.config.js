/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4F46E5",    // Main brand color (indigo)
          secondary: "#818CF8",  // Lighter shade
          accent: "#C7D2FE",     // Very light shade
          dark: "#2D3748",       // Dark text
          light: "#F7FAFC",      // Light background
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui"],
        heading: ["var(--font-outfit)", "system-ui"],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
}