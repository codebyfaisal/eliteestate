/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        pulseSlow: "pulse 2s cubic-bezier(0,0,0.3,0.9) infinite",
        pingSlow: "ping 2s cubic-bezier(0,0,0.3,0.9) infinite",
        spinSlow: "spin 2s cubic-bezier(0,0,0.3,0.9) infinite",
      },
    },
  },
  plugins: [],
};
