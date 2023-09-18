import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {



    fontFamily: {
      barlow: ['Barlow', 'san-serif'],
      b_condenced: ['Barlow-Condensed', 'san-serif'],
      bellefair: ['Bellefair', 'san-serif']


    },

    extend: {
      backgroundImage: {
        "earth": "url('../app/images/earth.jpg')",
        "md_earth": "url('../app/images/md-earth.jpg')",
        "lg_earth": "url('../app/images/lg-earth.jpg')",
        "destination": "url('../app/images/destination.jpg')",
        "md_destination": "url('../app/images/md-destination.jpg')",
        "lg_destination": "url('../app/images/lg-destination.jpg')",
        "crew": "url('../app/images/crew.jpg')",
        "md_crew": "url('../app/images/md-crew.jpg')",
        "lg_crew": "url('../app/images/lg-crew.jpg')",
        "tech": "url('../app/images/technology.jpg')",
        "md_tech": "url('../app/images/md-technology.jpg')",
        "lg_tech": "url('../app/images/lg-technology.jpg')",


      },
      colors: {
        bluish: "#0B0D17",
        cream: "#D0D6F9",
        line : "#383B4B"
      },
      screens: {
        'xl': '1440px',
      }
    },
  },
  plugins: [],
}
export default config
