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
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui"],
        heading: ["var(--font-outfit)", "system-ui"],
      },
    },
  },
  plugins: [],
}